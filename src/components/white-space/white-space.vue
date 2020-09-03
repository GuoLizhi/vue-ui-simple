<template>
  <div :class="`lz-white-space-${size}`"></div>
</template>
<script>
export default {
  name: 'lz-white-space',
  props: {
    size: {
      type: String,
      default: 'md'
    }
  }
}
</script>
<style lang="scss">
.lz-white-space {
  &-xs {
    height: 3px;
  }
  &-sm {
    height: 6px;
  }
  &-md {
    height: 9px;
  }
  &-lg {
    height: 15px;
  }
  &-xl {
    height: 21px;
  }
}
</style>
