<template>
  <div id="dianmingjilulist-box">


    <el-header class="dianmingjilulist-header" >
      <div>
        <Select id="at-select" v-model="model1" style="width:200px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value" :placeholder="cityList[0].value">{{ item.label }}</Option>
        </Select>
      </div>
      <div id="dianmingjilulist-shijianxuanzeqi">
        <Row>
          <Col span="12">
            <DatePicker type="daterange" :options="timeSelectorOptions" placement="bottom-end" placeholder="请选择查岗日期" style="width: 300px"></DatePicker>
          </Col>
        </Row>
      </div>
      <Input id="at-input" v-model="value" placeholder="请输入单位关键字搜索" style="width: 300px" />
      <Button id="at-search" type="primary" icon="ios-search"></Button>

    </el-header>



    <div class="dianmingjilulist-mainbox">
      <div style="width: 100%;height: 100%;background-color: transparent">
        <Table :row-class-name="rowClassName" :columns="columns1" :data="data1" ></Table>
        <!-- stripe="true"-->
      </div>
    </div>



    <el-footer style="height: 56px;background-color: transparent;position: relative;">
      <div class="dianmingjilulist-footer-block">
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
    name: 'DianMingJiLuList',
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
            label: '失败'
          },
          {
            value: '设备在线',
            label: '成功'
          }
        ],
        model1: '',

        //日期选择器的数据
        timeSelectorOptions: {
          shortcuts: [
            {
              text: '1 周',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                return [start, end];
              }
            },
            {
              text: '1 个月',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                return [start, end];
              }
            },
            {
              text: '3 个月',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                return [start, end];
              }
            }
          ]
        },

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
            title: '发送用户',
            key: 'fasongyonghu',
            width: '250px',
            align:'center',
          },
          {
            title: '发送时间',
            key: 'fasongshijian',
            width: '300px',
            align:'center',
          },
          {
            title: '点名结果',
            key: 'dianmingjieguo',
            width: '150px',
            align:'center',
            className:'dianmingjieguoStyle'
          },
          {
            title: '回应时间',
            key: 'huiyingshijian',
            align:'center',
          },
        ],

        data1: [   //表格内容
          {
            xuhao: 1,
            danweibianhao: 'SD008',
            zizhanhao: 6,
            danweimingcheng: '建筑消防演示平台',
            fasongyonghu: '超级管理员',
            fasongshijian: '2020-12-23 14:19:31',
            dianmingjieguo: '成功',
            huiyingshijian: '2020-12-23 14:19:31',
          },
          {
            xuhao: 2,
            danweibianhao: 'SD002',
            zizhanhao: '',
            danweimingcheng: '思迪展板',
            fasongyonghu: '超级管理员',
            fasongshijian: '2020-12-23 14:19:31',
            dianmingjieguo: '成功',
            huiyingshijian: '2020-12-23 14:19:31',
          },
          {
            xuhao: 3,
            danweibianhao: 'SD008',
            zizhanhao: 6,
            danweimingcheng: '思迪建筑消防演示平台',
            fasongyonghu: '超级管理员',
            fasongshijian: '2020-12-23 14:19:31',
            dianmingjieguo: '成功',
            huiyingshijian: '2020-12-23 14:19:31',
          },
          {
            xuhao: 4,
            danweibianhao: 'SD008',
            zizhanhao: 6,
            danweimingcheng: '思迪建筑消防演示平台',
            fasongyonghu: '超级管理员',
            fasongshijian: '2020-12-23 14:19:31',
            dianmingjieguo: '成功',
            huiyingshijian: '2020-12-23 14:19:31',
          },
          {
            xuhao: 5,
            danweibianhao: 'SD008',
            zizhanhao: 6,
            danweimingcheng: '思迪展板',
            fasongyonghu: '超级管理员',
            fasongshijian: '2020-12-23 14:19:31',
            dianmingjieguo: '成功',
            huiyingshijian: '2020-12-23 14:19:31',
          },
          {
            xuhao: 6,
            danweibianhao: 'SD008',
            zizhanhao: 6,
            danweimingcheng: '思迪建筑消防演示平台',
            fasongyonghu: '超级管理员',
            fasongshijian: '2020-12-23 14:19:31',
            dianmingjieguo: '成功',
            huiyingshijian: '2020-12-23 14:19:31',
          },
          {
            xuhao: 7,
            danweibianhao: 'SD008',
            zizhanhao: 6,
            danweimingcheng: '思迪展板',
            fasongyonghu: '超级管理员',
            fasongshijian: '2020-12-23 14:19:31',
            dianmingjieguo: '成功',
            huiyingshijian: '2020-12-23 14:19:31',
          }
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
  #dianmingjilulist-box{
    height: 100%;
    width: 100%;
    /*background-color: #13ce66;*/
  }
  .dianmingjilulist-header{
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
  #dianmingjilulist-shijianxuanzeqi{
    position: absolute;
    width: 300px;
    top: 15px;
    left: 240px;
  }
  #at-input{
    position: absolute;
    top: 15px;
    left: 550px;
    width: 200px!important;
  }
  #at-search{
    position: absolute;
    top: 15px;
    left: 760px;
  }
  .ivu-icon.ivu-icon-ios-search::before{
    margin: auto auto!important;
  }

  .dianmingjilulist-mainbox{
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
  .ivu-table td, .ivu-table th{
    border-bottom: 1px solid #2d8cf0;
  }
  .ivu-table:before{
    border-bottom: 1px solid #2d8cf0;
  }
  .ivu-table:before{
    background-color: transparent;
  }

  .ivu-table td.fasongzhuangtaiStyle{
    background-color: #00cc99;
    color: #fff;
  }
  .ivu-table td.dianmingjieguoStyle{
    background-color: #00cc99;
    color: #fff;
  }

  .dianmingjilulist-footer-block{
    position: absolute;
    width: 700px;
    top: 12px;
    left: 640px;
  }
  .el-pagination__total,.el-pagination__jump{
    color: #A3D8FA;
  }
</style>
