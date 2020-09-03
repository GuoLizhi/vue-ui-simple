<template>
  <div class="lz-flexbox-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'lz-flex-item'
}
</script>
<style lang="scss">
.lz-flexbox-item {
  flex: 1;
}
</style>
