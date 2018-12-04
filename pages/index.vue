<template>
  <div id="home-page">
    <header class="hero">
      <!-- Hero Header -->
      <public-header
        @mobileMenuClick="isMobileMenu = true"
        :isDark="isDark"/>

      <!-- Hero Body -->
      <div id="hero-body-container" class="container">
        <div class="hero-body columns">
          <div class="column is-offset-1" id="hero-statement">
            <p class="has-text-centered-mobile">{{ $t('your_own') }}
            <span class="nobreak">{{ $t('blockchain_secured') }}</span>
            <strong class="nobreak">{{ $t('piece_of_jerusalem') }}</strong></p>
          </div>
          <div class="column is-6 is-4-widescreen is-offset-1-fullhd">
            <ReservationBox />
          </div>
        </div>
      </div>

      <nuxt-link to="/#video-section" class="vertical-link is-hidden-touch">
        {{ $t('watch_video') }}
        <img src="../assets/arrow-icon.png" alt="arrow">
      </nuxt-link>
    </header>

    <section id="about-section" class="container lined-bg">
      <span
        id="about-mobile-scroll"
        class="mobile-about-anchor is-hidden-tablet">
      </span>
      <div class="columns">
        <div class="column is-6 is-hidden-mobile">
          <img src="../assets/jerusalem_text_box.png" />
        </div>
        <div class="column is-6">
          <h3>
            <div class="icon-holder is-hidden-tablet">
              <img src="../assets/icon_pieces_yellow.png" alt="icon">
            </div>
            {{ $t('about_section.about_jerusalem_chain') }}
          </h3>
          <p v-html="$t('about_section.about_jerusalem_chain_text')" />
        </div>
      </div>

      <div class="quote">
        <img class="quote-img" src="../assets/quote_small.png" alt="quote">

        <div class="has-text-centered" v-html="$t('about_section.temple_entry')" />

        <img class="quote-img" src="../assets/quote_small.png" alt="quote">
      </div>

      <div class="third-item is-flex">
        <div class="text">
          <h4 v-t="'about_section.benefits_of_presale'" />
          <p v-html="$t('about_section.benefits_of_presale_text')" />
        </div>

        <div class="image">
          <div class="white-romb"></div>
          <img src="../assets/about-second.png" alt="image">
        </div>
      </div>
    </section>

    <section class="bottom-cta is-vertical-center">
      <div class="content has-text-centered">
        <h3 v-html="$t('reserve_jerusalem_chain_land')" />
        <h4 v-html="$t('receive_bonus', { bonus: currentBonus })" />
        <nuxt-link to="/profile/reserve" tag="button" class="button is-reserve is-uppercase" v-html="$t('reserve')" />
      </div>
    </section>

    <section id="video-section" class="container has-text-centered lined-bg">
      <h3 v-t="'learn_more_about_jerusalem'" />
      <div class="video">
        <youtube video-id="XvFJkDYY-hY" :player-vars="youtubeVars" />
      </div>
    </section>

    <section id="map-section">
      <h2 class="has-text-centered is-uppercase" v-t="'how_it_works'" />
      <div class="map">
        <div class="piece">
          <div class="content">
            <h4 class="is-capitalized">{{ $t('plot') }} #29</h4>

            <p>{{ $t('plot_available') }}</p>

            <button class="button is-rounded">{{ $t('reserve_for') }} {{ currentPrice }} ETH</button>
          </div>
        </div>

        <div class="piece">
          <div class="content">
            <div class="icon-marker">
              <img src="../assets/location-icon.png" alt="location">
            </div>

            <h4 class="is-capitalized"> {{ $t('plot') }} #235</h4>

            <div class="line">
              <div>
                <div class="piece-icon-holder">
                  <i class="fas fa-user"></i>
                </div>
                {{ $t('owner') }}:
              </div>

              <div>
                John Doe
              </div>
            </div>

            <div class="line">
              <div>
                <div class="piece-icon-holder">
                  <i class="fas fa-id-card"></i>
                </div>
                {{ $t('document_id') }}:
              </div>

              <div>
                G2npTFnkS9HGQeEY7XEkfz
              </div>
            </div>

            <div class="line">
              <div>
                <div class="piece-icon-holder">
                  <i class="fas fa-user-friends"></i>
                </div>
                {{ $t('next_of_keen') }}:
              </div>

              <div>
                Jane Doe
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="features-section" class="container">
      <div class="tile is-ancestor is-10">
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-parent">
              <article class="media tile is-child">
                <figure class="media-left">
                  <div class="image">
                    <img src="../assets/icon_pieces.png" />
                  </div>
                </figure>

                <div class="media-content">
                  <div class="content">
                    <h3>{{ $t('features_section.jerusalem_chain_plots') }}</h3>
                    <p v-html="$t('features_section.jerusalem_chain_plots_text')"></p>
                  </div>
                </div>
              </article>
            </div>

            <div class="tile is-parent">
              <article class="media tile is-child">
                <figure class="media-left">
                  <div class="image">
                    <img src="../assets/icon_project.png" />
                  </div>
                </figure>

                <div class="media-content">
                  <div class="content">
                    <h3>{{ $t('features_section.virtual_temple') }}</h3>
                    <p v-html="$t('features_section.virtual_temple_text')"></p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div class="tile">
            <div class="tile is-parent">
              <article class="media tile is-child">
                <figure class="media-left">
                  <div class="image">
                    <img src="../assets/icon_reserve.png" />
                  </div>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h3>{{ $t('features_section.reservation_sale') }}</h3>
                    <p v-html="$t('features_section.reservation_sale_text')"></p>
                  </div>
                </div>
              </article>
            </div>

            <div class="tile is-parent">
              <article class="media tile is-child">
                <figure class="media-left">
                  <div class="image">
                    <img src="../assets/icon_blockchain.png" />
                  </div>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h3>{{ $t('features_section.blockchain_technology') }}</h3>
                    <p v-html="$t('features_section.blockchain_technology_text')"></p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="legacy-section" class="container">
      <h3 class="has-text-centered"
      v-html="$t('legacy_section.aquire_jerusalem_chain')">
      </h3>

      <div class="reservation-sale">
        <div class="bookmark">
          <div class="left-mark"></div>
          <div class="right-mark"></div>
          <div class="left-shadow"></div>
          <div class="right-shadow"></div>
          {{ $t('only') }} 166,667 {{ $t('plots_in_reservation_sale') }}
        </div>

        <div class="info">
          <div class="item">
            <span>
              {{ $t('legacy_section.land_size') }}
            </span>

            <div class="squared">
              650 {{ $t('m') }}
            </div>
          </div>

          <div class="vertical-divider"></div>

          <div class="item">
            <span>
              {{ $t('legacy_section.number_of_plots') }}
            </span>

            <div>
              2,166,667
            </div>
          </div>

          <div class="vertical-divider" />

          <div class="item">
            <span>
              {{ $t('legacy_section.size_of_a_plot') }}
            </span>

            <div class="squared">
              3 {{ $t('cm') }}
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="has-text-centered">
        <legacy-bar
          sold="1,668,334"
          available="498,332"
          fill="80"/>
      </div> -->
    </section>

    <section class="bottom-cta is-vertical-center">
      <div class="content has-text-centered">
        <h3 v-html="$t('reserve_jerusalem_chain_land')"></h3>
        <h4>{{ $t('receive_bonus', { bonus: currentBonus }) }}</h4>
        <nuxt-link to="/profile/reserve" tag="button" class="button is-reserve is-uppercase" v-html="$t('reserve')" />
      </div>
    </section>

    <section id="why-purchase-section">
      <div class="container">
        <h2 class="has-text-centered">{{ $t('why_purchase_section.why_purchase') }}?</h2>

        <div class="columns is-multiline">
          <div class="column is-5-tablet is-4-widescreen">
            <h3 class="title">{{ $t('why_purchase_section.personal_legacy') }}</h3>

            <p>{{ $t('why_purchase_section.personal_legacy_text') }}</p>
          </div>

          <div class="column is-5-tablet is-4-widescreen">
            <h3 class="title">{{ $t('why_purchase_section.temple_of_all_nations') }}</h3>

            <p>{{ $t('why_purchase_section.temple_of_all_nations_text') }}</p>
          </div>
        </div>

        <div class="columns is-multiline">
          <div class="column is-5-tablet is-4-widescreen">
            <h3 class="title">{{ $t('why_purchase_section.ownership_transparency') }}</h3>

            <p>{{ $t('why_purchase_section.ownership_transparency_text') }}</p>
          </div>

          <div class="column is-5-tablet is-4-widescreen">
            <h3 class="title">{{ $t('why_purchase_section.lasting_memory') }}</h3>

            <p>{{ $t('why_purchase_section.lasting_memory_text') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="tours" class="has-text-centered">
      <h3>{{ $t('tour_of_the_land') }}</h3>

      <div class="video">
        <youtube video-id="gOd2dDL9178" :player-vars="youtubeVars" />
      </div>
    </section>

    <section id="gallery" class="has-text-centered">
      <div class="noise"></div>

      <div>
        <h3 class="has-text-centered">{{ $t(carouselSettings.title) }}</h3>

        <div id="image-holder" class="image-holder">
          <carousel-3d
            dir="ltr"
            :perspective="carouselSettings.perspective"
            :border="carouselSettings.border"
            :inverseScaling="carouselSettings.inverseScaling"
            :space="carouselSettings.space"
            :height="carouselSettings.height"
            :width="carouselSettings.width"
            :display="carouselSettings.display"
            :controls-visible="carouselSettings.controlsVisible"
            :controlsNextHtml="
              `<img id='prev' src='${require('@/assets/angle-right.png')}' alt='right'></img>`
            "
            :controlsPrevHtml="
              `<img id='next' src='${require('@/assets/angle-right.png')}' alt='left'></img>`
            "
            >
            <slide
              v-for="(item, index) in gallery"
              :key="index"
              :index="index">
              <img
                v-if="item.type === 'image'"
                v-lazy="require(`@/assets/gallery/${item.src}.thumb.jpg`)"
                alt="image">

              <div
                class="home-gallery-video"
                v-if="item.type === 'video'">
                <img
                  v-show="!item.isClicked"
                  :src="`https://img.youtube.com/vi/${item.src}/0.jpg`"
                  alt="preview"
                  @click="item.isClicked = true"
                >

                <img
                  class="preview-logo"
                  v-show="!item.isClicked"
                  src="@/assets/youtube_logo.png"
                  alt="youtube"
                  @click="item.isClicked = true"
                >
                <youtube
                  v-if="item.isClicked"
                  :video-id="item.src"
                  :player-vars="{
                    showinfo: 0,
                    autoplay: 1,
                    loop: 1,
                    rel: 0,
                    modestbrading: 1,
                  }"
                />
              </div>
            </slide>
          </carousel-3d>
        </div>

        <nuxt-link
          to="/gallery"
          class="button is-rounded">
          {{ $t('view_all') }}
        </nuxt-link>
      </div>
    </section>

    <section id="faq" class="container">
      <h3 class="has-text-centered">{{ $t('faq') }}</h3>

      <div class="columns">
        <div class="column">
          <div class="accordion">
            <div
              class="accordion-item"
              v-for="(item, index) in faqItems"
              :key="`faqItem${index}`">
              <div
                @click="onFaqClick(index)"
                :id="`faq-header-${index}`"
                class="header"
              >
                <h3>{{ item.title }}</h3>

                <div class="toggle">
                  <span key="plus" v-show="!item.isOpen">
                    <img src="../assets/plus-icon.png" alt="open">
                  </span>

                  <span key="minus" v-show="item.isOpen">
                    <img src="../assets/minus-icon.png" alt="close">
                  </span>
                </div>
              </div>

              <transition name="scale">
                <div
                  class="content"
                  v-if="item.isOpen">
                  <div v-html="item.content"></div>

                  <div v-if="item.img">
                    <br >
                    <br >
                    <img
                      alt="piece of land"
                      :src="require(`../assets/${item.img}`)"
                    />
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bottom-cta is-vertical-center">
      <div class="content has-text-centered">
        <h3 v-html="$t('reserve_jerusalem_chain_land')"></h3>
        <h4>{{ $t('receive_bonus', { bonus: currentBonus }) }}</h4>
        <nuxt-link to="/profile/reserve" tag="button" class="button is-reserve is-uppercase" v-html="$t('reserve')" />
      </div>
    </section>

    <section id="timeline-section" class="container">
      <h3 class="title has-text-centered">{{ $t('project_timeline') }}</h3>

      <div class="columns is-parent">
        <div class="column is-child is-5">
          <div class="notification">
            <div class="timeline-date">
              <div class="dot"></div>
              <h4 class="title is-4">{{ $t('month.october') }} 2018</h4>
            </div>

            <div class="v-line is-hidden-mobile"></div>

            <div class="content">
              <h3>{{ $t('timeline_section.reservation_sale') }}</h3>

              <p>{{ $t('timeline_section.reservation_sale_text') }}</p>
            </div>
          </div>
        </div>

        <div class="column is-child is-5">
          <div class="notification">
            <div class="timeline-date">
              <div class="dot"></div>
              <h4 class="title is-4">{{ $t('month.january') }} 2019</h4>
            </div>

            <div class="v-line is-hidden-mobile"></div>

            <div class="content">
              <h3>{{ $t('timeline_section.project_launch') }}</h3>

              <p>{{ $t('timeline_section.project_launch_text') }}</p>
            </div>
          </div>
        </div>

        <div class="column is-child is-5">
          <div class="notification">
            <div class="timeline-date">
              <div class="dot"></div>
              <h4 class="title is-4">{{ $t('month.april') }} 2019</h4>
            </div>

            <div class="v-line is-hidden-mobile"></div>

            <div class="content">
              <h3>{{ $t('timeline_section.virtual_temple') }}</h3>

              <p>{{ $t('timeline_section.virtual_temple_text') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="footer">
      <div class="container">
        <div class="bg-box">
          <form id="contact-us" @submit.prevent="footerFormHandler" action="post">
            <input type="hidden" name="form-name" value="contact" />
            <div class="columns">
              <div class="column">
                <div
                  class="input-wrapper"
                  :class="{'invalid': isSendClicked && !footerValidation.isNameValid}">
                  <input
                     class="input"
                     type="text"
                     name="name"
                     @input="validateName"
                     v-model="footerForm.name"
                     :placeholder="$t('form.your_name')" />
                  <div class="tooltip">
                    <div class="arrow"></div>
                    {{ $t('form.incorrect_name') }}
                  </div>
                </div>

                <div
                    class="input-wrapper"
                    :class="{'invalid': isSendClicked && !footerValidation.isEmailValid}">
                  <input
                     class="input"
                     type="text"
                     name="email"
                     @input="validateEmail"
                     v-model="footerForm.email"
                     :placeholder="$t('form.e_mail')" />

                  <div class="tooltip">
                    <div class="arrow"></div>
                    {{ $t('form.incorrect_email') }}
                  </div>
                </div>
              </div>

              <div class="column">
                <div
                    :class="{'invalid': isSendClicked && !footerValidation.isMessageValid}"
                    class="input-wrapper">
                  <textarea
                    class="textarea"
                    @input="validateMessage"
                    :placeholder="$t('form.your_message')"
                    v-model="footerForm.message"
                    rows="3"
                    name="message">
                  </textarea>

                  <div class="tooltip">
                    <div class="arrow"></div>
                    {{ $t('form.message_is_required') }}
                  </div>
                </div>

                <div class="button-wrapper">
                  <button type="submit" class="button">
                    {{ $t('form.send') }}
                  </button>
                </div>
              </div>

              <div class="column">
                <div>
                  <a target="_blank" href="javasript:;">
                    <i class="fas fa-at"></i>
                    <span class="is-hidden-mobile">hello@jerusalemchain.com</span>
                  </a>
                </div>

                <div>
                  <a target="_blank" href="https://www.facebook.com/Jerusalem-Chain-1197716167034111/">
                    <i class="fab fa-facebook-square"></i>
                    <span class="is-hidden-mobile">{{ $t('form.follow_facebook') }}</span>
                  </a>
                </div>

                <div>
                  <a target="_blank" href="https://twitter.com/jerusalemchain">
                    <i class="fab fa-twitter"></i>
                    <span class="is-hidden-mobile">{{ $t('form.follow_twitter') }}</span>
                  </a>
                </div>

                <div>
                  <a target="_blank" href="https://www.instagram.com/jerusalemchain/">
                    <i class="fab fa-instagram"></i>
                    <span class="is-hidden-mobile">{{ $t('form.follow_instagramm') }}</span>
                  </a>
                </div>

                <div>
                  <a target="_blank" href="http://t.me/jerusalemchain">
                    <i class="fab fa-telegram-plane"></i>
                    <span class="is-hidden-mobile">{{ $t('form.join_telegram') }}</span>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="footer-links">
          <div class="links has-text-centered">
            <a href="javascript:;" @click="scrollTo('about-section')" v-t="'about'" />
            <nuxt-link to="/terms" v-t="'terms'" />
            <nuxt-link to="/privacy" v-t="'privacy_policy'" />

            <br class="is-hidden-tablet">

            <nuxt-link to="/#map-section" v-t="'how_it_works'" />
          </div>

          <h5 class="has-text-centered">&copy; {{ $t('footer_copyright') }}</h5>
        </div>
      </div>
    </section>

    <public-mobile-menu
      @close="isMobileMenu = false"
      :isMobileMenu="isMobileMenu" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PublicHeader from '~/components/elements/PublicHeader';
import ReservationBox from '~/components/partial/ReservationBox';
import PublicMobileMenu from '~/components/partial/PublicMobileMenu';
import LegacyBar from '~/components/elements/LegacyBar';

export default {
  name: 'Homepage',
  components: {
    LegacyBar,
    PublicHeader,
    ReservationBox,
    PublicMobileMenu,
  },
  data() {
    return {
      carouselSettings: {
        title: this.getCarouselTitle(),
        perspective: 0,
        border: 0,
        inverseScaling: 0,
        dir: 'ltr',
        space: this.getCarouselSpace(),
        height: this.innerWidth < 1100 ? 221 : 345,
        width: this.innerWidth < 1100 ? 294 : 460,
        display: this.innerWidth < 760 ? 3 : 7,
        controlsVisible: !(this.innerWidth < 1100),
      },
      isDark: false,
      scrollPos: 0,
      innerWidth: window.innerWidth,
      isMobileMenu: false,
      isSendClicked: false,
      youtubeVars: {
        showinfo: 0,
        loop: 0,
        rel: 0,
        modestbrading: 1,
      },
      footerForm: {
        email: '',
        name: '',
        message: '',
      },
      footerValidation: {
        isEmailValid: false,
        isNameValid: false,
        isMessageValid: false,
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
          isClicked: false,
        },
        {
          type: 'video',
          src: '5YWcZcbDEpg',
          isClicked: false,
        },
        {
          type: 'video',
          src: 'TjvfTvQ0kx4',
          isClicked: false,
        },
        {
          type: 'video',
          src: 'xGxxO6jFUeg',
          isClicked: false,
        },
        {
          type: 'video',
          src: 'Yqr0mSK5daI',
          isClicked: false,
        },
        {
          type: 'video',
          src: 'X3p-GYdhACo',
          isClicked: false,
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
      legacyTableData: [
        {
          name: this.$t('legacy_section.land_size'),
          value: `650 ${this.$t('legacy_section.meter')}2`,
        },
        {
          name: this.$t('legacy_section.number_of_plots'),
          value: '2,166,667',
        },
        {
          name: this.$t('legacy_section.size_of_a_plot'),
          value: `3 ${this.$t('legacy_section.santimeter')}2`,
        },
      ],
      faqItems: [
        {
          isOpen: false,
          title: this.$t('faq_section.what_is_jerusalem_land'),
          content: this.$t('faq_section.what_is_jerusalem_land_text'),
        },
        {
          isOpen: false,
          title: this.$t('faq_section.virtual_temple'),
          content: this.$t('faq_section.virtual_temple_text'),
        },
        {
          isOpen: false,
          title: this.$t('faq_section.phases'),
          content: this.$t('faq_section.phases_text'),
        },
        {
          isOpen: false,
          title: this.$t('faq_section.look'),
          content: this.$t('faq_section.look_text'),
          img: 'piece_of_land.png',
        },
        {
          isOpen: false,
          title: this.$t('faq_section.blockchain'),
          content: this.$t('faq_section.blockchain_text'),
        },
        {
          isOpen: false,
          title: this.$t('faq_section.reservation_sale'),
          content: this.$t('faq_section.reservation_sale_text'),
        },
        {
          isOpen: false,
          title: this.$t('faq_section.what_do_i_need'),
          content: this.$t('faq_section.what_do_i_need_text'),
        },
        {
          isOpen: false,
          title: this.$t('faq_section.how_will_i_see'),
          content: this.$t('faq_section.how_will_i_see_text'),
        },
        {
          isOpen: false,
          title: this.$t('faq_section.is_ownership_private'),
          content: this.$t('faq_section.is_ownership_private_text'),
        },
        {
          isOpen: false,
          title: this.$t('faq_section.is_it_mine'),
          content: this.$t('faq_section.is_it_mine_text'),
        },
        {
          isOpen: false,
          title: this.$t('faq_section.gift'),
          content: this.$t('faq_section.gift_text'),
        },
        {
          isOpen: false,
          title: this.$t('faq_section.certificate'),
          content: this.$t('faq_section.certificate_text'),
          img: 'gallery/16.jpg',
        },
      ],
    };
  },
  methods: {
    onFaqClick(faqIndex) {
      this.faqItems.forEach((el, index) => {
        this.faqItems[index].isOpen = index === faqIndex ? !el.isOpen : false;
      });
    },
    updateScroll() {
      this.isDark = window.scrollY > 560;
    },
    mobileMenuClick(elemId) {
      this.isMobileMenu = false;
      this.scrollTo(elemId);
    },
    handleResize() {
      this.carouselSettings.title = this.getCarouselTitle();
      this.carouselSettings.space = this.getCarouselSpace();
      this.carouselSettings.height = this.innerWidth < 1100 ? 221 : 345;
      this.carouselSettings.width = this.innerWidth < 1100 ? 294 : 460;
      this.carouselSettings.display = this.innerWidth < 760 ? 3 : 7;
      this.carouselSettings.controlsVisible = !(this.innerWidth < 1100);
    },
    getCarouselSpace() {
      if (this.innerWidth < 375) return 27.5;
      if (this.innerWidth < 425) return 57.5;
      if (this.innerWidth < 769) return 80;
      return 120;
    },
    getCarouselTitle() {
      return this.innerWidth < 760 ? 'photo_gallery' : 'jerusalem_chain_gallery';
    },
    footerFormHandler() {
      this.isSendClicked = true;
      const isValid = this.footerValidation.isEmailValid
        && this.footerValidation.isNameValid
        && this.footerValidation.isMessageValid;

      if (isValid) {
        const name = this.footerForm.name.split(' ');
        const fields = {
          formId: 3,
          firstname: name[0],
          lastname: name.splice(1).join(' '),
          email: this.footerForm.email,
          f_message: this.footerForm.message,
        };

        this.$store.dispatch('mautic/submit', fields)
          .then(() => {
            this.$store.commit('toggleAlert');
            this.footerForm.email = '';
            this.footerForm.name = '';
            this.footerForm.message = '';
          })
          .catch(err => {
            console.error('Error submitting form data', err);
          });
      }
    },
    validateEmail() {
      this.footerValidation.isEmailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        this.footerForm.email.trim(),
      );
    },
    validateName() {
      this.footerValidation.isNameValid = /^[a-zA-Z ]+$/g.test(this.footerForm.name.trim());
    },
    validateMessage() {
      this.footerValidation.isMessageValid = this.footerForm.message.length > 0;
    },
  },
  computed: {
    ...mapGetters({
      currentPrice: 'crowdsale/price',
      currentBonus: 'crowdsale/bonus',
    }),
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    window.onresize = this.handleResize;
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateScroll);
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
  @import '~bulma/sass/utilities/initial-variables';
  @import '~bulma/sass/utilities/derived-variables';
  @import '~bulma/sass/utilities/mixins';

#home-page {
  overflow: hidden;

  .columns {
    @include touch {
      margin-right: 0;
      margin-left: 0;
    }
  }

  .hero {
    background-position: bottom;
    background-size: cover;
    background-image: url('../assets/hero_bg.png');
    height: 644px;
    padding: 25px;
    color: #FEF7E3;
    position: relative;
    background-repeat: no-repeat;

    @media (max-width: 374px) {
      padding: 25px 10px;
    }

    @include touch {
      background-image: url('../assets/hero_bg_touch.jpg');
    }

    @include mobile {
      height: 375px;
      background-position: 50% -110px;
      background-size: 200% 130%;
    }

    @media screen and (min-width: 1024px) {
      background-image: url('../assets/hero_bg_desktop.jpg');
    }

    @include widescreen {
      background-image: url('../assets/hero_bg_widescreen.jpg');
    }

    @include fullhd {
      background-image: url('../assets/hero_bg_fullhd.jpg');
    }

    .vertical-link {
      position: absolute;
      right: 0;
      bottom: 70px;
      color: #FCE9B9;
      transform: rotate(90deg);
      font-family: 'Core Sans A 45';
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 17px;
        height: auto;
        margin-left: 10px;
      }
    }

    .notification {
      color: #6C3D09;
    }

    #hero-body-container {
      margin-bottom: auto;

      @include mobile {
        margin-left: 0;
        margin-right: 0;
      }

      @include tablet {
        padding-left: 25px;
        max-width: 1016px!important;
      }

      .columns {
        flex-direction: row-reverse;
        margin: auto;
      }
    }

    .hero-body {
      @include desktop {
        width: 960px;
      }

      @include touch {
        padding: 0;
      }
    }

    #hero-statement {
      @media (max-width: 360px) {
        padding-left: 0;
        padding-right: 0;
      }

      p {
        font-family: 'Cinzel';
        font-size: 42px;
        font-weight: normal;
        text-shadow: 0 2px 5px #000;
        line-height: 48px;
        padding-top: 40px;
        margin-left: auto;
        margin-right: auto;

        strong {
          color: #FEF7E3;
        }

        .nobreak {
          white-space: nowrap;
        }

        @include touch {
          font-size: 28px;
          line-height: 38px;
          max-width: 375px;
        }

        @media (max-width: 360px) {
          font-size: 26px;
          padding-left: 0;
          padding-right: 0;
        }

        strong {
          font-weight: bold;
        }
      }
    }
  }

  section {
    padding-top: 150px;

    &.lined-bg {
      background: url('../assets/strip_pattern.png');
      background-size: cover;
    }

    @include mobile {
      padding: 50px 10px;
    }
  }

  #about-section {
    @include mobile {
      padding-top: 300px;
      z-index: -1;
    }

    @include tablet {
      max-width: 1016px!important;
    }

    img {
      transform: translateY(-10%);
      width: 463px;
      max-height: 475px;
    }

    .mobile-about-anchor {
      position: absolute;
      top: 250px;
    }

    .columns {
      .is-6 {
        p {
          @include tablet {
           max-width: 544px;
           line-height: 28px;
          }
        }
      }
    }

    h3 {
      position: relative;
      display: flex;
      align-items: center;

      @include mobile {
        min-height: 72px;
        padding-left: 80px;
      }

      @include tablet {
        font-size: 28px;
      }

      .icon-holder {
        position: absolute;
        left: 0;
        top: 0;
        width: 63.99px;
        height: 63.97px;
        transform-origin: center center;
        transform: rotate(-55deg) translate(-10%, -10%);
        box-shadow: -5px 5px 10px 0 rgba(108,61,9, .25);
        border-radius: 5.6px;
        background-color: #FFFFFF;
        margin-right: 20px;
        display: flex;
        justify-content: center;
        align-items:center;

        & > img {
          width: 38.79px;
          height: auto;
          transform: rotate(55deg);
        }
      }
    }

    .quote {
      max-width: 940px;
      background-color: rgba(207, 139, 57, .2);
      border-radius: 11px;
      padding: 32px 30px;
      z-index: 1;
      opacity: .9;
      margin-bottom: 45px;
      color: #6C3D09;
      font-size: 18px;
      font-family: 'Core Sans A 35';
      line-height: 28px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;

      @include tablet {
        margin-top: -60px;
        margin-left: 75px;
      }
        .quote-img {
          &:first-child {
            margin-bottom: 18px;
          }

          &:last-child {
            margin-top: 18px;
          }
        }

      .quote-img {
        width: auto;
      }
    }

    .third-item {
      flex-wrap: wrap;

      @include tablet {
        margin-left: 75px;
      }

      .text {
        @include tablet {
          flex-basis: 540px;
        }

        h4 {
          font-size: 24px;
          font-weight: bold;
          line-height: 36px;
          font-family: Cinzel;
          color: #6C3D09;
        }
      }

      .image {
        position: relative;
        flex: auto;

        .white-romb {
          position: absolute;
          right: 260px;
          bottom: 190px;
          height: 89.5px;
          width: 89.5px;
          background-color: white;
          box-shadow: 0px 0px 10px 0 rgba(160,91,14,0.2);
          border-radius: 11px;
          transform: rotate(53deg);

          @include mobile {
            right: 220px;
            bottom: 170px;
          }
        }

        img {
          width: 320px;
          height: 320px;
          margin-left: auto;

          @include mobile {
            transform: translateX(25px);
          }
        }
      }
    }
  }

  #video-section {
    padding-top: 34.2px;

    @include tablet {
      padding-top: 50px;
    }

    h3 {
      font-size: 24px;
      margin-bottom: 13px;

      @include tablet {
        margin-bottom: 30px;
      }
    }

    .video {
      box-shadow: 0 5px 50px 0px rgba(0,0,0,.3);
    }
  }

  #map-section {
    padding-left: 0;
    padding-right: 0;
    position: relative;
    overflow: hidden;

    @include mobile {
      padding-bottom: 10px;
    }

    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      top: 90px;
      left: -70px;
      right: -70px;
      height: 50px;
      background: linear-gradient(to right, #fef7e3 0%, #fffffe 50%, #fef7e3 100%);
      border-radius: 0 0 50% 50%/ 0px 0px 100% 100%;

      @media screen and (min-width: 700px) {
        top: 100px;
      }

      @media (min-width: 769px) {
        top: 195px;
        height: 60px;
      }

      @media (min-width: 1366px) {
        display: none;
      }
    }

    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      bottom: 5px;
      left: -70px;
      right: -70px;
      height: 50px;
      background: linear-gradient(to right, #fef7e3 0%, #fffffe 50%, #fef7e3 100%);
      border-radius: 50% 50% 0 0/100% 100% 0px 0px;

      @media screen and (min-width: 700px) {
        bottom: 15px;
      }

      @media (min-width: 769px) {
        bottom: 0;
        height: 60px;
      }

      @media (min-width: 1366px) {
        display: none;
      }
    }

    .map {
      display: block;
      background-image: url(../assets/map.png);
      background-position: center center;
      background-size: cover;
      height: 714px;
      width: 100%;
      position: relative;

      @include mobile {
        background-position: -421px center;
        background-repeat: no-repeat;
      }

      @media (min-width: 768px) {
        background-position: 9.8% center;
      }

      @media screen and (min-width: 1024px) {
        background-position: 0 center;
      }

      @include widescreen {
        background-position: center center;
      }

      .piece {
        border-radius: 11px;
        background-color: #FFFFFF;
        box-shadow: 0 10px 26px 0 rgba(0,0,0,0.15);
        position: absolute;

        &:first-child() {
          left: 10px;
          top: 150px;
          width: 300px;

          @media (max-width: 365px) {
            left: 10px;
          }

          @media (min-width: 366px) {
            left: 25px;
          }

          @media (min-width: 768px) {
            left: 43vw;
          }

          @include desktop {
            left: 9vw;
          }

          @media screen and (min-width: 1300px){
            left: 12vw;
          }

          @media screen and (min-width: 1400px){
            left: 14vw;
          }

          @media screen and (min-width: 1500px){
            left: 15.4vw;
          }

          @media screen and (min-width: 1600px){
            left: 17vw;
          }

          @media screen and (min-width: 1900px){
            left: 22.5vw;
          }

          @media screen and (min-width: 2100px){
            left: 24vw;
            top: 130px;
          }

          p {
            font-size: 16px;
          }

          .content::after {
            right: 0;
            transform: translateX(95%);
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-left: 8px solid #ffffff;
          }
        }

        &:nth-child(2) {
          bottom: 155px;
          left: 10px;
          width: 278px;

          @media (min-width: 366px) {
            bottom: 100px;
            left: 85px;
          }

          @media screen and (min-width: 768px) {
            width: 398px;
          }

          @include tablet {
            bottom: 205px;
            left: 39.5vw;
          }

          @include desktop {
            left: 60.8vw;
          }

          @include widescreen {
            left: 61.5vw;
          }

          @media screen and (min-width: 1400px) {
            left: 60.8vw;
          }

          @include fullhd {
            left: 59.7vw;
          }

          @media screen and (min-width: 1900px){
            left: 57.7vw;
          }

          @media screen and (min-width: 2100px){
            left: 57.5vw;
          }

          .content {
            &::after {
              left: 0;
              transform: translateX(-95%);
              border-top: 8px solid transparent;
              border-bottom: 8px solid transparent;
              border-right: 8px solid #ffffff;
            }

            h4 {
              margin-bottom: 15px;
            }

            .line {
              display: flex;
              color: #6C3D09;
              margin-bottom: 5px;

              div {
                white-space: nowrap;

                &:first-child {
                  width: 130px;
                  margin-right: 10px;
                  display: flex;
                }

                &:last-child {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  max-width: calc(100% - 130px);
                  font-family: 'Core Sans A 55';
                }

                .piece-icon-holder {
                  width: 24px;
                  max-width: 24px;
                  display: flex;
                  align-items: center;
                  height: 24px;
                  overflow: unset;
                  color: #A05B0E;
                }
              }
            }
          }

          .icon-marker {
            position: absolute;
            left: -50px;
            top: 10;
            font-size: 50px;
            color: #E9B558;
            transform: translateY(-15px);
          }
        }

        .content {
          position: relative;
          padding: 10px 20px;
          min-height: 150px;

          &::after {
            content: '';
            position: absolute;
            top: 15px;
          }

          h4 {
            margin-bottom: 0;
            color: #A05B0E;
            font-family: 'Core Sans A 45';
            font-size: 18px;
          }

          p {
            font-family: 'Core Sans A 35';
            color: #6C3D09;
            padding-top: 10px;
          }

          button {
            background: linear-gradient(0deg, #DC8744 0%, #FCD561 100%);
            color: #FFFFFF;
            font-size: 21px;
            font-family: 'Core Sans A 55';
            width: 100%;
            max-width: 254px;
            line-height: 26px;
            height: 43px;
            border: none;
          }
        }
      }
    }
  }

  #features-section {
    padding-top: 10px;

    @include mobile {
      padding-bottom: 20px;
    }
  }

  #features-section > .tile {
    margin: 0 auto 60px auto;

    h3 {
      font-family: 'Core Sans A 45';
      font-size: 20px;

      @include tablet {
        font-size: 24px;
        margin-bottom: 10px;
      }

      color: #6C3D09;
    }

    .is-parent {
      margin-bottom: 50px;
    }

    .is-vertical {
      & > .tile:first-child {
        & > .is-parent:first-child {
          p {
            @include tablet {
              padding-right: 15px;
            }
          }
        }

        & > .is-parent:last-child {
          p {
            @include tablet {
              padding-right: 20px;
            }
          }
        }
      }

      & > .tile:nth-child(2) {
        & > .is-parent:first-child {
          p {
            @include tablet {
              padding-right: 20px;
            }
          }
        }

        & > .is-parent:last-child {
          p {
            @include tablet {
              padding-right: 17px;
            }
          }
        }
      }

      & > .tile:last-child {
        p {
          @include tablet {
            padding-right: 10px;
          }
        }
      }
    }

    p {
      padding-top: 0;

      @include mobile {
        line-height: 24px;
        font-size: 15px;
      }
    }

    figure {
      margin-right: 0;
      margin-left: -5px;
    }

    .image {
      height: 115px;
      width: 115px;
      border-radius: 11px;
      background-image: linear-gradient(to top, #FCE9B9, #FFFFFF);
      box-shadow: 2px 8px 35px #6C3D0950;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 90px;
      }
    }

    .media-left {
      float: left;

      p {
        padding-top: 0;
      }
    }

    .media-content {
      margin-left: 130px;
    }

    @include mobile {
      margin-bottom: 10px;

      .image {
        height: 70px;
        width: 70px;
      }

      .media-content {
        margin-left: 80px;
      }
    }
  }

  #legacy-section {
    padding-top: 20px;

    @include tablet {
      padding-top: 0;
      margin-bottom: 100px;
    }

    h3 {
      margin-bottom: 30px;

      @include tablet {
        font-size: 30px;
      }
    }

    .reservation-sale {
      max-width: 80%;
      width: 493px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      opacity: .99;
      margin-top: 25px;
      margin-bottom: 25px;

      @media (max-width: 360px) {
        max-width: 75%;
      }

      .bookmark {
        width: calc(100% + 50px);
        background-color: #A05B0E;
        font-family: 'Core Sans A 45';
        margin-left: -25px;
        position: relative;
        color: #FEF7E3;
        font-size: 22px;
        display: flex;
        letter-spacing: 1px;
        justify-content: center;
        align-items: center;
        height: 43px;
        background: linear-gradient(90deg, #A05B0E 0%, #BB8418 47.52%, #D4A612 100%);

        @include touch {
          font-size: 15px;
        }

        @media (max-width: 360px) {
          font-size: 12px;
        }

        & > div {
          position: absolute;
        }

        .left-mark {
          left: 0;
          top: 6px;
          transform: translateX(calc(-100% + 5px));
          z-index: -1;
          border-top: 21px solid #914B0E;
          border-bottom: 21px solid #914B0E;
          border-right: 12px solid #914B0E;
          border-left: 12px solid transparent;
        }

        .right-mark {
          z-index: -1;
          top: 6px;
          right: 0;
          transform: translateX(calc(100% - 5px));
          border-top: 21px solid #C08B17;
          border-bottom: 21px solid #C08B17;
          border-right: 12px solid transparent;
          border-left: 12px solid #C08B17;
        }

        .left-shadow {
          bottom: 0;
          left: 1px;
          border-top: 3.5px solid transparent;
          border-bottom: 3.5px solid transparent;
          border-right: 3.5px solid #432300;
          border-left: 3.5px solid transparent;
          transform: rotate(135deg) translate(33%, -42%);
          transform-origin: center center;
        }

        .right-shadow {
          bottom: 0;
          right: 1px;
          border-top: 3.5px solid transparent;
          border-bottom: 3.5px solid transparent;
          border-right: 3.5px solid transparent;
          border-left: 3.5px solid #432300;
          transform: rotate(-135deg) translate(-33%, -42%);
          transform-origin: center center;
        }
      }

      .info {
        background-color: rgba(108,61,9, .04);
        height: 92px;
        width: calc(100% + 40px);
        transform: translateX(-20px);
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 10px 16px;
        border-bottom-right-radius: 6.72px;
        border-bottom-left-radius: 6.72px;

        @include touch {
          height: 62px;
          padding: 5px 10px;
        }

        .vertical-divider {
          height: 35px;
          width: 2.1px;
          opacity: 0.2;
          background-color: #6C3D09;
          margin-bottom: 5px;
        }

        .item {
          text-align: center;

          .squared {
            position: relative;

            &::after {
              content: '2';
              position: absolute;
              top: 5px;
              right: 0;
              font-size: 16px;
              transform: translateX(100%);

              @include mobile {
                font-size: 11.3px;
                top: 3px;
              }
            }
          }

          &:last-child {
            .squared {
              &::after {
                transform: translateX(80%);

                @include mobile {
                  transform: translateX(5%);
                }

                @media screen and (max-width: 370px) {
                  transform: translateX(-80%);
                }
              }
            }
          }

          & > span {
            font-family: 'Core Sans A 45';
            color: #444444;
            font-size: 14px;

            @include touch {
              font-size: 11px;
            }
          }

          & > div {
            color: #6C3D09;
            font-family: 'Core Sans A 55';
            font-size: 33px;

            @include touch {
              font-size: 22.59px;
            }

            @media (max-width: 360px) {
              font-size: 17.59px;
            }
          }
        }
      }
    }

    table {
      background-color: transparent;

      thead {
        display: none;
      }

      tr {
        &:nth-child(even) {
          background-color: rgba(108,61,9,0.05);

          td:first-child() {
            border-top-left-radius: 11px;
            border-bottom-left-radius: 11px;
          }

          td:last-child() {
            border-top-right-radius: 11px;
            border-bottom-right-radius: 11px;
          }
        }

        td, th {
          border: none;

          &:first-child() {
            color: #444444;
            font-family: 'Core Sans A 65';
          }

          &:last-child() {
            color: #6C3D09;
            font-family: 'Core Sans A 45';
          }
        }
      }
    }
  }

  .bottom-cta {
    background-image: url(../assets/bottom_cta_background.jpg);
    height: 277px;
    padding: 0;

    @include mobile {
      padding: 50px 0;
    }

    @media screen and (max-width: 500px) {
      background-image: url(../assets/reserve-mobile.jpg);
      background-size: cover;
    }

    .content {
      width: 100%;
      .is-reserve {
        width: 220px;
        font-size: 20px;
      }
    }

    h3 {
      font-weight: 300;
      margin-bottom: 0;
    }

    button.is-reserve {
      box-shadow: inset 0 1px 3px 0 rgba(255,255,255,0.5);
      text-shadow: -1px -1px 0 rgba(0,0,0,0.5);
      line-height: 28px;
    }

    h3, h4 {
      color: #fff;
      font-size: 30px;

      @include mobile {
        font-size: 24px;
        line-height: 32px;
      }
    }

  }

  #why-purchase-section {
    background-size: cover;
    padding-top: 50px;
    padding-bottom: 50px;
    background:  url(../assets/strip_pattern_gray.png),
      linear-gradient(180deg, #DBAB7D 0%, #B48C68 100%),
      linear-gradient(227.26deg, rgba(255,255,255,0.64) 0%, rgba(0,0,0,0.5) 100%);

    .container {
      & > h2 {
        color: #FEF7E3;
        margin-bottom: 30px;
        letter-spacing: 1px;
        padding: 0 10px;

        @include mobile {
          font-size: 24px;
        }
      }

      .title {
        font-size: 22px;
        font-family: 'Core Sans A 45';
        color: #6C3D09;
        margin-bottom: .5rem;
        letter-spacing: 1px;
      }

      p {
        color: white;
        font-family: 'Core Sans A 35';
        margin-top: 0;
        font-size: 16px;
        line-height: 24px;

        @include tablet {
          padding-right: 20px;
        }
      }

      .columns {
        justify-content: center;

        .column {
          margin-bottom: 30px;

          &:first-child {
            @include tablet {
              margin-right: 30px;
            }
          }
        }

        @include fullhd {
          padding-left: 50px;
        }
      }
    }
  }

  #timeline-section {
    padding-top: 73px;
    font-size: 24px;

    & > h3 {
      color: #6C3D09;
      margin-bottom: 60px;
      font-size: 24px;

       @include tablet {
        font-size: 30px;
        margin-bottom: 80px;
      }
    }

    .is-parent {
      @include tablet {
        flex-direction: column;
      }
    }

    .is-child {
      .notification {
        background: linear-gradient(324.2deg, rgb(255, 250, 236) 0%, rgb(253, 252, 246) 100%);
        position: relative;

        &::after {
          content: '';
          position: absolute;
          top: 0;
          z-index: -1;
          left: 5px;
          right: 5px;
          bottom: 0;
          opacity: .2;
          box-shadow: 0 10px 20px 0 #6C3D09;
        }

        h3 {
          font-family: 'Core Sans A 45';
          color: #6C3D09;
          font-size: 24px;
          margin-bottom: 0;
          letter-spacing: 0.5px;
          line-height: 30px;
        }

        p {
          font-family: 'Core Sans A 35';
          font-size: 18px;
        }

        .v-line {
          position: absolute;
          right: -31.5px;
          z-index: -2;
          background-color: #FFF3D0;
          width: 3px;
          height: 285px;
          transform: translateY(115px);

          @include tablet {
            height: 450px;
            transform: translateY(130px);
          }

          @include desktop {
            transform: translateY(125px);
          }

          @include fullhd {
            right: -35.5px;
            transform: translateY(110px);
          }
        }

        .timeline-date {
          position: absolute;
          top: -35px;
          left: 7%;
          z-index: -1;
          display: flex;
          align-items: center;
          white-space: nowrap;

          @include tablet {
            top: 50%;
            left: 106%;
            transform: translateY(-50%);
            margin-top: 0;
          }

          @include desktop {
            left: 105%;
          }

          .dot {
            position: relative;
            border-radius: 50%;
            width: 13px;
            height: 13px;
            background-color: #6C3D09;
            margin-right: 30px;

            &::before {
              content: '';
              position: absolute;
              z-index: -1;
              bottom: 0;
              left: 50%;
              width: 3px;
              height: 30px;
              background-color: rgba(108,61,9,0.1);
              transform: translate(-50%, 100%);

              @include tablet {
                display: none;
              }
            }

            &::after {
              content: '';
              position: absolute;
              top: 50%;
              right: 0;
              transform: translate(100%, -50%);
              width: 26px;
              height: 3px;
              background-color: rgba(108,61,9,0.1);

              @include tablet {
                transform: translate(-50%, -50%);
                background-color: #FFF3D0;
              }
            }
          }

          h4 {
            color: #6C3D09;
            font-size: 24px;

            @include touch {
              font-size: 18px;
            }
          }
        }
      }

      &:not(:first-child()) {
        .notification {
          margin-top: 100px;

          @include tablet {
            margin-top: 0;
          }

          .dot::before {
            height: 150px;
            transform: translate(-50%, 30px)
          }
        }
      }

      &:nth-child(odd) {
        @include tablet {
          margin-left: calc(8.33333% - 20px);
        }
      }

      &:nth-child(even) {
        @include tablet {
          align-self: flex-end;
          margin-right: calc(8.33333% - 20px);
        }

        @include fullhd {
          margin-right: calc(8.33333% - 24px);
        }

        .v-line {
          right: calc(100% + 32.5px);
        }

        .timeline-date {
          @include tablet {
            flex-direction: row-reverse;
            left: -48.5%;
          }

          @include desktop {
            left: -237px;
          }

          .dot {
            @include tablet {
              margin-right: 0px;
              margin-left: 30px;

              &::after {
                transform: translate(100%, -50%);
              }
            }
          }
        }
      }

      &:last-child {
        .v-line {
          @include tablet {
            transform: translateY(115px);
          }
        }
      }
    }
  }

  #gallery {
    height: 605px;
    padding: 50px;
    background: linear-gradient(180deg, #A57015 0%, #6C3D09 100%);
    position: relative;
    z-index: 1;

    @include mobile {
      height: 416px;
      padding: 20px 0;
    }

    @include desktop-only {

    }

    .noise {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      background-color: rgba(0, 0, 0, .4);
      background-image: url(../assets/mobile_menu_noise.png);
    }

    h3 {
      color: #FEF7E3;
    }

    .image-holder {
      margin: 30px 0 40px 0;

      img {
        height: 100%;
      }
    }

    .image-holder + a {
      border: none;
      height: 44px;
      width: 181px;
      border-radius: 25px;
      color: #FEF7E3;
      background: linear-gradient(180deg, #D2A478 0%, #9D6F3F 98.86%);
      font-family: 'Core Sans A 55';
      letter-spacing: .5px;
      font-size: 16px;
    }
  }

  .home-gallery-video {
    position: relative;

    & img {
      cursor: pointer;
    }

    & .preview-logo {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      width: 100px;
      height: 90px!important;
    }
  }

  #tours {
    height: 805px;
    padding: 80px 20px;

    @include mobile {
      height: 445px;
      padding: 60px 20px;
    }

    h3 {
      margin-bottom: 20px;
    }
  }

  #faq {
    padding-top: 50px;

    @include tablet {
      padding-bottom: 50px;
    }

    & > h3 {
      margin-bottom: 30px;
    }

    .columns {
      justify-content: center;

      .column {
        @include tablet {
          max-width: 621px;
          padding-left: 22px;
          padding-right: 22px;
        }
      }
    }

    .accordion {
      .accordion-item {
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
      }

      .header {
        display: flex;
        justify-content: space-between;
        cursor: pointer;

        h3 {
          font-family: 'Core Sans A 45';
          letter-spacing: 1px;
          color: #6C3D09;
          font-size: 20px;
          line-height: 29px;
          padding-right: 10px;

          @include tablet {
            font-size: 23px;
          }
        }

        .toggle {
          color: #6C3D09;
          font-size: 23px;
          background-color: transparent;
          border: none;

          & > span {
            display: flex;
            height: 34px;
            width: 12px;
            align-items: center;
          }
        }
      }

      .content {
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(108,61,9, .3);
        transform-origin: top;
      }
    }
  }

  #footer {
    background-image: url('../assets/hero_bg.png');
    background-position: center top;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 50px;
    position: relative;
    z-index: 1;

    @include mobile {
      background-image: url('../assets/hero_bg_touch.jpg');
    }

    @include tablet {
      margin-top: 150px;
      padding-top: 75px;
      padding-bottom: 35px;
    }

    @media screen and (min-width: 1024px) {
      background-image: url('../assets/hero_bg_desktop.jpg');
    }

    @include widescreen {
      background-image: url('../assets/hero_bg_widescreen.jpg');
    }

    @include fullhd {
      background-image: url('../assets/hero_bg_fullhd.jpg');
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: -1;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, .1);
    }

    .bg-box {
      border-radius: 5px;
      position: relative;

      @include tablet {
        box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.5), 0 10px 25px 0 rgba(0,0,0,0.5);
        background-color: rgba(254,247,227,0.2);
        padding: 30px;
        max-width: 841px;
        margin: auto;
      }

      .column {
        &:first-child() {
          padding-bottom: calc(15px - .75rem);

          .input-wrapper:first-child() {
            margin-bottom: 15px;
          }

          @include tablet {
            padding-bottom: .75rem;
            order: 2;
          }
        }

        &:nth-child(2) {
          @include tablet {
            order: 3;
          }
        }

        &:last-child() {
          display: flex;
          justify-content: center;

          @include tablet {
            flex-direction: column;
            justify-content: flex-start;
            order: 1;
            max-width: 235px;
          }

          & > div {
            line-height: 20px;
          }

          a {
            color: #FEF7E3;
            font-family: 'Core Sans A 55';
            font-size: 32px;

            @include tablet {
              font-size: 13px;
            }

            svg {
              margin-right: 13px;
              margin-left: 13px;

              @include tablet {
                margin-right: 5px;
                margin-left: 5px;
              }
            }
          }
        }

        .input-wrapper {
          position: relative;

          input {
            background-color: white;
            color: #444444;
            height: 42px;
            border: none;

            &::placeholder {
              color: #444444;
            }
          }

          textarea {
            color: #444444;
            background-color: white;
            border: none;
            height: 100px;
            margin-bottom: 15px;
            position: relative;

            @include tablet {
              margin-bottom: 0;
            }

            &::placeholder {
              color: #444444;
            }
          }

          .tooltip {
            display: none;
            align-items:center;
            position: absolute;
            width: 169px;
            height: 29px;
            background-color: #D0021B;
            border-radius: 5px;
            font-family: 'Core Sans A 45';
            font-size: 14px;
            padding: 6px;
            color: white;
            z-index: 2;
            bottom: -37px;
            left: 0;

            .arrow {
              position: absolute;
              left: 15px;
              top: -7px;
              width: 0;
              height: 0;
              border-left: 7px solid transparent;
              border-right: 7px solid transparent;
              border-bottom: 7px solid #D0021B;
            }
          }

          &.invalid {
            input,
            textarea {
              border: 3px solid #D0021B;
            }

            .tooltip {
              display: flex;
            }
          }
        }

        .button-wrapper {
          text-align: right;

          @include tablet {
            position: absolute;
            right: 30px;
            bottom: 0;
            transform: translateY(50%);
          }

          button {
            height: 34px;
            width: 99px;
            background: linear-gradient(0deg, #FCE9B9 0%, #FFFFFF 100%);
            box-shadow: 0 10px 15px 0 rgba(108,61,9,0.5);
            color: #6C3D09;
            font-family: 'Core Sans A 65';
          }
        }
      }
    }

    .footer-links {
      margin-top: 50px;

      .links {
        a {
          font-size: 14px;
          color: #FEF7E3;
          font-family: 'Core Sans A 55';
          margin-right: 15px;
          margin-left: 15px;
          text-transform: uppercase;
        }
      }

      h5 {
        color: #FFFFFF;
        opacity: .5;
        font-family: 'Core Sans A 35';
        font-size: 14px;
        margin-top: 20px;

      }

      @include mobile {
        margin-top: 30px;

        h5 {
          margin-top: 13px;
        }
      }
    }
  }
}
</style>
