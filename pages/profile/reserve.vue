<template>
  <div class="container">
    <div class="columns mb-35">
      <div class="column is-6">
        <div class="is-flex align-items-center h-100">
          <img class="image" src="../../assets/jerusalem_text_box_mobile.png" alt="logo" />

          <div>
            <div class="desc" v-t="'description'" />

            <div class="desc-title">{{ $t('jerusalem_chain_plot') }}</div>

            <div class="price-block box-shadow bottom-shadow is-hidden-tablet">
              <div>{{ $t('price') }} - {{(currentPrice).toFixed(2)}} eth</div>
              <div class="is-uppercase">{{ $t('you_save') }} {{currentBonus}}%</div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-6 is-hidden-mobile">
        <div class="is-flex align-items-center justify-content-end h-100">
          <div class="price-block bottom-shadow">
            <div>{{ $t('price') }} - {{(currentPrice).toFixed(2)}} eth</div>
            <div class="is-uppercase">{{ $t('you_save') }} {{currentBonus}}%</div>
          </div>
        </div>
      </div>
    </div>

    <template v-if="!isReserveCompleted">
      <div class="divider"></div>
      <div class="text-bottom" v-html="$t('choose_how_many_plots_to_reserve')"></div>

      <div class="plots-holder">
        <PlotsBlock :active="activePlot === 1" :id="1" :disabled="isReserveClicked" :count="1" :onClick="togglePlots" />
        <PlotsBlock :active="activePlot === 2" :id="2" :disabled="isReserveClicked" :count="50" :onClick="togglePlots" />
        <PlotsBlock :active="activePlot === 3" :id="3" :disabled="isReserveClicked" :count="100" :onClick="togglePlots" />
        <PlotsBlock :active="activePlot === 4" :id="4" :disabled="isReserveClicked" :count="500" :onClick="togglePlots" />
        <PlotsBlock :active="activePlot === 5" :id="5" :disabled="isReserveClicked" :count="1000" :onClick="togglePlots" />
        <Counter :active="activePlot === 6" :id="6" :disabled="isReserveClicked" :setNum="setPlots" :onClick="togglePlots" />
      </div>

      <div class="divider"></div>

      <div class="total is-uppercase" v-html="$t('total')"></div>

      <div class="columns justify-content-center">
        <div class="column is-8">
          <div class="wrap-total box-shadow">
            <div class="is-flex justify-content-between total-item">
              <div>{{ $t('plots') }}</div>

              <div>{{plots}}</div>
            </div>

            <div class="divider"></div>

            <div class="is-flex justify-content-between total-item">
              <div>{{ $t('price') }}</div>
              <div>{{ (plots * currentPrice).toFixed(2) }} ETH</div>
            </div>

            <div class="divider"></div>

            <div class="is-flex justify-content-between total-sum">
              <div class="is-uppercase">{{ $t('total') }}:</div>
              <div>{{ (plots * currentPrice).toFixed(2) }} ETH</div>
            </div>

            <div class="divider"></div>

            <div class="has-text-centered">
              <Button
                 v-if="!isReserveClicked"
                 :title="$t('reserve')"
                 :color="'green'"
                 class="reserve-button"
                 :onClick="reserve" />
                <span v-else>
                  Switching to {{ walletName }} to complete the reservation.
                </span>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="total is-uppercase" v-html="$t('thank_you')"></div>
      <div class="thanks-box box has-text-centered">
        <p v-html="$t('thank_you_for_purchasing_plots')"></p>
        <p v-html="$t('we_will_get_in_touch_with_you')"></p>
        <nuxt-link to="/profile" class="button account-button" tag="button" v-html="$t('my_plots')" />
      </div>
    </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import PlotsBlock from '~/components/elements/PlotsBlock';
import Counter from '~/components/elements/Counter';
import Button from '~/components/elements/Button';

export default {
  name: 'Reserve',
  layout: 'profile',
  components: {
    PlotsBlock,
    Counter,
    Button,
  },
  data() {
    return {
      activePlot: 1,
      plots: 1,
      isReserveClicked: false,
      isReserveCompleted: false,
    };
  },
  computed: {
    ...mapState({
      walletName: state => state.wallet.name,
    }),
    ...mapGetters({
      currentBonus: 'crowdsale/bonus',
      currentPrice: 'crowdsale/price',
    }),
  },
  methods: {
    togglePlots(id, count) {
      if (this.isReserveClicked) return;
      this.activePlot = id;
      this.setPlots(count);
    },
    setPlots(num) {
      this.plots = num;
    },
    reserve() {
      if (this.isReserveClicked) return;

      this.isReserveClicked = true;
      this.$store.dispatch('crowdsale/buyTokens', this.plots * this.currentPrice).then(() => {
        this.isReserveCompleted = true;
      }).catch(err => {
        this.isReserveClicked = false;
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/derived-variables";
@import "~bulma/sass/utilities/mixins";

.justify-content-center {
  justify-content: center;
}

.justify-content-end {
  justify-content: flex-end;
}

.container {
  max-width: 940px;
}

.justify-content-between {
  justify-content: space-between;
}

.h-100 {
  height: 100%;
}

.box-shadow {
  box-shadow: 0px 3px 20px 1px rgba(108, 61, 9, 0.1);
}

.divider {
  border-bottom: 1px solid #dfd0bf;

  &:nth-child(6) {
    margin-bottom: 42px;
  }
}

.mb-35 {
  margin-bottom: 35px;
}

.reserve-button {
  width: 260px;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.5);
}

.plots-holder {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 40px;

  & > div {
    margin-bottom: 10px;
    flex: 0 0 49%;

    @include tablet {
      flex-basis: 130px;
    }

    &:first-child {
      flex-basis: 100%;

      @include tablet {
        flex-basis: 130px;
      }
    }

    &:last-child {
      flex-basis: 100%;

      @include tablet {
        flex-basis: 240px;
      }
    }
  }
}

.image {
  width: 149px;
  margin-right: 30px;

  @include mobile {
    margin-right: 10px;
    margin-left: -50px;
  }
}

.desc {
  color: #444444;
  font-family: "Core Sans A 35";
  font-size: 14px;
}

.price-block {
  border-radius: 10px;
  background: linear-gradient(0deg, #fce9b9 0%, #ffffff 100%);
  padding: 10px 25px;
  height: 85px;

  @include mobile {
    padding: 2px 5px;
    height: 51px;
    width: 168px;
    margin-top: 10px;
  }

  div:first-child {
    color: #6c3d09;
    font-family: Cinzel;
    font-size: 28px;
    font-weight: bold;
    text-align: center;

    @include mobile {
      font-size: 16.8px;
    }
  }

  div:last-child {
    color: #6c3d09;
    font-family: "Core Sans A 55";
    font-size: 14px;
    letter-spacing: 0.5px;
    text-align: center;

    @include mobile {
      font-size: 12px;
    }
  }
}

.desc-title {
  color: #6c3d09;
  font-family: "Core Sans A 55";
  font-size: 24px;
  letter-spacing: 0.5px;

  @include mobile {
    font-size: 20px;
  }
}

.text-bottom {
  color: #6c3d09;
  font-family: "Core Sans A 45";
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;

  @include mobile {
    padding: 0 30px;
  }
}

.total {
  color: #6c3d09;
  font-family: Cinzel;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 40px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}

.wrap-total {
  border-radius: 10px;
  background: #fff;
  padding-bottom: 30px;
  margin-bottom: 70px;
}

.total-item {
  padding: 25px 30px;
  color: #444444;
  font-family: "Core Sans A 45";
  font-size: 18px;
  line-height: 22px;
}

.total-sum {
  padding: 25px 30px;
  color: #a05b0e;
  font-family: "Core Sans A 65";
  font-size: 20px;
  line-height: 25px;
  background-color: #fffcf4;
}

.thanks-box {
  max-width: 100%;
  width: 620px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  border: none;
  color: #444444;
  border-radius: 10px;
  padding: 23px 33px;
  box-shadow: 0 10px 30px 0 rgba(108, 61, 9, 0.3);

  @include mobile {
    padding: 10px 10px 30px 10px;
  }

  p:first-child {
    font-size: 24px;
    font-family: "Core Sans A 45";
    line-height: 36px;
  }

  p:nth-child(2) {
    font-size: 18px;
    padding-top: 20px;
    font-family: "Core Sans A 55";
  }

  button {
    background-color: #6c3d09;
    text-transform: uppercase;
    color: #fef7e3;
    width: 190px;
    border: none;
    height: 50px;
    font-size: 20px;
    margin-top: 28px;
    font-family: "Core Sans A 65";
    letter-spacing: 0.4px;
    border-radius: 5px;
    box-shadow: inset 0 1px 3px 0 rgba(255, 255, 255, 0.5);
  }
}
</style>
