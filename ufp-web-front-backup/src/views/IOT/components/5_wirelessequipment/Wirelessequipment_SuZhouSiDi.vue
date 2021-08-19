<template>
  <el-container>
    <div class="innerbox">
      <el-header class="wirelessequipment-elheader">
        <h1>暂 无 数 据</h1>
      </el-header>
    </div>
  </el-container>
</template>

<script>
  export default {
    name: 'Wirelessequipment_SuZhouSiDi'
  }
</script>

<style lang="scss">
  .innerbox{
    background-color: rgba(158, 158, 158,.1);
    border: 1px solid rgba(158, 158, 158,.4);
    box-shadow: 10px 10px 10px -3px rgba(0, 0, 0,.4);
    padding: 5px 10px;
    /*padding-top: 3px;*/
    /*padding-left: 5px;*/
    /*height: 620px;*/
    /*width: 1200px;*/
    height: 850px;
    width: 100%;
    position: relative;
  }

  .wirelessequipment-elheader{
    height: 39px!important;
    background-color: transparent;
    h1{
      color: white;
      line-height: 39px;
      text-align: center;
      font-size: 20px;
      font-weight: 400;
    }
  }

</style>
