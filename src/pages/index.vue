<template>
  <el-row class="welcome">
    <el-col :span="24">
      <i class="el-icon-edit is-glow" />
      <br />
      <h1 class="is-glow">
        {{ header }}
      </h1>
      <p>{{ description }}</p>
      <br />
      <el-steps :active="active" finish-status="success" :align-center="true">
        <el-step title="脚手架" description="预览网站" />
        <el-step title="开发中" description="几个月？" />
        <el-step class="is-glow" title="发布" description="1.0.0" />
      </el-steps>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      active: 3,
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

  .is-glow {
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-name: glowing;
    @keyframes glowing {
      from {
        text-shadow: 0 0 0 rgba(#000, 0.1);
      }
      50% {
        text-shadow: 0 0 5px rgba(#000, 0.3);
      }
      to {
        text-shadow: 0 0 0 rgba(#000, 0.1);
      }
    }
  }
}
</style>
