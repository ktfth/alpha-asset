const app = require('../../../src/app');

describe('\'v1/balance\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/balance');
    expect(service).toBeTruthy();
  });
});
