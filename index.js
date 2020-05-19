const makeFrontendApp = require("nflix");
const makeApplication = require("webtorrent-api");
const appConfig = require("./config.json");

const frontendApp = makeFrontendApp(appConfig["nflix"]);
const app = makeApplication(appConfig["webtorrent-api"]);

Promise.all([app.start(), frontendApp.start()]);

process.on("SIGINT", async function () {
  await Promise.all([app.stop(), frontendApp.stop()]);
  console.log("Bye");
});
