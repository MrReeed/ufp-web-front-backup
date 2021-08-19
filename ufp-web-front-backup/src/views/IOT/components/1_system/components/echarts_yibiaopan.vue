<template>
    <div ref="yibiaopan" :class="className" :style="{width: width,height:height}"></div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts')
  // import resize from './mixins/resize'

  export default {
    name: 'echarts_yibiaopan',
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
    data(){
      return{
        chart:null
      }
    },
    mounted() {
      this.$nextTick(()=>{
        this.initCharts();
      })
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },

    methods:{
      initCharts(){
        this.chart = echarts.init(this.$refs.yibiaopan)
        var percent = 0.8;

        function getData() {
          return [{
            value: percent,
            itemStyle: {
              normal: {
                color: '#fb358a',
                shadowBlur: 10,
                shadowColor: '#fb358a'
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

        // var _this = this
        // setInterval(function () {
        //   percent = +Math.random();
        //   _this.chart.setOption({
        //     title: {
        //       text: (percent * 100).toFixed(0) + '%'
        //     },
        //     series: [{
        //       name: 'main',
        //       data: getData()
        //     }]
        //   })
        // }, 1000);
        this.chart.setOption(option)
      }
    }
  }
</script>

<style scoped>

</style>
