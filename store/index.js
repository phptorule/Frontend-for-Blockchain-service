import VueCookie from 'vue-cookie';

export const state = () => ({
  contractInstance: null,
  isAuthModalOpen: false,
  isAlertVisible: false,
  showCookieBar: !VueCookie.get('showCookieBar'),
});

export const mutations = {
  openAuthModal(state) {
    state.isAuthModalOpen = true;
  },
  toggleAuthModal(state) {
    state.isAuthModalOpen = !state.isAuthModalOpen;
  },
  toggleAlert(state) {
    state.isAlertVisible = !state.isAlertVisible;
  },
  setProfile(state, payload) {
    state.profile = payload;
  },
  closeCookieBar(state) {
    state.showCookieBar = false;
  },
};

export const actions = {
  closeCookieBar({ commit }) {
    VueCookie.set('showCookieBar', false, { expires: '1Y' });
    commit('closeCookieBar');
  },
};

export const getters = {
  currentPrice: () => 0.25,
  currentBonus: () => 50,
  countdownDate: () => 'October 22, 2018',
  isAuthModalOpen: state => state.isAuthModalOpen,
};
