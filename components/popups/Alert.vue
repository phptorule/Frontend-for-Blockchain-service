<template>
  <div class="modal light-modal is-active">
    <div class="modal-background"></div>

    <div class="modal-wrapper">
      <div class="content">
        <header>
          <button
            class="delete"
            @click="$emit('close')"
            aria-label="close">
          </button>

          <h2 class="has-text-centered">
            {{ $t('thank_you') }}
          </h2>
        </header>

        <div class="modal-body has-text-centered">
          <p>
            {{ $t('your_message_been_sent') }}
          </p>

          <p>
            {{ $t('we_will_get_back_as_soon_as_possible') }}
          </p>

          <button
            @click="$emit('close')"
            class="button is-uppercase">
            {{ $t('close') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/derived-variables";
@import "~bulma/sass/utilities/mixins";

  .light-modal {
    .content {
      @include tablet {
        width: 340px;
      }

      .header {
        @include mobile {
          padding-top: 170px;
        }
      }

      .modal-body {
        p {
          padding: 0;
        }
      }

      button {
        width: 140px!important;
      }
    }
  }
</style>
