export default function ({ store, redirect }) {
  const redirectLogic = () => {
    if (!store.getters['profile/authenticated'] || !store.getters['wallet/active']) {
      store.commit('openAuthModal');
      redirect('/');
    }
  };

  if (store.state.wallet.initialized) {
    redirectLogic();
  } else {
    store.watch(state => state.wallet.initialized, initialized => {
      if (initialized) {
        redirectLogic();
      }
    });
  }
}
