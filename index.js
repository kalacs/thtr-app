const makeFrontendApp = require("thtr-frontend-preact");
const makeApplication = require("thtr-backend");
const appConfig = require(process.argv[2]);
const frontendApp = makeFrontendApp(appConfig["frontend"]);
const app = makeApplication(appConfig["backend"]);
Promise.all([app.start(), frontendApp.start()]);

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

async function shutdown() {
  await frontendApp.stop();
  await app.stop();
  process.exit(0);
}
