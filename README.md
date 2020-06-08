## Requirements

- ethernet connection with `192.168.0` subnet
- Ncore passhash (Passhash generated when "lower security" is checked)
- theMovieDB api key (https://www.themoviedb.org/account/signup?language=en-US)

## Install

Burn image with etcher (https://www.balena.io/etcher/)

## Configuration

Config file: `/home/pi/nstreamer/config.json`:

```
{
  "webtorrent-api": {
    "scraper": {
      "username": "<ncore_username>",
      "password": "<ncore_passhash>",
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
      "movieAPIKey": "<moviedb_apikey>"
    },
    "backend": {
      "port": 3003,
      "host": "192.168.0.172"
    }
  }
}
```

## Useful commands

- Restart(stop & start) service:
  1. `sudo systemctl stop nstreamer`
  2. `sudo systemctl start nstreamer`
- SSH into raspberry: `ssh pi@raspberrypi.local` (default password:`Q1w2e3r4`)
- Show log:`journalctl -f -u nstreamer`
