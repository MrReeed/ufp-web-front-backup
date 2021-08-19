<template>
    <div ref="shuiqiutu" :class="className" :style="{width: width,height:height}"></div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts')
  // import resize from './mixins/resize'

  export default {
    name: 'echarts_shuiqiutu',
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
        this.chart = echarts.init(this.$refs.shuiqiutu)
        var option = {
          series: [{
            type: 'liquidFill',
            data: [0.6,0.55,0.5,0.45],
            direction: 'left',
            radius: '150%',

            // shape: 'rect', //默认的矩形，没法设置宽度
            // 形状shape可以使用SVG图形，在阿里图标库复制图形的SVG，把里面的path赋给shape
            shape:'path://M0 0h2304v1024H0z',
            center: ['50%', '50%'],
            outline:{show:false},
            backgroundStyle: {
                borderColor: '#156ACF',
                borderWidth: 1,
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20
            },
            label:{
              normal:{
                formatter: function() {
                  return '';
                }
              }
            }
          }]
        };
        this.chart.setOption(option)
      }
    }
  }
</script>

<style scoped>

</style>
