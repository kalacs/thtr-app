## What

This application starts the streaming platform by creating both a backend and a frontend instance.

## Why

It makes the starting process a bit easier.

## Requirements

- ethernet connection with `192.168.0` subnet
- Ncore passhash (The passhash is sent with Cookies when "lower security" is used)
- theMovieDB api key (https://www.themoviedb.org/account/signup?language=en-US)
- yarn installed globally

## Configuration

```
{
  "backend": {
    "torrentProviderService": {
      "username": "<NCORE_USER>",
      "password": "<NCORE_PASSHASH>",
      "type": "ncore",
      "url": "https://ncore.pro"
    },
    "torrentClientService": {
      "downloadFolder": "downloads",
      "torrentFolder": "torrentFiles",
      "streamServer": {
        "network": {
          "interface": "en0"
        }
      }
    },
    "apiService": {
      "network": {
        "interface": "en0"
      },
      "cors": { "origin": ["http://192.168.0.125:3003"] } // frontend.backend host:port
    }
  },
  "frontend": {
    "frontend": {
      "scraperUrl": "http://192.168.0.125:3000/scraper", // backend host:port
      "torrentsUrl": "http://192.168.0.125:3000/torrents", // backend host:port
      "movieAPIUrl": "https://api.themoviedb.org/3/",
      "movieAPIKey": "<API_KEY>", //9f1ffd64abd4bde18614fd9087d87d71
      "playMode": "on-tv" // on-tv || on-device
    },
    "backend": {
      "port": 3003,
      "host": "192.168.0.125"
    }
  }
}
```

## Useful commands

- Start streaming platform: `node index.js ./config.json`
- Show DLNA logs: `export DEBUG=torrent:dlnacast`
- Build binary: `npm run packing`

## Frontend

### Buttons

- Red button (1 key): Refreshes the current page
- Green button (2 key): Changes the current version of the movie (default is FullHD Eng)
- Back button (backspace key): Goes back to the previous page
- Navigation buttons (arrow keys): Navigate through movie list
