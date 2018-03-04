## Card 卡片

将信息聚合在卡片容器中展示。

### 基础用法

包含标题，内容和操作。

Card 组件包括`header`和`body`部分，`header`部分需要有显式具名 slot 分发，同时也是可选的。

鼠标悬浮或触屏点击时，阴影渐变。

<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>

### 简单卡片

卡片可以只有内容区域。

<el-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>

### 带图片

可配置定义更丰富的内容展示。

配置`body-style`属性来自定义`body`部分的`style`，我们还使用了布局组件。

<el-row>
  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '20px' }">
      <img src="../assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span>Vue</span>
        <div class="bottom clearfix">
          <span class="description">渐进式 JavaScript 框架</span>
          <el-button type="success" plain class="button">按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

<style>
  .description {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>
