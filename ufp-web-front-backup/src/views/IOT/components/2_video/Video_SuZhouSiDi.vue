<template>
  <el-container>
    <div class="Video-innerbox">
      <el-header class="video-elheader">
        <h1>视 频 监 控</h1>
      </el-header>


      <el-main class="video-elmain-outerbox">
        <div class="video-elmain-innerbox">

          <div class="video-elmainbox-leftbox">
            <div class="leftbox-radiusbox-outerbox">
              <div class="leftbox-radiusbox-innerbox">

              </div>
            </div>
          </div>
          <div class="video-elmainbox-rightbox">
            <!--<div class="danweishipin"><h1>单位视频</h1></div>-->
            <!--<div class="yicengxiaokongshi"><h1>一层消控室</h1></div>-->
            <!--<div class="dianweishipin"><h1>点位视频</h1></div>-->
            <div class="video-xialacaidan">
              <Collapse v-model="videorightboxvalue" accordion>
                <Panel name="1">
                  单位视频
                  <p slot="content">展板视频</p>
                </Panel>
                <Panel name="2">
                  一层消控室
                  <p slot="content">消控室视频</p>
                </Panel>
                <Panel name="3">
                  点位视频
                  <p slot="content">重点位置视频</p>
                </Panel>
              </Collapse>
            </div>

          </div>

        </div>
      </el-main>


      <el-footer class="video-elfooter">

        <Dropdown class="xuanzeshipinshuliang" style="margin-left: 20px">
          <Button type="primary">
            选择视频数量
            <Icon type="ios-arrow-down"></Icon>
          </Button>
          <DropdownMenu slot="list">
            <DropdownItem divided>单页1个视频</DropdownItem>
            <DropdownItem divided>单页2个视频</DropdownItem>
            <DropdownItem divided>单页4个视频</DropdownItem>
            <DropdownItem divided>单页9个视频</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button class="chakanlishijietu" type="primary">查看历史截图</Button>

      </el-footer>

    </div>
  </el-container>
</template>

<script>
  export default {
    name: 'Video_SuZhouSiDi',
    data(){
      return{
        videorightboxvalue:'1',
      }
    }
  }
</script>

<style lang="scss">
  .Video-innerbox{
    background-color: rgba(158, 158, 158,.1);
    border: 1px solid rgba(158, 158, 158,.4);
    box-shadow: 10px 10px 10px -3px rgba(0, 0, 0,.4);
    /*padding: 5px 10px;*/
    /*padding-top: 3px;*/
    /*padding-left: 5px;*/
    /*height: 620px;*/
    /*width: 1200px;*/
    height: 850px;
    width: 100%;
    position: relative;
  }

  .video-elheader{
    height: 37px!important;
    background-color: transparent;
    h1{
      color: white;
      line-height: 37px;
      text-align: center;
      font-size: 20px;
      font-weight: 400;
    }
  }

  .video-elmain-outerbox{
    height: 751px;
    background-color: transparent;
    padding: 10px;
    .video-elmain-innerbox{
      height: 731px;
      /*background-color: yellow;*/
      overflow: hidden;  //用于解决  多个盒子嵌套产生的外边距塌陷问题
      .video-elmainbox-leftbox{
        float: left;
        height: 100%;
        width: 1284px;
        /*background-color: pink;*/
        overflow: hidden;  //用于解决  多个盒子嵌套产生的外边距塌陷问题
        .leftbox-radiusbox-outerbox{
          height: 100%;
          width: 100%;
          border-radius: 20px;
          background-color: deepskyblue;
          overflow: hidden;  //用于解决  多个盒子嵌套产生的外边距塌陷问题
          .leftbox-radiusbox-innerbox{
            margin: 10px;
            height: 711px;  //取711px是为了方便计算16:9比例下的宽度width=1264px
            width: 1264px;
            border-radius: 20px;
            background-color: black;
          }
        }
      }
      .video-elmainbox-rightbox{
        float: right;
        height: 100%;
        width: 220px;
        background-color: white;
        overflow: hidden;
      }
    }
  }


  .video-elfooter{
    position: relative;
    /*background-color: #2d8cf0;*/
    /*background-color: #011f60;*/
    background-color: rgba(35,35,35,.5);
    .xuanzeshipinshuliang{
      position: absolute;
      top: 10px;
      left: 10px;
    }
    .chakanlishijietu{
      position: absolute;
      top: 10px;
      left: 180px;
    }
  }

</style>
