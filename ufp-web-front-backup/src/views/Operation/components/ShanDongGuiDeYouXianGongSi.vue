<template>
  <div class="content">
    <div class="navBar">
      <div class="shishijiance" @click="ButtonToggle(0)">
        <span>实时监测</span>
      </div>
      <div class="baojingxinxi" @click="ButtonToggle(1)">
        <span>报警信息</span>
      </div>
      <div class="chagang" @click="ButtonToggle(2)">
        <span>查岗</span>
      </div>
      <dv-decoration-3 style="width:250px;height:30px;"/>
      <dv-decoration-8 :reverse="true" style="width:400px;height:50px;"/>
    </div>
    <!--<dv-decoration-10 style="width:80%;height:5px;" />-->
    <div class="main">
      <!-- 这里的4个div是mainbox的边角样式 -->
      <div class="t_line_box">
        <i class="t_l_line"></i>
        <i class="l_t_line"></i>
      </div>
      <div class="t_line_box">
        <i class="t_r_line"></i>
        <i class="r_t_line"></i>
      </div>
      <div class="t_line_box">
        <i class="b_l_line"></i>
        <i class="l_b_line"></i>
      </div>
      <div class="t_line_box">
        <i class="b_r_line"></i>
        <i class="r_b_line"></i>
      </div>

      <ShiShiJianCe v-if="buttonToggleIndex === 0"></ShiShiJianCe>
      <BaoJingXinXi v-if="buttonToggleIndex === 1"></BaoJingXinXi>
      <ChaGang v-if="buttonToggleIndex === 2"></ChaGang>

      </div>
    </div>
</template>

<script>
  import ShiShiJianCe from './ShanDongGuiDeYouXianGongSi/ShiShiJianCe'
  import BaoJingXinXi from './ShanDongGuiDeYouXianGongSi/BaoJingXinXi'
  import ChaGang from './ShanDongGuiDeYouXianGongSi/ChaGang'

  export default {
    name: 'ShanDongGuiDeYouXianGongSi',
    components:{
      ShiShiJianCe,
      BaoJingXinXi,
      ChaGang,
    },
    data() {
      return {
        buttonToggleIndex:0,
      }
    },
    methods:{
      ButtonToggle(index){
        this.buttonToggleIndex = index;
      }
    }

  }
</script>

<style lang="scss" scoped>
  .content {
    height: 100%;
    width: 100%;
    .navBar {
      position: relative;
      height: 60px;
      .shishijiance, .baojingxinxi, .chagang {
        float: left;
        margin: 10px 0 0 40px;
        height: 40px;
        width: 160px;
        border-radius: 20px;
        background-color: #42b9fb;
        text-align: center;
        cursor: pointer;
        span {
          line-height: 40px;
          font-weight: 800;
          font-size: 20px;
          color: #ffffff;
        }
      }
      .shishijiance:hover {
        background-color: #ecc46d;
        border-radius: 10px;
      }
      .baojingxinxi:hover {
        background-color: #ecc46d;
        border-radius: 10px;
      }
      .chagang:hover {
        background-color: #ecc46d;
        border-radius: 10px;
      }
      .dv-decoration-3 {
        position: absolute;
        right: 50px;
        top: -10px;
      }
      .dv-decoration-8 {
        position: absolute;
        right: 0px;
        top: 10px;
      }
    }

    .main {
      margin-top: 15px;
      width: 100%;
      height: 840px;
      position: relative;
      border: 1px solid #00B0FF;
      background-color: rgba(158, 158, 158,.2);
      .t_line_box {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .t_line_box i {
        background-color: #00B0FF;
        box-shadow: 0px 0px 20px #4788fb;
        position: absolute;
      }

      .l_t_line {
        width: 6px;
        height: 50px;
        left: -4px;
        top: -2px;
      }
      .t_l_line {
        height: 6px;
        width: 50px;
        left: -4px;
        top: -2px;
      }
      .r_t_line {
        width: 6px;
        height: 50px;
        right: -4px;
        top: -2px;
      }
      .t_r_line {
        height: 6px;
        width: 50px;
        right: -4px;
        top: -2px;
      }
      .l_b_line {
        width: 6px;
        height: 50px;
        left: -4px;
        bottom: -2px;
      }
      .b_l_line {
        height: 6px;
        width: 50px;
        left: -4px;
        bottom: -2px;
      }
      .r_b_line {
        width: 6px;
        height: 50px;
        right: -4px;
        bottom: -2px;
      }
      .b_r_line {
        height: 6px;
        width: 50px;
        right: -4px;
        bottom: -2px;
      }

    }
  }
</style>
