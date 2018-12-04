<template>
  <input
    class="input custom-input"
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
    :disabled="isReadOnly"
    :placeholder="$t(placeholder)" />
</template>

<script>
export default {
  name: 'Input',
  props: {
    isReadOnly: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: 'text_input',
    },
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
  .custom-input {
    color: #444444;
    height: 50px;
    border: 1px solid #DFD0BF;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: inset 0 3px 5px 0 rgba(28,15,3,0.12), 0 1px 0 0 #DFD0BF;
    font-family: "Core Sans A 35";
  }

  .custom-input::placeholder {
    color: #444444;
  }
</style>
