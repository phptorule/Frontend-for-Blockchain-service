import { web3Actions } from '~/plugins/web3';

export const state = () => ({
  injected: false,
  networkId: null,
  address: null,
  balance: null,
  connected: false,
  initialized: false,
  name: null,
  isPortis: false,
  portisOpen: false,
});

export const mutations = {
  updateState(state, payload) {
    state.initialized = true;
    Object.assign(state, payload);
  },

  isPortis(state) {
    state.isPortis = true;
  },

  portisOpen(state) {
    state.portisOpen = true;
  },

  setAddress(state, address) {
    state.address = address;
  },

  setConnected(state, connected) {
    state.connected = connected;
  },

  setInjected(state, injected) {
    state.injected = injected;
  },

  setNetworkId(state, networkId) {
    state.networkId = networkId;
  },

  setInitialized(state, initialized) {
    state.initialized = initialized;
  },

  setBalance(state, balance) {
    state.balance = balance;
  },

  setName(state, name) {
    state.name = name;
  },
};

export const actions = {
  async openPortis({ commit }) {
    commit('portisOpen');
    const account = await web3Actions.launchWallet();

    if (account && web3Actions.getWalletName === 'Portis') {
      commit('isPortis');
    }
  },

  sign(_, message) {
    return web3Actions.sign(message);
  },

  setProvider({ dispatch }, provider) {
    dispatch('crowdsale/setProvider', provider, { root: true });
    dispatch('token/setProvider', provider, { root: true });
  },

  setWallet({ commit }, name) {
    commit('setName', name);

    if (name === 'Portis') {
      commit('isPortis');
    }
  },

  async getBalance({ commit }) {
    commit('setBalance', await web3Actions.getBalanceInEth());
  },
};

export const getters = {
  active: state => state.injected && state.address != null,
  locked: state => state.injected && state.address == null && !state.isPortis,
};
