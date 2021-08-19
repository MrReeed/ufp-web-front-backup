<template>
    <div class="box">
      <IOTnavbar />
    </div>
</template>

<script>
import IOTnavbar from './IOTnavbar.vue'
export default {
  name: 'IOT',
  components: {
    IOTnavbar,
  }
}
</script>

<style>
  /** {*/
  /*  margin: 0;*/
  /*  padding: 0;*/
  /*  box-sizing: border-box;*/
  /*}*/

  .box{
    display: block;
    /*width: 100%;*/
    height: 100%;
    width: 1920px;
    /*height: 1080px;*/
    background: url("./components/img/bg.jpg") no-repeat center;
    /* no-repeat top center 表示背景不平铺，且垂直靠上 */
  }
</style>
