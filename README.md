## Build steps
* yarn
* rm -rf node_modules/nflix/node_modules
* cd node_modules/nflix && yarn && yarn build
* cd ../..
* rm -rf node_modules/webtorrent-api/node_modules
* cd node_modules/webtorrent-api && yarn
* cd ../..
* yarn packing