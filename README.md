# NDNComm archive

Archive of the Named Data Networking Community Meeting (NDNComm) pages that
were hosted by the National Institute of Standards and Technology (NIST) on
nist.gov. The meetings in 2020, 2021, 2023 and 2024 were organized and hosted by
NIST. The original pages are credited below.

| Year | Original NIST page | Content here | Video |
|------|--------------------|--------------|-------|
| 2020 (Sep 10-11, virtual) | [ndn-community-meeting](https://www.nist.gov/news-events/events/ndn-community-meeting) | `public/archive/2020/` page, agenda, abstracts | 6 recordings **lost**: the Kaltura entries were deleted (IDs are in `public/archive/2020/videos.json`) |
| 2021 | [ndn-community-meeting-2021](https://www.nist.gov/news-events/events/2021/10/ndn-community-meeting-2021) | `public/archive/2021/` page, agenda, abstracts | **lost**: the playlist `1_mxq1yi8r` still exists but is empty |
| 2023 (Mar 2-3, NCCoE) | [ndncomm-2023](https://www.nist.gov/news-events/events/2023/03/ndncomm-2023) | `public/archive/2023/` page, agenda, abstracts | Day 1 Part 1 only. No Part 2 or Day 2 recording was ever published on the page |
| 2024 (Mar 6-7, NCCoE) | [ndncomm2024](https://www.nist.gov/news-events/events/ndncomm2024) | `public/archive/2024/` page, agenda, abstracts | Day 1 and Day 2 (full days) |

## Website

The site is built with [Astro](https://astro.build/). It is deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`. In the repository settings, set
Pages > Source to "GitHub Actions".

```
npm install
npm run dev      # http://localhost:4321/
npm run build    # static site in dist/
```

- `src/data/events.json`: per-year details (dates, organizers, original NIST URL) and the video list.
  When a recording is on YouTube, put its video ID in the `"youtube"` field and push.
- `src/pages/index.astro`: the front page. `src/pages/[year].astro`: one page per meeting.
- `public/archive/<year>/`: the scraped material, served as-is.

## Scraped material

Each `public/archive/<year>/` folder has:

- `page.md`: the page text
- `documents/`: the agenda and abstracts PDFs, plus `.txt` copies
- `videos.json`: the video IDs and download URLs
- `images/`: images from the page
- `source/`: the raw HTML

## Re-scraping

```
python3 tools/scrape_nist_event.py <nist-event-url> public/archive/<year>
```

This needs `pandoc` and `pdftotext` (poppler).

## Downloading the original video files (one time, before uploading to YouTube)

Each `download_url` in `videos.json` returns the original source file that was
uploaded to Kaltura:

```
curl -L -C - -o 2023-day1-part1.mp4  'https://cdnapisec.kaltura.com/p/684682/sp/68468200/playManifest/entryId/1_5sqzakox/format/download/protocol/https/flavorParamIds/0'
curl -L -C - -o 2024-day1.mp4        'https://cdnapisec.kaltura.com/p/684682/sp/68468200/playManifest/entryId/1_a7qttcel/format/download/protocol/https/flavorParamIds/0'
curl -L -C - -o 2024-day2.mp4        'https://cdnapisec.kaltura.com/p/684682/sp/68468200/playManifest/entryId/1_yxz7cuen/format/download/protocol/https/flavorParamIds/0'
```
