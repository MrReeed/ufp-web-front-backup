<template>
  <div id="ChaGangtabbar">
    <dv-decoration-2 style="width:70%;height:5px;margin-bottom: 6px" />
    <!--<dv-decoration-3 class='dv-decoration-3' style="width:250px;height:30px;" />-->
    <dv-decoration-6 class='dv-decoration-3-chagang' style="width:350px;height:40px;" />


    <el-header id="ChaGangnavbar-el-header">
      <div class="ChaGangnamebox firstChaGangnamebox" :class="{addChaGangnameboxCSS:changeChaGangnameboxIndex === 0}" @click="changeChaGangnamebox(0)">
        <div class="no">
          <div class="no-hd">
            <h1>查岗</h1>
          </div>
        </div>
      </div>
      <div class="ChaGangnamebox" :class="{addChaGangnameboxCSS:changeChaGangnameboxIndex === 1}" @click="changeChaGangnamebox(1)">
        <div class="no">
          <div class="no-hd">
            <h1>点名</h1>
          </div>
        </div>
      </div>
      <div class="ChaGangnamebox" :class="{addChaGangnameboxCSS:changeChaGangnameboxIndex === 2}" @click="changeChaGangnamebox(2)">
        <div class="no">
          <div class="no-hd">
            <h1>查岗记录</h1>
          </div>
        </div>
      </div>
      <div class="ChaGangnamebox" :class="{addChaGangnameboxCSS:changeChaGangnameboxIndex === 3}" @click="changeChaGangnamebox(3)">
        <div class="no">
          <div class="no-hd">
            <h1>点名记录</h1>
          </div>
        </div>
      </div>
    </el-header>


    <div id="ChaGangnavbar-el-main">

      <!--
          ********************************************  查岗  *******************************************
      -->
      <div class="ChaGangnavbarmainbox" v-if="changeChaGangnameboxIndex === 0">
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
        <div id="ChaGangnavbar_system" style="height: 100%;">
          <ChaGangList />
        </div>
      </div>

      <!--
          ********************************************  点名  *******************************************
      -->
      <div class="ChaGangnavbarmainbox" v-if="changeChaGangnameboxIndex === 1">
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
        <div id="ChaGangnavbar_system" style="height: 100%;">
          <DianMingList />
        </div>
      </div>

      <!--
          ********************************************  查岗记录  *******************************************
      -->
      <div class="ChaGangnavbarmainbox" v-if="changeChaGangnameboxIndex === 2">
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
        <div id="ChaGangnavbar_system" style="height: 100%;">
          <ChaGangJiLuList />
        </div>
      </div>

      <!--
          ********************************************  点名记录  *******************************************
      -->
      <div class="ChaGangnavbarmainbox" v-if="changeChaGangnameboxIndex === 3">
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
        <div id="ChaGangnavbar_system" style="height: 100%;">
          <DianMingJiLuList />
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import ChaGangList from './components/ChaGangList'
  import DianMingList from './components/DianMingList'

  export default {
    name: 'ChaGangNavbar',
    components: {
      ChaGangList:resolve => {require(['./components/ChaGangList'],resolve)},
      DianMingList:resolve => {require(['./components/DianMingList'],resolve)},
      ChaGangJiLuList:resolve => {require(['./components/ChaGangJiLuList'],resolve)},
      DianMingJiLuList:resolve => {require(['./components/DianMingJiLuList'],resolve)},
    },
    data() {
      return {
        activeName: 'first',
        changeIndex: '',
        changeChaGangnameboxIndex:0,    //用于切换 点击时的CSS样式 和表格内容
        // NavbarIndex:'0',
      };
    },
    methods:{
      changeChaGangnamebox(index){
        this.changeChaGangnameboxIndex = index
        // this.NavbarIndex = index
      },
    },
  }
</script>

<style lang="scss">
  .ChaGangtabbar{
    height: 970px;
    /*top: 5px;*/
    position: relative;
  }
  .dv-decoration-3-chagang{
    position: absolute;
    top: 120px;   //---------------- 存疑：这里的top为什么以window为父亲，ChaGangtabbar怎么没有起作用呢？ ----------------
    right: 10px;
  }

  #ChaGangnavbar-el-header{
    height: 60px;
  }

  .ChaGangnamebox{
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
  .ChaGangnamebox.firstChaGangnamebox{
    margin-left: 1%;
  }
  .ChaGangnamebox:hover{
    .no{
      background-color: #ECC46D!important;
      h1{
        /*color: #ceebfd;*/
        color: white;
      }
    }
  }


  #ChaGangnavbar-el-main{
    height: 910px;
  }
  .ChaGangnavbarmainbox{
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

  .addChaGangnameboxCSS{
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
  .no {
    background-color: #03517d;
  }
  .no .no-hd {
    position: relative;
    /*border: 1px solid rgba(25, 186, 139, 0.17);*/
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

  /*.mainbox{*/
    /*height: 670px;*/
    /*width: 99%;*/
    /*margin: 0 auto;*/
    /*box-sizing: border-box;*/
    /*border: 1px solid #00B0FF;*/
    /*background-color: rgba(0, 95, 153,.2);*/
    /*!*border: 1px solid yellow;*!*/
    /*box-shadow: 0px 0px 6px #2C58A6;*/
    /*position: relative;*/
  /*}*/

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


  /*.border-box-content{*/
    /*width: 100%;*/
    /*!*border: 1px solid red;*!*/
  /*}*/

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
  #ChaGangtabbar>.el-tabs__item{
    color: red;
  }
  #ChaGangtabbar>.el-tabs__item.is-active{
    color: yellow;
  }

  .el-tabs__item.is-active{
    color: #fff;
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
