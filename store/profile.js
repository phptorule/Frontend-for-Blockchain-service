export const state = () => ({
  address: '',
  email: '',
  nickname: '',
  signature: '',
  policy: false,
  terms: false,
  updates: false,
  created: false,
  authenticated: false,
});

export const actions = {
  async storeLead({
    commit, dispatch, rootState,
  }, lead) {
    const { address } = rootState.wallet;
    const { email, nickname } = lead;

    await dispatch('mautic/submit', {
      formId: 4,
      coinbase: address,
      email,
      nickname,
    }, { root: true });

    commit('setAddress', address);
    commit('setEmail', email);
    commit('setNickname', nickname);
  },

  async create({ dispatch, commit }, account) {
    const { terms, policy, updates } = account;

    await dispatch('mautic/submit', {
      formId: 5,
      terms_signed: terms ? 'yes' : 'no',
      privacy_policy_signed: policy ? 'yes' : 'no',
      marketing_signed: updates ? 'yes' : 'no',
    }, { root: true });

    commit('acceptTerms');
    commit('setMarketingUpdates', updates);
    await dispatch('sign');
  },

  async sign({ dispatch, commit }) {
    const message = 'This is what the LORD says: "I will return to Zion and dwell in Jerusalem. '
      + 'Then Jerusalem will be called the Faithful City, and the mountain of the LORD '
      + 'Almighty will be called the Holy Mountain."';

    const signature = await dispatch('wallet/sign', message, { root: true });

    await dispatch('mautic/submit', {
      formId: 6,
      sign: signature,
    }, { root: true });

    commit('setSignature', signature);
  },
};

export const mutations = {
  setAddress(state, address) {
    state.address = address;
  },
  setEmail(state, email) {
    state.email = email;
    state.created = true;
  },
  setNickname(state, nickname) {
    state.nickname = nickname;
  },
  acceptTerms(state) {
    state.terms = true;
    state.policy = true;
  },
  setMarketingUpdates(state, updates) {
    state.updates = updates;
  },
  setSignature(state, signature) {
    state.signature = signature;
  },
};

export const getters = {
  created: state => (!!state.email),
  account: state => (state.signature !== ''),
  authenticated: (state, getters, rootState, rootGetters) => getters.account
      && rootGetters['wallet/active']
      && state.address === rootState.wallet.address,
};
