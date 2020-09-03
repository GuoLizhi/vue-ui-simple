<template>
  <div id="wing-blank">
    <p class="title">flex examples</p>
    <div class="example-item">
      <p class="tit">Basic</p>
      <lz-wing-blank>wing-blank-lg</lz-wing-blank>
      <lz-wing-blank size="md">wing-blank-md</lz-wing-blank>
      <lz-wing-blank size="sm">wing-blank-sm</lz-wing-blank>
    </div>
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
.title {
  font-size: 16px;
  font-weight: bold;
  margin-left: 20px;
  color: #333;
}

.example-item {
  .tit {
    font-size: 14px;
    padding: 30px 0 18px 0;
    margin-left: 20px;
  }
}

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
