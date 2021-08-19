<template>
  <div id="OnlineInstitutionsbox">
    <div class="left-chart-1">
      <div class="title">
        <dv-decoration-7>联网单位</dv-decoration-7>
      </div>
      <div class="statustab">
        <div><a @click="changefirestats(1)">联网用户</a></div>
        <div><a @click="changefirestats(2)">在线设备</a></div>
        <div><a @click="changefirestats(0)">在线率</a></div>
      </div>
    </div>
    <div ref="onlineinstitutioncharts" class="onlineinstitutioncharts" />
  </div>
</template>

<script>
import resize from '@/views/home/components/mixins/resize'
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'OnlineInstitutions',
  mixins: [resize],
  data() {
    return {
      onlineinstitutioncharts: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.onlineinstitutioncharts) {
      return
    }
    this.onlineinstitutioncharts.dispose()
    this.onlineinstitutioncharts = null
  },
  created: function() {
  },
  methods: {
    initChart() {
      var charts_options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['在线率'],
          textStyle: { color: 'white' }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['2020-11-21', '2020-11-30', '2020-12-06', '2020-12-13'],
            axisLabel: {
              show: true,
              textStyle: {
                color: 'white'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              show: true,
              formatter: '{value} %',
              textStyle: {
                color: 'white'
              }
            }
          }
        ],
        series: [
          {
            name: '在线率',
            type: 'line',
            areaStyle: {},
            data: [98, 96, 99, 95],
            formatter: '{b}\n{c}%',
            smooth: true
          }
        ]
      }
      this.onlineinstitutioncharts = echarts.init(this.$refs.onlineinstitutioncharts, 'macarons')
      this.onlineinstitutioncharts.setOption(charts_options)
    }
  }
}
</script>

<style lang="scss">
#OnlineInstitutionsbox {
  width: 100%;
  height: 100%;
  .left-chart-1 {
    width: 100%;
    height: 25%;
    display: flex;
    flex-grow: 0;
    flex-direction: column;
    .title {
      padding: 8px;
      font-size: 18px;
    }

    .lc1-header {
      text-align: center;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      margin-bottom: 10px;
      margin-top: 10px;
    }

    .lc1-details {
      height: 20px;
      font-size: 16px;
      display: flex;
      align-items: center;
      text-indent: 20px;

      span {
        color: #096dd9;
        font-weight: bold;
        font-size: 20px;
        margin-left: 20px;
      }
    }

    .lc1-chart {
      flex: 1;
    }

    .statustab {
      height: 20px;
      background-color: rgba(3, 25, 50, 0.5);

      div {
        text-align: center;
        width: 28%;
        font-size: 15px;
        float: left;
      }

      a {
        font-size: 10px;
        line-height: 13px;
      }
    }

  }
  .onlineinstitutioncharts {
    width: 95%;
    height: 70%;
    //background-color: red;
  }
}
</style>
