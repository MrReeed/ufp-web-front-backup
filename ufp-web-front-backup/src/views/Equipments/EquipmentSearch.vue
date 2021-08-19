<template>
  <div>
    <slot name="equipmentsearch">
      <el-input v-model="input" placeholder="请输入搜索的内容" style="width: 200px"></el-input>
      <el-button type="primary">
        <i class="el-icon-search" style="padding-right: 3px"></i>搜索
      </el-button>
      <el-button type="success">
        <i class="el-icon-plus" style="padding-right: 3px"></i>添加
      </el-button>
      <el-button type="warning">
        <i class="el-icon-download" style="padding-right: 3px"></i>导出
      </el-button>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'EquipmentSearch',
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>

</style>
