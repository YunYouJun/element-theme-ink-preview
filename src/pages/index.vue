<template>
  <el-row class="welcome">
    <el-col :span="24">
      <i class="el-icon-edit"></i>
      <h1>{{ msg }}</h1>
      <el-steps :active="1" finish-status="success" :align-center="true">
        <el-step title="脚手架" description="预览网站"></el-step>
        <el-step title="开发中" description="几个月？"></el-step>
        <el-step title="发布"></el-step>
      </el-steps>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to Element-Theme-Ink'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.welcome {
  padding-top: 80px;
  text-align: center;

  h1 {
    margin: 40px;
  }

  .el-icon-edit {
    font-size: 200px;
  }
}
</style>
