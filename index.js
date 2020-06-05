const makeFrontendApp = require("nflix");
const makeApplication = require("webtorrent-api");
const appConfig = require(process.argv[2]);

const frontendApp = makeFrontendApp(appConfig["nflix"]);
const app = makeApplication(appConfig["webtorrent-api"]);
Promise.all([app.start(), frontendApp.start()]);

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

async function shutdown() {
  await frontendApp.stop();
  await app.stop();
  process.exit(0);
  console.log("Bye");
}
