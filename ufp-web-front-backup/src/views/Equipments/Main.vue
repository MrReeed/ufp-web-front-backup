<template>
  <div class="table">
    <el-table
      ref="multipleTable"
      :data="equipmentlist"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55"
      >
      </el-table-column>
      <el-table-column
        prop="number"
        label="设备编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="设备类型">
      </el-table-column>
      <el-table-column
        prop="address"
        label="设备位置"
      >
      </el-table-column>
      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <slot name="update">
            <el-button @click="handleClick(scope.row)" type="success" size="small">
              <i class="el-icon-edit-outline" style="padding-right: 3px"></i> 编辑
            </el-button>
            <el-button type="primary" size="small">
              <i class="el-icon-setting" style="padding-right: 3px"></i> 设置
            </el-button>
            <el-button type="danger" size="small">
              <i class="el-icon-delete" style="padding-right: 3px"></i> 删除
            </el-button>
          </slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="switchZone">
      <slot name="switchZone">
        <SwitchPage></SwitchPage>
      </slot>
    </div>
  </div>
</template>

<script>
import SwitchPage from '@/views/Equipments/SwitchPage'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Main',
  components: { SwitchPage },
  data() {
    return {
      multipleSelection: []
    }
  },
  computed: {
    ...mapState({
      equipmentlist: state => state.equipment.items
    })
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleClick(row) {
      console.log(row)
    }
  }
}
</script>

<style scoped>
.table {
  width: 100%;
  height: 100%;
}
</style>
