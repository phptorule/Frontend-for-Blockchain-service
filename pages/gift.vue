<template>
  <div class="gift">
    <header class="hero">
      <public-header
        @mobileMenuClick="isMobileMenu = true"
        :isDark="true"/>

      <div class="dark-shadow"></div>

      <div class="container has-text-centered">
        <h3 class="title">
          <div>{{ $t('jerusalem_chain') }}</div>
          <div>Special offer for "Awake Jerusalem 2018" Guests</div>
        </h3>

        <p>Join our early community of owners of the Jerusalem Chain.</p>

      </div>
    </header>

    <div class="light-modal">
      <div class="content">
        <div class="modal-body" v-if="!formSubmitted">
          <form @submit.prevent="submit">
            <input
               type="text"
               placeholder="First Name"
               name="firstName"
               v-validate="'required'"
               v-model="form.firstName" />
            <div class="errors">{{ errors.first('firstName') }}</div>

            <input
               type="text"
               placeholder="Last Name"
               v-validate="'required'"
               name="lastName"
               v-model="form.lastName" />
            <div class="errors">{{ errors.first('lastName') }}</div>

            <input
               type="email"
               placeholder="email"
               v-validate="'required|email'"
               name="email"
               v-model="form.email" />
            <div class="errors">{{ errors.first('email') }}</div>


            <input
               type="text"
               placeholder="Community"
               v-model="form.community" />

            <checkbox
               text="I agree to be contacted about this exclusive offer"
               :data="form.terms"
               @click="form.terms = !form.terms" />
            <div class="errors">{{ termsMessage }}</div>

            <button type="submit" :disabled="formSubmitting ? true : false" class="button is-shadowed create-acc">
              {{ formSubmitting ? 'Signing up...' : 'Sign Up' }}
            </button>
          </form>
        </div>

        <div class="modal-body" v-if="formSubmitted">
          <h1>Thank you!</h1>
          <h2>We'll be in contact with you soon.</h2>
        </div>
      </div>
    </div>

    <footer>
      <div class="p-footer">
        <private-footer />
      </div>
    </footer>

    <public-mobile-menu
      @close="isMobileMenu = false"
      :isMobileMenu="isMobileMenu" />
  </div>
</template>

<script>
import Checkbox from '~/components/inputs/Checkbox';
import PublicHeader from '~/components/elements/PublicHeader';
import PrivateFooter from '~/components/partial/PrivateFooter';
import PublicMobileMenu from '~/components/partial/PublicMobileMenu';

export default {
  name: 'Gift',
  components: {
    PublicHeader,
    PrivateFooter,
    PublicMobileMenu,
    Checkbox,
  },
  data: () => ({
    isMobileMenu: false,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      community: '',
      terms: false,
    },
    termsMessage: null,
    formSubmitting: false,
    formSubmitted: false,
  }),
  watch: {
    'form.terms': function watchTerms(newVal) {
      if (newVal) {
        this.termsMessage = null;
      }
    },
  },
  methods: {
    submit() {
      this.$validator.validate().then(result => {
        if (this.form.terms === false) {
          this.termsMessage = 'You must agree to the terms';
          return false;
        }

        if (!result) {
          return false;
        }

        console.log('Form validated');
        this.formSubmitting = true;
        this.$store.dispatch('mautic/submit', {
          formId: 7,
          first_name: this.form.firstName,
          last_name: this.form.lastName,
          email: this.form.email,
          community: this.form.community,
        }).then(() => {
          this.formSubmitted = true;
        });

        return true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~bulma/sass/utilities/initial-variables';
  @import '~bulma/sass/utilities/derived-variables';
  @import '~bulma/sass/utilities/mixins';

  #app .gift {
    margin-top: 77px;

    .hero {
      background-position: bottom;
      background-size: cover;
      background-image: url('../assets/hero_bg.png');
      height: 260px;
      color: #FEF7E3;
      position: relative;

      @include mobile {
        height: 210px;
        background-position: 50% 485px;
      }

      @include touch {
        background-image: url('../assets/hero_bg_touch.jpg');
      }

      @media screen and (min-width: 1024px) {
        background-image: url('../assets/hero_bg_desktop.jpg');
      }

      @include fullhd {
        background-image: url('../assets/hero_bg_fullhd.jpg');
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
        background-image: url('../assets/strip_pattern_gray.png');
      }
    }

    .content {
      margin: 0 auto;

      .modal-body {
        .errors {
          color: #ce0000;
        }

        input:last-of-type {
          margin-bottom: 0;
        }

        .checkbox {
          margin-top: 25px;
        }

        button {
          margin: 23px 0;
        }
      }
    }


    .container {
      position: absolute;
      top: 50px;
      left: 50%;
      width: 100%;
      transform: translateX(-50%);

      @include mobile {
        padding: .75rem;
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
          font-weight: 300;
        }

        & > div:last-child {
          font-weight: bold;
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


      .p-footer {
        position: absolute;
        width: 100vw;
        left: calc((100% - 100vw) / 2);
      }
    }
  }
</style>
