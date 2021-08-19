<template>
  <div id="danweixingzhi">
    <div class="title">
      <dv-decoration-7>单位性质统计</dv-decoration-7>
    </div>
    <div ref="chart" class="echarts" />
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

export default {
  mixins: [resize],
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chart)

      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        selectedMode: 'single',
        legend: {
          left: 'center',
          bottom: '10',
          data: ['电视', '广播', '报纸', '网络']
        },
        series: [
          {
            name: '单位分级',
            type: 'pie',
            // roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            itemStyle: {
              normal: {
                label: {
                  formatter: '{b}\n{c} ({d}%)',
                  textStyle: {
                    color: 'white',
                    fontSize: 12,
                    fontWeight: 'bolder'
                  }
                }
              }
            },
            data: [
              { value: 100, name: '高危单位', level: 1 },
              { value: 320, name: '居民住宅', level: 2 },
              { value: 240, name: '九小场所', level: 3 },
              { value: 149, name: '消防安全重点单位', level: 4 },
              { value: 100, name: '消防安全一般单位', level: 5 }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
      var that = this
      this.chart.on('click', function(param) {
        var unitlevel = param.data.level
        var unitname = param.data.name
        that.$emit('onunitlevelchange', unitlevel, unitname)
      })
    }
  }
}
</script>
<style lang="scss">
#danweixingzhi{
  height: 100%;
  width: 100%;
  .title {
    padding: 8px;
    font-size: 18px;
  }
  .lc1-header{
    text-align: center;
    padding: 5px;
    font-size: 1.2em;
  }
  .echarts{
    margin-top: 20px;
    height: 100%;
    width: 100%;
  }
}

</style>
