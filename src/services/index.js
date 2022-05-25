const v1Wallet = require('./v1/wallet/wallet.service.js');
const v1Transaction = require('./v1/transaction/transaction.service.js');
const v1Balance = require('./v1/balance/balance.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(v1Wallet);
  app.configure(v1Transaction);
  app.configure(v1Balance);
};
