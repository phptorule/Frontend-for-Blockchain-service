<template>
  <div class="mobile-menu" v-show="isMobileMenu">
    <div class="wrapper">
      <button
        @click="$emit('close')"
        class="close-btn">
        <i class="fas fa-times"></i>
      </button>

      <nuxt-link to="/">
        <img
          class="logo"
          src="@/assets/logo@2x.png"
          alt="logo">
      </nuxt-link>

      <div class="link-list">
          <nuxt-link
             v-for="link in menuLinks"
             :key="link.title"
             :to="link.href"
             :target="link.target"
             v-html="$t(link.title)"
             @click.native="$emit('close')"
             class="link" />
      </div>

      <!-- <div class="mobile-language">
        <LanguageSelect :isDark="false"/>
      </div> -->
    </div>
  </div>
</template>

<script>
import LanguageSelect from './LanguageSelect';

export default {
  name: 'PublicMobileMenu',
  components: {
    LanguageSelect,
  },
  props: {
    isMobileMenu: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuLinks: [
        {
          title: 'about',
          href: '/#about-section',
        },
        {
          title: 'how_it_works',
          href: '/#map-section',
        },
        {
          title: 'faq',
          href: '/#faq',
        },
        {
          title: 'timeline',
          href: '/#timeline-section',
        },
        {
          title: 'our_vision',
          href: '/pdf/Jerusalem-Chain-White-Paper.pdf',
          target: '_blank',
        },
        {
          title: 'contact',
          href: '/#footer',
        },
      ],

    };
  },
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(45deg, #3c240a 0%,#a56b29 100%);
  z-index: 90;

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: relative;
    background-image: url('../../assets/mobile_menu_noise.png');
    background-size: contain;
    background-repeat: repeat;

    img {
      width: 195px;
      height: 109px;
    }

    .close-btn {
      position: absolute;
      color: #FEF7E3;
      top: 20px;
      left: 20px;
      font-size: 25px;
      background-color: transparent;
      border: none;
    }
  }

  .link-list {
    margin-top: 60px;

    .link {
      height: 55px;
      width: 260px;
      flex-basis: 260px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #FEF7E3;
      font-size: 24px;
      font-family: 'Core Sans A 45';

      &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        opacity: 0.3;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 1) 35%,
          rgba(255, 255, 255, 1) 65%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }
  }

  .mobile-language {
    margin-top: auto;
    margin-bottom: 28px;
  }

  .logo {
    margin-top: 25px;
  }
}
</style>
