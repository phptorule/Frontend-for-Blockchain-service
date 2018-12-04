<template>
  <div>
    <b-dropdown
      id="lang-select"
      class="language-dropdown has-text-left"
      :class="{'dark-menu': isDark}">
      <button class="button is-hidden-touch"
        slot="trigger">
        <span class="is-capitalized">
          {{ $t(`languages.${$i18n.i18next.language}`) }}
        </span>
        <b-icon pack="fas" icon="angle-down"></b-icon>
      </button>

      <b-dropdown-item
        class="is-capitalized"
        :class="{active: $i18n.i18next.language === 'en'}"
        @click="changeLanguage('en')">
        {{ $t('languages.en') }}
      </b-dropdown-item>

      <b-dropdown-item
        class="is-capitalized"
        :class="{active: $i18n.i18next.language === 'fr'}"
        @click="changeLanguage('fr')">
        {{ $t('languages.fr') }}
      </b-dropdown-item>

      <b-dropdown-item
        class="is-capitalized"
        :class="{active: $i18n.i18next.language === 'pt'}"
        @click="changeLanguage('pt')">
        {{ $t('languages.pt') }}
        <span class="small-text">
          Brasil
        </span>
      </b-dropdown-item>

      <b-dropdown-item
        class="is-capitalized"
        :class="{active: $i18n.i18next.language === 'ru'}"
        @click="changeLanguage('ru')">
        {{ $t('languages.ru') }}
      </b-dropdown-item>

      <b-dropdown-item
        class="is-capitalized"
        :class="{active: $i18n.i18next.language === 'es'}"
        @click="changeLanguage('es')">
        {{ $t('languages.es') }}
      </b-dropdown-item>
    </b-dropdown>

    <div class="is-hidden-desktop">
      <button class="button" @click="isLangSelect = true">
        <span>
          {{ $t(`languages.${$i18n.i18next.language}`) }}
        </span>
        <b-icon pack="fas" icon="angle-down"></b-icon>
      </button>

      <div
        v-if="isLangSelect"
        class="language-select">
        <div class="wrapper">
          <button
            @click="isLangSelect = false"
            class="close-btn">
            <i class="fas fa-angle-left"></i>
          </button>

          <div class="title">{{ $t('language') }}</div>

          <div class="link-list">
            <a
              v-for="link in menuLinks"
              :key="link.title"
              href="#"
              @click="changeLanguage(link.lang)"
              :class="{'active': $i18n.i18next.language === link.lang}"
              class="link is-capitalized">
              {{ $t(link.title) }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LangSelect',
  props: {
    isDark: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLangSelect: false,
      menuLinks: [
        {
          title: 'languages.en',
          lang: 'en',
        },
        {
          title: 'languages.fr',
          lang: 'fr',
        },
        {
          title: 'languages.pt',
          lang: 'pt',
        },
        {
          title: 'languages.ru',
          lang: 'ru',
        },
        {
          title: 'languages.es',
          lang: 'es',
        },
      ],
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.i18next.changeLanguage(lang);
    },
  },
};
</script>

<style scoped lang="scss">
  @import '~bulma/sass/utilities/initial-variables';
  @import '~bulma/sass/utilities/derived-variables';
  @import '~bulma/sass/utilities/mixins';

  .button {
    background: none;
    border: none;
    color: #FCE9B9;
    font-size: 19.2px;
    font-family: 'Core Sans A 35';
    letter-spacing: .5px;

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, .2);
    }

    &:focus {
      box-shadow: none;
    }

    @include tablet {
      color: #FCE9B9;
      font-size: 16px;
    }
  }

  .dark-menu {
    button {
      @include desktop {
        color: #6C3D09;
      }
    }
  }

  .active {
    opacity: .7;
  }

  .language-select {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(270deg, #FEF7E3 0%, #FFFFFE 50.31%, #FEF7E3 100%);
  z-index: 90;

  .title {
    color: #6C3D09;
    font-size: 30px;
    font-family: 'Cinzel';
    font-weight: bold;
  }

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    background-size: contain;
    background-repeat: repeat;

    .close-btn {
      position: absolute;
      color: #6C3D09;
      top: 20px;
      left: 20px;
      font-size: 25px;
      background-color: transparent;
      border: none;
    }
  }

  .link-list {
    margin-top: 30px;

    .link {
      height: 55px;
      width: 260px;
      flex-basis: 260px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #6C3D09;
      font-size: 24px;
      font-family: 'Core Sans A 45';

      &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        opacity: 0.3;
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 35%,
          rgba(0, 0, 0, 1) 65%,
          rgba(0, 0, 0, 0) 100%
        );
      }
    }
  }
}
</style>
