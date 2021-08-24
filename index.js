const makeFrontendApp = require("thtr-frontend-preact");
const makeApplication = require("thtr-backend");
const sanitizeConfig = require("./utils/sanitize-config");
const appConfig = sanitizeConfig(require(process.argv[2]));
console.log(JSON.stringify(appConfig.backend));
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
