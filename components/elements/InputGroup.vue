<template>
  <div class="wrap">
    <input
      class="input custom-input"
      v-model="field"
      type="text"
      :disabled="isDisabled"
      :placeholder="$t('text_input')" />

    <button
      type="button"
      @click="onClick(field)"
      class="button button-group">
      {{ $t('copy') }}!
    </button>
  </div>
</template>

<script>
export default {
  name: 'InputGroup',
  props: ['onClick', 'value', 'isDisabled'],
  data() {
    return {
      field: '',
    };
  },
  created() {
    if (this.value) {
      this.field = this.value;
    }
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  align-items: stretch;
  max-width: 460px;
}

.button-group {
  background-color: #A05B0E;
  font-family: "Core Sans A 65";
  color: #ffffff;
  line-height: 28px;
  width: 75px;
  font-size: 16px;
  text-transform: uppercase;
  padding: 11px 13px;
  height: 100%;
  border-color: #A05B0E;
  border-bottom: none;
  border-radius: 0px 4px 4px 0px;
}

.custom-input {
  height: 50px;
  border: 1px solid #dfd0bf;
  border-radius: 4px 0px 0px 4px;
  background-color: #ffffff;
  box-shadow: inset 0 3px 5px 0 rgba(28, 15, 3, 0.12), 0 1px 0 0 #dfd0bf;
  font-family: "Core Sans A 35";
  border-bottom: none;
}
</style>
