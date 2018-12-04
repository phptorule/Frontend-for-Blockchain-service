<template>
  <div
    id="account-menu"
    class="is-inline-flex"
    :class="{'dark-menu': isDark}">

    <!-- @TODO: Fix the login link functionality -->
    <!-- <a
      @click="$emit('loginClick')"
      class="is-login">
      <b-icon pack="fas" icon="user" size="is-small" />
      <nuxt-link tag="span" to="/profile">{{$t('login')}}</nuxt-link>
    </a> -->

    <nuxt-link to="/profile/reserve" class="button is-reserve" v-html="$t('reserve')" />
  </div>
</template>

<script>
export default {
  name: 'AccountMenu',
  props: {
    isDark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">

  .is-login {
    color: #FCE9B9;
    line-height: 36px;
    display: flex;
    align-items: center;

    span {
      margin-right: 5px;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .button.is-reserve {
    border-radius: 50px;
    background: linear-gradient(to bottom, #7ED321, #589417);
    border: 0px solid #61A219;
    text-decoration: none;
    font-family: 'Core Sans A 55';
    font-weight: normal;
    color: #FEF7E3;
    width: 100px;
    margin-left: 10px;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 16px;
    padding: 5px 10px 5px 10px;
    line-height: 24px;
    height: 31px;
    max-width: 91px;
    letter-spacing: .3px;

    &:hover {
      text-decoration: underline;
    }
  }

  .dark-menu {
    .is-login {
      color: #6C3D09;
    }
  }
</style>
