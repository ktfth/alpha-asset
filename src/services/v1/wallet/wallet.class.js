const { default: axios } = require('axios');
const config = require('config');

/* eslint-disable no-unused-vars */
exports.Wallet = class Wallet {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    const { alphaWallet } = config;
    const { data } = await axios.get(`${alphaWallet.url}${alphaWallet.services.wallet}`);
    return {
      data,
    };
  }
};
