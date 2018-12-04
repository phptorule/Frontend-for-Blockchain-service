<template>
  <div>
    Injected: {{ injected }}<br />
    Address: {{ address }}<br />
    Connected: {{ connected }}<br />
    Network ID: {{ networkId }}<br />
    Wallet name: {{ walletName }}<br />
    <br />
    Final price: {{ finalPrice }}<br />
    Current price: {{ price }}<br />
    Current bonus: {{ bonus }}<br />
    <br />
    Eth balance: {{ balance }}<br />
    Token balance: {{ tokenBalance }}<br />

    <button @click="openPortis">Open Portis</button>
    <button @click="buyTokens">Buy tokens</button>
    <button @click="sign">Sign message</button>
    <button @click="getBalance">Get Token Balance</button>
    <button @click="getEther">Get Ether Balance</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Web3',
  computed: {
    ...mapState({
      injected: state => state.wallet.injected,
      address: state => state.wallet.address,
      connected: state => state.wallet.connected,
      networkId: state => state.wallet.networkId,
      balance: state => state.wallet.balance,
      walletName: state => state.wallet.name,
      finalPrice: state => state.crowdsale.finalPrice,
      tokenBalance: state => state.token.balance,
    }),
    ...mapGetters({
      price: 'crowdsale/price',
      bonus: 'crowdsale/bonus',
    }),
  },
  methods: {
    openPortis() {
      this.$store.dispatch('wallet/openPortis');
    },
    buyTokens() {
      this.$store.dispatch('crowdsale/buyTokens', 1);
    },
    sign() {
      this.$store.dispatch('wallet/sign', 'Hello world')
        .then(signature => console.log(signature))
        .catch(err => console.error(err));
    },
    getBalance() {
      this.$store.dispatch('token/getBalance');
    },
    getEther() {
      this.$store.dispatch('wallet/getBalance');
    },
  },
};
</script>
