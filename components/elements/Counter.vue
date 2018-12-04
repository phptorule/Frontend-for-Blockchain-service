<template>
  <div class="wrap" :class="{'active': active}" @click="onClick(id, num)">
    <span v-show="!active">{{ $t('custom_amount') }}</span>

    <div v-show="active" class="d-flex justify-content-between">
      <div v-show="!disabled" class="buttons-group" @click="decrement">
        <div><i class="fas fa-minus"></i></div>
      </div>

      <input
        class="input"
        min="1"
        type="number"
        v-model="num"
        :disabled="disabled"
        @input="handleChange" />

      <div v-show="!disabled" class="buttons-group" @click="increment">
        <div><i class="fas fa-plus"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: ['active', 'disabled', 'count', 'onClick', 'setNum', 'id'],
  data() {
    return {
      num: 0,
    };
  },
  watch: {
    num() {
      this.num = this.num < 0 ? 0 : this.num;
      this.handleChange();
    },
  },
  methods: {
    decrement() {
      if (this.disabled) return;

      if (this.num > 0) {
        this.num *= 1;
        this.num -= 1;
      }
    },
    increment() {
      if (this.disabled) return;

      this.num *= 1;
      this.num += 1;
    },
    handleChange() {
      this.setNum(this.num * 1);
    },
  },
};
</script>

<style scoped lang="scss">
.wrap {
  border: 1px solid #a05b0e;
  border-radius: 5px;
  background-color: #ffffff;
  font-family: "Core Sans A 45";
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  padding: 15px 5px;
  cursor: pointer;
  width: 240px;
  overflow: hidden;
}

.wrap span {
  color: #a05b0e;
}

.d-flex {
  display: flex;
}

.justify-content-between {
  justify-content: space-between;
}

.input {
  border: none;
  height: 51px;
  text-align: center;
  color: #A05B0E;
  font-family: 'Core Sans A 45';

  &[type=number]::-webkit-inner-spin-button,
  &[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
}

.buttons-group {
  position: relative;
  background-color: #a05b0e;
  color: #fff;
  width: 94px;
}

.buttons-group div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.wrap.active {
  padding: 0;
}
</style>
