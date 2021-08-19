<template>
  <div id="alarminfo">
    <div class="title">
      <dv-decoration-7>报警信息</dv-decoration-7>
    </div>
    <div class="messagediv">
      <div class="messagebox">
        <div class="messageplace">华凌商贸城</div>
        <div class="messagedetail">
          <span>报警设备:</span>580000000
          <span>报警原因:</span>漏电报警
          <span>报警值:</span>2.49
          <span>位置:</span>A楼一楼一号电井总电箱
          <span>时间</span>2020/12/25 10:12:57
        </div>
      </div>
      <div class="messagebox">
        <div class="messageplace">华凌商贸城</div>
        <div class="messagedetail">
          <span>报警设备:</span>580000000
          <span>报警原因:</span>漏电报警
          <span>报警值:</span>2.49
          <span>位置:</span>A楼一楼一号电井总电箱
          <span>时间</span>2020/12/25 10:12:57
        </div>
      </div>
<!--      <div class="messagebox">-->
<!--        <div class="messageplace">华凌商贸城</div>-->
<!--        <div class="messagedetail">-->
<!--          <span>报警设备:</span>580000000-->
<!--          <span>报警原因:</span>漏电报警-->
<!--          <span>报警值:</span>2.49-->
<!--          <span>位置:</span>A楼一楼一号电井总电箱-->
<!--          <span>时间</span>2020/12/25 10:12:57-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="messagebox">-->
<!--        <div class="messageplace">华凌商贸城</div>-->
<!--        <div class="messagedetail">-->
<!--          <span>报警设备:</span>580000000-->
<!--          <span>报警原因:</span>漏电报警-->
<!--          <span>报警值:</span>2.49-->
<!--          <span>位置:</span>A楼一楼一号电井总电箱-->
<!--          <span>时间</span>2020/12/25 10:12:57-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>

</template>

<script>

export default {
  name: 'AlarmInfo',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
#alarminfo {
  width: 100%;
  height: 100%;
  //background-color: rgba(13, 28, 49, 0.7);

  .title {
    padding: 8px;
    font-size: 18px;
  }

  .messagediv {
    overflow: auto;
    height: 260px;
    text-align: left;
    padding-left: 15px;
    padding-right: 15px;
  }

  .messagebox {
    padding: 10px;
    border: #2d8cf0 1px solid;
    border-radius: 10px;
    margin-bottom: 5px;
  }

  .messageplace {
    color: yellow;
    font-size: 1.8em;
  }

  .messagedetail {
    font-size: 1.1em;
    font-weight: 600;

    span {
      font-weight: 100;
      margin: 0 3px;
    }
  }

}
</style>
