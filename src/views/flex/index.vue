<template>
  <div id="flex">
    <p class="title">flex examples</p>
    <div class="example-item">
      <p class="tit">basic</p>
      <lz-flex>
        <lz-flex-item>
          <div class="block">block</div>
        </lz-flex-item>
        <lz-flex-item>
          <div class="block">block</div>
        </lz-flex-item>
      </lz-flex>
      <lz-flex>
        <lz-flex-item>
          <div class="block">block</div>
        </lz-flex-item>
        <lz-flex-item>
          <div class="block">block</div>
        </lz-flex-item>
        <lz-flex-item>
          <div class="block">block</div>
        </lz-flex-item>
      </lz-flex>
      <lz-flex>
        <lz-flex-item>
          <div class="block">block</div>
        </lz-flex-item>
        <lz-flex-item>
          <div class="block">block</div>
        </lz-flex-item>
        <lz-flex-item>
          <div class="block">block</div>
        </lz-flex-item>
        <lz-flex-item>
          <div class="block">block</div>
        </lz-flex-item>
      </lz-flex>
    </div>
    <div class="example-item">
      <p class="tit">Wrap</p>
      <lz-flex>
        <div class="w150">block1</div>
        <div class="w150">block2</div>
        <div class="w150">block3</div>
      </lz-flex>
      <lz-flex wrap="wrap">
        <div class="w150">block1</div>
        <div class="w150">block2</div>
        <div class="w150">block3</div>
      </lz-flex>
      <lz-flex wrap="wrap-reverse">
        <div class="w150">block1</div>
        <div class="w150">block2</div>
        <div class="w150">block3</div>
      </lz-flex>
    </div>
    <div class="example-item">
      <p class="tit">Justify</p>
      <lz-flex>
        <div class="w100">block</div>
        <div class="w100">block</div>
      </lz-flex>
      <lz-flex justify="center">
        <div class="w100">block</div>
        <div class="w100">block</div>
      </lz-flex>
      <lz-flex justify="end">
        <div class="w100">block</div>
        <div class="w100">block</div>
      </lz-flex>
      <lz-flex justify="between">
        <div class="w100">block</div>
        <div class="w100">block</div>
      </lz-flex>
      <lz-flex justify="around">
        <div class="w100">block</div>
        <div class="w100">block</div>
      </lz-flex>
    </div>
  </div>
</template>
<script>
import Flex from '@/components/flex'
import FlexItem from '@/components/flex-item'
import Vue from 'vue'
Vue.use(Flex).use(FlexItem)

export default {}
</script>
<style lang="scss" scoped>
.w100 {
  width: 100px;
  height: 40px;
  background: #ebebef;
  text-align: center;
  line-height: 40px;
  color: #bbb;
  margin-bottom: 10px;

  & + & {
    margin-left: 10px;
  }
}

.w150 {
  width: 150px;
  height: 40px;
  background: #ebebef;
  text-align: center;
  line-height: 40px;
  color: #bbb;
  margin-bottom: 10px;

  & + & {
    margin-left: 10px;
  }
}
#flex {
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
  width: 100%;
  height: 40px;
  background: #ebebef;
  text-align: center;
  line-height: 40px;
  color: #bbb;
}

.lz-flexbox {
  padding: 0 20px;

  & + & {
    margin-top: 10px;
  }
}

.lz-flexbox-item + .lz-flexbox-item {
  margin-left: 10px;
}
</style>
