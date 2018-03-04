<template>
  <el-row class="welcome">
    <el-col :span="24">
      <i class="el-icon-edit"></i>
      <br>
      <h1>{{ header }}</h1>
      <p>{{ description }}</p>
      <br>
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
      header: 'Element-Theme-Ink',
      description: 'Dead simple css theme about element.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.welcome {
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1rem;
  }
  padding-top: 80px;
  text-align: center;
  .el-icon-edit {
    font-size: 200px;
  }
}
</style>
