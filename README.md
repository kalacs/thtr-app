## Install

Burn image with etcher (https://www.balena.io/etcher/)

## Requirements

- ethernet connection with `192.168.0` subnet

## Configuration

Config file: `/home/pi/nstreamer/config.json`:

```
{
  "webtorrent-api": {
    "scraper": {
      "username": "",
      "password": "",
      "type": "ncore"
    },
    "torrentClient": {
      "downloadFolder": "downloads",
      "torrentFolder": "torrentFiles",
      "streamPort": 8888
    },
    "backend": {
      "host": "192.168.0.172",
      "port": 3000
    },
    "cors": { "origin": ["http://192.168.0.172:3003"] }
  },
  "nflix": {
    "frontend": {
      "scraperUrl": "http://192.168.0.172:3000/scraper",
      "torrentsUrl": "http://192.168.0.172:3000/torrents",
      "movieAPIUrl": "https://api.themoviedb.org/3/",
      "movieAPIKey": "9f1ffd64abd4bde18614fd9087d87d71"
    },
    "backend": {
      "port": 3003,
      "host": "192.168.0.172"
    }
  }
}
```

