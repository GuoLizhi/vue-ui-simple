<template>
  <div class="lz-flexbox" :class="flexboxClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'lz-flex',
  props: {
    direction: String,
    wrap: String,
    justify: String,
    align: String,
    alignContent: String
  },
  computed: {
    flexboxClass () {
      return [
        this.direction && this.direction !== 'row' ? `lz-flexbox-direction-${this.direction}` : '',
        this.wrap && this.wrap !== 'nowrap' ? `lz-flexbox-${this.wrap}` : '',
        this.justify && this.justify !== 'flex-start' ? `lz-flexbox-justify-${this.justify}` : '',
        this.align && this.align !== 'center' ? `lz-flexbox-align-${this.align}` : '',
        this.alignContent && this.alignContent !== 'stretch' ? `lz-flexbox-align-content-${this.alignContent}` : ''
      ]
    }
  }
}
</script>
<style lang="scss">
.lz-flexbox {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;

  // direction
  &-direction-row {
    flex-direction: row;
  }
  &-direction-row-reverse {
    flex-direction: row-reverse;
  }
  &-direction-column {
    flex-direction: column;
  }
  &-direction-column-reverse {
    flex-direction: column-reverse;
  }

  // wrap
  &-wrap {
    flex-wrap: wrap;
  }
  &-nowrap {
    flex-wrap: nowrap;
  }
  &-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  // justify
  &-justify-start {
    justify-content: flex-start;
  }
  &-justify-end {
    justify-content: flex-end;
  }
  &-justify-center {
    justify-content: center;
  }
  &-justify-between {
    justify-content: space-between;
  }
  &-justify-around {
    justify-content: space-around;
  }

  // align
  &-align-start {
    align-items: start;
  }
  &-align-end {
    align-items: end;
  }
  &-align-center {
    align-items: center;
  }
  &-align-baseline {
    align-items: baseline;
  }
  &-align-stretch {
    align-items: stretch;
  }

  // alignContent
  &-align-content-start {
    align-content: start;
  }
  &-align-content-end {
    align-content: end;
  }
  &-align-content-center {
    align-content: center;
  }
  &-align-content-between {
    align-content: space-between;
  }
  &-align-content-around {
    align-content: space-around;
  }
  &-align-content-stretch {
    align-content: stretch;
  }
}
</style>
