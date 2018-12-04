<template>
  <div class="modal light-modal is-active">
    <div class="modal-background"></div>

    <div class="modal-wrapper">
      <div class="content" v-if="isPortis && !portisOpen">
        <header>
          <button class="delete" @click="$emit('close')" aria-label="close" />

          <h2 class="has-text-centered">
            {{ $t('wallet_required') }}
          </h2>
        </header>

        <div class="modal-body has-text-centered">
          <img
             src="@/assets/portis_logo.png"
             class="portis-logo"
             alt="image">

          <p>
            {{ $t('wallet_required_portis') }}
          </p>

          <div class="has-text-centered">
            <button
               class="button is-uppercase download-button"
               @click="openPortis">

              {{ $t('open_portis') }}
            </button>
          </div>

          <div class="has-text-centered">
            <nuxt-link
               to="/learn-more"
               class="more-link"
               @click.native="$emit('close')"
               v-html="$t('learn_more')" />
          </div>
        </div>
      </div>

      <div class="content" v-if="walletLocked">
        <header>
          <button class="delete" @click="$emit('close')" aria-label="close" />

          <h2 class="has-text-centered">
            {{ $t('metamask_locked') }}
          </h2>
        </header>

        <div class="modal-body has-text-centered">
          <p>{{ $t('open_instructions_unlock') }}</p>

          <div class="shadow">
            <img
               src="@/assets/metamask_locked.png"
               class="metamask-locked-image"
               alt="locked">
          </div>
        </div>
      </div>

      <div class="content" v-if="walletSignedOut">
        <header>
          <button class="delete" @click="$emit('close')" aria-label="close" />

          <h2 class="has-text-centered" v-html="$t('you_ve_been_signed_out')"></h2>
        </header>

        <div class="modal-body has-text-centered">
          <p>
          {{ $t('click_the_button_to_sign_back') }}
          </p>

          <input
             type="text"
             class="login-input"
             :placeholder="$t('wallet_address')"
             :value="address">

          <div class="has-text-centered">
            <button
               @click="signIn"
               :class="{'clicked': isSignInClicked}"
               class="button">
              {{ isSignInClicked ? `${$t('signing_in')}...` :  $t('sign_in') }}
            </button>
          </div>

          <div
               v-if="isSignInClicked && login.walletAddress"
               class="has-text-centered text-helper">
            {{ $t('open_meta_mask_and_click_sign') }}
          </div>
        </div>
      </div>

      <div class="content" v-if="walletNotRegistered">
        <header>
          <button class="delete" @click="$emit('close')" aria-label="close" />

          <h2 class="has-text-centered">
            {{ $t('create_account') }}
          </h2>
        </header>

        <div
              v-if="registrationStep === 0"
              class="modal-body has-text-centered">
          <p>
          {{ $t('your_email_address_required_account_updates') }}
          {{ $t('your_nickname_is_public') }}
          </p>

          <input
              type="text"
              :placeholder="$t('private_key')"
              disabled
              :value="address" />

          <input
              type="email"
              :placeholder="$t('email')"
              v-model="signUp.email">

          <input
              type="text"
              :placeholder="$t('nickname_optional')"
              v-model="signUp.nickname">

          <div class="has-text-centered">
            <button
               @click="goToSecondStep"
               class="button is-shadowed create-acc">
              {{ $t('create') }}
            </button>
          </div>
        </div>

        <div
               v-if="registrationStep === 1"
               class="modal-body has-text-centered">
          <p class="registration-text">
          {{ $t('privacy_is_important_to_us_learn_more_about') }}
          <nuxt-link to="/terms" target="_blank" v-t="'terms_of_use'" />
            {{ $t('and') }}
            <nuxt-link to="/privacy" target="_blank" v-t="'privacy_policy'" />
          </p>

          <div class="has-text-left checkboxes">
            <div class="checkbox-wrapper">
              <checkbox
                 :text="$t('i_accept_terms_of_use')"
                 :data="signUp.terms"
                 @click="signUp.terms = !signUp.terms" />
            </div>

            <div class="checkbox-wrapper">
              <checkbox
                 :text="$t('i_accept_privacy_policy')"
                 :data="signUp.policy"
                 @click="signUp.policy = !signUp.policy" />
            </div>

            <div class="checkbox-wrapper">
              <checkbox
                 :text="$t('i_want_to_get_marketing_updates')"
                 :data="signUp.updates"
                 @click="signUp.updates = !signUp.updates"/>
            </div>
          </div>

          <div class="has-text-centered">
            <button
               @click="finalStep"
               @blur="isFinalClicked = signUp.terms && signUp.policy"
               :class="{'clicked': isFinalClicked && signUp.terms && signUp.policy}"
               class="button create-acc is-shadowed">
              {{
              isFinalClicked && signUp.terms && signUp.policy
              ? `${$t( 'creating')}...`
              : $t('create')
              }}
            </button>
          </div>

          <div
               v-if="isFinalClicked && signUp.terms && signUp.policy"
               class="has-text-centered text-helper">
            {{ $t('open_wallet_and_sign', { walletName }) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Checkbox from '../inputs/Checkbox';

export default {
  name: 'RegistrationPopup',
  components: {
    Checkbox,
  },
  data: () => ({
    signUp: {
      email: '',
      nickname: '',
      terms: false,
      policy: false,
      updates: false,
      signature: '',
    },
    registrationStep: 0,
    isSignInClicked: false,
    isFinalClicked: false,
  }),
  watch: {
    authenticated() {
      this.$emit('close');
      this.$router.push('/profile/reserve');
    },
  },
  created() {
    Object.assign(this.signUp, this.$store.state.profile);

    if (this.profile.created && this.walletName === 'Portis') {
      this.openPortis();
    }
  },
  computed: {
    ...mapState({
      injected: state => state.wallet.injected,
      connected: state => state.wallet.connected,
      address: state => state.wallet.address,
      walletName: state => state.wallet.name,
      portisOpen: state => state.wallet.portisOpen,
      isPortis: state => state.wallet.isPortis,
      profile: state => state.profile,
    }),
    ...mapGetters({
      locked: 'wallet/locked',
      authenticated: 'profile/authenticated',
    }),

    // States of popups
    noWallet() {
      return !this.injected;
    },
    walletSignedOut() {
      return this.injected && this.address === '';
    },
    walletLocked() {
      return this.locked;
    },
    walletNotRegistered() {
      return this.injected && this.address;
    },
  },
  methods: {
    openPortis() {
      this.$store.dispatch('wallet/openPortis');
    },

    signIn() {
      this.isSignInClicked = true;
      this.$store.dispatch('profile/sign').then(signature => {
        console.log('Signature: ', signature);
        this.$emit('close');
        this.$router.push('/profile/reserve');
      }).catch(() => {
        this.isSignInClicked = false;
      });
    },

    goToSecondStep() {
      this.$store.dispatch('profile/storeLead', this.signUp).then(() => {
        this.registrationStep = 1;
      });
    },

    finalStep() {
      this.isFinalClicked = true;
      this.$store.dispatch('profile/create', this.signUp);
    },
  },
};
</script>

<style lang="scss" scoped>
.portis-logo {
  width: 150px;
}

button {
  text-transform: uppercase;

  &.create-acc {
    width: 140px !important;
    letter-spacing: 0.5px;
  }

  &.clicked {
    width: 190px !important;
    font-family: "Core Sans A 55" !important;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.5) !important;
    color: rgba(254, 247, 227, 0.5) !important;
    box-shadow: inset 0 1px 3px 0 #000000 !important;
  }
}
</style>
