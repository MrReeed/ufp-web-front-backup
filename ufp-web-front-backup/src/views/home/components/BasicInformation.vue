<template>
  <div class="left-chart-1">
    <div class="lc1-header">基础信息</div>
    <div class="lc1-details">设备运行总数<span>430</span></div>
    <dv-capsule-chart class="lc1-chart" :config="config" />
  </div>
</template>

<script>
export default {
  name: 'FireBox',
  data() {
    return {
      config: {
        data: [
          {
            name: '收费系统',
            value: 167
          },
          {
            name: '通信系统',
            value: 67
          },
          {
            name: '监控系统',
            value: 123
          },
          {
            name: '供配电系统',
            value: 55
          },
          {
            name: '其他',
            value: 98
          }
        ],
        colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        unit: '件'
      }
    }
  }
}
</script>

<style lang="scss">
.left-chart-1 {
  width: 100%;
  height: 37%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;

  .lc1-header {
    text-align: center;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .lc1-details {
    height: 20px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;

    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 20px;
      margin-left: 20px;
    }
  }

  .lc1-chart {
    flex: 1;
  }
}
</style>
