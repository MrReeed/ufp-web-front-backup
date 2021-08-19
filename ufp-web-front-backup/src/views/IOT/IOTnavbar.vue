<template>
  <div id="IOTtabbar">
    <dv-decoration-2 style="width:70%;height:5px;margin-bottom: 6px" />
    <dv-decoration-3 class='dv-decoration-3-1' style="width:250px;height:30px;" />
    <dv-decoration-3 class='dv-decoration-3-2' style="width:250px;height:30px;" />

    <el-header id="IOTnavbar-el-header">
      <div class="iotnamebox firstiotnamebox" :class="{addIOTnameboxCSS:changeIOTnameboxIndex === 0}" @click="changeIOTnamebox(0)">
        <div class="no">
          <div class="no-hd">
            <h1>各系统监测</h1>
          </div>
        </div>
      </div>
      <div class="iotnamebox" :class="{addIOTnameboxCSS:changeIOTnameboxIndex === 1}" @click="changeIOTnamebox(1)">
        <div class="no">
          <div class="no-hd">
            <h1>视频</h1>
          </div>
        </div>
      </div>
      <div class="iotnamebox" :class="{addIOTnameboxCSS:changeIOTnameboxIndex === 2}" @click="changeIOTnamebox(2)">
        <div class="no">
          <div class="no-hd">
            <h1>设备</h1>
          </div>
        </div>
      </div>
      <div class="iotnamebox" :class="{addIOTnameboxCSS:changeIOTnameboxIndex === 3}" @click="changeIOTnamebox(3)">
        <div class="no">
          <div class="no-hd">
            <h1>NB设备</h1>
          </div>
        </div>
      </div>
      <div class="iotnamebox" :class="{addIOTnameboxCSS:changeIOTnameboxIndex === 4}" @click="changeIOTnamebox(4)">
        <div class="no">
          <div class="no-hd">
            <h1>无线监测设备</h1>
          </div>
        </div>
      </div>
    </el-header>


    <div id="IOTnavbar-el-main">

      <div class="IOTnavbarmainbox">
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

        <!-- 各系统监测 -->
        <div style="height: 100%;" v-if="changeIOTnameboxIndex === 0">
          <system></system>
        </div>

        <!-- 视频 -->
        <div style="height: 100%;" v-if="changeIOTnameboxIndex === 1">
          <iotvideo></iotvideo>
        </div>

        <!-- 设备 -->
        <div style="height: 100%;" v-if="changeIOTnameboxIndex === 2">
          <equipment></equipment>
        </div>

        <!-- NB设备 -->
        <div style="height: 100%;" v-if="changeIOTnameboxIndex === 3">
          <NBequipment></NBequipment>
        </div>

        <!-- 无线监测设备 -->
        <div style="height: 100%;" v-if="changeIOTnameboxIndex === 4">
          <wirelessequipment></wirelessequipment>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
  import system from "./components/system"
  import iotvideo from "./components/iotvideo"
  import equipment from "./components/equipment"
  import NBequipment from "./components/NBequipment"
  import wirelessequipment from "./components/wirelessequipment"

  export default {
    name: 'IOTnavbar',
    components: {
      system:resolve => {require(['./components/system'],resolve)},
      iotvideo:resolve => {require(['./components/iotvideo'],resolve)},
      equipment:resolve => {require(['./components/equipment'],resolve)},
      NBequipment:resolve => {require(['./components/NBequipment'],resolve)},
      wirelessequipment:resolve => {require(['./components/wirelessequipment'],resolve)},
    },
    data() {
      return {
        activeName: 'first',
        changeIndex: '',
        changeIOTnameboxIndex:0,
      };
    },
    methods:{
      changeIOTnamebox(index){
        this.changeIOTnameboxIndex = index
      }
    },
  }
</script>

<style lang="scss" scoped>
  #IOTtabbar{
    height: 970px;
    position: relative;
  }
  .dv-decoration-3-1{
    position: absolute;
    right: 0px;
    top: 20px;
  }
  .dv-decoration-3-2{
    position: absolute;
    left: 0px;
    top: 20px;
  }
  .dv-decoration-4-1{
    position: absolute;
    left: 0px;
    top: 137px;
  }
  .dv-decoration-4-2{
    position: absolute;
    right: 0px;
    top: 137px;
  }
  .dv-decoration-4-3{
    position: absolute;
    left: 0px;
    bottom: 9px;
  }
  .dv-decoration-4-4{
    position: absolute;
    right: 0px;
    bottom: 9px;
  }

  .dv-decoration-1{
    position: absolute;
    bottom: 45px;
    left: 55px;
  }
  #IOTnavbar-el-header{
    height: 60px;
  }
  .iotnamebox{
    float: left;
    margin-top: 5px;
    margin-left: 30px;
    height: 40px;
    width: 160px;
    cursor: pointer;
    h1{
      color: #A3D8FA;
      line-height: 40px;
      text-align: center;
    }
  }
  .iotnamebox.firstiotnamebox{
    margin-left: 25%;
  }
  .iotnamebox:hover{
    .no{
      background-color: #ECC46D!important;
      h1{
        color: white;
      }
    }
  }

  .no {
     background-color: #03517d;
   }
  .no .no-hd {
    position: relative;
  }
  .no .no-hd::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 70px;
    height: 20px;
    border-top: 2px solid #03d0e3;
    border-left: 2px solid #03d0e3;
  }
  .no .no-hd::after {
    position: absolute;
    bottom: 0;
    right: 0;
    content: "";
    width: 158px;
    height: 20px;
    border-right: 2px solid #03d0e3;
    border-bottom: 2px solid #03d0e3;
  }

  .addIOTnameboxCSS{
    .no{
      background-color: #ECC46D!important;
      h1{
        /*color: #0c89da;*/
        /*color: #A3D8FA;*/
        /*color: #ceebfd;*/
        color: white;
      }
    }
  }


  .IOTnavbarmainbox{
    /*height: 670px;*/
    height: 97%;
    width: 97%;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid #00B0FF;
    background-color: rgba(0, 95, 153,.2);
    /*border: 1px solid yellow;*/
    box-shadow: 0px 0px 6px #2C58A6;
    position: relative;
  }
  #IOTnavbar-el-main{
    height: 910px;
  }


  .t_line_box {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .t_line_box i{
    background-color: #00B0FF;
    box-shadow: 0px 0px 20px #4788fb;
    position: absolute;
  }

  .l_t_line{
    width: 6px;
    height: 50px;
    left: -4px;
    top: -2px;
  }
  .t_l_line{
    height: 6px;
    width: 50px;
    left: -4px;
    top: -2px;
  }
  .r_t_line{
    width: 6px;
    height: 50px;
    right: -4px;
    top: -2px;
  }
  .t_r_line{
    height: 6px;
    width: 50px;
    right: -4px;
    top: -2px;
  }
  .l_b_line{
    width: 6px;
    height: 50px;
    left: -4px;
    bottom: -2px;
  }
  .b_l_line{
    height: 6px;
    width: 50px;
    left: -4px;
    bottom: -2px;
  }
  .r_b_line{
    width: 6px;
    height: 50px;
    right: -4px;
    bottom: -2px;
  }
  .b_r_line{
    height: 6px;
    width: 50px;
    right: -4px;
    bottom: -2px;
  }


  .border-box-content{
    /*height: 650px;*/
    width: 100%;
    /*border: 1px solid red;*/
  }
  /*.nav-font{*/
    /*margin-left: 20px;*/
    /*margin-right: 20px;*/
    /*font-size: 20px;*/
    /*color: #ffffff;*/
  /*}*/
  .el-tabs__item{
    color: #fff;
  }
  .el-tabs__nav-wrap::after{
    display: none;
  }
  #IOTtabbar>.el-tabs__item{
    color: red;
  }
  #IOTtabbar>.el-tabs__item.is-active{
    color: yellow;
  }

  .el-tabs__item.is-active{
    color: #ECC46D;
  }
  /* 副navbar选中后的底部小条 */
  .el-tabs__active-bar{
    display: none;
    /*background-color: #ECC46D;*/
    /*height: 3px;*/
  }
  #i{
    margin: 0 20px 0 20px;
    color: #a3d8fa;
    font-family: '微软雅黑';
    font-style: normal;
  }

</style>
