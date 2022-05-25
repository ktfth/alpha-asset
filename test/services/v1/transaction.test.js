const app = require('../../../src/app');

describe('\'v1/transaction\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/transaction');
    expect(service).toBeTruthy();
  });
});
