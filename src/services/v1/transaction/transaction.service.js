// Initializes the `v1/transaction` service on path `/v1/transaction`
const { Transaction } = require('./transaction.class');
const hooks = require('./transaction.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/transaction', new Transaction(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/transaction');

  service.hooks(hooks);
};
