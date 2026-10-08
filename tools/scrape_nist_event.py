#!/usr/bin/env python3
"""Scrape a NIST event page (text, linked documents, Kaltura video metadata).

Usage: scrape_nist_event.py <event-url> <output-dir>

Writes into <output-dir>:
  source/page.html      raw page as downloaded
  source/content.html   just the page's main content region
  page.md               content region converted to Markdown (needs pandoc)
  documents/*.pdf       documents linked from the page (agenda, abstracts, slides, ...)
  documents/*.txt       pdftotext versions (needs pdftotext)
  videos.json           Kaltura entries embedded on the page, with direct download URLs
"""
import json
import os
import re
import shutil
import subprocess
import sys
import urllib.parse
import urllib.request

UA = "Mozilla/5.0 (ndncomm-archive scraper)"
BASE = "https://www.nist.gov"
KALTURA_API = "https://cdnapisec.kaltura.com/api_v3/"


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.geturl(), r.read()


def kaltura(params):
    url = KALTURA_API + "?" + urllib.parse.urlencode({**params, "format": 1})
    return json.loads(fetch(url)[1])


def content_region(html):
    start = html.find('id="main-content"')
    end = html.find("<footer", start)
    region = html[start:end] if start >= 0 else html
    region = re.sub(r"<(script|style|svg)\b.*?</\1>", "", region, flags=re.S)
    # the sidebar is rendered twice (mobile + desktop); keep the desktop copy
    region = re.sub(r'<aside class="[^"]*sidebar-second-top-mobile.*?</aside>', "", region, flags=re.S)
    region = re.sub(r"<!-- nist-index-ignore-start -->.*?<!-- nist-index-ignore-end -->", "", region, flags=re.S)
    return '<div><a ' + region if start >= 0 else region


def kaltura_videos(html):
    partners = set(re.findall(r"cdnapisec\.kaltura\.com/p/(\d+)", html))
    playlists = set(re.findall(r"playlistAPI\.kpl0Id\]=([0-9a-z_]+)", html))
    entries = set(re.findall(r"(?:entry_id[/=]|entryId[/=])([0-9]_[0-9a-z]{8})", html))
    videos = []
    for pid in partners:
        ks = kaltura({"service": "session", "action": "startWidgetSession", "widgetId": f"_{pid}"})["ks"]
        found = []
        for pl in playlists:
            res = kaltura({"service": "playlist", "action": "execute", "id": pl, "ks": ks})
            found += [(pl, e) for e in (res if isinstance(res, list) else [])]
        for eid in entries:
            e = kaltura({"service": "baseEntry", "action": "get", "entryId": eid, "ks": ks})
            if e.get("id"):
                found.append((None, e))
        for pl, e in found:
            videos.append({
                "id": e["id"],
                "name": e.get("name"),
                "duration_sec": e.get("duration"),
                "playlist": pl,
                "created_at": e.get("createdAt"),
                "thumbnail": e.get("thumbnailUrl"),
                # flavorParamIds/0 = the original uploaded source file
                "download_url": f"https://cdnapisec.kaltura.com/p/{pid}/sp/{pid}00/playManifest/entryId/{e['id']}/format/download/protocol/https/flavorParamIds/0",
            })
    return videos


def main(url, out):
    os.makedirs(os.path.join(out, "source"), exist_ok=True)
    os.makedirs(os.path.join(out, "documents"), exist_ok=True)

    _, raw = fetch(url)
    html = raw.decode("utf-8", "replace")
    open(os.path.join(out, "source", "page.html"), "w").write(html)

    region = content_region(html)
    content_path = os.path.join(out, "source", "content.html")
    open(content_path, "w").write(region)
    if shutil.which("pandoc"):
        md = subprocess.run(["pandoc", "-f", "html", "-t", "gfm-raw_html", "--wrap=none", content_path],
                            capture_output=True, text=True, check=True).stdout
        md = re.sub(r"\n{3,}", "\n\n", md.replace(" ", " "))
        open(os.path.join(out, "page.md"), "w").write(f"Source: <{url}>\n\n" + md)

    docs = {}
    for m in re.finditer(r'<a\b[^>]*>', region):
        tag = m.group(0)
        href = re.search(r'href="([^"]+)"', tag)
        file_url = re.search(r'data-file-url="([^"]+)"', tag)
        if file_url:
            docs[file_url.group(1)] = href.group(1) if href else None
        elif href and re.search(r"(/document/|/system/files/|\.pdf$)", href.group(1)):
            docs[href.group(1)] = href.group(1)
    manifest = []
    for link, page in docs.items():
        final, data = fetch(urllib.parse.urljoin(BASE, link))
        name = urllib.parse.unquote(os.path.basename(urllib.parse.urlparse(final).path))
        path = os.path.join(out, "documents", name)
        open(path, "wb").write(data)
        manifest.append({"file": name, "url": final, "page": urllib.parse.urljoin(BASE, page) if page else None})
        if name.lower().endswith(".pdf") and shutil.which("pdftotext"):
            subprocess.run(["pdftotext", "-layout", path, path[:-4] + ".txt"], check=True)
        print("doc:", name)
    json.dump(manifest, open(os.path.join(out, "documents", "manifest.json"), "w"), indent=2)

    videos = kaltura_videos(html)
    json.dump(videos, open(os.path.join(out, "videos.json"), "w"), indent=2)
    for v in videos:
        print(f"video: {v['id']} {v['duration_sec']}s {v['name']}\n  {v['download_url']}")


if __name__ == "__main__":
    main(*sys.argv[1:3])
