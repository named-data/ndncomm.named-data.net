# NDNComm website

Source for https://ndncomm.named-data.net/, the home of the Named Data Networking Community Meeting (NDNComm).
It also archives the past meetings, whose pages were originally published elsewhere:

| Year | Original page | Hosted by |
|------|---------------|-----------|
| 2014 | [caida.org/workshops/ndn/1409](https://www.caida.org/workshops/ndn/1409/) | NDN project (at UCLA) |
| 2015 | [caida.org/workshops/ndn/1509](https://www.caida.org/workshops/ndn/1509/) | UCLA |
| 2016 | [nist.gov …/workshop-named-data-networking](https://www.nist.gov/news-events/events/workshop-named-data-networking) ("Workshop on Named Data Networking"; listed as the 2016 meeting) | NIST |
| 2017 | [caida.org/workshops/ndn/1703](https://www.caida.org/workshops/ndn/1703/) | NDN project (Memphis, TN) |
| 2018 | [nist.gov …/named-data-networking-community-meeting-2018](https://www.nist.gov/news-events/events/2018/09/named-data-networking-community-meeting-2018) | NIST |
| 2019 | [nist.gov …/2019/09/ndn-community-meeting](https://www.nist.gov/news-events/events/2019/09/ndn-community-meeting) | NIST |
| 2020 | [nist.gov …/ndn-community-meeting](https://www.nist.gov/news-events/events/ndn-community-meeting) | NIST |
| 2021 | [nist.gov …/ndn-community-meeting-2021](https://www.nist.gov/news-events/events/2021/10/ndn-community-meeting-2021) | NIST |
| 2023 | [nist.gov …/ndncomm-2023](https://www.nist.gov/news-events/events/2023/03/ndncomm-2023) | NIST |
| 2024 | [nist.gov …/ndncomm2024](https://www.nist.gov/news-events/events/ndncomm2024) | NIST |
| 2025 | [ndncomm2025.named-data.net](https://ndncomm2025.named-data.net/) ([source](https://github.com/conference-websites/NDNComm-2025)) | UCLA |
| 2026 | [ndncomm2026.named-data.net](https://ndncomm2026.named-data.net/) ([source](https://github.com/conference-websites/NDNComm-2026)) | UCLA (online) |

There was no NDNComm in 2022. 2016 is NIST's "Workshop on Named Data Networking", which served as that year's community meeting. 2014 and 2015 have meeting reports (from CAIDA's paper catalog) in
`public/<year>/documents/`.

## Recordings: status and to-do

Every recording should be on YouTube. Meeting videos without a `youtube` ID are not shown on the site. Status per meeting:

| Year | Status | What's needed |
|------|--------|---------------|
| 2014 | Livestreamed on `new.livestream.com/uclaremap`; that address does not resolve today. We have no copy | Ask UCLA REMAP |
| 2015 | Day 1 and Day 2 on YouTube, on the **UCLA REMAP** channel (`yLGzGK4c-ws`, `OJWHEz56AhQ`); linked, not re-uploaded | — |
| 2016 | Day 1 Part 1 and Day 2 Parts 1–4 on YouTube (from NIST's Kaltura), plus J. Alex Halderman's talk (Day 1). NIST also published Day 1 Parts 2–4 (`1_dhfy9g52`, `0_8jgtadwa`, `1_abu6cu9y`, 2016-06-01); the Kaltura API now reports them as not found. We have no copy | Ask NIST |
| 2017 | No recordings are known | Find out whether the meeting was recorded |
| 2018 | Day 1 (Sept 19, `RHSfyd9IlCU`) and both panels on YouTube. NIST's Kaltura playlist `1_6prajrqd` lists 6 entries that the Kaltura API now reports as not found; no archived titles were found. We have no copy of Day 2 | Ask NIST or attendees |
| 2019 | Both panels on YouTube. Kaltura playlist `0_9sr1ou29` lists 8 entries that the API now reports as not found; no archived titles were found. We have no copy of the rest | Ask NIST or attendees |
| 2020 | Three talk/demo videos (from the presentation archive) on YouTube. NIST published "NDN Community Meeting Day 1 Part 1" … "Day 2 Part 3" (6 videos, 2020-09-16/18; IDs, titles and archived page links in `archive/2020/videos.json`); the Kaltura API now reports them as not found. We have no copy | Ask NIST or attendees |
| 2021 | Two talk videos (from the presentation archive) on YouTube. Kaltura playlist `1_mxq1yi8r` exists but is empty today. No archived copy of its contents or of per-video NIST pages was found, so the titles and IDs are unknown. We have no copy of the sessions | Ask NIST or attendees |
| 2023 | Day 1 Part 1 on YouTube. NIST also published Day 1 Part 2 and Day 2 Parts 1–2 as separate video pages (`1_9af1fw8z`, `1_3xliild6`, `1_5j98jojx`, 2023-03-07/08; see `archive/2023/videos.json`); the Kaltura API now reports them as not found. We have no copy | Ask NIST |
| 2024 | Day 1 and Day 2 on YouTube | — |
| 2025 | Every talk and panel on YouTube (linked per talk) | — |
| 2026 | Every talk, the panel and its two discussion clips on YouTube (linked per talk) | — |

The Kaltura entry IDs are listed in `archive/<year>/videos.json`, which identifies the recordings if NIST still has them.

None of this is mentioned on the public site, which only shows what exists.

### Talk videos found in the slide archives

The 2020/2021 presentation archives contained five talk videos (Teng Liang, V-MAC demo, Plug-n-Play NDN demo, NEAR
platform, bootstrapping). They are on YouTube and linked from those talks.

### Already on YouTube

- 2023 Day 1 Part 1: `sfIW4SHkQcg`
- 2024 Day 1: `BHX1xNs0C5s`, Day 2: `FGEM72Ar0Gg`
- 2016: Day 1 Part 1, Day 2 Parts 1–4 (`src/content/meetings/2016.json`)
- 2020, 2021 (a few talks), 2025 and 2026: per-talk links in `src/content/programs/<year>.json`

The original 2023/2024 files came from NIST's Kaltura (`download_url` in `archive/<year>/videos.json`).

## Slides

- 2014, 2015, 2016, 2017, 2025, 2026: from the original conference pages (2016: the speaker PDFs linked from NIST's
  agenda page, `archive/2016/agenda/`).
- 2020, 2021, 2023: from the organizers' presentation archives (Google Drive), matched to talks. 2020 includes its "Session 7:
  Discovery/Configuration" decks. The 2020 "0 - Merged.pdf" poster file
  was skipped (it repeats the individual posters). The embedded demo video in the 2020 Plug-n-Play NDN deck was
  re-encoded (46 MB to 6 MB).
- 2023: the presentation archive contains 6 decks. 2018, 2019, 2024: the event pages link no slides, and we have
  no copies.

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

## Organization logos

Organizer avatars show the organization's logo when a public-domain one exists on Wikimedia Commons, or when the
organization provided it (A2 Consulting) (`src/data/orgs.json`; any other organization falls back to the person's
initials). Organizer names and affiliations link to the homepages in `src/data/links.json`. Logos are trademarks of their
owners and are shown only to identify affiliations.

| Organization | File | License | Source |
|---|---|---|---|
| NIST | `public/img/orgs/nist.svg` | Public domain | https://commons.wikimedia.org/wiki/File:NIST_logo.svg |
| University of Memphis | `public/img/orgs/memphis.svg` | Public domain | https://commons.wikimedia.org/wiki/File:University_of_Memphis_logo.svg |
| UCLA | `public/img/orgs/ucla.svg` | Public domain | https://commons.wikimedia.org/wiki/File:University_of_California,_Los_Angeles_logo.svg |
| Colorado State University | `public/img/orgs/colostate.svg` | Public domain | https://commons.wikimedia.org/wiki/File:Colorado_State_University_logo.svg |
| University of Arizona | `public/img/orgs/arizona.svg` | Public domain | https://commons.wikimedia.org/wiki/File:Arizona_Wildcats_logo.svg |
| FIU | `public/img/orgs/fiu.svg` | Public domain | https://commons.wikimedia.org/wiki/File:Florida_International_University_FIU_logo.svg |
| MITRE | `public/img/orgs/mitre.svg` | Public domain | https://commons.wikimedia.org/wiki/File:Mitre_Corporation_logo.svg |
| Concordia University | `public/img/orgs/concordia.png` | Public domain | https://commons.wikimedia.org/wiki/File:Concordia_univ_montreal_textlogo.png |
| SRI | `public/img/orgs/sri.svg` | Public domain | https://commons.wikimedia.org/wiki/File:SRI_International_logo_2023.svg |
| New Mexico State University | `public/img/orgs/nmsu.svg` | Public domain | https://commons.wikimedia.org/wiki/File:New_Mexico_State_University_logo.svg |

## Re-scraping a NIST page

```
python3 tools/scrape_nist_event.py <nist-event-url> <year>
```

This needs `pandoc` and `pdftotext` (poppler). It redacts the Mapbox key that nist.gov embeds in every page, which
GitHub push protection would otherwise reject.
