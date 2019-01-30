<template>
  <el-scrollbar ref="componentScrollBar" class="page-component__scroll">
    <div class="page-container page-component">
      <el-scrollbar class="page-component__nav">
        <side-nav :data="navsData" :base="`/component`" />
      </el-scrollbar>
      <div class="page-component__content">
        <router-view class="content" />
        <footer-nav />
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
