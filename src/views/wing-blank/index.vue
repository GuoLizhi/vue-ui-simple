<template>
  <div id="wing-blank">
    <lz-wing-blank>wing-blank-lg</lz-wing-blank>
    <lz-wing-blank size="md">wing-blank-md</lz-wing-blank>
    <lz-wing-blank size="sm">wing-blank-sm</lz-wing-blank>
  </div>
</template>
<script>
import WingBlank from '@/components/wing-blank/'
import Vue from 'vue'
Vue.use(WingBlank)

export default {

}
</script>
<style lang="scss" scoped>
#wing-blank {
  padding-top: 30px;
  min-height: 100vh;
  box-sizing: border-box;
  background: #f5f5f9;
}

.lz-wingblank {
  height: 40px;
  background: #ebebef;
  color: #333;
  line-height: 40px;
  text-align: center;
  margin-bottom: 10px;
}
</style>
