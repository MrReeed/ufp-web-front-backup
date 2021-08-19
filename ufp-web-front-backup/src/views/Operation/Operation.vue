<template>
  <div class="operation">
    <dv-decoration-2 style="width:70%;height:5px;margin-bottom: 6px" />

    <div class="leftBar">
      <div class="searchBar">
        <el-input
          placeholder="搜索联网单位"
          prefix-icon="el-icon-search"
          v-model="input">
        </el-input>
      </div>
      <div class="companyList">
        <div class="companyName" >
          <div :class="{changeFontColorCss:colorIndex === 0}" @click="changeFontColor(0)">
            <span>山东贵德信息科技有限公司</span>
            <div class="line"></div>
          </div>
          <div :class="{changeFontColorCss:colorIndex === 1}" @click="changeFontColor(1)">
            <span>西南交大烟台研究院</span>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="ShanDongGuiDe_RightContent">
      <ShanDongGuiDeYouXianGongSi></ShanDongGuiDeYouXianGongSi>
    </div>

  </div>
</template>

<script>
  import ShanDongGuiDeYouXianGongSi from './components/ShanDongGuiDeYouXianGongSi'

  export default {
    name: 'Operation',
    data() {
      return {
        input: '',
        colorIndex:0,
      }
    },
    methods:{
      changeFontColor(index){
        this.colorIndex = index
      },
    },
    components:{
      ShanDongGuiDeYouXianGongSi,
    }
  }
</script>

<style lang="scss" scoped>
  .operation {
    overflow: hidden;
    /*background-color: #06184a;*/
    background: url("https://donggaozhao.oss-cn-chengdu.aliyuncs.com/ufp_image/bg.jpg") no-repeat top center;
    /* no-repeat top center 表示背景不平铺，且垂直靠上 */
    height: 100%;
    width: 100%;

    .leftBar {
      height: 920px;
      width: 320px;
      margin-top: 15px;
      margin-left: 30px;
      float: left;
      .searchBar {
        .el-input {
          width: 90%;
          left: 16px;
          top: 10px;
        }
        overflow: hidden;
        width: 100%;
        height: 60px;
        padding: auto 20px;
        background-color: rgba(11, 58, 114,.6);
        /*opacity: .8;*/
      }
      .companyList {
        background-color: rgba(11, 58, 114,.6);
        /*opacity: .8;*/
        margin-top: 15px;
        height: 840px;
        overflow: hidden;
        .companyName {
          height: 815px;
          width: 270px;
          margin: 20px auto;
          border-top: 1px solid #A3D8FA;
          line-height: 45px;
          color: #A3D8FA;
          span {
            cursor: pointer;
            font-size: 16px;
          }
          span:hover {
            color: #ecc46d;
          }
          .line {
          height: 1px;
          width: 270px;
          background-color: #A3D8FA;
          }
          .changeFontColorCss {
            color: #ECC46D;
          }
        }
      }
    }

    .ShanDongGuiDe_RightContent {
      float: right;
      height: 915px;
      width: 1500px;
      margin-top: 15px;
      margin-right: 30px;
      /*background-color: green;*/
    }
  }
</style>
