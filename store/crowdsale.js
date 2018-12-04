import TruffleContract from 'truffle-contract';
import moment from 'moment';

const JeruCrowdsaleContract = require('../build/contracts/JeruCrowdsale.json');

const JeruCrowdsale = TruffleContract(JeruCrowdsaleContract);

let crowdsale;

export const state = () => ({
  finalPrice: 0.5,
  endDate: '2018-11-21 00:00:00+00:00',
  pendingTransactions: null,
  address: null,
});

export const mutations = {
  setAddress(state, address) {
    console.log('JeruCrowdsale detected at ', address);
    state.address = address;
  },

  addPending(state, { hash, amount }) {
    state.pendingTransactions.push({
      hash, amount
    });
  },

  removePendig(state, hash) {
    state.pendingTransactions = state.pendingTransactions.filter(item =>
      item.hash == hash
    );
  },
};

export const actions = {
  async setProvider({ commit, dispatch }, provider) {
    JeruCrowdsale.setProvider(provider);

    crowdsale = await JeruCrowdsale.deployed();
    const { address } = crowdsale;
    commit('setAddress', address);
  },

  async updateTransaction({ commit, dispatch }) {
  },

  async buyTokens({ commit, state, rootState }, amount) {
    const amountStr = amount.toString();
    const from = rootState.wallet.address;

    const hash = await crowdsale.sendTransaction({
      from,
      value: web3utils.toWei(amountStr),
      gas: 100000,
      gasPrice: web3utils.toWei('5', 'gwei'),
    });
    // TODO Replace with real amount
    // commit('addPending', { hash, amount: 4 });

    crowdsale.TokenPurchase({ purchaser: from }, (err, result) => {
      console.log(result);
    });

    return hash;
  },
};

export const getters = {
  price: state => {
    const now = moment().unix();

    if (now < 1540512000) {return 0.250;}
    if (now < 1540944000) {return 0.270;}
    if (now < 1541376000) {return 0.290;}
    if (now < 1539216000) {return 0.310;}
    if (now < 1542240000) {return 0.330;}
    if (now < 1542758400) {return 0.350;}

    return state.finalPrice;
  },
  bonus: (state, getters) => getters.price / state.finalPrice * 100,
};
