<style lang="scss">

</style>
<template>
  <el-scrollbar class="page-component__scroll" ref="componentScrollBar">
  <div class="page-container page-component">
    <el-scrollbar class="page-component__nav">
      <side-nav :data="navsData" :base="`/component`"></side-nav>
    </el-scrollbar>
    <div class="page-component__content">
      <router-view class="content"></router-view>
      <footer-nav></footer-nav>
    </div>

  </div>
  </el-scrollbar>
</template>
<script>
/* eslint-disable */
import bus from '../bus'
import navsData from '../nav.config.json';

export default {
  data() {
    return {
      navsData,
      hover: true,
      showBackToTop: false,
      scrollTop: 0,
      showHeader: true,
      componentScrollBar: null,
      componentScrollBoxElement: null
    };
  },
  watch: {
  },
  methods: {
    
  }
};
</script>
