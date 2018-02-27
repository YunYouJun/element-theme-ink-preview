<template>
  <div id="app">
    <el-container>
      <el-header>
        <main-header></main-header>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer v-show="!isComponent">
        <main-footer></main-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isComponent () {
      return /^component-/.test(this.$route.name || '')
    }
  }
}
</script>

<style lang="scss">
@import 'highlight.js/styles/color-brewer.css';
body {
  margin: 0px;
}

#app {
  font-family: Lato, 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5e6d82;

}

a {
  color: #409EFF;
  text-decoration: none;
}

hr{
  opacity: 0.3;
  margin: 20px;
}

.el-header {
  position: fixed;
  width: 100%;
  z-index: 1;
}

.el-main {
  text-align: justify;
  margin: 0 20px;
}

blockquote {
  margin: 0;
  padding: 0 15px;
  color: #666;
  border-left: 4px solid #ddd;
}

code {
  background-color: #f9fafc;
  padding: 0 4px;
  border: 1px solid #eaeefb;
  border-radius: 4px;
}

.hljs {
  line-height: 1.8;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 12px;
  padding: 18px 24px;
  background-color: #fafafa;
  border: solid 1px #eaeefb;
  margin-bottom: 25px;
  border-radius: 4px;
  -webkit-font-smoothing: auto;
}

.page-container {
  .tip {
    padding: 8px 16px;
    background-color: #ECF8FF;
    border-radius: 4px;
    border-left: #50bfff 5px solid;
    margin: 20px 0;

    code {
      background-color: rgba(255, 255, 255, .7);
      color: #445368;
    }
  }

  .warning {
    padding: 8px 16px;
    background-color: #fff6f7;
    border-radius: 4px;
    border-left: #FE6C6F 5px solid;
    margin: 20px 0;

    code {
      background-color: rgba(255, 255, 255, .7);
      color: #445368;
    }
  }
}
</style>
