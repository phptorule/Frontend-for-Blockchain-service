<template>
  <div>
    <div
      :class="{'fixed-nav': isDark}"
      class="columns is-hidden-touch">
      <div class="column is-2 has-text-right-fullhd">
        <!-- <LanguageSelect :isDark="isDark"/> -->
      </div>

      <div class="column is-8">
        <!-- main menu -->
        <div id="top-menu" class="level">
          <div class="level-item">
            <nuxt-link to="/#about-section" v-html="$t('about')" />
          </div>

          <div class="level-item">
            <nuxt-link to="/#map-section" v-html="$t('how_it_works')" />
          </div>

          <div class="level-item">
            <nuxt-link to="/#faq" v-html="$t('faq')" />
          </div>

          <div class="level-item">
            <nuxt-link to="/">
              <img :src="require('@/assets/logo' + (isDark ? '-dark.png' : '@2x.png'))">
            </nuxt-link>
          </div>

          <div class="level-item">
            <nuxt-link to="/#timeline-section" v-html="$t('timeline')" />
          </div>

          <div class="level-item">
            <nuxt-link to="/pdf/Jerusalem-Chain-White-Paper.pdf"
              title="Jerusalem Chain White Paper"
              target="_blank"
              v-html="$t('our_vision')" />
          </div>

          <div class="level-item">
            <nuxt-link to="/#footer" v-html="$t('contact')" />
          </div>
        </div>
      </div>

      <div class="column is-2 has-text-centered has-text-left-fullhd">
        <AccountMenu :isDark="isDark"/>
      </div>
    </div>

    <div
      class="mobile-wrapper is-hidden-desktop"
      :class="{'fixed-nav': isDark}">
      <div class="navbar">
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          @click="$emit('mobileMenuClick')"
          aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div class="logo">
          <nuxt-link to="/">
            <img
              :src="require('@/assets/logo' + (isDark ? '-dark.png' : '@2x.png'))">
          </nuxt-link>
        </div>

        <div class="user">
          <button
            class="button is-reserve"
            @click="$store.commit('toggleAuthModal')"
            v-html="$t('reserve')"
          >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageSelect from '../partial/LanguageSelect';
import AccountMenu from '../partial/AccountMenu';

export default {
  name: 'PublicHeader',
  components: {
    LanguageSelect,
    AccountMenu,
  },
  props: {
    isDark: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    authHandler(type) {
      this.$store.commit('changeAuthType', type);
      this.$store.commit('toggleAuthModal');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~bulma/sass/utilities/initial-variables';
  @import '~bulma/sass/utilities/derived-variables';
  @import '~bulma/sass/utilities/mixins';

  .navbar {
    display: flex;
    justify-content: space-between;

    .navbar-burger {
      margin-left: 0;
      color: #FEF7E3;

      span {
        height: 4px;
        width: 26px;
        border-radius: 10px;
        left: 0;

        &:first-child() {
          top: calc(20% - 6px);
        }

        &:nth-child(2) {
          width: 20px;
          top: calc(20% + 4px);
        }

        &:nth-child(3) {
          top: calc(20% + 14px);
        }
      }
    }

    .logo {
      img {
        height: 109px;
        width: 195px;
      }
    }

    .user {
      width: 52px;
      position: relative;

      .is-reserve {
        width: 81px!important;
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(10%);
      }
    }
  }

  #top-menu {
    font-family: 'Core Sans A 55';

    @include tablet {
      max-width: 800px;
      margin: auto;
    }

    a {
      color: #FCE9B9;
    }

    a:hover {
      text-decoration: underline;
    }

    .level-item img {
      width: 195px;
      height: 105px;
    }
  }

  .fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #FEF7E3;
    box-shadow: 0 5px 30px 0 rgba(108,61,9, 0.3);
    max-height: 88px;
    z-index: 3;
    transition: 0.3s;
    transition-timing-function: linear;

    .navbar {
      padding: 10px 10px 0 10px;
    }

    .level-item img,
    .logo img {
      height: 60px !important;
      width: 111px !important;
      margin-top: 5px;
    }

    #top-menu {
      a {
        color: #6C3D09;
      }
    }

    .is-2 {
      display: flex;
      align-items: center;
    }

    .navbar-burger{
      color: #6C3D09;
    }
  }

  .mobile-logo {
    margin-top: 20px;
  }
</style>
