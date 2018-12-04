<template>
  <div class="wrap" v-show="active">
    <nuxt-link class="menu-item" to="/#about-section" v-html="$t('about')" />
    <nuxt-link class="menu-item" to="/#footer" v-html="$t('contact')" />
    <nuxt-link class="menu-item" to="/#faq" v-html="$t('faq')" />
    <nuxt-link class="menu-item" to="/#map-section" v-html="$t('how_it_works')" />
  </div>
</template>

<script>
export default {
  name: 'ProfileMenu',
  props: ['active'],
};
</script>

<style scoped lang="scss">
.wrap {
  position: absolute;
  border-radius: 10px;
  background-color: #fffefb;
  box-shadow: 0 0 35px 0 rgba(160, 91, 14, 0.15);
  right: 5px;
  padding: 6px 0 23px 0;
  width: 160px;
  height: 159px;
  margin-top: 10px;
  z-index: 2;
}

.wrap:before {
  content: "";
  border: solid #fffefb;
  background: #fff;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 4px;
  position: absolute;
  top: -5px;
  right: 16px;
  -ms-transform: rotate(-135deg);
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.divider {
  border-bottom: 1px solid #dfd0bf;
  padding-top: 18px;
}

.menu-item {
  color: #6c3d09;
  display: block;
  font-family: "Core Sans A 55";
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;
  padding: 8px 25px;
}

.log-out {
  color: #a05b0e;
  font-family: "Core Sans A 45";
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;
  padding-top: 23px;
}

.log-out div {
  display: inline-block;
  vertical-align: middle;
}

.log-out div:first-child {
  margin-right: 8px;
}

.log-out div:last-child {
  padding-bottom: 4px;
}
</style>
