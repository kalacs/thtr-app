const merge = require("deepmerge");
const DEFAULT_FRONTEND_BACKEND_PORT = 3003;

module.exports = function sanitizeConfig(maybeConfig) {
  return {
    backend: merge(
      {
        torrentClientService: {
          downloadFolder: "downloads",
          torrentFolder: "torrentFiles",
          streamServer: {
            network: {
              interface: "en0",
            },
          },
        },
        apiService: {
          network: {
            interface: "en0",
          },
          cors: {
            origin: [
              `http://${maybeConfig.frontend.backend.host}:${
                maybeConfig.frontend.backend.port ||
                DEFAULT_FRONTEND_BACKEND_PORT
              }`,
            ],
          },
        },
      },
      maybeConfig.backend
    ),
    frontend: merge(
      {
        frontend: {
          scraperUrl: `http://${maybeConfig.frontend.backend.host}:3000/scraper`,
          torrentsUrl: `http://${maybeConfig.frontend.backend.host}:3000/torrents`,
          movieAPIUrl: "https://api.themoviedb.org/3/",
          movieAPIKey: "9f1ffd64abd4bde18614fd9087d87d71",
          playMode: "on-tv",
        },
        backend: {
          port: DEFAULT_FRONTEND_BACKEND_PORT,
        },
      },
      maybeConfig.frontend
    ),
  };
};
