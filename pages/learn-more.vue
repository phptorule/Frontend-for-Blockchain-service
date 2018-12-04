<template>
  <div class="learn-more">
    <simple-header />

    <div class="reserve">
      <div class="bg-dark"></div>

      <div class="bg-striped">
        <img src="@/assets/strip_pattern.png" alt="strips">
      </div>

      <div class="content-holder has-text-centered container">
        <div
          class="title">
          <h1>{{ !browserNotSupported ? $t('reserve_jerusalem_chain_plots_by') : $t('browser') }}</h1>
          <h1>{{ !browserNotSupported ? $t('installing_metamask') : $t('not_supported') }}</h1>

          <h3 class="has-text-centered">
            {{ !browserNotSupported
              ? $t('it_will_also_act_as_your_login')
              : `${$t('reserve_plots_in_chrome_and_firefox')}.`
            }}
          </h3>
        </div>

        <div
          :class="{'not-supported': browserNotSupported}"
          class="image-holder">
          <img
            :src="require(`@/assets/${getImage()}`)"
            alt="fox">
        </div>

        <div class="has-text-centered">
          <button
            v-if="!browserNotSupported && !metamaskInstalled"
            key="download"
            @click="goToExtension"
            class="button download is-rounded">
            <img src="@/assets/download-icon-dark.png" alt="download" />

            <div class="vertical-divider"></div>

            {{ $t('get_metamask') }}
          </button>

          <nuxt-link
            to="/"
            v-if="metamaskInstalled"
            key="installed"
            class="button installed is-rounded">
            <i class="fas fa-check"></i> {{ $t('i_installed_metamask') }}
          </nuxt-link>

          <div
            v-if="browserNotSupported" class="buttons">
            <a
              href="https://www.google.com/chrome/"
              target="_blank"
              class="button is-uppercase is-rounded">
              <img
                src="@/assets/chrome-icon.png"
                alt="chrome" />
                {{ $t('get_chrome') }}
            </a>

            <a
              href="https://www.mozilla.org/en-US/firefox/"
              target="_blank"
              class="button is-uppercase is-rounded">
              <img
                src="@/assets/firefox-icon.png"
                alt="firefox" />
                {{ $t('get_firefox') }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="getting-started">
      <h3 class="has-text-centered">{{ $t('getting_started') }}:</h3>

      <div class="container">
        <div class="accordion-holder has-text-centered">
          <accordion :items="gettingStartedData" />
        </div>
      </div>
    </div>

    <private-footer />
  </div>
</template>

<script>
import SimpleHeader from '~/components/elements/SimpleHeader';
import Accordion from '~/components/elements/Accordion';
import PrivateFooter from '~/components/partial/PrivateFooter';
import { mapState } from 'vuex';
import { detect } from 'detect-browser';

export default {
  name: 'LearnMore',
  components: {
    SimpleHeader,
    Accordion,
    PrivateFooter,
  },
  data() {
    return {
      gettingStartedData: [
        {
          isOpen: false,
          title: this.$t('getting_started_data.what_do_i_need_to_reserve'),
          content: this.$t('getting_started_data.what_do_i_need_to_reserve_text'),
          videoId: '',
        },
        {
          isOpen: false,
          title: `${this.$t('getting_started_data.what_is_metamask')}?`,
          content: this.$t('getting_started_data.what_is_metamask_text'),
          videoId: 'tfETpi-9ORs',
        },
        {
          isOpen: false,
          title: this.$t('getting_started_data.why_is_my_meta_mask_locked'),
          content: this.$t('getting_started_data.why_is_my_meta_mask_locked_text'),
          videoId: '',
        },
        {
          isOpen: false,
          title: this.$t('getting_started_data.reinstalling_meta_mask'),
          content: this.$t('getting_started_data.reinstalling_meta_mask_text'),
          videoId: '',
        },
        {
          isOpen: false,
          title: this.$t('getting_started_data.getting_ether_your_digital_currency'),
          content: this.$t('getting_started_data.getting_ether_your_digital_currency_text'),
          videoId: '',
        },
        {
          isOpen: false,
          title: this.$t('getting_started_data.how_to_send_eth_to_meta_mask'),
          content: this.$t('getting_started_data.how_to_send_eth_to_meta_mask_text'),
          videoId: 'PtdMDtCVck0',
        },
      ],
    };
  },
  computed: {
    ...mapState({
      injected: state => state.wallet.injected,
    }),
    browserName() {
      return detect().name;
    },
    browserOS() {
      return detect().os;
    },

    // Conditions
    chrome() {
      return this.browserName === 'chrome';
    },
    firefox() {
      return this.browserName === 'firefox';
    },
    brave() {
      return this.browserName === 'brave';
    },
    opera() {
      return this.browserName === 'opera';
    },

    // States of popups
    browserNotSupported() {
      return !this.chrome && !this.firefox && !this.brave && !this.opera && !this.mobile;
    },
    metamaskInstalled() {
      return !this.browserNotSupported && this.injected;
    },

  },
  methods: {
    goToExtension() {
      const url = this.chrome
        ? 'https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn'
        : 'https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/';

      window.open(url, '_blank');
    },
    getImage() {
      if (this.browserNotSupported) {
        return 'metamask_not_supported.png';
      } if (this.metamaskInstalled) {
        return 'metamask_planet.png';
      }
      return 'metamask_modal_big.png';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/initial-variables';
@import '~bulma/sass/utilities/derived-variables';
@import '~bulma/sass/utilities/mixins';

#app .learn-more {
  .reserve {
    background-image: url('../assets/hero_bg.png');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 665px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 20%;
      right: 5%;
      height: 0;
      z-index: -1;
      box-shadow: 0 0px 100px 8px rgb(108,61,9);
      transform: rotate(4deg);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 20%;
      left: 5%;
      height: 0;
      z-index: -1;
      box-shadow: 0 0px 100px 8px rgb(108,61,9);
      transform: rotate(-4deg);
    }

    .bg-dark {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: .25;
      background-color: rgb(108,61,9);
    }

    .bg-striped {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      text-align: center;

      img {
        filter: grayscale(1);
        opacity: .5;
        transform: translateY(-40%);
      }
    }

    .content-holder {
      padding: 39px 10px;
      position: relative;
    }

    .title {
      & > h1 {
        font-size: 40px;
        color: #FEF7E3;

        &:first-child {
          font-weight: 100;
          margin-bottom: 10px;
        }
      }

      & > h3 {
        font-family: 'Core Sans A 45';
        color: #D3A479;
        font-size: 22px;
        margin-top: 13px;
        font-weight: 400;
      }
    }

    .image-holder {
      position: relative;
      width: 330px;
      max-width: 100%;
      max-height: 330px;
      margin: 35px auto;

      &.not-supported {
        width: 400px;
      }

      .header-background {
        width: 100%;
      }

      .header-logo {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 210px;
        transform: translate(-50%, -50%);
      }
    }

    .button {
      height: 50px;
      border: none;
      font-family: 'Core Sans A 55';
      font-size: 21px;
      font-weight: 400;
      color: #FEF7E3;
      padding: 0;

      &.download {
        background: linear-gradient(0deg, #DC8744 0%, #FCD561 100%);
        width: 250px;
        text-transform: uppercase;
      }

      &.installed {
        width: 300px;
        background-color: #6C3D09;
        text-transform: capitalize;

        svg {
          margin-right: 15px;
        }
      }
    }

    .buttons {
      justify-content: center;
      margin-top: 50px;

      a {
        max-width: 100%;
        position: relative;
        padding: 5px;
        background: linear-gradient(0deg, #DC8744 0%, #FCD561 100%);
        padding-left: 40px;
        width: 230px;
        margin-top: 15px;
        margin-bottom: 15px;

        @include tablet {
          margin: 0 30px;
        }

        img {
          width: 60px;
          height: 60px;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(-20%, -50%);
        }
      }
    }

    .vertical-divider {
      height: 50px;
      width: 0;
      border-right: 1px solid rgba(28,23,18,0.2);
      border-left: 1px solid rgba(255,255,255,0.1);
      margin-left: 12px;
      margin-right: 12px;
    }
  }

  .getting-started {
    padding: 67px 10px;

    & > h3:first-child {
      color: #6C3D09;
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 1px;
      margin-bottom: 22px;
    }
  }

  .accordion-holder {
    max-width: 890px;
    margin: auto;
  }
}
</style>
