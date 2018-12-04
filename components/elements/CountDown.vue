<template>
  <div class="countdown has-text-centered">
    <div class="digit">
      <span class="count">{{ days | twoDigits }}</span>
      <span class="item">{{ $t('countdown.days') }}</span>
    </div>
    <div class="digit">
      <span class="count">{{ hours | twoDigits }}</span>
      <span class="item">{{ $t('countdown.hours') }}</span>
    </div>
    <div class="digit">
      <span class="count">{{ minutes | twoDigits }}</span>
      <span class="item">{{ $t('countdown.minutes') }}</span>
    </div>
    <div class="digit">
      <span class="count">{{ seconds | twoDigits }}</span>
      <span class="item">{{ $t('countdown.seconds') }}</span>
    </div>
  </div>
</template>

<script>
let interval = null;

export default {
  name: 'vuejsCountDown',
  props: {
    deadline: {
      type: String,
    },
    end: {
      type: String,
    },
    stop: {
      type: Boolean,
    },
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      date: null,
      diff: 0,
    };
  },
  mounted() {
    if (!this.deadline && !this.end) {
      throw new Error("Missing props 'deadline' or 'end'");
    }

    const endTime = this.deadline ? this.deadline : this.end;
    this.date = Math.trunc(Date.parse(endTime.replace(/-/g, '/')) / 1000);
    this.diff = this.date - this.now;

    if (!this.date) {
      throw new Error("Invalid props value, correct the 'deadline' or 'end'");
    }

    interval = setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000);
    }, 1000);
  },
  computed: {
    seconds() {
      return Math.trunc(this.diff) % 60;
    },

    minutes() {
      return Math.trunc(this.diff / 60) % 60;
    },

    hours() {
      return Math.trunc(this.diff / 60 / 60) % 24;
    },

    days() {
      return Math.trunc(this.diff / 60 / 60 / 24);
    },
  },
  watch: {
    now() {
      this.diff = this.date - this.now;
      if (this.diff <= 0 || this.stop) {
        this.diff = 0;
        // Remove interval
        clearInterval(interval);
      }
    },
  },
  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return `0${value.toString()}`;
      }
      return value.toString();
    },
  },
  destroyed() {
    clearInterval(interval);
  },
};
</script>

<style scoped lang="scss">
  .countdown {
    width: 100%;
    height: 56px;
    display: block;
    color: #444444;
  }

  .digit {
    float: left;
    height: 56px;
    width: 25%;
    display: block;

    &:not(:first-child) {
      border-left: 1px solid #FCE9B9;
    }

    span {
      display: block;
    }

    .count {
      font-family: 'Core Sans A 55';
      font-size: 36px;
      height: 44px;
      line-height: 36px;
    }

    .item {
      font-family: 'Core Sans A 35';
      font-size: 10px;
      height: 13px;
      text-transform: uppercase;
    }
  }
</style>
