<template>
  <div class="wrap-checkbox" @click="toggleCheckbox">
    <div class="custom-checkbox">
      <div v-show="value === true">
        <i class="fas fa-check"></i>
      </div>
    </div>
    <label class="label-checkbox">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: ['label', 'value'],

  methods: {
    toggleCheckbox() {
      this.$emit('input', !this.value);
    },
  },
};
</script>

<style scoped>
  .wrap-checkbox {
    display: flex;
    padding: 0.75rem 0;
  }

  .fa-check {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .custom-checkbox {
    height: 30px;
    width: 30px;
    border: 1px solid #DFD0BF;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: inset 0 3px 5px 0 rgba(28,15,3,0.12);
    margin-right: 13px;
    cursor: pointer;
    position: relative;
  }

  .label-checkbox {
    height: 28px;
    color: #6C3D09;
    font-family: "Core Sans A 35";
    font-size: 18px;
    line-height: 28px;
  }
</style>
