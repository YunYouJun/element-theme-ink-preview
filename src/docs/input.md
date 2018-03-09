<script>
  export default {
    data() {
      return {
        restaurants: [],
        input: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        input10: '',
        textarea: '',
        textarea2: '',
        textarea3: '',
        select: '',
      };
    }
  };
</script>

<style lang="scss">
  .el-select .el-input {
    width: 130px;
  }
  .el-input {
    width: 180px;
  }
  .el-textarea {
    width: 414px;
  }
  .el-input-group {
    width: 100%;
  }
  .demo-input-size {
    .el-input {
      vertical-align: top;
      margin: 0 10px 10px 0;
    }
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .demo-autocomplete {
    text-align: center;

    .sub-title {
      margin-bottom: 10px;
      font-size: 14px;
      color: #8492a6;
    }

    .el-col:not(:last-child) {
      border-right: 1px solid rgba(224,230,237,0.50);
    }

    .el-autocomplete {
      text-align: left;
    }
  }
  .el-autocomplete-suggestion.my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .name {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .addr {
        font-size: 12px;
        color: #b4b4b4;
      }
      .highlighted .addr {
        color: #ddd;
      }
    }
  }
  .demo-input-suffix {
    margin-bottom: 15px;
    .el-input {
      margin-right: 15px;
    }
  }
</style>

## Input 输入框

通过鼠标或键盘输入字符

### 基础用法

[Input](http://element.eleme.io/#/zh-CN/component/input)

<el-input v-model="input" placeholder="请输入内容"></el-input>

### 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

<el-input
  placeholder="请输入内容"
  v-model="input1"
  :disabled="true">
</el-input>

### 带 icon 的输入框

带有图标标记输入类型

可以通过 `prefix-icon` 和 `suffix-icon` 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。

<div>
<div class="demo-input-suffix">
  属性方式：
  <el-input
    placeholder="请选择日期"
    suffix-icon="el-icon-date"
    v-model="input">
  </el-input>
  <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input1">
  </el-input>
</div>
<div class="demo-input-suffix">
  slot 方式：
  <el-input
    placeholder="请选择日期"
    v-model="input2">
    <i slot="suffix" class="el-input__icon el-icon-date"></i>
  </el-input>
  <el-input
    placeholder="请输入内容"
    v-model="input3">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
</div>
</div>

### 文本域

<el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>

### 可自适应文本高度的文本域

通过设置 `autosize` 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 `autosize` 还可以设定为一个对象，指定最小行数和最大行数。

<el-input
  type="textarea"
  autosize
  placeholder="请输入内容"
  v-model="textarea2">
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="请输入内容"
  v-model="textarea3">
</el-input>

### 复合型输入框

可前置或后置元素，一般为标签或按钮

可通过 slot 来指定在 input 中前置或者后置内容。

<div>
  <el-input placeholder="请输入内容" v-model="input3">
    <template slot="prepend">Http://</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="请输入内容" v-model="input4">
    <template slot="append">.com</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>

### 尺寸

<div class="demo-input-size">
  <el-input
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input6">
  </el-input>
  <el-input
    size="medium"
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input7">
  </el-input>
  <el-input
    size="small"
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input8">
  </el-input>
  <el-input
    size="mini"
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input9">
  </el-input>
</div>
