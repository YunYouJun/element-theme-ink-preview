<template>
  <el-menu :router="true" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="/" route="/">
      <slot>
        <img
          src="../assets/images/element-logo-small.png"
          alt="element-logo"
          class="nav-logo">
          <span class="nav-logo" style="font-size: 1.5rem;">{{ navbar.brand }}</span>
        <img
          src="../assets/images/element-logo-small.png"
          alt="element-logo"
          class="nav-logo-small">
      </slot>
    </el-menu-item>
    <el-menu-item index="/resource">{{ navbar.resource }}</el-menu-item>
    <el-menu-item index="/component">{{ navbar.components }}</el-menu-item>
    <el-menu-item index="/guide">{{ navbar.guide }}</el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
  .el-menu--horizontal {
    .el-menu-item {
      &:first-child {
        float: left;
      }
      &:not(first-child) {
        float: right;
      }
    }
  }

  .nav-logo,
  .nav-logo-small {
    max-height: 60%;
    vertical-align: middle;
  }

  .nav-logo-small {
    display: none;
  }

  @media (max-width: 850px) {
    .nav-logo {
      display: none;
    }
    .nav-logo-small {
      display: inline-block;
    }
  }
</style>

<script>
export default {
  data () {
    return {
      navbar: {
        brand: 'Ink',
        guide: '指南',
        components: '组件',
        resource: '资源'
      }
    }
  },

  computed: {
    isComponentPage () {
      return /^component/.test(this.$route.name)
    },
    activeIndex () {
      let index = '/'
      if (this.$route.path !== '/') {
        index = this.$route.matched[0].path
      }
      return index
    }
  },

  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>
