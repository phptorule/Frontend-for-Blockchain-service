<template>
  <div v-if="isVisible" class="cookie-bar">
    <div
      :class="{'top': position === 'top', 'bottom': position !== 'top'}"
      class="message-wrapper">
      <div class="tile is-parent">
        <div class="tile first-tile is-6">
          {{ $t('cookies_agreement') }}
        </div>
        <div class="tile is-1 learn-more">
          <nuxt-link to="/privacy">
            {{ $t('learn_more') }}
          </nuxt-link>
        </div>

        <div class="tile is-1 right-buttons">
          <button
            @click="$store.dispatch('closeCookieBar')"
            class="button is-outlined is-uppercase">
            {{ $t('allow') }}
            </button>

          <button class="close-button" @click="$store.dispatch('closeCookieBar')">
            <img src="@/assets/close-icon.png" alt="close">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieBar',
  props: {
    position: {
      type: String,
      default: 'bottom',
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
    isCloseButton: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    closeCookiePopup(type) {
      this.$store.commit('closeAndSaveCookiePopup', type);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/derived-variables";
@import "~bulma/sass/utilities/mixins";

  .cookie-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 998;
    background-color: transparent;
  }

  .top {
    top: 0;
  }

  .bottom {
    bottom: 0;
  }

  .message-wrapper {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    left: 0;
    right: 0;
    min-height: 60px;
    background-color: #FEF7E3;
    background: linear-gradient(270deg, #FEF7E3 0%, #FFFFFE 50.31%, #FEF7E3 100%);
    box-shadow: 0 0 20px 0 rgba(67,43,17,0.35);
    padding: 0 5px;
    font-family: 'Core Sans A 45';
    font-size: 14px;

    @include tablet {
      padding: 0 20px 0 31px;
    }

    a {
      color: #6C3D09;
      margin-left: 5px;
    }

    .tile {
       @include tablet {
        display: flex;
        align-items: center;
       }
    }

    .first-tile {
      margin-bottom: 15px;

      @include tablet {
        width: 625px;
        max-width: 100%;
        margin-bottom: 0;
      }
    }

    .learn-more {
      height: 31.5px;
      float: left;
      display: flex;
      align-items: center;
    }

    .right-buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-left: auto;

      button {
        color: #6C3D09;
        cursor: pointer;

        &.is-outlined {
          border-color: #6C3D09;
          background-color: transparent;
          transition: color .25s ease, background-color .25s ease;
          width: 78px;
          font-family: 'Core Sans A 65';
          font-size: 14px;

          &:hover {
            color: #FEF7E3;
            background-color: #6C3D09;
          }
        }

        &.close-button {
          margin-left: 20px;
          font-size: 20px;
          min-width: 27px;
          display: flex;
          height: 100%;
          background-color: transparent;
          border: none;

          img {
            width: 14px;
            height: 14px;
          }
        }
      }
    }
  }
</style>
