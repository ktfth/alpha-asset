// Initializes the `v1/balance` service on path `/v1/balance`
const { Balance } = require('./balance.class');
const hooks = require('./balance.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/balance', new Balance(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/balance');

  service.hooks(hooks);
};
