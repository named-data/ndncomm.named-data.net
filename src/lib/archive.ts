// Build-time loader for the scraped NIST pages in public/archive/<year>/.
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const ARCHIVE = path.resolve('public/archive');
const NIST = 'https://www.nist.gov';

interface Doc {
  file: string;
  url: string;
  page: string | null;
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
  const docs = readJson<Doc[]>(year, 'documents/manifest.json', []);
  return docs.map((d) => ({
    ...d,
    href: url(`archive/${year}/documents/${d.file}`),
    kind: /abstract/i.test(d.file) ? 'Abstracts' : /agenda/i.test(d.file) ? 'Agenda' : d.file,
  }));
}

export function agendaText(year: string) {
  const agenda = documents(year).find((d) => d.kind === 'Agenda');
  if (!agenda) return null;
  const p = path.join(ARCHIVE, year, 'documents', agenda.file.replace(/\.pdf$/i, '.txt'));
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

/** The archived NIST page text, cleaned up and rendered to HTML with links pointing at local copies. */
export function pageHtml(year: string) {
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
  const localDoc = (href: string) => {
    const abs = new URL(href, NIST).href;
    return docs.find((d) => d.page === abs || d.url === abs)?.href;
  };
  const imagesDir = path.join(ARCHIVE, year, 'images');
  const localImage = (href: string) => {
    const name = path.basename(new URL(href, NIST).pathname);
    return fs.existsSync(path.join(imagesDir, name)) ? url(`archive/${year}/images/${name}`) : null;
  };

  md = md.replace(/(!?)\[([^\]]*)\]\((\/[^)\s]*)/g, (_, bang, text, href) => {
    const local = bang ? localImage(href) : localDoc(href);
    return `${bang}[${text}](${local ?? NIST + href}`;
  });

  return marked.parse(md.replace(/\n{3,}/g, '\n\n').trim(), { async: false }) as string;
}
