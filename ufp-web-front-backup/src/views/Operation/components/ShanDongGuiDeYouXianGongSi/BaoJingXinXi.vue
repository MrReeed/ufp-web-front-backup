<template>
  <div class="baojingxinxi">
    <div class="baojingxinxiBar">
      <div class="baojingxinxiBar_inputBox">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="baojingxinxiBar_Button">
        <span>导出</span>
      </div>
    </div>

    <div class="baojingxinxi_TableBox">
      <Table :row-class-name="rowClassName" :columns="columns1" :data="data1"></Table>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'BaoJingXinXi',
    data(){
      return{
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
            width:'77px',
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
              shebeizhuangtai:'BaoJingXinXi-shebeizhuangtai-lixian',
              biaodingmiaoshu:'BaoJingXinXi-biaodingmiaoshu-weibiaoding',
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
              shebeizhuangtai:'BaoJingXinXi-shebeizhuangtai-zaixian',
              biaodingmiaoshu:'BaoJingXinXi-biaodingmiaoshu-weibiaoding',
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
              shebeizhuangtai:'BaoJingXinXi-shebeizhuangtai-zaixian',
              biaodingmiaoshu:'BaoJingXinXi-biaodingmiaoshu-weibiaoding',
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
              shebeizhuangtai:'BaoJingXinXi-shebeizhuangtai-zaixian',
              biaodingmiaoshu:'BaoJingXinXi-biaodingmiaoshu-weibiaoding',
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
              shebeizhuangtai:'BaoJingXinXi-shebeizhuangtai-lixian',
              biaodingmiaoshu:'BaoJingXinXi-biaodingmiaoshu-weibiaoding',
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
              shebeizhuangtai:'BaoJingXinXi-shebeizhuangtai-lixian',
              biaodingmiaoshu:'BaoJingXinXi-biaodingmiaoshu-weibiaoding',
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
              shebeizhuangtai:'BaoJingXinXi-shebeizhuangtai-lixian',
              biaodingmiaoshu:'BaoJingXinXi-biaodingmiaoshu-weibiaoding',
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
              shebeizhuangtai:'BaoJingXinXi-shebeizhuangtai-lixian',
              biaodingmiaoshu:'BaoJingXinXi-biaodingmiaoshu-weibiaoding',
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
              shebeizhuangtai:'BaoJingXinXi-shebeizhuangtai-zaixian',
              biaodingmiaoshu:'BaoJingXinXi-biaodingmiaoshu-weibiaoding',
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
              shebeizhuangtai:'BaoJingXinXi-shebeizhuangtai-lixian',
              biaodingmiaoshu:'BaoJingXinXi-biaodingmiaoshu-weibiaoding',
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
              shebeizhuangtai:'BaoJingXinXi-shebeizhuangtai-lixian',
              biaodingmiaoshu:'BaoJingXinXi-biaodingmiaoshu-weibiaoding',
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
              shebeizhuangtai:'BaoJingXinXi-shebeizhuangtai-zaixian',
              biaodingmiaoshu:'BaoJingXinXi-biaodingmiaoshu-weibiaoding',
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .baojingxinxi {
    .baojingxinxiBar {
      /*width: 1500px;*/
      .baojingxinxiBar_inputBox {
        margin-left: 10px;
        float: left;
        height: 120px;
        width: 710px;
        /*background-color: red;*/
        padding: 15px;
        .el-select:nth-child(n+4) {
          margin-top: 10px;
        }
        .el-select {
          margin-right: 10px;
        }
        .el-select:nth-child(3) {
          margin-right: 0;
        }
        .el-select:nth-child(6) {
          margin-right: 0;
        }
      }
      .baojingxinxiBar_Button {
        float: left;
        cursor: pointer;   // 这里整个按钮是浮起来了的，有一个层级问题，需要把层级z-index设置高一点，cursor、:hover才起得到作用
        position: relative;
        z-index: 99;
        width: 120px;
        height: 90px;
        background-color: #42b9fb;
        margin-left: 20px;
        margin-top: 15px;
        border-radius: 10px;
        line-height: 90px;
        text-align: center;
        color: white;
        span {
          font-size: 16px;
        }
      }
      .baojingxinxiBar_Button:hover {
        background-color: #ecc46d;
      }
    }

    .baojingxinxi_TableBox {
      float: left;
      height: 734px;
      background-color: #011f60;
    }
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
  .ivu-table .BaoJingXinXi-shebeizhuangtai-zaixian {
    background-color: #00cc99!important;
    color:#fff!important;
  }
  .ivu-table .BaoJingXinXi-shebeizhuangtai-lixian {
    background-color: #e64d00!important;
    color:#fff!important;
  }
  //未标定
  .ivu-table .BaoJingXinXi-biaodingmiaoshu-weibiaoding {
    /*background-color: #e64d00!important;*/
    color:#e64d00!important;
  }
</style>
