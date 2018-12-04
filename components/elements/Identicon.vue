<template>
  <div v-html="identicon" />
</template>

<script>
import JazzIcon from 'jazzicon';

export default {
  name: 'identicon',
  props: ['address'],
  computed: {
    identicon() {
      const { address } = this;
      const data = new JazzIcon(100, this.jsNumberForAddress(address));
      return data.outerHTML;
    },
  },
  methods: {
    jsNumberForAddress(address) {
      const addr = address.slice(2, 10);
      const seed = parseInt(addr, 16);
      return seed;
    },
  },
};

</script>

<style lang="scss" scoped>
.identicon {
  border-radius: 50%;
}
</style>
