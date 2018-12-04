<template>
  <div class="modal is-active">
    <div class="modal-background image-holder"></div>

    <div id="image-holder" class="modal-content">
      <carousel-3d
        :border="0"
        :display="1"
        :width="800"
        :height="600"
        :startIndex="currentImage"
        :controls-visible="true"
        @after-slide-change="onAfterSlideChange"
        :controlsNextHtml="
          `<img src='${require('@/assets/angle-right.png')}' alt='right'></img>`
        "
        :controlsPrevHtml="
          `<img id='next' src='${require('@/assets/angle-right.png')}' alt='left'></img>`
        "
      >

        <slide
          v-for="(item, index) in images"
          :key="index"
          :index="index">
          <img
            v-if="item.type === 'image'"
            :src="require(`@/assets/gallery/${item.src}.jpg`)"
            alt="image">

          <div
            class="home-gallery-video"
            v-if="item.type === 'video'">
            <youtube
              :ref="`player${index}`"
              :video-id="item.src"
              :player-vars="youtubeVars" />
          </div>
        </slide>
      </carousel-3d>

      <div class="indicator has-text-centered">
        {{ `${$t('photo')} ${currentImage + 1} of ${images.length}` }}
      </div>

      <button
        @click="$emit('close')"
        class="modal-close is-large"
        aria-label="close">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryPopup',
  props: {
    src: {
      type: String,
      default: '1',
    },
    images: {
      type: Array,
      default: () => ([]),
    },
  },
  data: () => ({
    currentImage: 0,
    youtubeVars: {
      autoplay: 1,
      showinfo: 0,
      loop: 1,
      rel: 0,
      modestbrading: 1,
    },
  }),
  created() {
    this.images.forEach((el, index) => {
      if (el.src === this.src) {
        this.currentImage = index;
      }
    });
  },
  methods: {
    onAfterSlideChange(index) {
      const player = this.$refs[`player${this.currentImage}`];
      if (player) {
        this.$refs[`player${this.currentImage}`][0].player.pauseVideo();
      }
      this.currentImage = index;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~bulma/sass/utilities/initial-variables';
  @import '~bulma/sass/utilities/derived-variables';
  @import '~bulma/sass/utilities/mixins';

  .indicator {
    color: #FEF7E3;
    font-family: "Core Sans A 45";
  }

  .modal-content {
    position: relative;
    width: 100%;

    @include mobile {
      margin-left: 0;
      margin-right: 0;
    }

    img {
      height: 100%;
    }

    .modal-close {
      top: calc(50% - 330px);
      right: calc(50% - 415px);
      background-color: #6C3D09;
      color: #FFFFFF;
      z-index: 1002;

      @include mobile {
        top: 20px;
        right: 20px
      }
    }
  }
</style>
