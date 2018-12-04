<template>
  <a
    role="button"
    class="navbar-burger"
    aria-label="menu"
    aria-expanded="false"
    @click="$emit('click')">
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
</template>

<script>
export default {
  name: 'BurgerButton',
};
</script>

<style lang="scss" scoped>
.navbar-burger {
  margin-left: 0;
  margin-top: 10px;
  color: #6C3D09;
  width: 27px;
  height: 27px;

  span {
    height: 4px;
    width: 26px;
    border-radius: 10px;
    left: 0;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      width: 20px;
      top: 10px;
    }

    &:nth-child(3) {
      top: 20px;
    }
  }
}
</style>
