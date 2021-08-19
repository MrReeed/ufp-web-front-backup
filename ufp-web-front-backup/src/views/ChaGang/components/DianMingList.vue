<template>
  <div id="dianminglist-box">


    <el-header class="dianminglist-header" >
      <div>
        <Select id="at-select" v-model="model1" style="width:200px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value" :placeholder="cityList[0].value">{{ item.label }}</Option>
        </Select>
      </div>
      <Input id="dianminglist-input" v-model="value" placeholder="请输入单位关键字搜索" style="width: 300px" />
      <Button id="dianminglist-search" type="primary" icon="ios-search"></Button>

      <div id="twobutton">
        <at-button-group>
          <ButtonGroup>
            <Button type="primary">点名全部</Button>
            <Button type="primary">点名选中</Button>
          </ButtonGroup>
        </at-button-group>
      </div>
    </el-header>



    <div class="dianminglist-mainbox">
      <div style="width: 100%;height: 100%;background-color: transparent">
        <Table :row-class-name="rowClassName" :columns="columns1" :data="data1" ></Table>
        <!-- stripe="true"-->
      </div>
    </div>



    <el-footer style="height: 56px;background-color: transparent;position: relative;">
      <div class="dianminglist-footer-block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="50">
        </el-pagination>
      </div>
    </el-footer>

  </div>
</template>

<script>
  export default {
    name: 'DianMingList',
    data(){
      return{

        //下拉选择器的数据
        cityList: [
          {
            value: '全部状态',
            label: '全部状态'
          },
          {
            value: '设备离线',
            label: '离线'
          },
          {
            value: '设备在线',
            label: '在线'
          }
        ],
        model1: '',

        //搜索框的数据
        value: '',

        // 表格的数据
        columns1: [  //表格头部
          {
            title: '序号',
            key: 'xuhao',
            // className:'xuhaoStyle',
            width: '140px',
            align:'center',
          },
          {
            title: '单位编号',
            key: 'danweibianhao',
            width: '180px',
            align:'center',
          },
          {
            title: '子站号',
            key: 'zizhanhao',
            width: '140px',
            align:'center',
          },
          {
            title: '单位名称',
            key: 'danweimingcheng',
            width: '350px',
            align:'center',
          },
          {
            title: '设备编号',
            key: 'shebeibianhao',
            width: '260px',
            align:'center',
          },
          {
            title: '设备类型',
            key: 'shebeileixing',
            width: '250px',
            align:'center',
          },
          {
            title: '设备名称',
            key: 'shebeimingcheng',
            width: '370px',
            align:'center',
          },
          {
            title: '结果',
            key: 'jieguo',
            align:'center',
          }
        ],

        data1: [   //表格内容
          {
            xuhao: 1,
            danweibianhao: 'SD002',
            zizhanhao: 1,
            danweimingcheng: '思迪展板',
            shebeibianhao: '2011200C0912',
            shebeileixing: 'RTU',
            shebeimingcheng: '采集传输控制终端WCTU1284-VL',
            jieguo: '离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'DianMingList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 2,
            danweibianhao: 'SD002',
            zizhanhao: 3,
            danweimingcheng: '思迪展板',
            shebeibianhao: '2011100C07U2',
            shebeileixing: 'RTU',
            shebeimingcheng: '采集传输控制终端WCTU1284-VL',
            jieguo: ''
          },
          {
            xuhao: 3,
            danweibianhao: 'SD008',
            zizhanhao: 6,
            danweimingcheng: '思迪展板',
            shebeibianhao: '2011100C07U2',
            shebeileixing: 'RTU',
            shebeimingcheng: '采集传输控制终端WCTU1284-VL',
            jieguo: ''
          },
          {
            xuhao: 4,
            danweibianhao: 'SD008',
            zizhanhao: 1,
            danweimingcheng: '思迪展板',
            shebeibianhao: '2011100C07U2',
            shebeileixing: 'RTU',
            shebeimingcheng: '采集传输控制终端WCTU1284-VL',
            jieguo: ''
          },
          {
            xuhao: 5,
            danweibianhao: 'SD008',
            zizhanhao: 1,
            danweimingcheng: '建筑消防演示中心',
            shebeibianhao: '123456123456',
            shebeileixing: 'RTU',
            shebeimingcheng: '远程测试',
            jieguo: '离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'DianMingList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 6,
            danweibianhao: 'SD008',
            zizhanhao: 1,
            danweimingcheng: '建筑消防演示中心',
            shebeibianhao: 'E50769804',
            shebeileixing: 'RTU',
            shebeimingcheng: '智能摄像机',
            jieguo: '离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'DianMingList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 7,
            danweibianhao: 'SD008',
            zizhanhao: 1,
            danweimingcheng: '建筑消防演示中心',
            shebeibianhao: '2005150C6080',
            shebeileixing: 'RTU',
            shebeimingcheng: '水浸传感器',
            jieguo: '离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'DianMingList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 8,
            danweibianhao: 'SD008',
            zizhanhao: 1,
            danweimingcheng: '建筑消防演示中心',
            shebeibianhao: '111561111113',
            shebeileixing: 'RTU',
            shebeimingcheng: '报警主机113',
            jieguo: '离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'DianMingList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 9,
            danweibianhao: 'SD007',
            zizhanhao: 1,
            danweimingcheng: '苏州思迪信息技术有限公司',
            shebeibianhao: '1404170A1010',
            shebeileixing: '用户传输装置',
            shebeimingcheng: '传输装置-2000',
            jieguo: ''
          },
          {
            xuhao: 10,
            danweibianhao: 'SD007',
            zizhanhao: 1,
            danweimingcheng: '苏州思迪信息技术有限公司',
            shebeibianhao: '1404170A1010',
            shebeileixing: '用户传输装置',
            shebeimingcheng: '松江JB-3208',
            jieguo: ''
          },
          {
            xuhao: 11,
            danweibianhao: 'SD007',
            zizhanhao: 1,
            danweimingcheng: '苏州思迪信息技术有限公司',
            shebeibianhao: '1404170A1010',
            shebeileixing: 'RTU',
            shebeimingcheng: 'RTU200',
            jieguo: ''
          },
        ],

        //底部分页的数据
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
      }
    },
    methods: {
      rowClassName (row, index) {
        return 'demo-table-info-row';
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  }
</script>

<style lang="scss">
  #dianminglist-box{
    height: 100%;
    width: 100%;
    /*background-color: #13ce66;*/
  }
  .dianminglist-header{
    position: relative;
    height: 68px;
    /*background-color: pink;*/
  }

  #at-select{
    position: absolute;
    width: 200px;
    top: 15px;
    left: 30px;
  }
  #dianminglist-input{
    position: absolute;
    top: 15px;
    left: 240px;
    width: 200px!important;
  }
  #dianminglist-search{
    position: absolute;
    top: 15px;
    left: 450px;
  }
  .ivu-icon.ivu-icon-ios-search::before{
    margin: auto auto!important;
  }
  #twobutton{
    position: absolute;
    top: 15px;
    left: 560px;
  }

  .dianminglist-mainbox{
    height: 766.69px;
    background-color: #011f60;
  }

  /*.ivu-table-column-gHsubY{*/
  /*width: 20px!important;*/
  /*}*/

  .ivu-table th{
    background-color: #2d8cf0;
    border-bottom: 1px solid #2d8cf0;
    color: #f2f2f2;
  }
  .ivu-table th:hover{
    background-color: #0f70d6;
  }
  .ivu-table .demo-table-info-row td{
    background-color: #011f60;
    color: #ddd;
  }
  /*.ivu-table .demo-table-info-row th:hover{*/
  /*background-color: green;*/
  /*}*/
  /*.ivu-table-row.demo-table-info-row.ivu-table-row-hover{*/
  /*background-color: #13ce66!important;*/
  /*}*/
  .ivu-table td, .ivu-table th{
    border-bottom: 1px solid #2d8cf0;
  }
  .ivu-table:before{
    border-bottom: 1px solid #2d8cf0;
  }
  .ivu-table:before{
    background-color: transparent;
  }


  .ivu-table .DianMingList-jieguo-shebeilixian {
    background-color: #e64d00!important;
    color:#fff!important;
  }


  .dianminglist-footer-block{
    position: absolute;
    width: 700px;
    top: 12px;
    left: 640px;
  }
  .el-pagination__total,.el-pagination__jump{
    color: #A3D8FA;
  }
</style>
