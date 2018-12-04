<template>
  <div class="gallery">
    <header class="hero">
      <public-header
        @mobileMenuClick="isMobileMenu = true"
        :isDark="true"/>

      <div class="dark-shadow"></div>

      <div class="container has-text-centered">
        <h3 class="title">
          <div>{{ $t('jerusalem_chain') }}</div>
          <div>{{ $t('gallery') }}</div>
        </h3>

        <p v-html="$t('jerusalem_chain_represents')"></p>

        <div class="columns is-multiline is-mobile gallery-container">
          <div
            v-for="(item, index) in gallery"
            :key="index"
            class="column is-12-mobile is-one-third-tablet">
            <img
              v-lazy="require(`@/assets/gallery/${item.src}.thumb.jpg`)"
              alt="image"
              class="gallery-image"
              v-if="item.type === 'image'" />

              <img
                v-if="item.type === 'video'"
                alt="preview"
                class="gallery-image"
                :src="`https://img.youtube.com/vi/${item.src}/0.jpg`"/>

            <div
              @click="openModal(item.src)"
              class="hover-shadow">
              <img :src="item.type === 'video'
                ?  require('@/assets/yt_icon_rgb.png')
                : require('@/assets/zoom-in.png')" alt="zoom" />
            </div>

          </div>
        </div>

        <div class="p-footer">
          <private-footer />
        </div>
      </div>
    </header>

    <gallery-popup
      :src="gallerySrc"
      :images="gallery"
      @close="isModalOpen = false"
      v-if="isModalOpen"/>

    <public-mobile-menu
      @close="isMobileMenu = false"
      :isMobileMenu="isMobileMenu" />
  </div>
</template>

<script>
import PublicHeader from '~/components/elements/PublicHeader';
import PrivateFooter from '~/components/partial/PrivateFooter';
import GalleryPopup from '~/components/popups/GalleryPopup';
import PublicMobileMenu from '~/components/partial/PublicMobileMenu';

export default {
  name: 'Gallery',
  components: {
    PublicHeader,
    PrivateFooter,
    GalleryPopup,
    PublicMobileMenu,
  },
  data: () => ({
    isModalOpen: false,
    isMobileMenu: false,
    startIndex: 0,
    gallerySrc: '1',
    youtubeVars: {
      showinfo: 0,
      loop: 1,
      rel: 0,
      modestbranding: 1,
    },
    gallery: [
      {
        type: 'image',
        src: '1',
      },
      {
        type: 'image',
        src: '2',
      },
      {
        type: 'image',
        src: '3',
      },
      {
        type: 'image',
        src: '4',
      },
      {
        type: 'image',
        src: '5',
      },
      {
        type: 'image',
        src: '6',
      },
      {
        type: 'image',
        src: '7',
      },
      {
        type: 'image',
        src: '8',
      },
      {
        type: 'video',
        src: 'D0DZS1WIe44',
      },
      {
        type: 'video',
        src: '5YWcZcbDEpg',
      },
      {
        type: 'video',
        src: 'TjvfTvQ0kx4',
      },
      {
        type: 'video',
        src: 'xGxxO6jFUeg',
      },
      {
        type: 'video',
        src: 'Yqr0mSK5daI',
      },
      {
        type: 'video',
        src: 'X3p-GYdhACo',
      },
      {
        type: 'image',
        src: '9',
      },
      {
        type: 'image',
        src: '10',
      },
      {
        type: 'image',
        src: '11',
      },
      {
        type: 'image',
        src: '12',
      },
      {
        type: 'image',
        src: '13',
      },
      {
        type: 'image',
        src: '14',
      },
      {
        type: 'image',
        src: '15',
      },
      {
        type: 'image',
        src: '16',
      },
      {
        type: 'image',
        src: '17',
      },
      {
        type: 'image',
        src: '18',
      },
      {
        type: 'image',
        src: '19',
      },
    ],
  }),
  methods: {
    openModal(src) {
      this.gallerySrc = src;
      this.isModalOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~bulma/sass/utilities/initial-variables';
  @import '~bulma/sass/utilities/derived-variables';
  @import '~bulma/sass/utilities/mixins';

  #app .gallery {
    margin-top: 77px;

    .hero {
      background-position: bottom;
      background-size: cover;
      background-image: url('../assets/hero_bg.png');
      height: 753px;
      color: #FEF7E3;
      position: relative;

      @include mobile {
        height: 553px;
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

    .container {
      position: absolute;
      top: 50px;
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

      .gallery-container {
        line-height: 0;

        .column {
          padding: 10px;
          position: relative;

          @include mobile {
            padding-left: 20px;
            padding-right: 20px;
          }

          .gallery-image {
            height: 100%;

            @include desktop {
              max-height: 250px;
            }

            @include fullhd {
              max-height: 280px;
            }
          }

          .hover-shadow {
            opacity: 0;
            position: absolute;
            top: 10px;
            bottom: 10px;
            left: 10px;
            right: 10px;
            background-color: rgba(0, 0, 0, .6);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: opacity .3s ease;

            @include mobile {
              left: 20px;
              right: 20px;
            }
          }

          &:hover .hover-shadow {
            opacity: 1;
          }

          & > img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .load-more-button {
        height: 51px;
        background-color: #6C3D09;
        color: #FEF7E3;
        font-size: 20px;
        width: 200px;
        margin: 50px auto 125px auto;
        font-family: 'Core Sans A 65';
        text-transform: uppercase;
        display: flex;
        align-items: center;
        padding: 0 12px;

        @include mobile {
          margin-bottom: 175px;
        }

        svg {
          font-size: 30px;
        }

        .vertical-divider {
          height: 48px;
          width: 0;
          border-right: 1px solid rgba(28,23,18,0.2);
          border-left: 1px solid rgba(255,255,255,0.1);
          margin-left: 12px;
          margin-right: 12px;
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
