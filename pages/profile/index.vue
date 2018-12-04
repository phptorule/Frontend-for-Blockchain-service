<template>
  <div class="container">
    <div class="columns">
      <div class="column is-4">
        <div>
          <div class="title-settings">{{ $t('wallet_address') }}:</div>
        </div>
      </div>

      <div class="column is-5">
        <div v-show="!isCopiedClicked">
          <InputGroup
            v-model="$store.state.profile.address"
            :isDisabled="true"
            :onClick="copy" />
        </div>
        <div class="copied-block" v-show="copied.length > 0 && isCopiedClicked">
          {{ $t('copied_to_clipboard') }}
        </div>
      </div>

      <div class="column is-3">
        <div class="link">
          <i class="fas fa-pencil-alt"></i>
          <nuxt-link to="/profile/settings" v-html="$t('account_settings')" />
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <div v-show="balance && balance > 0">
      <div class="has-background-white rounded">
        <div class="after-copy box-shadow">
          <div class="after-image">
            <img src="../../assets/icon_pieces_yellow.png" alt="image" />
          </div>

          <div class="after-text">
            <div class="after-copy-title">
              {{ `${$t('you_reserved')} ${balance} ${$t('jerusalem_chain_plots')}` }}
            </div>
            <button
              type="button"
              class="button after-copy-button">
              {{ $t('view_on_etherscan') }}
            </button>
          </div>
        </div>
      </div>
      <div class="divider"></div>
    </div>

    <div class="bottom-text has-text-centered narrow-text-touch"  v-show="!balance || balance === 0">
      {{ $t('you_didnt_reserve_any_plots') }}
    </div>

    <div class="has-text-centered mb-70">
      <nuxt-link to="/profile/reserve" class="reserve-button" tag="button" v-html="$t('reserve')" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import InputGroup from '~/components/elements/InputGroup';
import Button from '~/components/elements/Button';

export default {
  name: 'Main',
  layout: 'profile',
  components: {
    InputGroup,
    Button,
  },
  data() {
    return {
      copied: '',
      isCopiedClicked: false,
    };
  },
  computed: {
    ...mapGetters({
      balance: 'token/balance',
    }),
  },

  methods: {
    copy(value) {
      this.isCopiedClicked = true;
      this.copied = value;
      const el = document.createElement('textarea');
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
  },
  created() {
    this.$store.dispatch('token/getBalance');
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/derived-variables";
@import "~bulma/sass/utilities/mixins";

.container {
  .columns {
    margin-bottom: 25px;

    @include tablet {
      margin-bottom: 50px;
    }

    .column {
      &:first-child > div:first-child,
      &:last-child > div:first-child {
        display: flex;
        align-items: center;
        height: 100%;
      }
    }
  }
}

.divider {
  border-bottom: 1px solid #dfd0bf;
  margin-bottom: 25px;

  @include tablet {
    margin-bottom: 42px;
  }
}

.mb-50 {
  margin-bottom: 50px;
}

.mb-70 {
  margin-bottom: 70px;
}

.align-items-center {
  align-items: center;
}

.rounded {
  border-radius: 10px;
}

.copied-block {
  border-radius: 4px;
  background-color: #a05b0e;
  box-shadow: inset 0 3px 5px 0 rgba(28, 15, 3, 0.12), 0 1px 0 0 #dfd0bf;
  color: #ffffff;
  font-family: "Core Sans A 65";
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  padding: 11px 0;
  transition: 0.7s;
}

.after-copy {
  border-radius: 10px;
  background-color: #ffffff;
  padding: 20px;
  background: linear-gradient(
    324.2deg,
    rgba(252, 213, 97, 0.1) 0%,
    rgba(252, 253, 253, 0.7) 100%
  );
  margin-bottom: 30px;
  display: flex;

  @include tablet {
    padding: 0 20px;
    align-items: center;
  }

  .after-image {
    margin-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    min-width: 60px;

    img {
      height: 46.79px;
      width: 59.55px;
    }
  }

  .after-text {
    display: flex;
    flex-direction: column;

    @include tablet {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-grow: 1;
    }

    .after-copy-title {
      color: #a05b0e;
      font-family: "Core Sans A 55";
      font-size: 20px;
      letter-spacing: 0.5px;
      line-height: 30px;
    }

    .after-copy-button {
      border: 1px solid #a05b0e;
      border-radius: 4px;
      background-color: transparent;
      color: #a05b0e;
      font-family: "Core Sans A 55";
      font-size: 12px;
      letter-spacing: 0.25px;
      line-height: 15px;
      text-align: center;
      padding: 10px;
      height: auto;
      margin-right: auto;
      margin-top: 15px;

      @include tablet {
        margin-left: auto;
        margin-right: 0;
        margin-top: 0;
      }
    }
  }
}

.title-settings {
  color: #6c3d09;
  font-family: "Core Sans A 45";
  font-size: 22px;
  letter-spacing: 0.46px;
  line-height: 28px;
  margin: auto;
}

.reserve-button {
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  text-transform: uppercase;
  font-family: "Core Sans A 65";
  box-shadow: inset 0 1px 3px 0 rgba(255, 255, 255, 0.5);
  background-image: linear-gradient(to bottom, #7ed321, #589417);
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.5);
  border: 0px solid #61a219;
  font-size: 20px;
  color: #fef7e3;
  width: 100%;
  height: 50px;

  @include tablet {
    width: 190px;
  }

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 10px;
    right: 10px;
    box-shadow: 0 1px 35px 5px #6c3d09;
  }
}

.bottom-text {
  color: #6c3d09;
  font-family: "Core Sans A 45";
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 23px;
  margin-left: auto;
  margin-right: auto;
  max-width: 200px;

  @include tablet {
    max-width: 100%;
  }
}

.box-shadow {
  box-shadow: 0px 3px 20px 1px rgba(108, 61, 9, 0.1);
}

.link {
  color: #6c3d09;
  font-family: "Core Sans A 45";
  font-size: 16px;
  letter-spacing: 0.33px;
  line-height: 19px;
  text-align: center;
  justify-content: center;

  .fa-pencil-alt {
    margin-right: 7px;
  }

  a {
    color: #6c3d09;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0;
      border-bottom: 1px solid #6c3d09;
    }
  }
}
</style>
