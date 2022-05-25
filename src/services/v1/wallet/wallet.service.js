// Initializes the `v1/wallet` service on path `/v1/wallet`
const { Wallet } = require('./wallet.class');
const hooks = require('./wallet.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/wallet', new Wallet(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/wallet');

  service.hooks(hooks);
};
