<template>
  <el-container>
    <div class="NBequipment-innerbox">

      <el-header class="NBequipment-suzhousidi-listheader" >
        <div>
          <Select id="at-select-1" v-model="model1" style="width:200px">
            <Option v-for="item in firstList" :value="item.value" :key="item.value" :placeholder="firstList[0].value">{{ item.label }}</Option>
          </Select>
        </div>
        <div>
          <Select id="at-select-2" v-model="model2" style="width:200px">
            <Option v-for="item in secondList" :value="item.value" :key="item.value" :placeholder="secondList[0].value">{{ item.label }}</Option>
          </Select>
        </div>
        <!--这里还要有一个下拉框-->
        <div id="suzhousidi-list-shijianxuanzeqi">
          <Row>
            <Col span="12">
              <DatePicker type="daterange" :options="timeSelectorOptions" placement="bottom-end" placeholder="请选择查岗日期" style="width: 300px"></DatePicker>
            </Col>
          </Row>
        </div>
        <Input id="NBequipment-at-input" v-model="value" placeholder="请输入单位关键字搜索" style="width: 300px" />
        <Button id="NBequipment-at-search" type="primary" icon="ios-search"></Button>

      </el-header>

      <!--<el-main class="NBequipment-suzhousidi-listmainbox">-->
      <div class="NBequipment-suzhousidi-listmainbox">
        <Table :row-class-name="rowClassName" :columns="columns1" :data="data1" ></Table>
      </div>
      <!--</el-main>-->

      <el-footer style="height: 56px;background-color: transparent;position: relative;">
        <div class="NBequipment-suzhousidi-listfooter-block">
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
  </el-container>
</template>

<script>
  export default {
    name: 'NBequipment_SuZhouSiDi',
    data() {
      return {

        //下拉选择器的数据
        firstList: [
          {
            value: '全部设备系统',
            label: '全部设备系统'
          },
          {
            value: '水系统',
            label: '水系统'
          },
          {
            value: '电气火灾',
            label: '电气火灾'
          },
          {
            value: '火灾自动报警系统',
            label: '火灾自动报警系统'
          },
          {
            value: '防火分离',
            label: '防火分离'
          },
          {
            value: '气体系统',
            label: '气体系统'
          },
          {
            value: '燃气系统',
            label: '燃气系统'
          },
          {
            value: '应急疏散',
            label: '应急疏散'
          },
          {
            value: '无线烟感',
            label: '无线烟感'
          },
          {
            value: '防排烟系统',
            label: '防排烟系统'
          }
        ],
        model1: '',

        secondList: [
          {
            value: '全部设备类型',
            label: '全部设备类型'
          },
          {
            value: '报警主机',
            label: '报警主机'
          },
          {
            value: '用户信息传输装置',
            label: '用户信息传输装置'
          },
          {
            value: 'RTU',
            label: 'RTU'
          },
        ],
        model2: '',

        thirdList:[],



        // 表格的数据
        columns1: [  //表格头部
          {
            title: '序号',
            key: 'xuhao',
            // className:'xuhaoStyle',
            width: '70px',
            align:'center',
          },
          {
            title: '设备厂家',
            key: 'shebeichangjia',
            width: '100px',
            align:'center',
          },{
            title: '设备型号',
            key: 'shebeixinghao',
            width: '120px',
            align:'center',
          },
          {
            title: 'IMEI',
            key: 'IMEI',
            width: '100px',
            align:'center',
          },
          {
            title: '入网时间',
            key: 'ruwangshijian',
            width: '200px',
            align:'center',
          },
          {
            title: '设备状态',
            key: 'shebeizhuangtai',
            width: '120px',
            align:'center',
          },
          {
            title: '电量(%)',
            key: 'dianliang',
            width: '70px',
            align:'center',
          },
          {
            title: '压力值',
            key: 'yalizhi',
            width: '100px',
            align:'center',
          },
          {
            title: '单位编号',
            key: 'danweibianhao',
            width: '100px',
            align:'center',
          },
          {
            title: '单位名称',
            key: 'danweimingcheng',
            width: '220px',
            align:'center',
          },
          {
            title: '安装位置',
            key: 'anzhuangweizhi',
            width: '180px',
            align:'center',
          },
          // ------------------------- 最后一个不用指定width宽度，这样可以自适应宽度。否则哪怕有一点缝隙都会出现白边 ------------------------
          {
            title: '通知电话',
            key: 'tongzhidianhua',
            align:'center',
          },
        ],

        data1: [   //表格内容
          {
            xuhao: 1,
            shebeichangjia: '',
            shebeixinghao: '',
            IMEI: '863703037884868',
            ruwangshijian: '2020-12-06 15:19:06',
            shebeizhuangtai: '在线',
            dianliang: '51',
            yalizhi: '',
            danweibianhao: 'SD-007',
            danweimingcheng: '苏州思迪信息技术有限公司',
            anzhuangweizhi: '九小场所（小饭店）',
            tongzhidianhua: '',
            cellClassName:{
              shebeizhuangtai:'NBequipmentList-shebeizhuangtai-zaixian',
            }
          },
          {
            xuhao: 2,
            shebeichangjia: '',
            shebeixinghao: '',
            IMEI: '863703037884868',
            ruwangshijian: '2020-12-06 15:19:06',
            shebeizhuangtai: '在线',
            dianliang: '88',
            yalizhi: '复位',
            danweibianhao: 'SD-002',
            danweimingcheng: '思迪展板',
            anzhuangweizhi: '九小场所（小饭店）',
            tongzhidianhua: '',
            cellClassName:{
              shebeizhuangtai:'NBequipmentList-shebeizhuangtai-zaixian',
            }
          },
          {
            xuhao: 3,
            shebeichangjia: 'HongxinAnno',
            shebeixinghao: 'MultiSensor',
            IMEI: '863703037884868',
            ruwangshijian: '2020-12-06 15:19:06',
            shebeizhuangtai: '在线',
            dianliang: '100',
            yalizhi: '',
            danweibianhao: 'SD-008',
            danweimingcheng: '苏州思迪信息技术有限公司',
            anzhuangweizhi: '九小场所（小医院）',
            tongzhidianhua: '',
            cellClassName:{
              shebeizhuangtai:'NBequipmentList-shebeizhuangtai-zaixian',
            }
          },
          {
            xuhao: 4,
            shebeichangjia: 'SW',
            shebeixinghao: 'Smoke',
            IMEI: '863703037884868',
            ruwangshijian: '2020-12-06 15:19:06',
            shebeizhuangtai: '在线',
            dianliang: '100',
            yalizhi: '',
            danweibianhao: 'SD-008',
            danweimingcheng: '苏州思迪信息技术有限公司',
            anzhuangweizhi: '',
            tongzhidianhua: '',
            cellClassName:{
              shebeizhuangtai:'NBequipmentList-shebeizhuangtai-zaixian',
            }
          },
          {
            xuhao: 5,
            shebeichangjia: 'SW',
            shebeixinghao: 'Smoke',
            IMEI: '863703037884868',
            ruwangshijian: '2020-12-06 15:19:06',
            shebeizhuangtai: '在线',
            dianliang: '51',
            yalizhi: '',
            danweibianhao: 'SD-007',
            danweimingcheng: '苏州思迪信息技术有限公司',
            anzhuangweizhi: '九小场所（小旅馆）',
            tongzhidianhua: '',
            cellClassName:{
              shebeizhuangtai:'NBequipmentList-shebeizhuangtai-zaixian',
            }
          },
          {
            xuhao: 6,
            shebeichangjia: '',
            shebeixinghao: '',
            IMEI: '863703037884868',
            ruwangshijian: '2020-12-06 15:19:06',
            shebeizhuangtai: '离线',
            dianliang: '51',
            yalizhi: '',
            danweibianhao: 'SD-007',
            danweimingcheng: '苏州思迪信息技术有限公司',
            anzhuangweizhi: '九小场所（小医院）',
            tongzhidianhua: '',
            cellClassName:{
              shebeizhuangtai:'NBequipmentList-shebeizhuangtai-lixian',
            }
          },
          {
            xuhao: 7,
            shebeichangjia: 'HongxinAnno',
            shebeixinghao: 'MultiSensor',
            IMEI: '863703037884868',
            ruwangshijian: '2020-12-06 15:19:06',
            shebeizhuangtai: '在线',
            dianliang: '100',
            yalizhi: '',
            danweibianhao: 'SD-008',
            danweimingcheng: '苏州思迪信息技术有限公司',
            anzhuangweizhi: '九小场所（小医院）',
            tongzhidianhua: '',
            cellClassName:{
              shebeizhuangtai:'NBequipmentList-shebeizhuangtai-zaixian',
            }
          },
          {
            xuhao: 8,
            shebeichangjia: 'SW',
            shebeixinghao: 'Smoke',
            IMEI: '863703037884868',
            ruwangshijian: '2020-12-06 15:19:06',
            shebeizhuangtai: '在线',
            dianliang: '100',
            yalizhi: '',
            danweibianhao: 'SD-008',
            danweimingcheng: '苏州思迪信息技术有限公司',
            anzhuangweizhi: '',
            tongzhidianhua: '',
            cellClassName:{
              shebeizhuangtai:'NBequipmentList-shebeizhuangtai-zaixian',
            }
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
  .NBequipment-innerbox{
    background-color: rgba(158, 158, 158,.1);
    border: 1px solid rgba(158, 158, 158,.4);
    box-shadow: 10px 10px 10px -3px rgba(0, 0, 0,.4);
    /*padding: 0px 10px;*/
    /*padding-top: 3px;*/
    /*padding-left: 5px;*/
    /*height: 620px;*/
    /*width: 1200px;*/
    height: 850px;
    width: 100%;
    position: relative;
  }
  .NBequipment-suzhousidi-listbox{
    background-color: pink;
  }

  .NBequipment-suzhousidi-listheader{
    position: relative;
    height: 60px;
    /*background-color: pink;*/
  }

  #at-select-1{
    position: absolute;
    width: 200px;
    top: 15px;
    left: 30px;
  }
  #at-select-2{
    position: absolute;
    width: 200px;
    top: 15px;
    left: 240px;
  }

  #suzhousidi-list-shijianxuanzeqi{
    position: absolute;
    width: 300px;
    top: 15px;
    left: 450px;
  }
  #NBequipment-at-input{
    position: absolute;
    top: 15px;
    left: 760px;
    width: 200px!important;
  }
  #NBequipment-at-search{
    position: absolute;
    top: 15px;
    left: 970px;
  }
  .ivu-icon.ivu-icon-ios-search::before{
    margin: auto auto!important;
  }

  .NBequipment-suzhousidi-listmainbox{
    height: 734px;
    background-color: #011f60;
  }


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

  //设备在线、离线
  .ivu-table .NBequipmentList-shebeizhuangtai-zaixian {
    /*background-color: #00cc99!important;*/
    color:#00cc99!important;
  }
  .ivu-table .NBequipmentList-shebeizhuangtai-lixian {
    /*background-color: #e64d00!important;*/
    color:#e64d00!important;
  }



  .NBequipment-suzhousidi-listfooter-block{
    position: absolute;
    width: 700px;
    top: 12px;
    left: 470px;
  }
  .el-pagination__total,.el-pagination__jump{
    color: #A3D8FA;
  }

</style>
