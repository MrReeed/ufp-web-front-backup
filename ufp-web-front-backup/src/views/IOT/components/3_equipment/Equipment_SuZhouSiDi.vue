<template>
  <el-container>
    <div class="equipment-innerbox">

      <el-header class="equipment-suzhousidi-listheader" >
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
        <Input id="equipment-at-input" v-model="value" placeholder="请输入单位关键字搜索" style="width: 300px" />
        <Button id="equipment-at-search" type="primary" icon="ios-search"></Button>

      </el-header>

      <!--<el-main class="equipment-suzhousidi-listmainbox">-->
        <div class="equipment-suzhousidi-listmainbox">
          <Table :row-class-name="rowClassName" :columns="columns1" :data="data1" ></Table>
        </div>
      <!--</el-main>-->

      <el-footer style="height: 56px;background-color: transparent;position: relative;">
        <div class="equipment-suzhousidi-listfooter-block">
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
    name: 'Equipment_SuZhouSiDi',
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
            title: '设备系统',
            key: 'shebeixitong',
            width: '100px',
            align:'center',
          },
          {
            title: '设备类型',
            key: 'shebeileixing',
            width: '100px',
            align:'center',
          },
          {
            title: '设备名称',
            key: 'shebeimingcheng',
            width: '150px',
            align:'center',
          },
          {
            title: '设备型号',
            key: 'shebeixinghao',
            width: '120px',
            align:'center',
          },
          {
            title: '设备编号',
            key: 'shebeibianhao',
            width: '120px',
            align:'center',
          },
          {
            title: '子号',
            key: 'zihao',
            width: '70px',
            align:'center',
          },
          {
            title: '使用时间',
            key: 'shiyongshijian',
            width: '150px',
            align:'center',
          },
          {
            title: '设备状态',
            key: 'shebeizhuangtai',
            width: '100px',
            align:'center',
          },
          {
            title: '标定描述',
            key: 'biaodingmiaoshu',
            width: '100px',
            align:'center',
          },
          {
            title: '子站号',
            key: 'zizhanhao',
            width: '100px',
            align:'center',
          },
          {
            title: '所属单位名称',
            key: 'suoshudanweimingcheng',
            width: '120px',
            align:'center',
          },
          {
            title: '终端IP',
            key: 'zhongduanIP',
            width: '120px',
            align:'center',
          },
          // ------------------------- 最后一个不用指定width宽度，这样可以自适应宽度。否则哪怕有一点缝隙都会出现白边 ------------------------
          {
            title: '通讯协议',
            key: 'tongxunxieyi',
            align:'center',
          },
        ],

        data1: [   //表格内容
          {
            xuhao: 1,
            shebeixitong: '水系统',
            shebeileixing: 'RTU',
            shebeimingcheng: '采集传输控制终端WCTU1284-VL',
            shebeixinghao: '',
            shebeibianhao: '2011200C0912',
            zihao: '1',
            shiyongshijian: '',
            shebeizhuangtai: '离线',
            biaodingmiaoshu: '未标定',
            zizhanhao: '',
            suoshudanweimingcheng: '思迪展板',
            zhongduanIP:'221.178.127.173:9520',
            tongxunxieyi:'1/1',
            cellClassName:{
              shebeizhuangtai:'EquipmentList-shebeizhuangtai-lixian',
              biaodingmiaoshu:'EquipmentList-biaodingmiaoshu-weibiaoding',
            }
          },
          {
            xuhao: 2,
            shebeixitong: '水系统',
            shebeileixing: 'RTU',
            shebeimingcheng: '采集传输控制终端WCTU1284-VL',
            shebeixinghao: '',
            shebeibianhao: '2011200C0912',
            zihao: '3',
            shiyongshijian: '',
            shebeizhuangtai: '在线',
            biaodingmiaoshu: '未标定',
            zizhanhao: '',
            suoshudanweimingcheng: '思迪展板',
            zhongduanIP:'39.144.18.78:44451',
            tongxunxieyi:'/',
            cellClassName:{
              shebeizhuangtai:'EquipmentList-shebeizhuangtai-zaixian',
              biaodingmiaoshu:'EquipmentList-biaodingmiaoshu-weibiaoding',
            }
          },
          {
            xuhao: 3,
            shebeixitong: '水系统',
            shebeileixing: 'RTU',
            shebeimingcheng: '采集传输控制终端WCTU1284-VL',
            shebeixinghao: '',
            shebeibianhao: '2011200C0912',
            zihao: '3',
            shiyongshijian: '',
            shebeizhuangtai: '在线',
            biaodingmiaoshu: '未标定',
            zizhanhao: '',
            suoshudanweimingcheng: '思迪展板',
            zhongduanIP:'39.144.18.78:44451',
            tongxunxieyi:'/',
            cellClassName:{
              shebeizhuangtai:'EquipmentList-shebeizhuangtai-zaixian',
              biaodingmiaoshu:'EquipmentList-biaodingmiaoshu-weibiaoding',
            }
          },
          {
            xuhao: 4,
            shebeixitong: '水系统',
            shebeileixing: 'RTU',
            shebeimingcheng: '采集传输控制终端WCTU1284-VL',
            shebeixinghao: '',
            shebeibianhao: '2011200C0912',
            zihao: '3',
            shiyongshijian: '',
            shebeizhuangtai: '在线',
            biaodingmiaoshu: '未标定',
            zizhanhao: '',
            suoshudanweimingcheng: '思迪展板',
            zhongduanIP:'39.144.18.78:44451',
            tongxunxieyi:'1/1',
            cellClassName:{
              shebeizhuangtai:'EquipmentList-shebeizhuangtai-zaixian',
              biaodingmiaoshu:'EquipmentList-biaodingmiaoshu-weibiaoding',
            }
          },
          {
            xuhao: 5,
            shebeixitong: '水系统',
            shebeileixing: 'RTU',
            shebeimingcheng: '远程测试',
            shebeixinghao: '',
            shebeibianhao: '2011200C0912',
            zihao: '1',
            shiyongshijian: '',
            shebeizhuangtai: '离线',
            biaodingmiaoshu: '未标定',
            zizhanhao: '6',
            suoshudanweimingcheng: '消防建筑演示中心',
            zhongduanIP:'',
            tongxunxieyi:'国标',
            cellClassName:{
              shebeizhuangtai:'EquipmentList-shebeizhuangtai-lixian',
              biaodingmiaoshu:'EquipmentList-biaodingmiaoshu-weibiaoding',
            }
          },
          {
            xuhao: 6,
            shebeixitong: '报警系统',
            shebeileixing: '主机',
            shebeimingcheng: '智能摄像机',
            shebeixinghao: 'AFN5050（深圳赋安安全系统有限公司）',
            shebeibianhao: 'E50769804',
            zihao: '1',
            shiyongshijian: '',
            shebeizhuangtai: '离线',
            biaodingmiaoshu: '未标定',
            zizhanhao: '6',
            suoshudanweimingcheng: '消防建筑演示中心',
            zhongduanIP:'',
            tongxunxieyi:'国标',
            cellClassName:{
              shebeizhuangtai:'EquipmentList-shebeizhuangtai-lixian',
              biaodingmiaoshu:'EquipmentList-biaodingmiaoshu-weibiaoding',
            }
          },
          {
            xuhao: 7,
            shebeixitong: '水系统',
            shebeileixing: 'RTU',
            shebeimingcheng: '水浸传感器',
            shebeixinghao: 'RTU300',
            shebeibianhao: '2005150C',
            zihao: '1',
            shiyongshijian: '',
            shebeizhuangtai: '离线',
            biaodingmiaoshu: '未标定',
            zizhanhao: '6',
            suoshudanweimingcheng: '消防建筑演示中心',
            zhongduanIP:'',
            tongxunxieyi:'国标',
            cellClassName:{
              shebeizhuangtai:'EquipmentList-shebeizhuangtai-lixian',
              biaodingmiaoshu:'EquipmentList-biaodingmiaoshu-weibiaoding',
            }
          },
          {
            xuhao: 8,
            shebeixitong: '报警系统',
            shebeileixing: '主机',
            shebeimingcheng: '报警主机113',
            shebeixinghao: 'JB-3208',
            shebeibianhao: 'E50769804',
            zihao: '1',
            shiyongshijian: '',
            shebeizhuangtai: '离线',
            biaodingmiaoshu: '未标定',
            zizhanhao: '6',
            suoshudanweimingcheng: '消防建筑演示中心',
            zhongduanIP:'172.16.8.28:5100',
            tongxunxieyi:'1/2',
            cellClassName:{
              shebeizhuangtai:'EquipmentList-shebeizhuangtai-lixian',
              biaodingmiaoshu:'EquipmentList-biaodingmiaoshu-weibiaoding',
            }
          },
          {
            xuhao: 9,
            shebeixitong: '报警系统',
            shebeileixing: '主机',
            shebeimingcheng: '消控室报警主机',
            shebeixinghao: 'TX3002',
            shebeibianhao: '1911270A6040',
            zihao: '1',
            shiyongshijian: '',
            shebeizhuangtai: '在线',
            biaodingmiaoshu: '未标定',
            zizhanhao: '',
            suoshudanweimingcheng: '思迪展板',
            zhongduanIP:'172.16.8.28:5100',
            tongxunxieyi:'5/9',
            cellClassName:{
              shebeizhuangtai:'EquipmentList-shebeizhuangtai-zaixian',
              biaodingmiaoshu:'EquipmentList-biaodingmiaoshu-weibiaoding',
            }
          },
          {
            xuhao: 10,
            shebeixitong: '报警系统',
            shebeileixing: '用户传输装置',
            shebeimingcheng: '用户信息传输装置',
            shebeixinghao: 'SD-F3CD9000',
            shebeibianhao: '1911270A6040',
            zihao: '1',
            shiyongshijian: '',
            shebeizhuangtai: '离线',
            biaodingmiaoshu: '未标定',
            zizhanhao: '',
            suoshudanweimingcheng: '思迪展板',
            zhongduanIP:'218.204.252.240:5100',
            tongxunxieyi:'1/1',
            cellClassName:{
              shebeizhuangtai:'EquipmentList-shebeizhuangtai-lixian',
              biaodingmiaoshu:'EquipmentList-biaodingmiaoshu-weibiaoding',
            }
          },
          {
            xuhao: 11,
            shebeixitong: '电器火灾',
            shebeileixing: 'RTU',
            shebeimingcheng: '智能安全用电采集终端',
            shebeixinghao: 'PJ-DQ-420',
            shebeibianhao: 'C02710010667',
            zihao: '2',
            shiyongshijian: '',
            shebeizhuangtai: '离线',
            biaodingmiaoshu: '未标定',
            zizhanhao: '',
            suoshudanweimingcheng: '思迪展板',
            zhongduanIP:'218.204.252.240:5100',
            tongxunxieyi:'1/1',
            cellClassName:{
              shebeizhuangtai:'EquipmentList-shebeizhuangtai-lixian',
              biaodingmiaoshu:'EquipmentList-biaodingmiaoshu-weibiaoding',
            }
          },
          {
            xuhao: 12,
            shebeixitong: '水系统',
            shebeileixing: 'RTU',
            shebeimingcheng: '演示设备',
            shebeixinghao: 'RTU200',
            shebeibianhao: 'C02710010667',
            zihao: '2',
            shiyongshijian: '',
            shebeizhuangtai: '在线',
            biaodingmiaoshu: '未标定',
            zizhanhao: '12',
            suoshudanweimingcheng: '苏州思迪信息技术有限公司',
            zhongduanIP:'221.6.68.240:5100',
            tongxunxieyi:'1/1',
            cellClassName:{
              shebeizhuangtai:'EquipmentList-shebeizhuangtai-zaixian',
              biaodingmiaoshu:'EquipmentList-biaodingmiaoshu-weibiaoding',
            }
          },
          // {
          //   xuhao: 13,
          //   danweibianhao: 'SD002',
          //   zizhanhao: '2',
          //   danweimingcheng: '思迪建筑消防演示平台',
          //   shebeibianhao: '1405140A5010',
          //   jianzhu: '消防实验中心',
          //   quyu: '演示区域',
          //   anzhuangweizhixinxi: '二楼监控室',
          //   lianxidianhua: '67071169',
          //   shebeimingcheng: '传输装置-5',
          //   jiankongshishipin: '',
          //   jieguo: '设备在线',
          //   cellClassName:{
          //     jieguo:'ChaGangList-jieguo-shebeizaixian'
          //   }
          // },
          // {
          //   xuhao: 14,
          //   danweibianhao: 'SD002',
          //   zizhanhao: '',
          //   danweimingcheng: '思迪展板',
          //   shebeibianhao: '1911270A6040',
          //   jianzhu: '思迪办公大楼',
          //   quyu: '一层消控室',
          //   anzhuangweizhixinxi: '办公大楼',
          //   lianxidianhua: '0512-67071169',
          //   shebeimingcheng: '用户信息传输装置',
          //   jiankongshishipin: '',
          //   jieguo: '设备离线',
          //   cellClassName:{  //给设备离线的表格添加 高亮样式
          //     jieguo:'ChaGangList-jieguo-shebeilixian'
          //   }
          // },
          // {
          //   xuhao: 15,
          //   danweibianhao: 'SD002',
          //   zizhanhao: '',
          //   danweimingcheng: '思迪展板',
          //   shebeibianhao: '1911270A6040',
          //   jianzhu: '思迪办公大楼',
          //   quyu: '一层消控室',
          //   anzhuangweizhixinxi: '办公大楼',
          //   lianxidianhua: '0512-67071169',
          //   shebeimingcheng: '用户信息传输装置',
          //   jiankongshishipin: '',
          //   jieguo: '设备离线',
          //   cellClassName:{  //给设备离线的表格添加 高亮样式
          //     jieguo:'ChaGangList-jieguo-shebeilixian'
          //   }
          // },
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
  .equipment-innerbox{
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
  .equipment-suzhousidi-listbox{
    background-color: pink;
  }

  .equipment-suzhousidi-listheader{
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
  #equipment-at-input{
    position: absolute;
    top: 15px;
    left: 760px;
    width: 200px!important;
  }
  #equipment-at-search{
    position: absolute;
    top: 15px;
    left: 970px;
  }
  .ivu-icon.ivu-icon-ios-search::before{
    margin: auto auto!important;
  }

  .equipment-suzhousidi-listmainbox{
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
  .ivu-table .EquipmentList-shebeizhuangtai-zaixian {
    background-color: #00cc99!important;
    color:#fff!important;
  }
  .ivu-table .EquipmentList-shebeizhuangtai-lixian {
    background-color: #e64d00!important;
    color:#fff!important;
  }
  //未标定
  .ivu-table .EquipmentList-biaodingmiaoshu-weibiaoding {
    /*background-color: #e64d00!important;*/
    color:#e64d00!important;
  }


  .equipment-suzhousidi-listfooter-block{
    position: absolute;
    width: 700px;
    top: 12px;
    left: 470px;
  }
  .el-pagination__total,.el-pagination__jump{
    color: #A3D8FA;
  }

</style>
