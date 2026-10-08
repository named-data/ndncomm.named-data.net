// Build-time loader for archived meeting material: raw scrapes in archive/<year>/ (not published),
// and the files served with each meeting page in public/<year>/ (documents, slides, images).
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const ARCHIVE = path.resolve('archive');
const PUBLIC = path.resolve('public');

interface Doc {
  file: string;
  url: string;
  page: string | null;
  label?: string;
}

/** Prefix a site-relative path with the configured base path. */
export function url(p = '') {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + p.replace(/^\//, '');
}

function readJson<T>(year: string, file: string, fallback: T): T {
  const p = path.join(ARCHIVE, year, file);
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : fallback;
}

export function documents(year: string) {
  const docs = readJson<Doc[]>(year, 'documents.json', []);
  return docs.map((d) => ({
    ...d,
    href: url(`${year}/documents/${d.file}`),
    kind: d.label ?? (/abstract/i.test(d.file) ? 'Abstracts' : /agenda/i.test(d.file) ? 'Agenda' : d.file),
  }));
}

export function agendaText(year: string) {
  const agenda = documents(year).find((d) => d.kind === 'Agenda');
  if (!agenda) return null;
  const p = path.join(ARCHIVE, year, 'text', agenda.file.replace(/\.pdf$/i, '.txt'));
  if (!fs.existsSync(p)) return null;
  return fs
    .readFileSync(p, 'utf8')
    .replace(/\f/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Kaltura metadata (duration, original-file URL) keyed by entry id. */
export function kalturaInfo(year: string) {
  const list = readJson<{ id: string; duration_sec?: number; download_url?: string }[]>(year, 'videos.json', []);
  return Object.fromEntries(list.filter((v) => v.duration_sec).map((v) => [v.id, v]));
}

export function formatDuration(sec?: number) {
  if (!sec) return '';
  const h = Math.floor(sec / 3600);
  const m = Math.round((sec % 3600) / 60);
  return h ? `${h} h ${m} min` : `${m} min`;
}

// Lines of NIST site chrome that make no sense outside nist.gov.
const DROP_LINE = [
  /^Source: </,
  /^\[EVENTS\]/,
  /^# /,
  /^\[Read the Code of Conduct/,
  /^\[Was this page helpful/,
  /^The referenced media source is missing/,
  /^(conference|meeting|Virtual Event)$/,
];
// Collapsed <details> blocks on the NIST page lose their markup in the scrape.
const SECTION_TITLES = /^(Agenda|Security Instructions?|Lodging Information)$/;

/**
 * The archived original page text, cleaned up and rendered to HTML. Relative links are resolved against the
 * original page (`base`), and links to documents, slides and images we keep a copy of point at that copy.
 */
export function pageHtml(year: string, base: string) {
  const p = path.join(ARCHIVE, year, 'page.md');
  if (!fs.existsSync(p)) return '';
  let md = fs.readFileSync(p, 'utf8');

  // Staff contact blocks (and everything after them) are NIST-specific.
  md = md.replace(/\n## Registration Contact[\s\S]*$/, '\n');
  md = md
    .split('\n')
    .filter((line) => !DROP_LINE.some((re) => re.test(line.trim())))
    .map((line) => (SECTION_TITLES.test(line.trim()) ? `### ${line.trim()}` : line))
    .join('\n');

  // Outlook "safelinks" wrappers that were pasted into the original page.
  md = md.replace(/https:\/\/[a-z0-9]+\.safelinks\.protection\.outlook\.com\/\?url=([^&)\s]+)[^)\s]*/g, (_, u) =>
    decodeURIComponent(u),
  );

  const docs = documents(year);
  // A file we serve ourselves under public/<year>/<dir>/, matched by file name.
  const localCopy = (abs: string, dir: string) => {
    const name = path.basename(new URL(abs).pathname);
    return name && fs.existsSync(path.join(PUBLIC, year, dir, name)) ? url(`${year}/${dir}/${name}`) : undefined;
  };
  const localDoc = (abs: string) =>
    docs.find((d) => d.page === abs || d.url === abs)?.href ?? localCopy(abs, 'slides') ?? localCopy(abs, 'documents');

  md = md.replace(/(!?)\[([^\]]*)\]\(([^)\s]+)/g, (all, bang, text, href) => {
    if (/^(#|mailto:)/.test(href)) return all;
    const abs = new URL(href, base).href;
    const local = bang ? localCopy(abs, 'images') : localDoc(abs);
    return `${bang}[${text}](${local ?? abs}`;
  });

  return marked.parse(md.replace(/\n{3,}/g, '\n\n').trim(), { async: false }) as string;
}

interface OrgLogo {
  logo: string;
  license: string;
  source: string;
  wide?: boolean;
}

const readData = <T>(file: string, fallback: T): T => {
  const p = path.resolve('src/data', file);
  return fs.existsSync(p) ? (JSON.parse(fs.readFileSync(p, 'utf8')) as T) : fallback;
};
// Affiliations written differently in different years share one logo.
const ORG_ALIAS: Record<string, string> = { 'UC San Diego/CAIDA': 'UC San Diego', 'UCLA REMAP': 'UCLA' };

/** Logos for organizer affiliations (src/data/orgs.json): public domain, or provided by the organization. */
export function orgLogo(affiliation?: string): (OrgLogo & { href: string }) | undefined {
  if (!affiliation) return undefined;
  const logos = readData<Record<string, OrgLogo>>('orgs.json', {});
  const entry = logos[affiliation] ?? logos[ORG_ALIAS[affiliation]];
  return entry && { ...entry, href: url(entry.logo) };
}

/** Homepages of organizers and their organizations (src/data/links.json). */
export function orgUrl(affiliation?: string): string | undefined {
  return affiliation ? readData<{ orgs?: Record<string, string> }>('links.json', {}).orgs?.[affiliation] : undefined;
}
export function personUrl(name: string): string | undefined {
  return readData<{ people?: Record<string, string> }>('links.json', {}).people?.[name];
}
