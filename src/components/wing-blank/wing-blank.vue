<template>
  <div class="lz-wingblank" :class="`lz-wingblank-${size}`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'lz-wing-blank',
  props: {
    size: {
      type: String,
      default: 'lg'
    }
  }
}
</script>
<style lang="scss">
.lz-wingblank {
  &-lg {
    margin-left: 15px;
    margin-right: 15px;
  }
  &-md {
    margin: 0 8px;
  }
  &-sm {
    margin: 0 5px;
  }
}
</style>
