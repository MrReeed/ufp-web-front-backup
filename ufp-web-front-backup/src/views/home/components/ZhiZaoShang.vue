<template>
  <div id="zhizaoshang">
    <div class="title">
      <dv-decoration-7>设备制造商信息统计</dv-decoration-7>
    </div>
    <div ref="zhizaoshangchart" class="echarts" />
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
      const data = [
        { 'code': '制造商一', 'stock': '1', 'fundPost': '99' },
        { 'code': '制造商二', 'stock': '2', 'fundPost': '98' },
        { 'code': '制造商三', 'stock': '3', 'fundPost': '97' },
        { 'code': '制造商四', 'stock': '4', 'fundPost': '96' },
        { 'code': '制造商五', 'stock': '5', 'fundPost': '96' },
        { 'code': '制造商六', 'stock': '6', 'fundPost': '95' }
      ]
      function contains(arr, dst) {
        var i = arr.length
        while ((i -= 1)) {
          if (arr[i] === dst) {
            return i
          }
        }
        return false
      }

      var attackSourcesColor = [
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
          { offset: 0, color: '#EB3B5A' },
          { offset: 1, color: '#FE9C5A' }
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
          { offset: 0, color: '#FA8231' },
          { offset: 1, color: '#FFD14C' }
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
          { offset: 0, color: '#F7B731' },
          { offset: 1, color: '#FFEE96' }
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
          { offset: 0, color: '#395CFE' },
          { offset: 1, color: '#2EC7CF' }
        ])
      ]
      var attackSourcesColor1 = [
        '#EB3B5A',
        '#FA8231',
        '#F7B731',
        '#3860FC',
        '#1089E7',
        '#F57474',
        '#56D0E3',
        '#1089E7',
        '#F57474',
        '#1089E7',
        '#F57474',
        '#F57474'
      ]
      var attaData = []
      var attaName = []
      var topName = []
      data.forEach((it, index) => {
        attaData[index] = parseFloat(it.fundPost).toFixed(2)
        attaName[index] = it.stock
        topName[index] = `${it.code} ${it.stock}`
      })
      var salvProMax = [] // 背景按最大值
      for (let i = 0; i < attaData.length; i++) {
        salvProMax.push(attaData[0])
      }
      function attackSourcesDataFmt(sData) {
        var sss = []
        sData.forEach(function(item, i) {
          const itemStyle = {
            color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i]
          }
          sss.push({
            value: item,
            itemStyle: itemStyle
          })
        })
        return sss
      }

      var option = {
        // backgroundColor: '#000',
        tooltip: {
          show: false,
          backgroundColor: 'rgba(3,169,244, 0.5)', // 背景颜色（此时为默认色）
          textStyle: {
            fontSize: 16
          }
        },
        color: ['#F7B731'],
        legend: {
          pageIconSize: [12, 12],
          itemWidth: 20,
          itemHeight: 10,
          textStyle: {
            // 图例文字的样式
            fontSize: 10,
            color: '#fff'
          },
          selectedMode: false,
          data: ['制造商合格率']
        },
        grid: {
          left: '5%',
          right: '2%',
          width: '80%',
          bottom: '2%',
          top: '8%',
          containLabel: true
        },
        xAxis: {
          type: 'value',

          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisPointer: {
              label: {
                show: true
                // margin: 30
              }
            },
            pdaaing: [5, 0, 0, 0],
            postion: 'right',
            data: attaName,
            axisLabel: {
              margin: 30,
              fontSize: 10,
              align: 'left',
              padding: [2, 0, 0, 0],
              color: '#000',
              rich: {
                nt1: {
                  color: '#fff',
                  backgroundColor: attackSourcesColor1[0],
                  width: 13,
                  height: 13,
                  fontSize: 10,
                  align: 'center',
                  borderRadius: 100,
                  lineHeight: '5',
                  padding: [0, 1, 2, 1]
                  // padding:[0,0,2,0],
                },
                nt2: {
                  color: '#fff',
                  backgroundColor: attackSourcesColor1[1],
                  width: 13,
                  height: 13,
                  fontSize: 10,
                  align: 'center',
                  borderRadius: 100,
                  padding: [0, 1, 2, 1]
                },
                nt3: {
                  color: '#fff',
                  backgroundColor: attackSourcesColor1[2],
                  width: 13,
                  height: 13,
                  fontSize: 10,
                  align: 'center',
                  borderRadius: 100,
                  padding: [0, 1, 2, 1]
                },
                nt: {
                  color: '#fff',
                  backgroundColor: attackSourcesColor1[3],
                  width: 13,
                  height: 13,
                  fontSize: 10,
                  align: 'center',
                  lineHeight: 3,
                  borderRadius: 100,
                  padding: [0, 1, 2, 1],
                  lineHeight: 5
                }
              },
              formatter: function(value, index) {
                index = contains(attaName, value) + 1
                if (index - 1 < 3) {
                  return ['{nt' + index + '|' + index + '}'].join('\n')
                } else {
                  return ['{nt|' + index + '}'].join('\n')
                }
              }
            }
          },
          {// 名称
            type: 'category',
            offset: -10,
            position: 'left',
            axisLabel: {
              color: `#fff`,
              fontSize: 10
            },
            axisLine: {
              show: false
            },
            inverse: false,
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: ['#fff'],
              align: 'left',
              verticalAlign: 'bottom',
              lineHeight: 32,
              fontSize: 10
            },
            data: topName
          }
        ],
        series: [
          {
            zlevel: 1,
            name: '制造商合格率',
            type: 'bar',
            barWidth: '15px',
            animationDuration: 1500,
            data: attackSourcesDataFmt(attaData),
            align: 'center',
            itemStyle: {
              normal: {
                barBorderRadius: 10
              }
            },
            label: {
              show: true,
              fontSize: 10,
              color: '#fff',
              textBorderWidth: 2,
              padding: [2, 0, 0, 0],
              formatter: '{c}%'
            }
          },
          {
            name: '制造商合格率',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            margin: '20',
            data: salvProMax,
            textStyle: {
              // 图例文字的样式
              fontSize: 10,
              color: '#fff'
            },
            itemStyle: {
              normal: {
                color: '#05325F',
                // width:"100%",
                fontSize: 10,
                barBorderRadius: 30
              }
            }
          }
        ]
      }
      // var charts_options = {
      //   tooltip: {
      //     trigger: 'item',
      //     formatter: '{b}: {c} ({d}%)'
      //   },
      //   series: [
      //     {
      //       name: '访问来源',
      //       type: 'pie',
      //       selectedMode: 'single',
      //       radius: [0, '30%'],
      //
      //       label: {
      //         position: 'inner'
      //       },
      //       labelLine: {
      //         show: false
      //       },
      //       data: [
      //         { value: 335, name: '一级制造商', selected: true },
      //         { value: 679, name: '二级制造商' },
      //         { value: 1548, name: '三级制造商' }
      //       ]
      //     },
      //     {
      //       name: '访问来源',
      //       type: 'pie',
      //       radius: ['50%', '65%'],
      //       label: {
      //         formatter: '{b}：{c} {d}%  '
      //
      //       },
      //       data: [
      //         { value: 335, name: '制造商1' },
      //         { value: 310, name: '制造商2' },
      //         { value: 234, name: '制造商3' },
      //         { value: 135, name: '制造商4' },
      //         { value: 1048, name: '制造商5' },
      //         { value: 251, name: '制造商6' },
      //         { value: 147, name: '制造商7' },
      //         { value: 102, name: '制造商8' }
      //       ]
      //     }
      //   ]
      // }
      this.chart = echarts.init(this.$refs.zhizaoshangchart)
      this.chart.setOption(option)
    }
  }
}
</script>
<style lang="scss">
#zhizaoshang {
  height: 100%;
  width: 100%;

  .title {
    padding: 8px;
    font-size: 18px;
  }

  .lc1-header {
    text-align: center;
    padding: 5px;
    font-size: 1.2em;
  }

  .echarts {
    margin: auto;
    height: 80%;
    width: 100%;
  }
}

</style>
