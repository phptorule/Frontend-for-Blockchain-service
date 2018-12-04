<template>
  <div>
    <profile-header />

    <div
      v-if="currentRoute"
      :class="'after-header ' + currentRoute"
    >

      <div class="title-wrap">
        <div class="profile-title">
        {{ afterHeader.title }}
        </div>
        <div
          class="profile-name"
          :class="{'d-none': currentRoute === 'Reserve'}"
          v-html="$store.state.profile.nickname"
        />
      </div>

      <div
        class="avatar-wrap"
        :class="{'d-none': currentRoute === 'Reserve'}"
      >
        <ProfileAvatar />
      </div>
    </div>

    <div
      :class="{'mobile-padding': currentRoute === 'Reserve'}"
      class="wrap-profile-content">
      <nuxt/>
    </div>

    <private-footer />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import ProfileHeader from '~/components/partial/ProfileHeader';
import ProfileAvatar from '~/components/partial/ProfileAvatar';
import PrivateFooter from '~/components/partial/PrivateFooter';

export default {
  name: 'Profile',
  middleware: ['authenticated'],
  components: {
    PrivateFooter,
    ProfileAvatar,
    ProfileHeader,
  },
  data() {
    return {
      currentRoute: '',
      afterHeader: {},
    };
  },
  mounted() {
    this.currentRoute = this.getRouteName(this.$route.path);
    this.afterHeader = this.getTitle(this.currentRoute);
  },
  watch: {
    $route(to) {
      this.currentRoute = this.getRouteName(to.path);
      this.afterHeader = this.getTitle(this.currentRoute);
    },
    authenticated() {
      this.$store.commit('openAuthModal');
      this.$router.push('/');
    },
  },
  computed: {
    ...mapState([
      'profile',
    ]),
    ...mapGetters({
      authenticated: 'profile/authenticated',
    }),
  },
  methods: {
    reserve() {
      // Reserve handler
    },

    getRouteName(path) {
      switch (path) {
        case '/profile/settings':
          return 'Settings';
        case '/profile/create':
          return 'Create';
        case '/profile/reserve':
          return 'Reserve';
        default:
          return 'Profile';
      }
    },

    getTitle(route) {
      const name = '';
      switch (route) {
        case 'Settings':
          return {
            title: this.$t('account_settings'),
            name,
            class: true,
          };
        case 'Create':
          return {
            title: this.$t('create'),
            name: this.$t('an_account'),
            class: true,
          };
        case 'Reserve':
          return {
            title: this.$t('reserve_plots'),
            name: '',
            class: false,
          };
        default:
          return {
            title: this.$t('my_plots'),
            name,
            class: false,
          };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/derived-variables";
@import "~bulma/sass/utilities/mixins";

.my-plots {
  color: #6c3d09;
  font-family: "Core Sans A 55";
  font-size: 16px;
  line-height: 19px;
  margin-right: 26px;
  cursor: pointer;
}

.wrap-profile-content {
  padding-top: 160px;
  padding-right: 15px;
  padding-left: 15px;

  @include tablet {
    background-image: url("../assets/strip_pattern.png");
  }
}

.avatar-wrap {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  bottom: 0;
}

.after-header {
  background-image: url("../assets/hero_bg.png");
  min-height: 250px;
  background-repeat: no-repeat;
  background-size: 220% 200%;
  background-position: 50% 45%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.35);
  }

  @include tablet {
    background-size: 100% 350%;
    background-position: 50% 31%;
  }

  .title-wrap {
    transform: translateY(50%);
  }

  &.Reserve {
    min-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 220% 600%;
    background-position: 50% 35%;

    .title-wrap {
      transform: translateY(0);
    }
  }
}

.profile-title {
  color: #fef7e3;
  font-family: Cinzel;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  text-align: center;

  @include tablet {
    font-size: 40px;
    line-height: 46px;
  }
}

.profile-name {
  color: #fef7e3;
  font-family: Cinzel;
  font-size: 28px;
  line-height: 32px;
  text-align: center;
  font-weight: bold;

  @include tablet {
    font-size: 40px;
    line-height: 46px;
  }
}

.d-none {
  display: none;
}

.align-items-center {
  align-items: center;
}

.justify-content-center {
  justify-content: center;
}

.justify-content-end {
  justify-content: flex-end;
}

.h-100 {
  height: 100%;
}

.p-5 {
  padding: 5px;
}

.px-20 {
  padding-right: 20px;
  padding-left: 20px;
}

.position-relative {
  position: relative;
}

.header-profile {
  height: 88px;
  box-shadow: 0 5px 30px 0 rgba(108,61,9, 0.3);
}

.mobile-padding {
  padding-top: 30px;
}
</style>
