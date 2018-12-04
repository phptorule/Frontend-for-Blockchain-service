<template>
  <div
    class="wrap"
    :class="{'active': active, 'disabled': disabled}"
    @click="onClick(id, count)">
    {{ `${count} ${$t('plot')}${count > 1 ? 's' : ''}` }}
  </div>
</template>

<script>
export default {
  name: 'PlotsBlock',
  props: ['active', 'count', 'onClick', 'id', 'disabled'],
};
</script>

<style scoped lang="scss">
.wrap {
  border: 1px solid #a05b0e;
  border-radius: 5px;
  background-color: #ffffff;
  color: #a05b0e;
  font-family: "Core Sans A 45";
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  padding: 15px 5px;
  cursor: pointer;
  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */

  &.active {
    background-color: #a05b0e;
    color: #fef7e3;
  }
}
</style>
