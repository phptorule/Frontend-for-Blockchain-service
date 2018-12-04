<template>
  <div
    :class="{'light-bg': isLight}"
    class="meter">
    <span :style="`width: ${value}%`"></span>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    isLight: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Number,
      default: 35,
    },
  },
};
</script>

<style scoped lang="scss">
.meter {
  height: 8px;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #F6EFE1;
  border-radius: 25px;

  & > span {
    display: block;
    height: 100%;
    border-radius: 20px;
    background-image: linear-gradient(#c1966f, #b18a65);
    position: relative;
    overflow: hidden;
  }

  &.light-bg > span {
    background: linear-gradient(125.66deg, #DC8744 0%, #FCD561 100%);
  }
}
</style>
