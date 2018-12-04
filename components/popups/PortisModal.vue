<template>
  <div class="modal light-modal is-active">
    <div class="modal-background"></div>

    <div class="content">
      <header>
        <button
          class="delete"
          @click="$emit('close')"
          aria-label="close">
        </button>

        <h2 class="has-text-centered">
          {{ $t('portis') }}
        </h2>
      </header>

      <div class="modal-body has-text-centered">
        <p>
          {{ $t('your_will_be_redirected_to_portis') }}
        </p>

        <div>
          <img src="@/assets/portis.png" alt="portis">
        </div>

        <button
          @click="closeHandler"
          class="button">
          {{ $t('continue') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortisModal',
  methods: {
    closeHandler() {
      // go to portis
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  margin-bottom: 21px;
}
</style>
