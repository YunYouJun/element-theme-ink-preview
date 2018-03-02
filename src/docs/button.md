<style lang="scss" scoped>
  .el-button{
    margin: 5px;
  }
  .el-button-group {
    margin-bottom: 10px;

    .el-button + .el-button {
      margin-left: 0;
    }

    & + .el-button-group {
      margin-left: 10px;
    }
  }
</style>

## Button 按钮
常用的操作按钮。

### 基础样式

使用`type`、`plain`和`round`属性来定义 Button 的样式。

增加 `type='dark'` 类型
```html
<el-button type='dark' plain>深色按钮</el-button>
```

<!-- <div>
  <el-button>默认按钮</el-button>
  <el-button type="dark">深色按鈕</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</div> -->

<div style="margin: 20px 0">
  <el-button plain>朴素按钮</el-button>
  <el-button type="dark" plain>深色按钮</el-button>
  <el-button type="primary" plain>主要按钮</el-button>
  <el-button type="success" plain>成功按钮</el-button>
  <el-button type="info" plain>信息按钮</el-button>
  <el-button type="warning" plain>警告按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
</div>

<div>
  <el-button plain round>圆形按钮</el-button>
  <el-button type="dark" plain round>深色按钮</el-button>
  <el-button type="primary" plain round>主要按钮</el-button>
  <el-button type="success" plain round>成功按钮</el-button>
  <el-button type="info" plain round>信息按钮</el-button>
  <el-button type="warning" plain round>警告按钮</el-button>
  <el-button type="danger" plain round>危险按钮</el-button>
</div>

### 禁用状态

按钮不可用状态。

你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

<!-- <div>
  <el-button disabled>默认按钮</el-button>
  <el-button type="dark" disabled>深色按钮</el-button>
  <el-button type="primary" disabled>主要按钮</el-button>
  <el-button type="success" disabled>成功按钮</el-button>
  <el-button type="info" disabled>信息按钮</el-button>
  <el-button type="warning" disabled>警告按钮</el-button>
  <el-button type="danger" disabled>危险按钮</el-button>
</div> -->

<div style="margin-top: 20px">
  <el-button plain disabled>朴素按钮</el-button>
  <el-button type="dark" plain disabled>深色按钮</el-button>
  <el-button type="primary" plain disabled>主要按钮</el-button>
  <el-button type="success" plain disabled>成功按钮</el-button>
  <el-button type="info" plain disabled>信息按钮</el-button>
  <el-button type="warning" plain disabled>警告按钮</el-button>
  <el-button type="danger" plain disabled>危险按钮</el-button>
</div>

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

使用`<el-button-group>`标签来嵌套你的按钮。

<el-button-group>
  <el-button type="dark" icon="el-icon-arrow-left">上一页</el-button>
  <el-button type="dark">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
<el-button-group>
  <el-button type="dark" icon="el-icon-edit"></el-button>
  <el-button type="dark" icon="el-icon-share"></el-button>
  <el-button type="dark" icon="el-icon-delete"></el-button>
</el-button-group>

### 加载中

<el-button plain :loading="true">加载中</el-button>
