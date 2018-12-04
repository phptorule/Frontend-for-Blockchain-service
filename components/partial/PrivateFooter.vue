<template>
  <section id="footer">
    <div class="container">
      <div class="footer-links">
        <div class="social-links has-text-centered">
          <a
            target="_blank"
            href="javascript:;"
          >
            <i class="fas fa-at"></i>
          </a>

          <a
            target="_blank"
            href="https://www.facebook.com/Jerusalem-Chain-1197716167034111/"
          >
            <i class="fab fa-facebook-square"></i>
          </a>

          <a
            target="_blank"
            href="https://twitter.com/jerusalemchain"
          >
            <i class="fab fa-twitter"></i>
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/jerusalemchain/"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            target="_blank"
            href="http://t.me/jerusalemchain"
          >
            <i class="fab fa-telegram-plane"></i>
          </a>
        </div>

        <div class="links has-text-centered">
          <nuxt-link to="/#about-section" v-html="$t('about')" />
          <nuxt-link to="/terms" v-html="$t('terms')" />
          <nuxt-link to="/privacy" v-html="$t('privacy_policy')" />

          <br class="is-hidden-tablet">

          <nuxt-link to="/#map-section" v-html="$t('how_it_works')" />
        </div>

        <h5 class="has-text-centered">&copy; {{ $t('footer_copyright') }}</h5>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PrivateFooter',
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/derived-variables";
@import "~bulma/sass/utilities/mixins";

#footer {
    background: url('../../assets/hero_bg.png') no-repeat top center;
    padding: 20px 10px;
    position: relative;
    background-position: center 87%;

    @include touch {
      background-image: url('../../assets/hero_bg_touch.jpg');
    }

    @media screen and (min-width: 1024px) {
      background-image: url('../../assets/hero_bg_desktop.jpg');
    }

    @include widescreen {
      background-image: url('../../assets/hero_bg_widescreen.jpg');
    }

    @include fullhd {
      background-image: url('../../assets/hero_bg_fullhd.jpg');
    }

    a {
      color: #FEF7E3;
    }

    .footer-links {
      position: relative;

      .links {
        margin-top: 65px;

        @include tablet {
          margin-top: 0;
        }

        a {
          font-size: 14px;
          font-family: 'Core Sans A 55';
          margin-right: 15px;
          margin-left: 15px;
          text-transform: uppercase;
        }
      }

      .social-links {
        font-size: 32px;

        @include tablet {
          margin-top: 0;
          position: absolute;
          right: 15px;
          top: 0;
          font-size: 16px;
        }

        @include desktop {
          right: 0;
        }

        a {
          margin-right: 10px;
          margin-left: 10px;

          @include tablet {
            margin-right: 5px;
            margin-left: 5px;
          }

          &:first-child() {
            margin-left: 0;
          }

          &:last-child() {
            margin-right: 0;
          }
        }
      }

      h5 {
        color: #FFFFFF;
        opacity: .5;
        font-family: 'Core Sans A 35';
        font-size: 14px;
        margin-top: 20px;
      }
    }
  }
</style>
