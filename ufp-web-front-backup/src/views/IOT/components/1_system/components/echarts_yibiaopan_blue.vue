<template>
  <div ref="yibiaopan" :class="className" :style="{width: width,height:height}"></div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts')
  // import resize from './mixins/resize'           //111111

  export default {
    name: 'echarts_yibiaopan_blue',
    // mixins:[resize],            //打开此处和111111处的话，会报错（虽然页面能够执行）
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '1148px'
      },
      height: {
        type: String,
        default: '190px'
      }
    },
    // data(){
    //   return{
    //     chart:null
    //   }
    // },
    mounted:function(){
      this.$nextTick(function() {
        this.initCharts();
      })
    },
    // beforeDestroy() {
    //   if (!this.chart) {
    //     return
    //   }
    //   this.chart.dispose()
    //   this.chart = null
    // },

    methods:{
      initCharts(){
        // this.chart = echarts.init(this.$refs.yibiaopan)
        // this.chart.resize();
        var mychart = echarts.init(this.$refs.yibiaopan)
        mychart.resize();
        var percent = 0.65;

        function getData() {
          return [{
            value: percent,
            itemStyle: {
              normal: {
                color: '#00E5FF',
                shadowBlur: 10,
                shadowColor: '#00E5FF'
              }
            }
          }, {
            value: 1 - percent,
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            }
          }];
        }

        var option = {
          backgroundColor: 'transparent',

          title: {
            text: (percent * 100) + '%',
            x: 'center',
            y: 'center',
            textStyle: {
              color: '#bec3da',
              fontWeight: 'bolder',
              fontSize: 18,
            }
          },
          series: [{
            type: 'pie',
            radius: ['48%', '67%'],
            silent: true,
            label: {
              normal: {
                show: false,
              }
            },

            data: [{
              value: 1,
              itemStyle: {
                normal: {
                  color: '#313443',
                  shadowBlur: 25,
                  shadowColor: '#1b1e25',


                }
              }
            }],

            animation: false
          },

            {
              type: 'pie',
              radius: ['48%', '67%'],
              silent: true,
              label: {
                normal: {
                  show: false,
                }
              },

              data: [{
                value: 1,
                itemStyle: {
                  normal: {
                    color: '#313443',
                    shadowBlur: 25,
                    shadowColor: '#1b1e25'
                  }
                }
              }],

              animation: false
            },

            {
              name: 'main',
              type: 'pie',
              radius: ['63%', '73%'],
              label: {
                normal: {
                  show: false,
                }
              },
              data: getData(),

              animationEasingUpdate: 'cubicInOut',
              animationDurationUpdate: 500
            }
          ]
        };

        // this.chart.setOption(option)
        mychart.setOption(option)
      }
    }
  }
</script>

<style scoped>

</style>
