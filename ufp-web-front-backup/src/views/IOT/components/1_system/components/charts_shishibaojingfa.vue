<template>
  <div ref="chart" :style="{width: width,height:height}"></div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts')
  // import resize from './mixins/resize'

  export default {
    name: 'charts_shishibaojingfa',
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
            text: '湿式报警阀下腔压力',
            textStyle:{
              color:'#a3d8fa'
            }
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        };


        // this.setOptions();
        this.chart.setOption(option)
      },
    }

  }
</script>

<style scoped>

</style>
