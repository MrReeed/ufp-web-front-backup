<template>
  <div id="equipment">
    <el-container class="container">

      <el-aside class="left" width="18%">
        <left-side-list></left-side-list>
      </el-aside>

      <el-container class="right">
        <el-header class="right-header">
          <EquipmentSearch></EquipmentSearch>
        </el-header>
        <el-main class="right-body">
          <Main></Main>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>
import LeftSideList from '@/views/Equipments/LeftSide'
import Main from '@/views/Equipments/Main'
import EquipmentSearch from '@/views/Equipments/EquipmentSearch'

export default {
  name: 'Equipment',
  components: { EquipmentSearch, LeftSideList, Main }
}
</script>

<style scoped>
#equipment {
  height: 100%;
  background-color: rgb(0, 22, 80);
}

.container {
  height: 100%;
  width: 100%;
}

.left {
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;
  /*background-color: rgba(6,41,87,.8);*/
  /*background-color: rgba(111, 211, 247,.5);*/
  background-color: rgba(14, 67, 122,.8);
}

.right {
  height: 100%;
}

.right-header {
  height: 20%;
}

.right-body {
  height: 60%;
}

.right-footer {
  height: 20%;
}
</style>
