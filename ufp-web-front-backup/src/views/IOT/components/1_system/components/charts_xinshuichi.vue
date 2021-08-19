<template>
  <div ref="chart" :style="{width: width,height:height}"></div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts')
  // import resize from './mixins/resize'

  export default {
    name: 'charts_xinshuichi',
    // mixins: [resize],
    props: {
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
    methods: {

      initCharts() {
        this.chart = echarts.init(this.$refs.chart,'dark');

        var option = {
          title: {
            text: '水池水位',
            textStyle:{
              color:'#a3d8fa'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Step Start', 'Step Middle', 'Step End'],
            textStyle:{
              color:'#a3d8fa',
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '上周水位 ',
              type: 'line',
              step: 'start',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '本周水位',
              type: 'line',
              step: 'end',
              data: [450, 432, 401, 454, 590, 530, 510]
            }
          ]
        };

        // this.setOptions();
        this.chart.setOption(option)
      },
    }

  }
</script>

<style scoped>

</style>
