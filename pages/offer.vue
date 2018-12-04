<template>
  <div class="offer">
    <header class="hero">
      <public-header
        @mobileMenuClick="isMobileMenu = true"
        :isDark="true"/>

      <div class="dark-shadow"></div>

      <div class="container">
        <h3 class="title has-text-centered">
          <div>{{ $t('double_your_pieces') }}</div>
          <div>{{ $t('special_offer') }}</div>
        </h3>

        <p class="has-text-centered">{{ $t('buy_above_1000_pices') }}</p>

        <div class="content has-text-centered">
          <img
            class="bonus-bg"
            src="@/assets/bonus-bg.png"
            alt="bonus" />

          <h3>{{ $t('how_to_double_my_purchase') }}</h3>

          <div class="items">
            <div class="item">
              <div class="main">
                <div class="circle">1</div>
                {{ $t('reserve_at_least_1000_pieces') }}
              </div>

              <div class="secondary">
                {{ $t('the_pieces_must_be_purchased_during_the_reservation_sale') }}
              </div>
            </div>

            <div class="item">
              <div class="main">
                <div class="circle">2</div>
                {{ $t('wait_until_the_project_launch') }}
              </div>

              <div class="secondary">
                {{ $t('we_will_credit_your_bonus_once_the_reservation_sale_ends') }}
              </div>
            </div>

            <div class="item">
              <div class="main">
                <div class="circle">3</div>
                {{ $t('have_your_jerusalem_chain_pieces_doubled') }}
              </div>

              <div class="secondary">
                {{ $t('receive_a_bonus_equal_to_amout_of_pieces_you_have_reserved') }}
              </div>
            </div>
          </div>

          <p class="has-text-centered">
            {{ $t('buy_1000_or_more_pieces_and_get_double_the_pieces') }}
          </p>

          <button
            @click="$store.commit('toggleAuthModal')"
            class="button reserve-button is-uppercase">
            {{ $t('reserve') }}
          </button>
        </div>

        <div class="p-footer">
          <private-footer />
        </div>
      </div>
    </header>

    <public-mobile-menu
      @close="isMobileMenu = false"
      :isMobileMenu="isMobileMenu"
    />
  </div>
</template>

<script>
import PublicHeader from '~/components/elements/PublicHeader';
import PrivateFooter from '~/components/partial/PrivateFooter';
import PublicMobileMenu from '~/components/partial/PublicMobileMenu';

export default {
  name: 'Offer',
  components: {
    PublicHeader,
    PrivateFooter,
    PublicMobileMenu,
  },
  data: () => ({
    isMobileMenu: false,
  }),
};
</script>

<style lang="scss" scoped>
  @import '~bulma/sass/utilities/initial-variables';
  @import '~bulma/sass/utilities/derived-variables';
  @import '~bulma/sass/utilities/mixins';

  .offer {
    position: relative;
    margin-top: 77px;

    .hero {
      background-position: 50% 25%;
      background-size: cover;
      background-image: url('../assets/hero_bg.png');
      height: 450px;
      color: #FEF7E3;
      position: relative;

      @include mobile {
        height: 553px;
      }

      @include touch {
        background-image: url('../assets/hero_bg_touch.png');
      }

      @media screen and (min-width: 1024px) {
        background-image: url('../assets/hero_bg_desktop.png');
      }

      @include fullhd {
        background-image: url('../assets/hero_bg_fullhd.png');
      }
    }

    .dark-shadow {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(63, 36, 5, 0.5);

      @include mobile {
        background-color: rgba(63, 36, 5, 0.7);
      }

      @include tablet {
        background-image: url('../assets/strip_pattern.png');
        background-position: 50% 100%;
      }
    }

    .container {
      position: absolute;
      top: 90px;
      left: 50%;
      width: 100%;
      padding: .75rem;
      transform: translateX(-50%);

      @include mobile {
        top: 20px
      }

      .title {
        color: #FEF7E3;
        font-family: 'Cinzel';
        font-size: 40px;

        @include mobile {
          font-size: 24px;
        }

        & > div:first-child {
          font-weight: bold;
        }

        & > div:last-child {
          font-weight: 300;
        }
      }

      p {
        color: #D3A479;
        font-family: "Core Sans A 45";
        font-size: 22px;
        max-width: 777px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
        padding-top: 0;

        @include mobile {
          font-size: 18px;
          padding-left: 23px;
          padding-right: 23px;
          margin-bottom: 20px;
        }
      }

      .content {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 66px;
        padding-bottom: 28px;
        width: 620px;
        max-width: 100%;
        background-color: #ffffff;
        border-radius: 12px;
        box-shadow: 0 5px 40px 0 rgba(63, 36, 5, 0.15);
        color: #6C3D09;

        .bonus-bg {
          width: 620px;
          max-height: 280px;
          border-radius: 10px;
        }

        h3 {
          margin-bottom: 25px;
          color: #6C3D09;
        }

        .items {
          padding-left: 80px;
          padding-bottom: 45px;
          border-bottom: 1px solid #DFD0BF;
          box-shadow: 0 1px 0 0 rgba(255,255,255,0.5);
          margin-bottom: 20px;

          @include mobile {
            padding-left: 60px;
          }

          .item {
            text-align: left;

            &:not(:last-child) {
              margin-bottom: 25px;
            }

            .main {
              position: relative;
              font-family: 'Core Sans A 55';
              font-size: 20px;

              @include mobile {
                font-size: 16px;
              }

              .circle {
                position: absolute;
                top: 50%;
                left: -50px;
                transform: translateY(-50%);
                border-radius: 50%;
                background-color: #6C3D09;
                height: 42px;
                width: 42px;
                display: flex;
                justify-content: center;
                color: #FEF7E3;
                font-family: 'Cinzel';
                font-size: 30px;
                font-weight: bold;
                box-shadow: 0 5px 15px 0 rgba(108, 61, 9, .7);
              }
            }

            .secondary {
              color: #444444;
              opacity: 0.9;
              font-family: "Core Sans A 45";
              font-size: 16px;

              @include mobile {
                font-size: 14px;
              }
            }
          }
        }

        p {
          font-family: 'Core Sans A 45';
          font-size: 18px;
          color: #6C3D09;
        }

        .reserve-button {
          margin-left: auto;
          margin-right: auto;
          height: 50px;
          width: 190px;
          border-radius: 5px;
          background-color: #7ED321;
          border: none;
          background: linear-gradient(to bottom, #7DD120 0%, #589417 100%);
          box-shadow: inset 0 1px 3px 0 rgba(255,255,255,0.5);
          color: #FEF7E3;
          font-family: 'Core Sans A 65';
          font-size: 20px;
          text-shadow: 0 -1px 0 0 rgba(0,0,0,0.5);
        }
      }

      .p-footer {
        position: absolute;
        width: 100vw;
        left: calc((100% - 100vw) / 2);
      }
    }
  }
</style>
