const { default: axios } = require('axios');
const config = require('config');

/* eslint-disable no-unused-vars */
exports.Transaction = class Transaction {
  constructor (options) {
    this.options = options || {};
  }

  async create (data, params) {
    const { alphaWallet } = config;
    const { data: dataTransaction } = await axios.post(`${alphaWallet.url}${alphaWallet.services.transaction}`, {
      privateKey: data.privateKey,
      transactionHash: data.transactionHash,
      address: data.address,
      amount: data.amount,
      message: data.message
    });

    return {
      data: dataTransaction,
    };
  }
};
