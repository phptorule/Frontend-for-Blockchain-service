<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <div class="title-settings">{{ $t('your_wallet_address') }}</div>
        <div>{{ $t('your_wallet_address_text') }}</div>
      </div>

      <div class="column is-6">
        <Input
           :value="$store.state.profile.address"
          isReadOnly/>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <div class="title-settings">{{ $t('your_nickname') }}</div>
        <div>{{ $t('your_nickname_text') }}</div>
      </div>

      <div class="column is-6">
        <Input
          v-model="form.nickname"
          placeholder="nickname_optional"/>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <div class="title-settings">{{ $t('your_email') }}</div>
        <div>{{ $t('email_required_text') }}</div>
      </div>

      <div class="column is-6">
        <Input
          v-model="form.email"
          placeholder="email_address"
          class="email-input"/>
        <Checkbox :label="$t('i_want_to_get_marketing_updates')" v-model="form.updates" />
      </div>
    </div>

    <div class="has-text-centered save-holder">
      <Button
        isUpperCase
        class="full-mobile-btn bottom-shadow is-uppercase"
        :title="$t('save_changes')"
        :onClick="save" />
    </div>

    <!--
    <div class="info-block box-shadow bottom-shadow">
      <div class="info-title">{{ $t('user_privacy_and_rights') }}</div>
      <div class="info-content">
        {{ $t('if_you_want_to_erase_text_one') }}
        <br />
        <br />
        {{ $t('if_you_want_to_erase_text_two') }}
        <br />
        <br />
        {{ $t('if_you_want_to_erase_text_three') }}
      </div>
      <div class="has-text-centered">
        <button
          type="button"
          class="button info-button"
          v-html="$t('disconnect_wallet_from_chain')">
        </button>
      </div>
    </div>
    <div class="has-text-centered bottom-text">
      {{ $t('save_your_login_information_and_details') }}
      <br class="is-hidden-touch"/>
      {{ $t('we_cant_help_restoring') }}
    </div>
    -->
  </div>
</template>

<script>
import Input from '~/components/elements/Input';
import Checkbox from '~/components/elements/Checkbox';
import Button from '~/components/elements/Button';

export default {
  name: 'Settings',
  layout: 'profile',
  components: {
    Input,
    Checkbox,
    Button,
  },
  data() {
    return {
      menu: false,
      form: {
        nickname: '',
        email: '',
        updates: false,
      },
    };
  },
  created() {
    Object.assign(this.form, this.$store.state.profile);
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
    save() {
      // Save handler
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/initial-variables';
@import '~bulma/sass/utilities/derived-variables';
@import '~bulma/sass/utilities/mixins';

.email-input {
  margin-bottom: 10px;
}

.title-settings {
  color: #6c3d09;
  font-family: "Core Sans A 55";
  font-size: 24px;
  letter-spacing: 0.5px;
  line-height: 30px;

  & + div {
    font-size: 14px;

    @include tablet {
      font-size: 16px;
    }
  }
}

.box-shadow {
  box-shadow: 0px 5px 20px 1px rgba(108, 61, 9, 0.1);
}

.save-holder {
  button {
    width: 100%;
    height: 50px;
    margin-bottom: 84px;

    @include tablet {
      width: 190px;
    }
  }
}

.info-block {
  border-radius: 11px;
  background-color: #ffffff;
  padding: 35px 25px;
  margin-bottom: 50px;
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;

  &::after {
    left: 20px;
    right: 20px;
    box-shadow: 0 10px 30px 0 rgba(108, 61, 9, 0.1);
    z-index: -1;
  }

  @include mobile {
    padding: 20px;
  }

  @include tablet {
    height: 400px;
  }
}

.info-title {
  color: #6c3d09;
  font-family: Cinzel;
  font-size: 24px;
  letter-spacing: 0.8px;
  font-weight: bold;
  line-height: 40px;
  text-align: center;

  @include tablet {
    font-size: 30px;
  }
}

.info-content {
  color: #444444;
  font-family: "Core Sans A 35";
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 35px;
}

.info-button {
  border-radius: 27px;
  background-color: #fef7e3;
  background: linear-gradient(180deg, #d2a478 0%, #9d6f3f 98.86%);
  color: #fef7e3;
  font-family: "Core Sans A 65";
  font-size: 16px;
  letter-spacing: 0.66px;
  text-align: center;
  padding: 5px 20px;
  height: auto;
  max-width: 100%;
  line-height: 17px;
  width: 100%;
  white-space: normal;
  text-transform: unset;

  @include tablet {
    width: auto;
    padding: 12px 20px;
  }
}

.bottom-text {
  color: #6c3d09;
  font-family: "Core Sans A 45";
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 60px;
}

.columns {
  &:first-child,
  &:nth-child(2) {
    margin-bottom: 20px;
  }

  & > .column:first-child {
    @include mobile {
      padding-bottom: 6px;
    }
  }

  & > .column:nth-child(2) {
    @include mobile {
      padding-top: 6px;
    }
  }
}
</style>
