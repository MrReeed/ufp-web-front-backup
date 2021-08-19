<template>
  <div ref="chart" :style="{width: width,height:height}"></div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts')
  // import resize from './mixins/resize'

  export default {
    name: 'charts_kongyajiguandao',
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

        function randomData() {
          now = new Date(+now + oneDay);
          value = value + Math.random() * 21 - 10;
          return {
            name: now.toString(),
            value: [
              [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
              Math.round(value)
            ]
          };
        }

        var data = [];
        var now = +new Date(1997, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var value = Math.random() * 1000;
        for (var i = 0; i < 1000; i++) {
          data.push(randomData());
        }

        var option = {
          title: {
            text: '空压机管道压力',
            textStyle:{
              color:'#a3d8fa'
            }
          },
          tooltip: {
            trigger: 'axis',
            formatter: function (params) {
              params = params[0];
              var date = new Date(params.name);
              return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer: {
              animation: false
            }
          },
          xAxis: {
            type: 'time',
            splitLine: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
              show: false
            }
          },
          series: [{
            name: '模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data
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
