<template>
  <div class="accordion has-text-left">
    <div
      v-for="(item, index) in accordionItems"
      :key="index"
      class="accordion-item">
      <div
        class="header"
        @click="onFaqClick(index)">
        <h3>{{ item.title }}</h3>

        <div class="toggle">
          <span
            v-show="!item.isOpen"
            key="plus"
          >
            <img
              src="@/assets/plus-icon.png"
              alt="open"
            >
          </span>

          <span key="minus" v-show="item.isOpen">
            <img src="@/assets/minus-icon.png" alt="close">
          </span>
        </div>
      </div>

       <transition name="scale">
        <div
          class="content"
          v-show="item.isOpen">
            <div v-html="item.content"></div>
            <div
              v-if="item.videoId"
              class="video has-text-centered">
                <youtube :video-id="item.videoId" :player-vars="youtubeVars"/>
            </div>
        </div>
       </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    accordionItems: [],
    youtubeVars: {
      showinfo: 0,
      loop: 1,
      rel: 0,
      modestbrading: 1,
    },
  }),
  created() {
    this.accordionItems = [].concat(this.items);
  },
  methods: {
    onFaqClick(faqIndex) {
      this.accordionItems.forEach((el, index) => {
        this.accordionItems[index].isOpen = index === faqIndex ? !el.isOpen : false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/initial-variables';
@import '~bulma/sass/utilities/derived-variables';
@import '~bulma/sass/utilities/mixins';

.accordion {
  .accordion-item {
    cursor: pointer;
    margin-top: 32px;
  }

  .header {
    display: flex;
    justify-content: space-between;

    h3 {
      font-family: 'Core Sans A 45';
      letter-spacing: 1px;
      color: #6C3D09;
      font-size: 20px;

      @include tablet {
        font-size: 24px;
      }
    }

    .toggle {
      color: #6C3D09;
      font-size: 24px;
      background-color: transparent;
      border: none;

      & > span {
        display: flex;
        align-items: center;
        height: 100%;
      }
    }
  }

  .content {
    padding-bottom: 40px;
    padding-right: 15px;
    margin-top: 15px;
    font-size: 18px;
    border-bottom: 1px solid rgba(108,61,9, .3);
    transform-origin: top;

    .video {
      margin-top: 25px;
      padding: 0 10px;
    }
  }
}
</style>
