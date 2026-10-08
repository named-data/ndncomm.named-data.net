Source: https://www.caida.org/workshops/ndn/1409/

# NDN Community Meeting (NDNcomm 2014): Architecture, Applications, and Collaboration

The NDN Project hosted the first NDN community meeting (NDNcomm) on September 4th-5th 2014, the first in a series of meetings.

**The talks at NDNcomm will be archived on [Livestream](http://new.livestream.com/uclaremap/) for those who who wish to review the meeting remotely.**

- [NDNcomm 2014](/workshops/ndn/1409/)
- [Participants](/workshops/ndn/1409/list/)
- [Final Report](https://catalog.caida.org/paper/2015_first_ndncomm/)

------------------------------------------------------------------------

***Date:*** September 4 (Thu) - 5 (Fri), 2014\
***Place:*** Little Theater, [Macgowan Hall](http://www.tft.ucla.edu/facilities/macgowan-hall/), UCLA Campus, Los Angeles, CA

## Named Data Network: Architecture, Applications, and Collaboration

We are pleased to announce the first NDNcomm meeting: an opportunity to discuss existing capabilities and potential opportunities for the NDN software platform to serve the scientific research community. This 2-day meeting will be hosted by UCLA in the first week of September 2014.

Our goals for this meeting are (to be refined based on community input):

1.  elaborate on the current state of the NDN software platform and supporting libraries and applications
2.  describe state of current operational NDN testbed, and how to participate
3.  showcase external research using the NDN software platform and testbed
4.  debate existing and proposed functionality to support security and privacy at different layers of the architecture
5.  share examples of educational use of NDN, including tutorial material
6.  provide a forum to guide the evolution of the NDN architecture, key implementation artifacts including APIs, and to provide feedback proposing potential changes based on implementation and deployment experience
7.  discuss a vision/roadmap for the community interested in advancing NDN deployment and usability, and how to accelerate deployment, both from research and commercial perspectives
8.  provide an opportunity for interested members of the community to engage in hands-on-training to use NDN software or testbed platforms

Based on community interest and submissions, we are receptive to a variety of forms of participation at this meeting, e.g, technical talks, panels, tutorials, demonstrations, hands-on learning. In order to maximize interaction and dig deeper into selected topics, we will have a series of focused discussion sessions that include a few short talks (10-15 minutes), but leaving lots of time for conversation and debate.

The NDN project uses current and future applications to drive the development and deployment of the architecture and its supporting modules, to test prototype implementations, and to encourage an iterative cycle of hands-on experimentation, evaluation, and design. So, we particularly encourage contributions that consider specific case studies, application requirements, and real-world scenarios.

**Registration for this meeting is closed**.

## Deadlines

|                         |                                       |
|-------------------------|---------------------------------------|
| Submission deadline     | August 1, 2014                        |
| Acceptance notification | August 10, 2014                       |
| Meeting dates           | September 4-5, 2014 (Thursday-Friday) |

## Recommended Reading List

- **Required Reading: [Named Data Networking](http://www.sigcomm.org/sites/default/files/ccr/papers/2014/July/0000000-0000010.pdf)** (Technical Report NDN-0019)
- [NFD Developer's Guide](http://named-data.net/wp-content/uploads/2014/07/NFD-developer-guide.pdf) (Technical Report NDN-0021)
- [Scalable NDN Forwarding: Concepts, Issues and Principles](http://named-data.net/wp-content/uploads/2012_Yuan_ICCCN.pdf)
- [Kite: A Mobility Support Scheme for NDN](http://named-data.net/wp-content/uploads/2014/06/sigproc-sp.pdf) (Technical Report NDN-0020)
- [NDN Technical Memo: Naming Conventions](http://named-data.net/wp-content/uploads/2014/08/ndn-tr-22-ndn-memo-naming-conventions.pdf) (Technical Report NDN-0022)
- [A Case for Stateful Forwarding Plane](http://named-data.net/wp-content/uploads/comcom-stateful-forwarding.pdf)
- [NDN Security library Tutorial](https://named-data.net/doc/ndn-cpp-dev/0.4.0/tutorials/security-library.html)
- [NDN testbed cert design](https://github.com/named-data/ndncert)
- [Let's ChronoSync: Decentralized Dataset State Synchronization in Named Data Networking](http://named-data.net/wp-content/uploads/2014/03/chronosync-icnp2013.pdf)

## Program Committee

- Co-Chair: kc claffy (UC San Diego)
- Co-Chair: Jeff Burke (UCLA REMAP)
- Giovanna Carofiglio (Alcatel-Lucent)
- Allison Mankin (VeriSign Labs)
- Dave Oran (Cisco)
- Christos Papadopoulos (Colorado State University)
- Eve Schooler (Intel)
- Beichuan Zhang (University of Arizona)
- Lixia Zhang (UCLA)

------------------------------------------------------------------------

## Agenda

Unless noted, all events are in the Macgowan Hall Little Theater. Presentations will be archived on [Livestream](http://new.livestream.com/uclaremap/).

### September 3 (Wednesday)

- 13:00 - 17:00 (optional) Named Data Networking Tutorial - Rehearsal for ACM ICN
  - Christos Papadopoulos (Colorado State University) will host an informal tutorial rehearsal in the afternoon for those able and willing to attend, in preparation for the NDN tutorial at ACM ICN 2014. *[Draft agenda](slides/tutorialagenda.pdf)*
  - Jeff Burke (UCLA REMAP), *[ICN Tutorial Dry Run Intro](slides/ndncomm2014_jburke_appintro.pdf)*
  - Jeff Burke (UCLA REMAP), *[Application Support](slides/ndncomm2014_jburke_appsupport.pdf)*

### September 4 (Thursday)

- 08:00 - 09:00 Breakfast
- 09:00 - 09:50 Overview of NDN and the NDN Platform
  - Van Jacobson (UCLA / Google), *Brief intro to NDN*
  - Jeff Burke and Jeff Thompson (UCLA REMAP), *[Overview of NDN Platform, application libraries, and API](slides/ndncomm2014_jburke_overview.pdf)*
  - Beichuan Zhang (University of Arizona), *[Overview of NFD](slides/ndncomm2014_bzhang.pdf)* (NDN forwarding daemon)
- 09:50 - 10:20 Discussion\
  Moderator: kc claffy
- 10:20 - 10:50 Break
- 10:50 - 11:20 Testbed Update
  - Patrick Crowley and John DeHart (Washington University), *[NDN Testbed](slides/ndncomm2014_dehart.pdf)*
  - Alex Afanasyev (UCLA), *NDN CERT and its use with testbed*
- 11:20 - 11:30 Discussion\
  Moderator: Patrick Crowley
- 11:30 - 11:45 Lightning Talks
  - Christian Tschudin (University of Basel), *[Named Functions: Vertical or horizontal named-data extension?](slides/ndncomm2014_ctschudin.pdf)*
- 11:45 - 13:15 Lunch
- 13:15 - 14:15 Routing and Forwarding
  - Beichuan Zhang (University of Arizona), *Role of Routing in NDN Networks* (10 min)
  - Lan Wang (University of Memphis), *[NLSR: Named Data Link State Routing Protocol](slides/ndncomm2014_lwang.pdf)* (15 min)
  - Giovanna Carofiglio (Alcatel-Lucent), *An analytical model for pending interest table dimensioning in Named Data Networking* (15 min)
  - Patrick Crowley and Haowei Yuan (Washington University in St. Louis), *Scalable Pending Interest Table Design* (20 min)
- 14:30 - 15:00 Discussion\
  Moderator: Beichuan Zhang
- 15:00 - 15:30 Break
- 15:30 - 16:30 Applications: Instrumented Environments
  - Junxiao Shi (University of Arizona), *[NDN in local area networks](slides/ndncomm2014_jshi.pptx)* (20 min)
  - Adeola Bannis (UCLA), *[NDN Internet of Things Toolkit for Raspberry Pi](slides/ndncomm2014_abannis.pdf)* (20 min)
  - Yong-Jin Park, Hidenori Nakazato (Waseda University) and Atsushi Tagami (KDDI R&D Laboratories Inc.), *[Japan-EU joint research: GreenICN, and Proactive Content Caching and Delivery Scheme Utilizing Transportation Systems](slides/ndncomm2014_hnakazato.pdf)* (10 min)
  - Wentao Shang (UCLA), *[NDN Sensor Network Emulator](slides/ndncomm2014_wshang.pdf)* (10 min)
- 16:30 - 16:45 Discussion\
  Moderator: Jeff Burke
- 16:45 - 17:30 Lightning Talks
  - Ilya Moiseenko (UCLA), *[Consumer-Producer API for Named Data Networking](slides/ndncomm2014_imoiseenko.pdf)*
  - Niky Riga (GENI Project Office), *[GENI and NDN](slides/ndncomm2014_nriga.pdf)*
  - G.Q. Wang (Huawei Technologies), *Large scale ICN deployment for carriers*
- 17:30 - 18:00 break
- 17:30 - 20:00 Demos / Poster Session / Reception
  - Alexander Horn (UCLA REMAP), *[Ambient Informatics - NDN Bus Bench](slides/ndncomm2014_ahorn_poster.pdf)*
  - Giulio Grassi (UPMC - LIP6/UCLA), *[Using GeoFaces to route Interests and Data in Vehicular Networks](slides/ndncomm2014_ggrassi_poster.pdf)*
  - Golnaz Farhadi (Fujitsu Laboratories of America), *[PnC: Predict and Cache in Content Centric networks](slides/ndncomm2014_gfarhadi_poster.pdf)*
  - Ilya Moiseenko (UCLA), *[Consumer-Producer API for Named Data Networking](slides/ndncomm2014_imoiseenko_poster.pdf)*
  - Jeff Thompson (UCLA REMAP), *[NDN Common Client Libraries API](slides/ndncomm2014_jthompson_poster.pdf)*
  - Mengchen Pei (BUPT/UCLA REMAP), *[Music Sharing Room over Named Data Network](slides/ndncomm2014_mpei_poster.pdf)*
  - Peter Gusev (UCLA REMAP), *[NDN Real Time Conferencing Library](slides/ndncomm2014_pgusev_poster.pdf)*
  - Niky Riga (GENI Project Office), *[GENI for NDN Research and Education](slides/ndncomm2014_nriga_poster.pdf)*
  - Steven Dale (Thoughtworks // parallels.io), *[Parallels: An Exploration Engine for The Discovery of Ideas](slides/ndncomm2014_sdale_poster.pdf)*
  - Yingdi Yu (UCLA), *[ChronoChat: a Server-less Multi-User Instant Message Application Over NDN](slides/ndncomm2014_yyu_poster.pdf)*
  - Zhehao Wang (UCLA REMAP), *[Project Matryoshka: NDN Multiplayer Online Game](slides/ndncomm2014_zwang_poster.pdf)*

### September 5 (Friday)

- 08:00 - 09:00 Breakfast
  - *Yingdi Yu (UCLA) "office hours" configuring ChronoChat*
- 09:00 - 09:45 Open Discussion: Reflections on Yesterday, Most Interesting Things Learned\
  Moderator: kc claffy
- 09:45 - 10:30 New Applications
  - Peter Gusev (UCLA REMAP), *[NDN-RTC](slides/ndncomm2014_pgusev.pdf)* (15 min)
  - Christos Papadopolous (Colorado State University), *[NDN support for climate applications](slides/ndncomm2014_christos.pdf)* (10 min)
  - Jeff Burke (UCLA REMAP), *[Open mHealth](slides/ndncomm2014_jburke_openmhealth.pdf)* (10 min)
  - Eric Osterweil (Verisign Labs), *Big Data over NDN: NBigDN?* (15 min)
- 10:30 - 10:45 Discussion\
  Moderator: kc claffy
- 10:45 - 11:15 Break
- 11:15 - 12:00 Security
  - James Kasten (U. Mich), *Update on NDN security research* (15 min)
  - Yingdi Yu (UCLA), *[Logging System For Long-lifetime Data Validation Data](slides/ndncomm2014_yyu.pdf)* (10 min)
  - Pedro de-las-Heras-Quirós (Universidad Rey Jan Carlos), *[Authorization credentials for controlled sharing in NDN: experiments with codecaps and macaroons in NDN.JS](slides/ndncomm2014_pdelasherasquiros.pdf)* (10 min)
  - Aziz Mohaisen (VeriSign Labs), *[Privacy of Cached Data in Information-Centric Networks](slides/ndncomm2014_amohaisen.pdf)* (10 min)
- 12:00 - 12:30 Panel Discussion: Industry view of NDN security and privacy landscape\
  Panelists: Eve Schooler (Intel), Allison Mankin (VeriSign Inc), and Ignacio Solis (PARC)
  - *Discussion questions:*
    1.  What is the biggest security or privacy problem of the current Internet that you think NDN can mitigate?
    2.  What is the security or privacy aspect of the NDN architecture that will be the hardest to address?
- 12:30 - 13:30 lunch
- 13:30 - 15:00 Technical Discussion about NDN Design\
  Moderator: kc claffy
  - Massimo Gallo (Alcaltel-Lucent)
  - Mark Stapp (Cisco Systems)
  - Leonce Mekinda (Orange Labs/ France Telecom R&D)
  - *Required reading: [Named Data Networking](http://www.sigcomm.org/sites/default/files/ccr/papers/2014/July/0000000-0000010.pdf) Technical Report*
  - *Discussion questions:*
    1.  What is the biggest showstopper in the NDN architecture for the problem(s) you are trying to solve? How would you like to see it addressed?
    2.  What other holes do you believe exist in the current description of the NDN architecture?
    3.  What do you consider to be the highest priorities in addressing the unanswered questions? Any suggestions on how to address them? Any offers to help?
    4.  What is the most interesting / challenging application domain for NDN to consider now? What are the key challenges there it can help address?
- 15:00 - 15:15 break
- 15:15 - 16:00 Building Community
  - Ryan Bennett (Colorado State University), *[NDN in Javascript: Building Community and Exploring Possibilities](slides/ndncomm2014_rbennett.pdf)*
  - NDN Team, *[Introduction to the NDN Consortium](slides/ndncomm2014_jburke_consortium.pdf)*
- 16:00 - 17:00 Discussion: How to promote broader adoption and involvement\
  Moderator: Jeff Burke
- 17:00 - 17:30 Wrap-up, review of meeting

------------------------------------------------------------------------

- ## Local Arrangements / Getting to UCLA

- Meeting Room The meeting will be held in Little Theater in Macgowan Hall on the UCLA campus. The UCLA website provides [directions to Macgowan Hall](http://www.tft.ucla.edu/facilities/macgowan-hall/) from the east entrance of campus, and a [UCLA Campus Map](https://www.maps.ucla.edu/?id=2043#!ct/75713?s/) shows Little Theater and its surroundings.

- Parking Parking Structure 3 on Charles E. Young Dr East is closest to Macgowan Hall and the Little Theater. The standard parking fee is \$12 for an all-day pass, from the pay stations in the parking structure.

- Recommended Accomodations
  - [UCLA Guest House](http://reservations.guesthouse.ucla.edu/) (3 minute walk to location)
  - [UCLA Tiverton House](http://tivertonhouse.ucla.edu/)
  - [W Hotel Westwood](http://www.wlosangeles.com/)
  - [Hotel Palomar](https://www.hotelpalomar-beverlyhills.com)
  - [Hilgard House Hotel](http://www.hilgardhouse.com/)

- **International Visitors**: Visa Letter of Invitation

  Please be aware that in order to attend NDNcomm 2014 you may need a visa to enter the United States. [Attendees are responsible for attaining their own visas](visa), but we can assist by providing a letter of invitation if your local consular office requires it.

For transportation concerns, general questions and help, contact ndn-registration@caida.org

------------------------------------------------------------------------

## Additional Content

###  [NDNcomm 2014: Participants](/workshops/ndn/1409/list/)

This page contains the list of participants of the first NDN community meeting (NDNcomm) on September 4-5, 2014.

###  [NDN Community Meeting (NDNcomm 2014) Visa Letter of Invitation](/workshops/ndn/1409/visa/)

## Attendees are responsible for attaining their own visas

Please be aware that in order to attend NDNcomm 2014 you may need a visa to enter the United States. We encourage you to contact the Consular Section of the Embassy or Consulate near your location to determine how to apply, and the likely time required for the process of visa issuance. NDNcomm 2014 has no influence over the issuance of a visa.
