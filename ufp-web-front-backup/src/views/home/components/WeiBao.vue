<template>
  <!--  <div id="WeiBao">-->
  <!--    <div v-show="tab === 1" class="tab-div">-->
  <!--      <div class="tab-bar-div">-->
  <!--        <div class="weibao_tab_bar is-active" @click="changetab(1)">灭火器到期</div>-->
  <!--        <div class="weibao_tab_bar" @click="changetab(2)">维保进度</div>-->
  <!--        <div class="weibao_tab_bar" @click="changetab(3)">巡查异常</div>-->
  <!--      </div>-->
  <!--      <div class="miehuoqi">-->
  <!--        <div class="left-box">-->
  <!--          <div class="number" style="color: #E1AB31;">22</div>-->
  <!--          <div class="label">即将报废</div>-->
  <!--        </div>-->
  <!--        <div class="right-box">-->
  <!--          <div class="number" style="color: #CEE7FB">36</div>-->
  <!--          <div class="label">灭火器总数</div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div v-show="tab === 2" class="tab-div">-->
  <!--      <div class="tab-bar-div">-->
  <!--        <div class="weibao_tab_bar" @click="changetab(1)">灭火器到期</div>-->
  <!--        <div class="weibao_tab_bar is-active" @click="changetab(2)">维保进度</div>-->
  <!--        <div class="weibao_tab_bar" @click="changetab(3)">巡查异常</div>-->
  <!--      </div>-->
  <!--      <div ref="weibaojinduecharts" class="echarts" />-->
  <!--    </div>-->
  <!--    <div v-show="tab === 3" class="tab-div">-->
  <!--      <div class="tab-bar-div">-->
  <!--        <div class="weibao_tab_bar" @click="changetab(1)">灭火器到期</div>-->
  <!--        <div class="weibao_tab_bar" @click="changetab(2)">维保进度</div>-->
  <!--        <div class="weibao_tab_bar is-active" @click="changetab(3)">巡查异常</div>-->
  <!--      </div>-->
  <!--      <div />-->
  <!--    </div>-->
  <!--  </div>-->
  <div id="weibao">
    <div class="title">
      <dv-decoration-7>维保进度</dv-decoration-7>
    </div>
    <div ref="weibaojinduecharts" class="echarts"/>
  </div>

</template>

<script>
import resize from './mixins/resize'
import echarts from 'echarts'

export default {
  name: 'WeiBao',
  mixins: [resize],
  data() {
    return {
      tab: 1,
      weibaojinduecharts: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.weibaojinduecharts) {
      return
    }
    this.weibaojinduecharts.dispose()
    this.weibaojinduecharts = null
  },
  methods: {
    changetab(tab) {
      this.tab = tab
      this.initChart()
    },
    initChart() {
      var weibaojinducharts_options = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
          {
            name: '维保进度',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            itemStyle: {
              normal: {
                label: {
                  formatter: '{b}\n{c} ({d}%)',
                  textStyle: {
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 'bolder'
                  }
                }
              }
            },
            data: [
              { value: 335, name: '已处理' },
              { value: 20, name: '未处理' }
            ]
          }
        ]
      }

      this.weibaojinduecharts = echarts.init(this.$refs.weibaojinduecharts)
      this.weibaojinduecharts.setOption(weibaojinducharts_options)
      this.weibaojinduecharts.on('click', function(param) {
        window.location = '/PageCommon/MainPage.aspx?active=105,106&amp;mn=Entity.Security&amp;vmn=&amp;pn=List&amp;where=&amp;modelTypeId='
      })
    }
  }
}
</script>

<style lang="scss">
#weibao {
  width: 100%;
  height: 100%;
  .title {
    padding: 8px;
    font-size: 18px;
  }
  //.tab-div {
  //  width: 100%;
  //  height: 100%;
  //}

  //div{
  //  width: 100%;
  //  height: 100%;
  //}
  //.tab-bar-div {
  //  display: flex;
  //  width: 100%;
  //  height: 20px;
  //  padding: 15px;
  //  text-align: center;
  //}

  //.miehuoqi {
  //  background: url("http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/annihilator.png") no-repeat center;
  //  background-size: 46% 100%;
  //  width: 100%;
  //  height: 100%;
  //
  //  .left-box {
  //    position: absolute;
  //    bottom: 40px;
  //    left: 10px;
  //    text-align: center;
  //    color: #8297A8;
  //    width: 100px;
  //    height: 30px;
  //  }
  //
  //  .right-box {
  //    position: absolute;
  //    bottom: 40px;
  //    right: 10px;
  //    text-align: center;
  //    color: #8297A8;
  //    width: 100px;
  //    height: 30px;
  //  }
  //
  //  .number {
  //    font-weight: bold;
  //    font-size: 25px;
  //  }
  //
  //  .label {
  //    font-size: 14px;
  //  }
  //}
  //
  //.weibao_tab_bar {
  //  margin: 0 auto;
  //  background: url("http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/tab_bg.png");
  //  background-size: 100% 100%;
  //  width: 30%;
  //  height: 20px;
  //  padding: 0;
  //  cursor: pointer;
  //  color: azure;
  //}
  //
  //.is-active {
  //  background: url("http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/tab_bg_active.png");
  //  background-size: 100% 125%;
  //  color: #ffba00;
  //}
  //
  //.weibaojindu {
  //  width: 100%;
  //  height: 100%;
  //
  //}

  .echarts {
    width: 100%;
    height: 80%;
    margin: auto;
  }
}
</style>
