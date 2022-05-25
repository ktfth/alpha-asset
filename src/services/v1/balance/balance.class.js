const config = require('config');
const { default: axios } = require('axios');

/* eslint-disable no-unused-vars */
exports.Balance = class Balance {
  constructor (options) {
    this.options = options || {};
  }

  async create (data, params) {
    const { alphaWallet } = config;
    const { data: dataBalance } = await axios.post(`${alphaWallet.url}${alphaWallet.services.balance}`, {
      privateKey: data.privateKey,
    });

    return {
      data: dataBalance,
    };
  }
};
