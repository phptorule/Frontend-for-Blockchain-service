<template>
  <div>
    <header class="hero header-profile is-hidden-touch">
      <div class="columns">
        <div class="column is-3">
          <div>
            <nuxt-link
              to="/profile"
              class="button is-uppercase"
              v-html="$t('my_plots')" />

            <nuxt-link
              to="/profile/settings"
              class="button is-uppercase"
              v-html="$t('my_account')" />
          </div>
        </div>

        <div class="column is-6">
          <div>
            <nuxt-link to="/">
              <img src="../../assets/img_logo_small.png">
            </nuxt-link>
          </div>
        </div>

        <div class="column is-3">
          <div>
            <nuxt-link
              type="button"
              to="/profile/reserve"
              class="button reserve-btn"
              v-html="$t('reserve')" />

            <div class="position-relative">
              <div class="smooth-background" @click="toggleMenu" v-show="menu"></div>
              <DotsButton :onClick="toggleMenu" />
              <ProfileMenu :active="menu" />
            </div>
          </div>
        </div>
      </div>
    </header>

    <header class="header-mobile is-hidden-desktop">
      <div class="navbar">
        <burger-button @click="toggleMobileMenu"/>

        <nuxt-link
          to="/"
          @click="toggleMobileMenu"
          class="logo">
          <img
            class="logo-image"
            src="@/assets/logo-dark.png">
        </nuxt-link>

        <div class="right-button">
          <nuxt-link
            to="/profile/reserve"
            type="button"
            class="button reserve-btn is-uppercase"
            v-html="$t('reserve')" />
        </div>
      </div>

      <div class="is-flex">
        <nuxt-link
          to="/profile"
          class="nav-button">
          My plots
        </nuxt-link>

        <nuxt-link
          to="/profile/settings"
          class="nav-button">
          My account
        </nuxt-link>
      </div>
    </header>

    <div class="mobile-menu" v-show="isMobileMenu">
      <div class="wrapper">
        <button
          @click="toggleMobileMenu"
          class="close-btn">
          <i class="fas fa-times"></i>
        </button>

        <nuxt-link to="/">
          <img
            class="mobile-logo"
            src="@/assets/logo.png"
            alt="logo"
          />
        </nuxt-link>


        <div class="link-list">
          <nuxt-link
             v-for="link in menuLinks"
             :key="link.title"
             :to="link.href"
             v-html="$t(link.title)"
             class="link" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DotsButton from '../elements/DotsButton';
import ProfileMenu from './ProfileMenu';
import BurgerButton from '../elements/BurgerButton';

export default {
  name: 'ProfileHeader',
  components: {
    DotsButton,
    ProfileMenu,
    BurgerButton,
  },
  data() {
    return {
      isMobileMenu: false,
      menu: false,
      menuLinks: [
        {
          title: 'about',
          href: '/#about-section',
        },
        {
          title: 'contact',
          href: '/#footer',
        },
        {
          title: 'faq',
          href: '/#faq',
        },
        {
          title: 'how_it_works',
          href: '/#map-section',
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
    toggleMobileMenu() {
      this.isMobileMenu = !this.isMobileMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/derived-variables";
@import "~bulma/sass/utilities/mixins";

 a {
   &.button {
    background-color: transparent;
    border: none;
    color: #6C3D09;
    opacity: .5;
    position: relative;
    font-family: 'Core Sans A 55';

    &:focus {
      box-shadow: none;
    }

    &.nuxt-link-exact-active {
      opacity: 1;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -26px;
        border-bottom: 3px solid #6C3D09;
        opacity: 1;
      }
    }

    &.reserve-btn {
      color: #fef7e3;
      font-size: 16px;
      border-radius: 50px;
      line-height: 24px;
      font-family: "Core Sans A 55";
      font-weight: normal;
      letter-spacing: .3px;
      max-width: 91px;
      opacity: 1;
      background-image: linear-gradient(to bottom, #7ED321, #589417);
      padding: 6px 14px;
      margin-right: 30px;
    }
  }

  &.nav-button {
    width: 50%;
    background-color: transparent;
    border: none;
    text-align: center;
    opacity: 0.5;
    text-transform: uppercase;
    font-size: 16px;
    color: #6C3D09;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: 'Core Sans A 55';

    &.active {
      border-bottom: 3px solid #6C3D09;
      opacity: 1;
    }
  }
}

.navbar {
  background-color: transparent;
}

.header-profile {
  height: 88px;
  box-shadow: 0 5px 30px 0 rgba(108,61,9, 0.3);
  padding-right: 20px;
  padding-left: 20px;

  .smooth-background {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(28, 23, 18, 0.7);
    height: 10000px;
    width: 10000px;
    z-index: 1;
  }

  .column {
    & > div {
      display: flex;
      align-items: center;
      height: 100%;
    }

    &:nth-child(2) > div {
      justify-content: center;
      padding: 5px;
    }

    &:last-child > div {
      justify-content: flex-end;
    }
  }
}

.header-mobile {
  background-color: transparent;
  min-height: 88px;

  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 0 10px;

    .logo-image {
      width: 147px;
      height: 87;
    }

    .right-button {
      width: 40px;
      position: relative;

      .reserve-btn {
        margin-right: 0;
        position: absolute;
        top: 10px;
        right: 0;
      }
    }
  }
}

.mobile-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(45deg, #3c240a 0%,#a56b29 100%);
  z-index: 90;

  .mobile-logo {
    margin-top: 25px;
  }

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
}
</style>
