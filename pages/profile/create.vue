<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <div class="title-settings">{{ $t('your_wallet_address') }}</div>
        <div>{{ $t('your_wallet_address_text') }}</div>
      </div>
      <div class="column is-6">
        <Input />
      </div>
    </div>
    <div class="columns">
      <div class="column is-6">
        <div class="title-settings">{{ $t('your_nickname') }}</div>
        <div>{{ $t('your_nickname_text') }}</div>
      </div>
      <div class="column is-6">
        <Input />
      </div>
    </div>
    <div class="columns">
      <div class="column is-6">
        <div class="title-settings">{{ $t('your_email') }}</div>
        <div>{{ $t('email_required_text') }}</div>
      </div>
      <div class="column is-6">
        <Input />
      </div>
    </div>
    <div class="columns">
      <div class="column is-6">
        <div class="d-flex align-items-center h-100">
          <div class="title-settings">{{ $t('user_privacy_rights') }}</div>
        </div>
      </div>
      <div class="column is-6">
        <Checkbox :label="$t('i_want_to_get_marketing_updates')" />
        <Checkbox :label="$t('i_accept_terms_of_use')" />
        <Checkbox :label="$t('i_accept_privacy_policy')" />
      </div>
    </div>
    <div class="has-text-centered mb-55">
      <button @click="create"
      :class="{'clicked': isCreating}"
        class="create-button">
        {{ isCreating ? `${$t('creating')}...` : $t('create') }}
      </button>
    </div>
    <div class="has-text-centered bottom-text">
      {{ $t('save_login_information') }}
      <br class="is-hidden-mobile" />
      {{ $t('we_cant_help_restoring') }}
    </div>
  </div>
</template>

<script>
import Input from '~/components/elements/Input';
import Checkbox from '~/components/elements/Checkbox';
import Button from '~/components/elements/Button';

export default {
  name: 'Create',
  layout: 'profile',
  components: {
    Input,
    Checkbox,
    Button,
  },
  data: () => ({
    isCreating: false,
  }),
  methods: {
    create() {
      // Create handler
      this.isCreating = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/derived-variables";
@import "~bulma/sass/utilities/mixins";

.title-settings {
  color: #6c3d09;
  font-family: "Core Sans A 55";
  font-size: 24px;
  letter-spacing: 0.5px;
  line-height: 30px;
}

.create-button {
  border-radius: 5px;
  cursor: pointer;
  background-color: #6c3d09;
  color: #fef7e3;
  font-family: "Core Sans A 65";
  font-size: 20px;
  line-height: 28px;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  border: none;
  text-align: center;
  padding: 9px 16px;

  @include tablet {
    width: 190px;
  }

  &.clicked {
    opacity: .8;
  }
}

.bottom-text {
  color: #6c3d09;
  font-family: "Core Sans A 45";
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 60px;
}

.d-flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}

.h-100 {
  height: 100%;
}

.mb-55 {
  margin-bottom: 55px;
}
</style>
