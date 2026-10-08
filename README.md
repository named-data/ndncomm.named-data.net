# NDNComm website

Source for https://ndncomm.named-data.net/, the home of the Named Data Networking Community Meeting (NDNComm).
It also archives the past meetings, whose pages were originally published elsewhere:

| Year | Original page | Hosted by |
|------|---------------|-----------|
| 2017 | [caida.org/workshops/ndn/1703](https://www.caida.org/workshops/ndn/1703/) | NDN project (Memphis, TN) |
| 2018 | [nist.gov …/named-data-networking-community-meeting-2018](https://www.nist.gov/news-events/events/2018/09/named-data-networking-community-meeting-2018) | NIST |
| 2019 | [nist.gov …/2019/09/ndn-community-meeting](https://www.nist.gov/news-events/events/2019/09/ndn-community-meeting) | NIST |
| 2020 | [nist.gov …/ndn-community-meeting](https://www.nist.gov/news-events/events/ndn-community-meeting) | NIST |
| 2021 | [nist.gov …/ndn-community-meeting-2021](https://www.nist.gov/news-events/events/2021/10/ndn-community-meeting-2021) | NIST |
| 2023 | [nist.gov …/ndncomm-2023](https://www.nist.gov/news-events/events/2023/03/ndncomm-2023) | NIST |
| 2024 | [nist.gov …/ndncomm2024](https://www.nist.gov/news-events/events/ndncomm2024) | NIST |
| 2025 | [ndncomm2025.named-data.net](https://ndncomm2025.named-data.net/) ([source](https://github.com/conference-websites/NDNComm-2025)) | UCLA |
| 2026 | [ndncomm2026.named-data.net](https://ndncomm2026.named-data.net/) ([source](https://github.com/conference-websites/NDNComm-2026)) | UCLA (online) |

There was no NDNComm in 2022. Meetings before 2017 (held since 2014) are not archived here yet.

## Recordings: status and to-do

Every recording should be on YouTube. Status per meeting:

| Year | Status | What's needed |
|------|--------|---------------|
| 2017 | No recordings are known | Find out whether the meeting was recorded |
| 2018 | **Lost.** NIST's Kaltura playlist `1_6prajrqd` still lists 6 entries, all deleted | Find a copy (NIST or attendees) |
| 2019 | **Lost.** Playlist `0_9sr1ou29` lists 8 entries, all deleted | Find a copy |
| 2020 | **Lost.** 6 Kaltura entries (2 days × 3 parts) deleted | Find a copy |
| 2021 | **Lost.** Playlist `1_mxq1yi8r` exists but is empty | Find a copy |
| 2023 | Day 1 Part 1 on YouTube. **Day 1 Part 2 and Day 2 were never published** | Ask NIST whether they exist |
| 2024 | Day 1 and Day 2 on YouTube | — |
| 2025 | Every talk and panel on YouTube (linked per talk) | — |
| 2026 | Every talk, the panel and its two discussion clips on YouTube (linked per talk) | — |

The deleted Kaltura entry IDs are listed in `archive/<year>/videos.json`, in case NIST can restore them.

### Already on YouTube

- 2023 Day 1 Part 1: `sfIW4SHkQcg`
- 2024 Day 1: `BHX1xNs0C5s`, Day 2: `FGEM72Ar0Gg`
- 2025 and 2026: per-talk links in `src/content/programs/<year>.json`

The original 2023/2024 files came from NIST's Kaltura (`download_url` in `archive/<year>/videos.json`).

## Website

The site is built with [Astro](https://astro.build/). `.github/workflows/deploy.yml` deploys it to GitHub Pages on
every push to `main`.

```
npm install
npm run dev      # http://localhost:4321/
npm run build    # static site in dist/
```

- `src/content/meetings/<year>.json`: one file per meeting (dates, venue, host, organizers, original page, full-meeting
  videos). A full-meeting recording on YouTube goes in `videos[].youtube` (the 11-character ID).
  A meeting whose end date is in the future is shown as upcoming; add `links.registration`,
  `links.call_for_submissions` and `deadlines` for it. The schema is in `src/content.config.ts`.
- `src/content/programs/<year>.json`: the structured program (days, sessions, talks, abstracts, and per-talk `video`
  and `slides` links). The 2017–2024 programs were transcribed from the original pages and PDFs; 2025 and 2026 from the
  conference sites.
- `src/pages/*.md`: plain Markdown pages (see `about.md`), using `src/layouts/Page.astro`.
- `src/pages/index.astro`: the front page. `src/pages/[year].astro`: one page per meeting.
- `public/<year>/`: files served next to each meeting page (`/<year>/documents/`, `/<year>/slides/`,
  `/<year>/images/`).
- `archive/<year>/`: raw material from the original pages, kept in the repo but not published (`source/` raw HTML,
  `page.md`, `documents.json`, `text/` PDF extracts, `videos.json`).
- `public/img/ndn-logo.png`: the NDN logo (an SVG version would be sharper).

## Re-scraping a NIST page

```
python3 tools/scrape_nist_event.py <nist-event-url> <year>
```

This needs `pandoc` and `pdftotext` (poppler). It redacts the Mapbox key that nist.gov embeds in every page, which
GitHub push protection would otherwise reject.
