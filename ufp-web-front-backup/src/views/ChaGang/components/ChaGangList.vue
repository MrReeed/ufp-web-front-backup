<template>
  <div id="chaganglist-box">


    <el-header class="chaganglist-header" >
      <div>
        <Select id="at-select" v-model="model1" style="width:200px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value" :placeholder="cityList[0].value">{{ item.label }}</Option>
        </Select>
      </div>
      <Input id="chaganglist-input" v-model="value" placeholder="请输入单位关键字搜索" style="width: 300px" />
      <Button id="chaganglist-search" type="primary" icon="ios-search"></Button>

      <div id="twobutton">
        <at-button-group>
          <ButtonGroup>
            <Button type="primary">查岗全部</Button>
            <Button type="primary">查岗选中</Button>
          </ButtonGroup>
        </at-button-group>
      </div>
    </el-header>



    <div class="chaganglist-mainbox">
      <div style="width: 100%;height: 100%;background-color: transparent">
        <Table :row-class-name="rowClassName" :columns="columns1" :data="data1" ></Table>
        <!-- stripe="true"-->
      </div>
    </div>



    <el-footer style="height: 56px;background-color: transparent;position: relative;">
      <div class="chaganglist-footer-block">
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
    name: 'ChaGangList',
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
            label: '设备离线'
          },
          {
            value: '设备在线',
            label: '设备在线'
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
            width: '90px',
            align:'center',
          },
          {
            title: '单位编号',
            key: 'danweibianhao',
            width: '130px',
            align:'center',
          },
          {
            title: '子站号',
            key: 'zizhanhao',
            width: '90px',
            align:'center',
          },
          {
            title: '单位名称',
            key: 'danweimingcheng',
            width: '250px',
            align:'center',
          },
          {
            title: '设备编号',
            key: 'shebeibianhao',
            width: '160px',
            align:'center',
          },
          {
            title: '建筑',
            key: 'jianzhu',
            width: '200px',
            align:'center',
          },
          {
            title: '区域',
            key: 'quyu',
            width: '150px',
            align:'center',
          },
          {
            title: '安装位置信息',
            key: 'anzhuangweizhixinxi',
            width: '180px',
            align:'center',
          },
          {
            title: '联系电话',
            key: 'lianxidianhua',
            width: '150px',
            align:'center',
          },
          {
            title: '设备名称',
            key: 'shebeimingcheng',
            width: '170px',
            align:'center',
          },
          {
            title: '监控室视频',
            key: 'jiankongshishipin',
            width: '120px',
            align:'center',
          },
          // ------------------------- 最后一个不用指定width宽度，这样可以自适应宽度。否则哪怕有一点缝隙都会出现白边 ------------------------
          {
            title: '结果',
            key: 'jieguo',
            align:'center',
          }
        ],

        data1: [   //表格内容
          {
            xuhao: 1,
            danweibianhao: 'SD008',
            zizhanhao: 6,
            danweimingcheng: '建筑消防演示平台',
            shebeibianhao: '1405140A5010',
            jianzhu: '消防实验中心',
            quyu: '演示区域',
            anzhuangweizhixinxi: '二楼监控室',
            lianxidianhua: '67071169',
            shebeimingcheng: '传输装置-5',
            jiankongshishipin: '',
            jieguo: '设备在线',
            cellClassName:{
              jieguo:'ChaGangList-jieguo-shebeizaixian'
            }
          },
          {
            xuhao: 2,
            danweibianhao: 'SD002',
            zizhanhao: '',
            danweimingcheng: '思迪展板',
            shebeibianhao: '1911270A6040',
            jianzhu: '思迪办公大楼',
            quyu: '一层消控室',
            anzhuangweizhixinxi: '办公大楼',
            lianxidianhua: '0512-67071169',
            shebeimingcheng: '用户信息传输装置',
            jiankongshishipin: '',
            jieguo: '设备离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'ChaGangList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 3,
            danweibianhao: 'SD008',
            zizhanhao: 6,
            danweimingcheng: '思迪建筑消防演示平台',
            shebeibianhao: '1405140A5010',
            jianzhu: '消防实验中心',
            quyu: '演示区域',
            anzhuangweizhixinxi: '二楼监控室',
            lianxidianhua: '67071169',
            shebeimingcheng: '传输装置-5',
            jiankongshishipin: '',
            jieguo: '设备离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'ChaGangList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 4,
            danweibianhao: 'SD002',
            zizhanhao: '',
            danweimingcheng: '思迪展板',
            shebeibianhao: '1911270A6040',
            jianzhu: '思迪办公大楼',
            quyu: '一层消控室',
            anzhuangweizhixinxi: '办公大楼',
            lianxidianhua: '0512-67071169',
            shebeimingcheng: '用户信息传输装置',
            jiankongshishipin: '',
            jieguo: '设备离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'ChaGangList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 5,
            danweibianhao: 'SD002',
            zizhanhao: '',
            danweimingcheng: '思迪展板',
            shebeibianhao: '1911270A6040',
            jianzhu: '思迪办公大楼',
            quyu: '一层消控室',
            anzhuangweizhixinxi: '办公大楼',
            lianxidianhua: '0512-67071169',
            shebeimingcheng: '用户信息传输装置',
            jiankongshishipin: '',
            jieguo: '设备离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'ChaGangList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 6,
            danweibianhao: 'SD002',
            zizhanhao: '',
            danweimingcheng: '思迪展板',
            shebeibianhao: '1911270A6040',
            jianzhu: '思迪办公大楼',
            quyu: '一层消控室',
            anzhuangweizhixinxi: '办公大楼',
            lianxidianhua: '0512-67071169',
            shebeimingcheng: '用户信息传输装置',
            jiankongshishipin: '',
            jieguo: '设备离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'ChaGangList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 7,
            danweibianhao: 'SD002',
            zizhanhao: '',
            danweimingcheng: '思迪展板',
            shebeibianhao: '1911270A6040',
            jianzhu: '思迪办公大楼',
            quyu: '一层消控室',
            anzhuangweizhixinxi: '办公大楼',
            lianxidianhua: '0512-67071169',
            shebeimingcheng: '用户信息传输装置',
            jiankongshishipin: '',
            jieguo: '设备离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'ChaGangList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 8,
            danweibianhao: 'SD002',
            zizhanhao: '1',
            danweimingcheng: '思迪建筑消防演示平台',
            shebeibianhao: '1405140A5010',
            jianzhu: '消防实验中心',
            quyu: '演示区域',
            anzhuangweizhixinxi: '二楼监控室',
            lianxidianhua: '67071169',
            shebeimingcheng: '传输装置-5',
            jiankongshishipin: '',
            jieguo: '设备在线',
            cellClassName:{
              jieguo:'ChaGangList-jieguo-shebeizaixian'
            }
          },
          {
            xuhao: 9,
            danweibianhao: 'SD002',
            zizhanhao: '',
            danweimingcheng: '思迪展板',
            shebeibianhao: '1911270A6040',
            jianzhu: '思迪办公大楼',
            quyu: '一层消控室',
            anzhuangweizhixinxi: '办公大楼',
            lianxidianhua: '0512-67071169',
            shebeimingcheng: '用户信息传输装置',
            jiankongshishipin: '',
            jieguo: '设备离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'ChaGangList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 10,
            danweibianhao: 'SD002',
            zizhanhao: '',
            danweimingcheng: '思迪展板',
            shebeibianhao: '1911270A6040',
            jianzhu: '思迪办公大楼',
            quyu: '一层消控室',
            anzhuangweizhixinxi: '办公大楼',
            lianxidianhua: '0512-67071169',
            shebeimingcheng: '用户信息传输装置',
            jiankongshishipin: '',
            jieguo: '设备离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'ChaGangList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 11,
            danweibianhao: 'SD002',
            zizhanhao: '',
            danweimingcheng: '思迪展板',
            shebeibianhao: '1911270A6040',
            jianzhu: '思迪办公大楼',
            quyu: '一层消控室',
            anzhuangweizhixinxi: '办公大楼',
            lianxidianhua: '0512-67071169',
            shebeimingcheng: '用户信息传输装置',
            jiankongshishipin: '',
            jieguo: '设备离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'ChaGangList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 12,
            danweibianhao: 'SD002',
            zizhanhao: '',
            danweimingcheng: '思迪展板',
            shebeibianhao: '1911270A6040',
            jianzhu: '思迪办公大楼',
            quyu: '一层消控室',
            anzhuangweizhixinxi: '办公大楼',
            lianxidianhua: '0512-67071169',
            shebeimingcheng: '用户信息传输装置',
            jiankongshishipin: '',
            jieguo: '设备离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'ChaGangList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 13,
            danweibianhao: 'SD002',
            zizhanhao: '2',
            danweimingcheng: '思迪建筑消防演示平台',
            shebeibianhao: '1405140A5010',
            jianzhu: '消防实验中心',
            quyu: '演示区域',
            anzhuangweizhixinxi: '二楼监控室',
            lianxidianhua: '67071169',
            shebeimingcheng: '传输装置-5',
            jiankongshishipin: '',
            jieguo: '设备在线',
            cellClassName:{
              jieguo:'ChaGangList-jieguo-shebeizaixian'
            }
          },
          {
            xuhao: 14,
            danweibianhao: 'SD002',
            zizhanhao: '',
            danweimingcheng: '思迪展板',
            shebeibianhao: '1911270A6040',
            jianzhu: '思迪办公大楼',
            quyu: '一层消控室',
            anzhuangweizhixinxi: '办公大楼',
            lianxidianhua: '0512-67071169',
            shebeimingcheng: '用户信息传输装置',
            jiankongshishipin: '',
            jieguo: '设备离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'ChaGangList-jieguo-shebeilixian'
            }
          },
          {
            xuhao: 15,
            danweibianhao: 'SD002',
            zizhanhao: '',
            danweimingcheng: '思迪展板',
            shebeibianhao: '1911270A6040',
            jianzhu: '思迪办公大楼',
            quyu: '一层消控室',
            anzhuangweizhixinxi: '办公大楼',
            lianxidianhua: '0512-67071169',
            shebeimingcheng: '用户信息传输装置',
            jiankongshishipin: '',
            jieguo: '设备离线',
            cellClassName:{  //给设备离线的表格添加 高亮样式
              jieguo:'ChaGangList-jieguo-shebeilixian'
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
  #chaganglist-box{
    height: 100%;
    width: 100%;
    /*background-color: #13ce66;*/
  }
  .chaganglist-header{
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
  #chaganglist-input{
    position: absolute;
    top: 15px;
    left: 240px;
    width: 200px!important;
  }
  #chaganglist-search{
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

  .chaganglist-mainbox{
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


  .ivu-table .ChaGangList-jieguo-shebeilixian {
    background-color: #e64d00!important;
    color:#fff!important;
  }
  .ivu-table .ChaGangList-jieguo-shebeizaixian {
    background-color: #00cc99!important;
    color:#fff!important;
  }


  .chaganglist-footer-block{
    position: absolute;
    width: 700px;
    top: 12px;
    left: 640px;
  }
  .el-pagination__total,.el-pagination__jump{
    color: #A3D8FA;
  }
</style>
