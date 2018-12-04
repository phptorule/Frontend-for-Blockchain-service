<template>
  <div id="app">
    <nuxt/>

    <cookie-bar :isVisible="$store.state.showCookieBar"/>

    <alert
      @close="$store.commit('toggleAlert')"
      v-if="$store.state.isAlertVisible"/>

    <portis-modal
      v-if="isPortisAlert"
      @close="isPortisAlert = false"/>

    <auth-modal
      @close="$store.commit('toggleAuthModal')"
      v-if="$store.state.isAuthModalOpen"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CookieBar from '~/components/elements/CookieBar';
import Alert from '~/components/popups/Alert';
import PortisModal from '~/components/popups/PortisModal';
import AuthModal from '~/components/popups/AuthModal';

export default {
  name: 'App',
  components: {
    CookieBar,
    Alert,
    PortisModal,
    AuthModal,
  },
  data: () => ({
    isAlertVisible: false,
    isPortisAlert: false,
  }),
  computed: {
    ...mapGetters([
      'isAuthModalOpen', 'profile',
    ]),
  },
};
</script>
