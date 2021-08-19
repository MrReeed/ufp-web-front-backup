<template>
  <div id="xiaofang">
    <div class="title">
      <dv-decoration-7>消防物联网设备统计</dv-decoration-7>
    </div>
    <div ref="xiaofangecharts" class="echarts" />
  </div>
</template>

<script>
import resize from '@/views/home/components/mixins/resize'
import echarts from 'echarts'

export default {
  name: 'XiaoFang',
  mixins: [resize],
  data() {
    return {
      xiaofangecharts: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.xiaofangecharts) {
      return
    }
    this.xiaofangecharts.dispose()
    this.xiaofangecharts = null
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
          data: ['安装数量', '隐患数量'],
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
            data: ['用电', '消防用水', '烟感', '其他'],
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
              textStyle: {
                color: 'white'
              }
            }
          }
        ],
        series: [
          {
            name: '隐患数量',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210],
            smooth: true
          },
          {
            name: '安装数量',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: { color: 'white' }
              }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            smooth: true
          }
        ]
      }
      this.chart = echarts.init(this.$refs.xiaofangecharts)
      this.chart.setOption(charts_options)
    }
  }
}
</script>

<style lang="scss">
#xiaofang {
  width: 100%;
  height: 100%;
  .title {
    padding: 8px;
    font-size: 18px;
  }
  .echarts {
    margin: auto;
    height: 80%;
    width: 90%;
    //background-color: red;
  }
}
</style>
