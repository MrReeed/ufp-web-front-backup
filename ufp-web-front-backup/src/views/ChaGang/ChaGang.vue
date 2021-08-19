<template>
    <div class="box">
      <ChaGangNavbar/>
    </div>
</template>

<script>
import NavHeader from '@/views/home/components/NavHeader'
import ChaGangNavbar from './ChaGangNavbar'

export default {
  name: 'ChaGang',
  components: {
    ChaGangNavbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.box {
  /*float: none;*/
  display: block;
  width: 100%;
  height: 100%;
  /*width: 1920px;*/
  /*height: 1080px;*/
  /*position: relative;*/
  background: url("../IOT/components/img/bg.jpg") no-repeat center;
  /* no-repeat top center 表示背景不平铺，且垂直靠上 */
}
</style>
