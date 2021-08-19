<template>
  <div style="width: 100%;height: 100%;background-color: transparent">
    <Table :row-class-name="rowClassName" :columns="columns1" :data="data1" ></Table>
    <!-- stripe="true"-->
  </div>
</template>

<script>
  export default {
    name: 'table_yingjishusan',
    data() {
      return {
        // 表格的数据
        columns1: [
          {
            title: '序号',
            key: 'xuhao',
            // className:'xuhaoStyle',
            width: '100px',
            align:'center',
          },
          {
            title: '处理',
            key: 'chuli',
            width: '120px',
            align:'center',
          },
          {
            title: '设备',
            key: 'shebei',
            width: '100px',
            align:'center',
          },
          {
            title: '时间',
            key: 'shijian',
            width: '220px',
            align:'center',
          },
          {
            title: '测试',
            key: 'ceshi',
            width: '100px',
            align:'center',
          },
          {
            title: '报警类型',
            key: 'baojingleixing',
            width: '150px',
            align:'center',
          },
          {
            title: '节点',
            key: 'jiedian',
            width: '350px',
            align:'center',
          },
          {
            title: '报警分类',
            key: 'baojingfenlei',
            width: '187px',
            align:'center',
          },
          {
            title: '报警地点',
            key: 'baojingdidian',
            width: '187px',
            align:'center',
          }
        ],
        data1: [
          {
            xuhao: 1,
            chuli: '查看',
            shebei: '',
            shijian: '2020-12-25 9:15:42',
            ceshi: '是',
            baojingleixing: '火警',
            jiedian: '01号主机0001回路0001分区0004节点',
            baojingfenlei: '差温探头',
            baojingdidian: '1回路004号',
          },
          {
            xuhao: 2,
            chuli: '查看',
            shebei: '',
            shijian: '2020-12-25 9:15:42',
            ceshi: '是',
            baojingleixing: '火警',
            jiedian: '01号主机0001回路0001分区0004节点',
            baojingfenlei: '差温探头',
            baojingdidian: '1回路004号',
          }]
      }
    },

    methods: {
      rowClassName (row, index) {
        return 'demo-table-info-row';
      },
    }
  }
</script>

<style lang="scss">
  .ivu-table th{
    background-color: #2d8cf0;
    /*background-color: transparent;*/
    border-bottom: 1px solid #2d8cf0;
    color: #fff;
  }
  .ivu-table th:hover{
    background-color: #0f70d6;
    /*background-color: transparent;*/
  }
  .ivu-table .demo-table-info-row td{
    background-color: #011f60;
    color: #fff;
  }
  .ivu-table td, .ivu-table th{
    border-bottom: 1px solid #2d8cf0;
    /*border-bottom: 1px solid transparent;*/
  }
  .ivu-table:before{
    border-bottom: 1px solid #2d8cf0;
    /*border-bottom: 1px solid transparent;*/
  }
  .ivu-table:before{
    background-color: transparent;
  }

</style>
