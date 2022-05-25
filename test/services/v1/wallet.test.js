const app = require('../../../src/app');

describe('\'v1/wallet\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/wallet');
    expect(service).toBeTruthy();
  });
});
