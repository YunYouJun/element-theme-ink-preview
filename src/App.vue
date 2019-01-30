<template>
  <div id="app">
    <el-container>
      <el-header>
        <main-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer v-show="!isComponent">
        <main-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isComponent() {
      return /^component-/.test(this.$route.name || '')
    }
  }
}
</script>

<style lang="scss"></style>
