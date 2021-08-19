<template>
  <div id="Wirelessequipment" style="height:100%;padding:15px;position: relative">
    <div id="Wirelessequipment_mainbox">
      <el-tabs :tab-position="tabPosition" style="height: 100%;padding-left: 0px;margin-left: 0px">

        <!--<div>-->
          <!--<h1>暂无单位接入</h1>-->
        <!--</div>-->

        <el-tab-pane class="Wirelessequipment-el-tab-pane" style="padding-left: 0px;margin-left: 0px">
            <span class="spanslot" slot="label">
              <i>
                <span class="spanName">暂无无线监测设备单位接入</span>
              </i>
            </span>
          <Wirelessequipment_SuZhouSiDi style="height:100%;"></Wirelessequipment_SuZhouSiDi>
        </el-tab-pane>

        <!--<el-tab-pane class="Wirelessequipment-el-tab-pane" style="padding-left: 0px;margin-left: 0px">-->
            <!--<span class="spanslot" slot="label">-->
              <!--<i>-->
                <!--<span class="spanName" :class="{changeFontColorCss:colorIndex === 0}"  @click="changeFontColor(0)">苏州思迪信息技术有限公司</span>-->
              <!--</i>-->
            <!--</span>-->
          <!--<Wirelessequipment_SuZhouSiDi style="height:100%;"></Wirelessequipment_SuZhouSiDi>-->
        <!--</el-tab-pane>-->

        <!--<el-tab-pane >-->
            <!--<span class='spanslot' slot="label">-->
              <!--<i>-->
                <!--<span class="spanName" :class="{changeFontColorCss:colorIndex === 1}"  @click="changeFontColor(1)">建筑消防演示平台</span>-->
              <!--</i>-->
            <!--</span>-->
          <!--&lt;!&ndash;<Sub_JianZhuXiaoFang style="height:100%;"></Sub_JianZhuXiaoFang>&ndash;&gt;-->
        <!--</el-tab-pane>-->

        <!--<el-tab-pane >-->
            <!--<span class='spanslot' slot="label">-->
              <!--<i>-->
                <!--<span class="spanName" :class="{changeFontColorCss:colorIndex === 2}"  @click="changeFontColor(2)">思迪展板</span>-->
              <!--</i>-->
            <!--</span>-->
          <!--&lt;!&ndash;<Sub_SiDiZhanBan style="height:100%;"></Sub_SiDiZhanBan>&ndash;&gt;-->
        <!--</el-tab-pane>-->
      </el-tabs>
    </div>

    <div id="suoyoulianwangdanwei" ><h1 style="color: white">所  有  联  网  单  位</h1></div>
    <div class="spinner-box">
      <div class="pulse-container">
        <div class="pulse-bubble pulse-bubble-1"></div>
        <div class="pulse-bubble pulse-bubble-2"></div>
        <div class="pulse-bubble pulse-bubble-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wirelessequipment',
    components:{
      Wirelessequipment_SuZhouSiDi:resolve => {require(['./5_wirelessequipment/Wirelessequipment_SuZhouSiDi'],resolve)},

    },
    data() {
      return {
        tabPosition: 'left',
        colorIndex:'0',
        mouseenterIndex:'1',
      };
    },
    methods:{
      changeFontColor(index){
        this.colorIndex = index
      },
    }
  }
</script>

<style lang="scss">
  .dv-decoration-7{
    position: relative;
    display: block;
    line-height: 30px;
    top: 8px;
    left: 8px;
    margin-left: 45px;
  }

  .el-tabs__item{
    color: #fff;
  }

  #Wirelessequipment_mainbox{
    height: 100%;
    margin-left: 22px;
    position: relative;
    /*background-color: purple;*/
    /*border: 1px solid green;*/
  }

  /* active下的效果 */
  .changeFontColorCss{
    color: #ECC46D;
    text-shadow: 4px 4px 10px -4px rgba(255,255,255,.4);
    /*border-bottom: 1px solid #ECC46D;*/
  }

  /* 公司名称的样式效果 */
  /*.spanslot{*/
  /*display: inline-block;*/
  /*margin-top: 40px;*/
  /*}*/

  .spanslot>i{
    color: #a3d8fa;
    font-style: normal;
    font-family: 微软雅黑;
    font-size: 20px;
    font-weight: 600;
  }
  .spanName{
    display: inline-block;
    line-height: 20px;
  }
  .el-tabs--left .el-tabs__item.is-left{
    text-align: left;
  }
  .spanName:hover{
    color: #ECC46D;
    /*background-color: #13ce66;*/
  }
  .el-tabs__item{
    padding-right: 20px;
    padding-left: 0px;
  }

  #suoyoulianwangdanwei{
    position: absolute;
    bottom: 90px;
    left: 50px;
    line-height:40px;
    text-align:center;
    height:40px;
    width:180px;
    border-radius:10px;
    /*background-color: #2979FF;*/
    background-color: #ECC46D;
    box-shadow: 10px 10px 10px -3px rgba(0,0,0,.5);
  }

  .Wirelessequipment-el-tab-pane{
    height: 850px;
    /*background-color: deepskyblue;*/
  }

  /*.spanslot{*/
  /*display: inline-block;*/
  /*!*margin-top: 20px;*!*/
  /*text-align: left;*/
  /*}*/





  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to{
      transform: rotate(359deg);
    }
  }

  @keyframes configure-clockwise {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }

  @keyframes configure-xclockwise {
    0% {
      transform: rotate(45deg);
    }
    25% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(-135deg);
    }
    75% {
      transform: rotate(-215deg);
    }
    100% {
      transform: rotate(-305deg);
    }
  }

  @keyframes pulse {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: .25;
      transform: scale(.75);
    }
  }
  .spinner-box {
    position: absolute;
    bottom: -100px;
    left: -10px;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
  .pulse-container {
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pulse-bubble {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #3ff9dc;
  }
  .pulse-bubble-1 {
    animation: pulse .4s ease 0s infinite alternate;
  }
  .pulse-bubble-2 {
    animation: pulse .4s ease .2s infinite alternate;
  }
  .pulse-bubble-3 {
    animation: pulse .4s ease .4s infinite alternate;
  }


</style>
