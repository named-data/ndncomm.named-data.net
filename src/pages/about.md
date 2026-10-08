---
layout: ../layouts/Page.astro
title: About this site
kicker: NDNComm
description: The home of the Named Data Networking community meeting, past and future.
---

NDNComm is the annual community meeting of the [Named Data Networking](https://named-data.net/) project and the
wider NDN and Information-Centric Networking community. This site collects the program, abstracts and recordings of
each meeting, and will host announcements for future meetings.

## Meetings hosted by NIST

From 2020 to 2024, NDNComm was organized and hosted by the **National Institute of Standards and Technology (NIST)**,
and its event pages, agendas, abstracts and recordings were published on nist.gov. Those pages are no longer
maintained, so the material is preserved here, with a link to the original page on each meeting's page. Some
recordings (2020, 2021 and most of 2023) were removed from NIST's video hosting before they could be saved. If you
have a copy, please let us know on the [ndn-interest mailing list](https://www.lists.cs.ucla.edu/mailman/listinfo/ndn-interest).

This site is maintained by the NDN community. It is not affiliated with or endorsed by NIST.

## Adding a meeting

Each meeting is one JSON file in `src/content/meetings/`, and its program is a JSON file in `src/content/programs/`.
A meeting whose dates are in the future is shown as upcoming, with its registration and call-for-submissions links.
