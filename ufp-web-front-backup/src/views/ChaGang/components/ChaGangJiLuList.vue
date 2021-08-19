<template>
  <div id="chagangjilulist-box">


    <el-header class="chagangjilulist-header" >
      <div>
        <Select id="at-select" v-model="model1" style="width:200px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value" :placeholder="cityList[0].value">{{ item.label }}</Option>
        </Select>
      </div>
      <div id="chagangjilulist-shijianxuanzeqi">
          <Row>
            <Col span="12">
              <DatePicker type="daterange" :options="timeSelectorOptions" placement="bottom-end" placeholder="请选择查岗日期" style="width: 300px"></DatePicker>
            </Col>
          </Row>
      </div>
      <Input id="at-input" v-model="value" placeholder="请输入单位关键字搜索" style="width: 300px" />
      <Button id="at-search" type="primary" icon="ios-search"></Button>

    </el-header>



    <div class="chagangjilulist-mainbox">
      <div style="width: 100%;height: 100%;background-color: transparent">
        <Table :row-class-name="rowClassName" :columns="columns1" :data="data1" ></Table>
        <!-- stripe="true"-->
      </div>
    </div>



    <el-footer style="height: 56px;background-color: transparent;position: relative;">
      <div class="chagangjilulist-footer-block">
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
    name: 'ChaGangJiLuList',
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
            label: '值班脱岗'
          },
          {
            value: '设备在线',
            label: '值班在岗'
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
            width: '200px',
            align:'center',
          },
          {
            title: '单位地址',
            key: 'danweidizhi',
            width: '320px',
            align:'center',
          },
          {
            title: '发送用户',
            key: 'fasongyonghu',
            width: '150px',
            align:'center',
          },
          {
            title: '发送时间',
            key: 'fasongshijian',
            width: '170px',
            align:'center',
          },
          {
            title: '发送状态',
            key: 'fasongzhuangtai',
            width: '100px',
            align:'center',
            className:'fasongzhuangtaiStyle'
          },
          {
            title: '值班状态',
            key: 'zhibanzhuangtai',
            width: '150px',
            align:'center',
          },
          {
            title: '回应时间',
            key: 'huiyingshijian',
            width: '170px',
            align:'center',
          },
          {
            title: '回应用户',
            key: 'huiyingyonghu',
            width: '120px',
            align:'center',
          },
          {
            title: '身份信息',
            key: 'shenfenxinxi',
            align:'center',
          }
        ],

        data1: [   //表格内容
          {
            xuhao: 1,
            danweibianhao: 'SD008',
            zizhanhao: 6,
            danweimingcheng: '建筑消防演示平台',
            danweidizhi: '烟台市芝罘区黄务街道西南交大烟台研究院',
            fasongyonghu: '超级管理员',
            fasongshijian: '2020-12-23 14:19:31',
            fasongzhuangtai: '成功',
            zhibanzhuangtai: '值班脱岗',
            huiyingshijian: '2020-12-23 14:19:31',
            huiyingyonghu: '',
            shenfenxinxi: '无'
          },
          {
            xuhao: 2,
            danweibianhao: 'SD002',
            zizhanhao: '',
            danweimingcheng: '思迪展板',
            danweidizhi: '烟台市芝罘区黄务街道西南交大烟台研究院',
            fasongyonghu: '超级管理员',
            fasongshijian: '2020-12-23 14:19:31',
            fasongzhuangtai: '成功',
            zhibanzhuangtai: '值班脱岗',
            huiyingshijian: '2020-12-23 14:19:31',
            huiyingyonghu: '',
            shenfenxinxi: '无'
          },
          {
            xuhao: 3,
            danweibianhao: 'SD008',
            zizhanhao: 6,
            danweimingcheng: '思迪建筑消防演示平台',
            danweidizhi: '烟台市芝罘区黄务街道西南交大烟台研究院',
            fasongyonghu: '超级管理员',
            fasongshijian: '2020-12-23 14:19:31',
            fasongzhuangtai: '成功',
            zhibanzhuangtai: '值班脱岗',
            huiyingshijian: '2020-12-23 14:19:31',
            huiyingyonghu: '',
            shenfenxinxi: '有效身份'
          },
          {
            xuhao: 4,
            danweibianhao: 'SD008',
            zizhanhao: 6,
            danweimingcheng: '思迪建筑消防演示平台',
            danweidizhi: '烟台市芝罘区黄务街道西南交大烟台研究院',
            fasongyonghu: '超级管理员',
            fasongshijian: '2020-12-23 14:19:31',
            fasongzhuangtai: '成功',
            zhibanzhuangtai: '值班脱岗',
            huiyingshijian: '2020-12-23 14:19:31',
            huiyingyonghu: '',
            shenfenxinxi: '有效身份'
          },
          {
            xuhao: 5,
            danweibianhao: 'SD008',
            zizhanhao: 6,
            danweimingcheng: '思迪展板',
            danweidizhi: '烟台市芝罘区黄务街道西南交大烟台研究院',
            fasongyonghu: '贵德',
            fasongshijian: '2020-12-23 14:19:31',
            fasongzhuangtai: '成功',
            zhibanzhuangtai: '值班脱岗',
            huiyingshijian: '2020-12-23 14:19:31',
            huiyingyonghu: '',
            shenfenxinxi: '无'
          },
          {
            xuhao: 6,
            danweibianhao: 'SD008',
            zizhanhao: 6,
            danweimingcheng: '思迪建筑消防演示平台',
            danweidizhi: '烟台市芝罘区黄务街道西南交大烟台研究院',
            fasongyonghu: '贵德',
            fasongshijian: '2020-12-23 14:19:31',
            fasongzhuangtai: '成功',
            zhibanzhuangtai: '值班脱岗',
            huiyingshijian: '2020-12-23 14:19:31',
            huiyingyonghu: '',
            shenfenxinxi: '无'
          },
          {
            xuhao: 7,
            danweibianhao: 'SD008',
            zizhanhao: 6,
            danweimingcheng: '思迪展板',
            danweidizhi: '烟台市芝罘区黄务街道西南交大烟台研究院',
            fasongyonghu: '超级管理员',
            fasongshijian: '2020-12-23 14:19:31',
            fasongzhuangtai: '成功',
            zhibanzhuangtai: '值班脱岗',
            huiyingshijian: '2020-12-23 14:19:31',
            huiyingyonghu: '',
            shenfenxinxi: '无'
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
  #chagangjilulist-box{
    height: 100%;
    width: 100%;
    /*background-color: #13ce66;*/
  }
  .chagangjilulist-header{
    position: relative;
    /*height: 68px;*/    //这句话没有用,el-header默认高度为60px，<style>中不能覆盖，除非!important，此外在el-header标签中设置style='xxx'也能覆盖
  }

  #at-select{
    position: absolute;
    width: 200px;
    top: 15px;
    left: 30px;
  }
  #chagangjilulist-shijianxuanzeqi{
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

  .chagangjilulist-mainbox{
    height: 766.69px;
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


  .ivu-table td.fasongzhuangtaiStyle{
    background-color: #00cc99;
    color: #fff;
  }


  .chagangjilulist-footer-block{
    position: absolute;
    width: 700px;
    top: 12px;
    left: 640px;
  }
  .el-pagination__total,.el-pagination__jump{
    color: #A3D8FA;
  }
</style>
