<template>
  <header class="hero">
    <div class="is-flex logo-holder">
      <nuxt-link to="/">
        <img src="@/assets/img_logo_small.png">
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SimpleHeader',
};
</script>

<style lang="scss" scoped>
header.hero {
  padding-left: 20px;
  padding-right: 20px;
  height: 88px;
  align-items: center;
  background-image: none;
  background-color: #FEF7E3;

  .logo-holder {
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
</style>
