<template>
  <div class="main">
    <el-row type="flex" justify="center">
      <el-col class="pageselectedZone" :span="4">
        <el-pagination
          layout="prev, pager, next"
          style="width: 200px"
          :total="50">
        </el-pagination>
      </el-col>
      <el-col :span="3">
        <div class="jumpZone">
          <span>到第</span>
          <el-input style="width: 40px" placeholder="1"></el-input>
          <span>页</span>
          <el-button>确定</el-button>
        </div>
      </el-col>
      <el-col :span="2" style="padding-top: 7px">
        <span style="font-size: 18px;">共{{ rowCount }}条</span>
      </el-col>
      <el-col :span="2" class="dropdownZone">
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
               20条/页<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
          <el-dropdown-menu slot="dropdown" style="left: 925px;top: 305px" >
            <el-dropdown-item>1</el-dropdown-item>
            <el-dropdown-item>1</el-dropdown-item>
            <el-dropdown-item>1</el-dropdown-item>
            <el-dropdown-item>1</el-dropdown-item>
            <el-dropdown-item>1</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SwitchPage',
  data() {
    return {
      rowCount: 0
    }
  }
}
</script>

<style scoped>
.main {
  color: white;
  font-size: 14px;
  text-align: center;
  padding-top: 5px;
}

.dropdownZone {
  padding-top: 7px;
}

.pageselectedZone {
  width: 300px;
  padding-top: 5px;
}

.el-dropdown-link {
  font-size: 18px;
  cursor: pointer;
  color: snow;
}

.el-icon-arrow-down {
  font-size: 12px;
}

</style>
