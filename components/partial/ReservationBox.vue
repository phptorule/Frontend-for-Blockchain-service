<template>
  <div class="notification has-text-centered">
    <span class="header">{{ $t('reservation_sale') }}</span>

    <div class="bookmark">
      <div class="left-mark"></div>
      <div class="right-mark"></div>
      <div class="left-shadow"></div>
      <div class="right-shadow"></div>
      {{ $t('only') }} 166,667 {{ $t('plots_available') }}!
    </div>

    <span class="price is-uppercase">
      <strong>{{ $t('bonus', { bonus: bonus }) }}</strong>
      {{ $t('for') }} {{ price }} ETH
    </span>

    <div>
      {{ $t('bonus_ends_in') }}
    </div>

    <CountDown :deadline="endDate" />

    <nuxt-link to="/profile/reserve" class="button is-reserve is-uppercase" tag="button" v-html="$t('reserve')" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import moment from 'moment';
import ProgressBar from '../elements/ProgressBar';
import CountDown from '../elements/CountDown';

export default {
  name: 'ReservationBox',
  components: {
    ProgressBar,
    CountDown,
  },
  computed: {
    ...mapState({
      endDate: state => state.crowdsale.endDate,
    }),
    ...mapGetters({
      bonus: 'crowdsale/bonus',
      price: 'crowdsale/price',
    }),
  },
};
</script>

<style scoped lang="scss">
  @import '~bulma/sass/utilities/initial-variables';
  @import '~bulma/sass/utilities/derived-variables';
  @import '~bulma/sass/utilities/mixins';

  .notification {
    min-height: 241px;
    max-height: 253px;
    position: relative;
    opacity: .99;
    box-shadow: 0px 10px 25px 0px rgba(108,61,9,0.5);
    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(252,233,185,1) 100%);
    border-radius: 10px;
    padding: 5px 20px 20px 20px;
    color: #6C3D09;

    @include mobile {
      margin: 0 auto;
      transform: translateY(9%);
    }

    .header {
      display: block;
      font-size: 1.6em;
      font-family: 'Cinzel';
      font-weight: bold;
    }

    .bookmark {
      width: calc(100% + 50px);
      background-color: #A05B0E;
      font-family: 'Core Sans A 55';
      margin-left: -25px;
      position: relative;
      color: #FEF7E3;
      font-size: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 27px;
      background: linear-gradient(90deg, #A05B0E 0%, #BB8418 47.52%, #D4A612 100%);

      & > div {
        position: absolute;
      }

      .left-mark {
        left: 0;
        top: 5px;
        transform: translateX(calc(-100% + 5px));
        z-index: -1;
        border-top: 13.5px solid #914B0E;
        border-bottom: 13.5px solid #914B0E;
        border-right: 7.5px solid #914B0E;
        border-left: 7.5px solid transparent;
      }

      .right-mark {
        z-index: -1;
        top: 5px;
        right: 0;
        transform: translateX(calc(100% - 5px));
        border-top: 13.5px solid #C08B17;
        border-bottom: 13.5px solid #C08B17;
        border-right: 7.5px solid transparent;
        border-left: 7.5px solid #C08B17;
      }

      .left-shadow {
        bottom: 0;
        left: 1px;
        border-top: 3.5px solid transparent;
        border-bottom: 3.5px solid transparent;
        border-right: 3.5px solid #432300;
        border-left: 3.5px solid transparent;
        transform: rotate(135deg) translate(33%, -42%);
        transform-origin: center center;
      }

      .right-shadow {
        bottom: 0;
        right: 1px;
        border-top: 3.5px solid transparent;
        border-bottom: 3.5px solid transparent;
        border-right: 3.5px solid transparent;
        border-left: 3.5px solid #432300;
        transform: rotate(-135deg) translate(-33%, -42%);
        transform-origin: center center;
      }
    }

    .price {
      color: #6C3D09;
      font-size: 14px;
      margin: 0;

      strong {
        font-weight: 400;
        font-family: 'Core Sans A 55';
      }

      & + div {
        color: #444444;
        font-size: 12px;
        margin-top: 16px;
        text-transform: uppercase;
        font-family: 'Core Sans A 45';
      }
    }

    button.is-reserve {
      margin-top: 9px;
      height: 42px;
      font-size: 20px;
    }
  }
</style>
