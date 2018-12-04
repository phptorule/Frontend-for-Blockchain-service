<template>
  <div class="wrap" @click="onClick">
    <i class="fas fa-ellipsis-v fa-2x"></i>
  </div>
</template>

<script>
export default {
  name: 'DotsButton',
  props: ['onClick'],
};
</script>

<style scoped>
.fa-ellipsis-v {
  color: #6c3d09;
}

.wrap {
  cursor: pointer;
}
</style>
