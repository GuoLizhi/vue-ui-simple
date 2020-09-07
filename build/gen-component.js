const readline = require('readline')
const fs = require('fs')
const path = require('path')

const componentTpl = (componentName = '') => `<template>
  <div class="lz-${componentName}"></div>
</template>
<script>
export default {
  name: 'lz-${componentName}'
}
</script>
<style lang="scss">
</style>
`

const componentEntryTpl = (componentName = '') => `import ${toCamelCase(componentName)} from './${componentName}'
${toCamelCase(componentName)}.install = (Vue) => {
  Vue.component(${toCamelCase(componentName)}.name, ${toCamelCase(componentName)})
}
export default ${toCamelCase(componentName)}
`

const viewTpl = (componentName = '') => `<template>
<div id="${componentName}">
  <p class="title">${toCamelCase(componentName)} examples</p>
  <div class="example-item">
  </div>
</div>
</template>
<script>
import ${toCamelCase(componentName)} from '@/components/${componentName}/'
import Vue from 'vue'
Vue.use(${toCamelCase(componentName)})

export default {
}
</script>
<style lang="scss" scoped>
</style>
`

const toCamelCase = (componentName) => {
  return componentName.split('-').map(item => {
    return item[0].toUpperCase() + item.slice(1)
  }).join('')
}

function readSyncByRl (tips) {
  tips = tips || '> '

  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.question(tips, (answer) => {
      rl.close()
      resolve(answer.trim())
    })
  })
}

function fsExistsSync (path) {
  try {
    fs.accessSync(path)
  } catch (e) {
    return false
  }
  return true
}

function resolve (dir) {
  return path.resolve(__dirname, '../src', dir)
}

async function init () {
  const componentName = await readSyncByRl('请输入组件名称，横杠模式，比如"white-space": ')
  if (!/^[a-z-]+$/.test(componentName)) {
    console.log('组件名称有误，请重新输入')
    await init()
  }
  const componentDir = resolve(`components/${componentName}`)
  const componentPath = resolve(`components/${componentName}/${componentName}.vue`)
  const componentEntry = resolve(`components/${componentName}/index.js`)
  const demoDir = resolve(`views/${componentName}`)
  const demoPath = resolve(`views/${componentName}/index.vue`)
  if (!fsExistsSync(componentDir)) {
    fs.mkdirSync(componentDir)
  }
  if (!fsExistsSync(demoDir)) {
    fs.mkdirSync(demoDir)
  }
  fs.writeFileSync(componentPath, componentTpl(componentName))
  fs.writeFileSync(componentEntry, componentEntryTpl(componentName))
  fs.writeFileSync(demoPath, viewTpl(componentName))

  console.log(`${componentName}初始化成功!`)
}

init()
