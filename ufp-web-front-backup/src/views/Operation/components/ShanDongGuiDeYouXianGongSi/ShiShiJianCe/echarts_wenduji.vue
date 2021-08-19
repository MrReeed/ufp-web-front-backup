<template>
  <div ref="wenduji" :class="className" :style="{width: width,height:height}"></div>
</template>

<script>
  // import 'echarts-liquidfill/src/liquidFill.js'
  import echarts from 'echarts'

  require('echarts')
  // import resize from './mixins/resize'

  export default {
    name: 'echarts_wenduji',
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '100%'
      }
    },
    data() {
      return {
        chart: null,
        dataStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            shadowBlur: 40,
            shadowColor: 'rgba(40, 40, 40, 0.5)'
          }
        },
        placeHolderStyle: {
          normal: {
            color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
          emphasis: {
            color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
          }
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initCharts()
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
      initCharts() {
        this.chart = echarts.init(this.$refs.wenduji)
        var option = {
          title: {
            text: '75%',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'normal',
              color: '#0bb6f0',
              fontSize: 80
            }
          },
          backgroundColor: '#011128',
          color: ['#eb644b', '#313443', '#fff'],
          tooltip: {
            show: false,
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            show: false,
            itemGap: 12,
            data: ['01', '02']
          },
          toolbox: {
            show: false,
            feature: {
              mark: {
                show: true
              },
              dataView: {
                show: true,
                readOnly: false
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [195, 200],
            itemStyle: this.dataStyle,
            hoverAnimation: false,

            data: [{
              value: 75,
              name: '01'
            }, {
              value: 25,
              name: 'invisible',
              itemStyle: this.placeHolderStyle
            }

            ]
          }, {
            name: 'Line 2',
            type: 'pie',
            animation: false,
            clockWise: false,
            radius: [220, 218],
            itemStyle: this.dataStyle,
            hoverAnimation: false,
            tooltip: {
              show: false
            },
            data: [{
              value: 100,
              name: '02',
              itemStyle: {
                emphasis: {
                  color: '#313443'
                }
              }
            }, {
              value: 0,
              name: 'invisible',
              itemStyle: this.placeHolderStyle
            }

            ]
          }
          ]
        }
        this.chart.setOption(option)
      }
    }
  }
</script>

<style scoped>

</style>
