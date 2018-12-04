const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');
// const i18nExtensions = require('vue-i18n-extensions');
const pkg = require('./package');

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Jerusalem Chain',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'og:site_name', content: 'Jerusalem Chain' },
      { name: 'og:title', content: 'Jerusalem Chain' },
      { name: 'apple-mobile-web-app-title', content: 'Jerusalem Chain' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#a05d0d' },
  loadingIndicator: {
    name: 'folding-cube',
    color: '#6c3d09',
    background: '#fffffe',
  },

  /*
  ** Global CSS
  */
  css: [
    { src: '~/static/fonts/stylesheet.css' },
    { src: '~/assets/css/main.scss', lang: 'scss' },
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-lazy',
    '~/plugins/vue-carousel3d',
    '~/plugins/vue-youtube',
    '~/plugins/vee-validate',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://pwa.nuxtjs.org/setup
    ['@nuxtjs/pwa', {
      manifest: {
        display: 'browser',
      },
    }],
    // Doc: https://github.com/nuxt-community/sitemap-module
    ['@nuxtjs/sitemap', {
      generate: true,
      gzip: true,
      hostname: 'http://localhost',
      exclude: [
        '/terms',
        '/privacy',
      ],
    }],
    // Doc: https://github.com/nuxt-community/analytics-module
    ['@nuxtjs/google-analytics', {
      id: 'UA-693120-6',
      debug: {
        sendHitTask: process.env.NODE_ENV === 'production',
      },
    }],
    // Doc: https://github.com/nuxt-community/sentry-module
    '@nuxtjs/sentry',
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', {
      css: false,
      materialDesignIcons: false,
    }],
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    ['nuxt-i18n', {
      locales: [{
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
      }],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'en',
    }],
    // Doc: https://github.com/daliborgogic/nuxt-brotli
    'nuxt-brotli',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  router: {
    scrollBehavior(to, from, savedPosition) {
      let position = false;

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.

      // if no children detected
      if (to.matched.length < 2) {
        // scroll to the top of the page
        position = { x: 0, y: 0 };
      } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
        // if one of the children has scrollToTop option set to true
        position = { x: 0, y: 0 };
      }

      // savedPosition is only available for popstate navigations (back button)
      if (savedPosition) {
        position = savedPosition;
      }

      const scrollTo = selector => {
        const offset = document.querySelector(selector)
          .getBoundingClientRect().top + window.scrollY;
        const headerHeight = 70;

        window.scrollTo({
          behavior: 'smooth',
          left: 0,
          top: offset - headerHeight,
        });
      };

      return new Promise(resolve => {
        if (to.path === from.path) {
          if (to.hash) {
            scrollTo(to.hash);
          } else {
            window.scrollTo({ behavior: 'smooth', left: 0, top: 0 });
          }
          resolve(position);
        }

        // wait for the out transition to complete (if necessary)
        window.$nuxt.$once('triggerScroll', () => {
          // coords will be used if no selector is provided,
          // or if the selector didn't match any element.
          if (to.hash && document.querySelector(to.hash)) {
            // scroll to anchor by returning the selector
            scrollTo(to.hash);
          }
          resolve(position);
        });
      });
    },
  },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    splitChunks: {
      pages: false,
    },


    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient }) {
      if (!isDev) {
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue'),
            ]),
            whitelist: ['html', 'body', 'nuxt-progress'],
            whitelistPatternsChildren: [/-enter$/, /-enter-active$/, /-leave-to$/, /-leave-active$/, /video$/],
          }),
        );
      }

      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          test: /\.(ico|otf|pdf)/,
          loader: 'file-loader?name=[name].[ext]',
          include: path.resolve(__dirname, '/src/'),
        });
      }
    },
  },
};
