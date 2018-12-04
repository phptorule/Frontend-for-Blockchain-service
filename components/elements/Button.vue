<template>
  <button
    class="button main-button"
    :class="color + ' ' + (isUpperCase ? 'is-uppercase' : '')"
    @click="onClick"
    type="button">
    {{title}}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['title', 'onClick', 'color', 'isUpperCase'],
};
</script>

<style scoped lang="scss">
.main-button {
  border-radius: 5px;
  background-color: #6c3d09;
  color: #fef7e3;
  font-family: "Core Sans A 65";
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  padding: 9px 16px;

  &.green {
    background-image: linear-gradient(to bottom, #7ED321, #589417);
    border: 0px solid #61A219;
    text-transform: uppercase;
  }
}


</style>
