<template>
  <div id="baojing" @click="urlto('/PageCommon/MainPage.aspx?active=80,81&amp;mn=Safty.Alarm&amp;vmn=Safty.Alarm_View&amp;pn=List&amp;where=&amp;modelTypeId=')">
    <div class="title">
      <dv-decoration-7>今日警情</dv-decoration-7>
    </div>
    <div class="total">
      <div>
        <p>今日报警总数：</p>
        <span style="color: yellow;">168</span>
      </div>
      <div>
        <p>今日复位总数：</p>
        <span style="color: blue;">125</span>
      </div>
    </div>
    <div class="detail">
      <div class="detail_box">
        <img width="50px" height="50px" src="http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/home_alarm/alarm-logo.png" alt="">
        <div class="detail_box_label">
          <p style="font-size: 2em;">7</p>
          <p style="font-size: 1em;">火警</p>
        </div>
      </div>
      <div class="detail_box">
        <img width="50px" height="50px" src="http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/home_alarm/warn-logo.png" alt="">
        <div class="detail_box_label">
          <p style="font-size: 2em;">14</p>
          <p style="font-size: 1em;">电器火灾预警</p>
        </div>
      </div>
      <div class="detail_box">
        <img width="50px" height="50px" src="http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/home_alarm/fault-logo.png" alt="">
        <div class="detail_box_label">
          <p style="font-size: 2em;">11</p>
          <p style="font-size: 1em;">消防设施故障</p>
        </div>
      </div>
      <div class="detail_box">
        <img width="50px" height="50px" src="http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/home_alarm/abnormal-logo.png" alt="">
        <div class="detail_box_label">
          <p style="font-size: 2em;">109</p>
          <p style="font-size: 1em;">监测设备异常</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaoJing',
  data() {
    return {
      config: {
        data: [
          {
            name: '收费系统',
            value: 167
          },
          {
            name: '通信系统',
            value: 67
          },
          {
            name: '监控系统',
            value: 123
          },
          {
            name: '供配电系统',
            value: 55
          },
          {
            name: '其他',
            value: 98
          }
        ],
        colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        unit: '件'
      }
    }
  },
  methods: {
    urlto(url) {
      window.location = url
    }
  }
}
</script>

<style lang="scss">
#baojing {
  width: 100%;
  height: 100%;
  cursor:pointer;
  .title {
    padding: 8px;
    font-size: 18px;
  }

  .total {
    display: flex;
    height: 25%;
    padding: 0 5%;

    div {
      padding: 10px;
      text-align: center;
      width: 48%;
      margin: auto;
      height: 100%;
      background-color: rgb(30,98,143);
      p {
        color: aliceblue;
      }
      span{
        font-size: 2em;
      }
    }
  }
  .detail{
    width: 100%;
    height: 55%;
    padding: 0 10px;
    display: flex;
    flex-wrap:  wrap;
    .detail_box{
      width: 48%;
      height: 46%;
      margin: auto;
      background-color: rgb(17,38,69);
      display: flex;
      padding: 5px;
      img{
        margin: auto;
      }
      .detail_box_label{
        padding-left: 25px;
        width: 100%;
        p{
          color: white;
        }
      }
    }
  }
}
</style>
