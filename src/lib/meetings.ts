import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export type Meeting = CollectionEntry<'meetings'>;
export type Program = CollectionEntry<'programs'>['data'];

export async function allMeetings() {
  const list = await getCollection('meetings');
  return list.sort((a, b) => b.data.start.getTime() - a.data.start.getTime());
}

export async function programFor(year: string) {
  return (await getEntry('programs', year))?.data;
}

export function isUpcoming(m: Meeting, now = new Date()) {
  return m.data.end.getTime() + 86_400_000 > now.getTime();
}

const MONTH = new Intl.DateTimeFormat('en-US', { month: 'long', timeZone: 'UTC' });
const DAY = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' });

/** "March 6–7, 2024", "September 30 – October 1, 2025" */
export function dateRange(start: Date, end: Date) {
  const [sm, em] = [MONTH.format(start), MONTH.format(end)];
  const [sd, ed] = [start.getUTCDate(), end.getUTCDate()];
  const y = end.getUTCFullYear();
  if (start.getTime() === end.getTime()) return `${sm} ${sd}, ${y}`;
  if (sm === em) return `${sm} ${sd}–${ed}, ${y}`;
  return `${sm} ${sd} – ${em} ${ed}, ${y}`;
}

export function dayLabel(iso: string) {
  return DAY.format(new Date(iso + 'T00:00:00Z'));
}

/** "13:30" -> "1:30 PM" */
export function clock(hhmm: string) {
  const [h, m] = hhmm.split(':').map(Number);
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
}

export const FORMAT_LABEL = { 'in-person': 'In person', hybrid: 'Hybrid', virtual: 'Virtual' } as const;

export function programStats(p?: Program) {
  if (!p) return { talks: 0, panels: 0, videos: 0 };
  const items = p.days.flatMap((d) => d.items);
  const talks = items.flatMap((i) => i.talks ?? []);
  return {
    talks: talks.length + items.filter((i) => i.kind === 'talk' || i.kind === 'keynote').length,
    panels: items.filter((i) => i.kind === 'panel').length,
    videos:
      talks.filter((t) => t.video).length +
      items.reduce((n, i) => n + (i.video ? 1 : 0) + (i.more_videos?.length ?? 0), 0),
  };
}

/** Contiguous "2018–2021, 2023–2024"-style list of years. */
export function yearRanges(years: number[]) {
  const ys = [...new Set(years)].sort((a, b) => a - b);
  const out: string[] = [];
  for (let i = 0; i < ys.length; ) {
    let j = i;
    while (j + 1 < ys.length && ys[j + 1] === ys[j] + 1) j++;
    out.push(i === j ? `${ys[i]}` : `${ys[i]}–${ys[j]}`);
    i = j + 1;
  }
  return out.join(', ');
}

export function person(p: { name: string; affiliation?: string }) {
  return p.affiliation ? `${p.name} (${p.affiliation})` : p.name;
}
