<template>
  <el-scrollbar ref="componentScrollBar" class="page-component__scroll">
    <div class="page-container page-component">
      <el-scrollbar class="page-component__nav">
        <side-nav :data="navsData" :base="`/guide`" />
      </el-scrollbar>
      <div class="page-component__content">
        <router-view class="content" />
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      navsData: {
        name: '指南',
        children: [
          {
            path: '/use',
            name: '使用方法'
          },
          {
            path: '/design',
            name: '设计原则'
          }
        ]
      }
    }
  }
}
</script>
