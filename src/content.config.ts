import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const person = z.object({
  name: z.string(),
  affiliation: z.string().optional(),
});

/**
 * One file per meeting: src/content/meetings/<year>.json.
 * A meeting whose end date is in the future is shown as upcoming, with its call for
 * submissions / registration links; past meetings show recordings and the program.
 */
const meetings = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/meetings' }),
  schema: z.object({
    title: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date(),
    format: z.enum(['in-person', 'hybrid', 'virtual']),
    venue: z.string().optional(),
    city: z.string().optional(),
    summary: z.string().optional(),
    host: z.object({ name: z.string(), short: z.string(), url: z.string().url() }).optional(),
    organizers: z.array(person).default([]),
    // Set for meetings whose official page lived elsewhere and is preserved in archive/<year>/.
    original_page: z.string().url().optional(),
    links: z
      .object({
        registration: z.string().url().optional(),
        call_for_submissions: z.string().url().optional(),
        submission_site: z.string().url().optional(),
        slides: z.string().url().optional(),
      })
      .optional(),
    deadlines: z.array(z.object({ label: z.string(), date: z.coerce.date() })).default([]),
    videos: z
      .array(
        z.object({
          label: z.string(),
          youtube: z.string().nullable().optional(),
          kaltura: z.string().optional(),
        }),
      )
      .default([]),
    video_note: z.string().optional(),
  }),
});

const talk = z.object({
  title: z.string(),
  speakers: z.array(person).default([]),
  authors: z.array(person).optional(),
  abstract: z.string().optional(),
  video: z.string().url().optional(),
  // absolute URL, or a site path such as "2025/slides/x.pdf"
  slides: z.string().optional(),
});

/** Structured agenda: src/content/programs/<year>.json */
const programs = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/programs' }),
  schema: z.object({
    timezone: z.string().default(''),
    days: z.array(
      z.object({
        date: z.string(),
        items: z.array(
          z.object({
            start: z.string(),
            end: z.string().optional(),
            kind: z.enum(['opening', 'keynote', 'panel', 'session', 'talk', 'break', 'closing', 'other']),
            title: z.string(),
            chair: person.optional(),
            panelists: z.array(person).optional(),
            speakers: z.array(person).optional(),
            abstract: z.string().optional(),
            video: z.string().url().optional(),
            // further recordings of the same item, e.g. separate panel discussion clips
            more_videos: z.array(z.object({ label: z.string(), url: z.string().url() })).optional(),
            slides: z.string().optional(),
            talks: z.array(talk).optional(),
          }),
        ),
      }),
    ),
  }),
});

export const collections = { meetings, programs };
