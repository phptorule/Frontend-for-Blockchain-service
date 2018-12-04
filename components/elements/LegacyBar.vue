<template>
  <div class="legacy-bar">
    <div class="is-flex text-between bold">
      <div>
        {{ $t('sold') }}
      </div>

      <div>
        {{ $t('available') }}
      </div>
    </div>

    <progress-bar :value="75" isLight />

    <div class="is-flex text-between">
      <div>
        2,000,000
      </div>

      <div>
        166,667
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar';

export default {
  name: 'LegacyBar',
  components: {
    ProgressBar,
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/derived-variables";
@import "~bulma/sass/utilities/mixins";

.legacy-bar {
  width: 694px;
  max-width: 100%;
  padding: 15px 16px;
  border: 1px solid #E1CC9B;
  margin: auto;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(252,233,185, .5) 0%, #FFFFFF 100%);
  box-shadow: inset 0 4px 18px 0 rgba(160,91,14,0.14);
  font-family: 'Core Sans A 35';
  color: #6C3D09;
  font-size: 24px;

  @include tablet {
    font-size: 30px;
    padding: 20px 35px;
    height: 129px;
  }

  & > div:first-child {
    font-size: 15px;
    font-weight: bold;
    font-family: 'Core Sans A 45';

    @include tablet {
      font-size: 20px;
    }
  }
}

.text-between {
  justify-content: space-between;
}
</style>
