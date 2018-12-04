import TruffleContract from 'truffle-contract';

const JeruToken = TruffleContract(require('../build/contracts/JeruToken.json'));

let token;

export const state = () => ({
  balance: null,
  address: null,
});

export const mutations = {
  setBalance(state, balance) {
    state.balance = balance;
  },
  setAddress(state, address) {
    console.log('JeruToken detected at ', address);
    state.address = address;
  },
};

export const actions = {
  async setProvider({ commit, dispatch }, provider) {
    JeruToken.setProvider(provider);
    token = await JeruToken.deployed();
    const { address } = token;

    commit('setAddress', address);
    dispatch('getBalance');
  },

  async getBalance({ commit, rootState }) {
    const from = rootState.wallet.address;
    const balance = await token.balanceOf(from, { from });
    commit('setBalance', balance.toNumber());
  },
};

export const getters = {
  balance: state => state.balance,
};
