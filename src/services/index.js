const v1Wallet = require('./v1/wallet/wallet.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(v1Wallet);
};
