<template>
  <div class="checkbox">
    <label class="check-container">
      <input :checked="data" @change="$emit('click')" type="checkbox">
      <span class="checkmark"></span>
      <div class="text">
        {{ text }}
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    text: {
      type: String,
      default: '',
    },
    data: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
  .checkbox {
    max-height: 30px;
    font-family: 'Core Sans A 35';
    color: #444444;

    .check-container {
      display: block;
      position: relative;
      padding-left: 50px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 18px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 30px;
        width: 30px;
        border-radius: 4px;
        border: 1px solid #6C3D09;
        background-color: #FFFFFF;
        box-shadow: inset 0 3px 5px 0 rgba(28,15,3,0.12);
      }

      .text {
        transform: translateY(20%);
      }

      input {
        position: absolute;
        opacity: 0;
        left: 0;
        top: 0;
        cursor: pointer;

        &:hover ~ .checkmark {
          background-color: rgba(108,61,9, .2);
        }

        &:checked ~ .checkmark {
          background-color: #6C3D09;
          background-image: url('../../assets/checkmark.png');
          background-position: center center;
          background-size: 20px 20px;
          background-repeat: no-repeat;
        }
      }
    }
  }
</style>
