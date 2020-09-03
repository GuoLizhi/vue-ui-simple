<template>
  <div id="white-space">
    <p class="title">WhiteSpace Example</p>
    <div class="example-item">
      <p class="tit">Basic</p>
      <div class="block">Block</div>
      <lz-white-space size="xs"></lz-white-space>
      <div class="block">Block</div>
      <lz-white-space size="sm"></lz-white-space>
      <div class="block">Block</div>
      <lz-white-space size="md"></lz-white-space>
      <div class="block">Block</div>
      <lz-white-space size="lg"></lz-white-space>
      <div class="block">Block</div>
      <lz-white-space size="xl"></lz-white-space>
    </div>
  </div>
</template>
<script>
import WhiteSpace from '@/components/white-space/'
import Vue from 'vue'
Vue.use(WhiteSpace)
export default {

}
</script>
<style lang="scss">
#white-space {
  padding-top: 30px;
  min-height: 100vh;
  box-sizing: border-box;
}

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

.block {
  background: #ebebef;
  color: #333;
  text-align: center;
  line-height: 40px;
  height: 40px;
}
</style>
