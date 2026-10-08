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
  if (!p) return { talks: 0, panels: 0 };
  const items = p.days.flatMap((d) => d.items);
  return {
    talks: items.reduce((n, i) => n + (i.talks?.length ?? 0) + (i.kind === 'talk' || i.kind === 'keynote' ? 1 : 0), 0),
    panels: items.filter((i) => i.kind === 'panel').length,
  };
}

export function person(p: { name: string; affiliation?: string }) {
  return p.affiliation ? `${p.name} (${p.affiliation})` : p.name;
}
