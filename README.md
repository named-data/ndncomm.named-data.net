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
| 2026 | 15 talks + panel are **self-hosted MP4s** on ndncomm2026.named-data.net | **Upload to YouTube**, then replace the links |

The deleted Kaltura entry IDs are listed in `public/archive/<year>/videos.json`, in case NIST can restore them.

### 2026: upload to YouTube

The files are in the [NDNComm-2026](https://github.com/conference-websites/NDNComm-2026) repo under
`assets/talks/organized_talks/<folder>/video.mp4`. After uploading, replace each `"video"` URL in
`src/content/programs/2026.json` with the YouTube link (`https://youtu.be/<id>`).

| Folder | Talk |
|--------|------|
| `01_From_SRM_to_NDN_Lan_Wang` | From SRM to NDN: Three Decades of Lessons in Data-Centric Networking |
| `02_Resilient_InNetwork_Storage_adam_Thieme` | Resilient In-Network Data Storage in NDN |
| `03_NDN_CloudSync_Ronak_Badhe` | NDN-CloudSync: A Secure Storage Service Running on Multiple Clouds |
| `04_Security_Library_Ferhat_Mecerhed` | An Open-Source Decentralized Access Control Library for Named Data Networking |
| `05_NAC_ABE_Suravi_Regmi` | Enhancing NAC-ABE to Support Access Control for mHealth Applications and Beyond |
| `06_OpenMLS_Mike_Han` | Message Layer Security in Ownly Group Encryption |
| `07_NDN_Framework_Tianxing_Ma` | NDN Framework for Service Oriented Applications |
| `08_NDN_for_AI_Marica_Amadeo` | NDN for AI and AI for NDN: Challenges, Opportunities and Early Results |
| `09_MGuard_Updates_Suravi_Regmi` | MGuard: Development Updates |
| `Panel` | Panel: Networking AI Agents: Challenges and Solutions |
| `10_IoT_Digital_Autonomy_Lixia_Zhang` | Reclaiming Digital Autonomy: A Systematic Review of NDN Applications … |
| `11_TrustNG_Amirreza_Ghafoori` | TrustNG: Using Named Data Networking as a Zero-Trust Overlay for Cloud … |
| `12_Why_ONLY_Fails_Junxiao_Shi` | Why Ownly Does Not Work on the ndn6 Network? … |
| `13_ICN_SCION_Global_Name_Service_Ken_Calvert` | ICN+SCION Global Name-Based Network Service |
| `14_Map_Encap_BIER_Beichuan_Zhang` | From Map-and-Encap to BIER: Observations on Network Routing Scalability |
| `15_Architecting_Scalable_Routing_Tianyuan_Yu` | Architecting a Scalable Routing and Forwarding System for NDN |

The repo also has `Panel_Opening_Intro/video.mp4` and `Panel_Discussion/video.mp4`, which the 2026 program never
linked. Decide whether they belong on YouTube too (the program has one "video" link per item).

### Already on YouTube

- 2023 Day 1 Part 1: `sfIW4SHkQcg`
- 2024 Day 1: `BHX1xNs0C5s`, Day 2: `FGEM72Ar0Gg`
- 2025: per-talk links in `src/content/programs/2025.json`

The original 2023/2024 files came from NIST's Kaltura (`download_url` in `public/archive/<year>/videos.json`).

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
- `public/archive/<year>/`: the archived original material, served as-is (`page.md`, `documents/`, `slides/`,
  `images/`, `source/` raw HTML, `videos.json`).
- `public/img/ndn-logo.png`: the NDN logo (an SVG version would be sharper).

## Re-scraping a NIST page

```
python3 tools/scrape_nist_event.py <nist-event-url> public/archive/<year>
```

This needs `pandoc` and `pdftotext` (poppler). It redacts the Mapbox key that nist.gov embeds in every page, which
GitHub push protection would otherwise reject.
