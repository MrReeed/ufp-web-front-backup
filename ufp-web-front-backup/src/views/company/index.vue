<template>

    <div id="company">
      <el-container>
        <el-aside width="20%">
          <div class="citys_box">
            <div class="citys_box_title">
              行政区划
            </div>
            <div style="text-align: right">
              <el-button
                class="citys_box_refresh"
                size="mini"
                type="primary"
                icon="el-icon-refresh-right"
                @click="refreshCitysBox"
              >刷新行政区划树
              </el-button>
            </div>
            <el-tree
              :highlight-current="true"
              :data="citys"
              :props="defaultProps"
              :load="loadNode"
              lazy
              accordion
              @node-click="NodeClick"
            />
          </div>
        </el-aside>
        <el-main>
          <div class="company_type">
            <el-button class="online_company">联网单位</el-button>
            <el-button class="service_company">服务单位</el-button>
          </div>
          <div class="table_box">
            <el-row class="table_box_tools">
              <el-input
                v-model="onlinecompanyinput"
                style="width: 200px;"
                suffix-icon="el-icon-search"
                placeholder="企业单位搜索"
              />
              <el-select v-model="safetygrade" placeholder="消防安全等级">
                <el-option
                  v-for="item in safetygradeselectlist"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-button
                icon="el-icon-circle-plus-outline"
                class="table_box_tools_button"
                @click="showNewCompanyDialog"
              >新增
              </el-button>
              <el-button icon="el-icon-edit" class="table_box_tools_button">编辑</el-button>
              <el-button icon="el-icon-delete-solid" class="table_box_tools_button">删除</el-button>
              <el-button icon="el-icon-download" class="table_box_tools_button">导出</el-button>
            </el-row>
            <el-table
              @row-click="rowClick"
              :data="onlinecompanytabledata"
              border
              style="width: 100%;margin-top: 10px;"
              @selection-change="checkSelect"
            >
              <el-table-column type="selection" width="40" />
              <el-table-column
                prop="id"
                label="编号"
              />
              <el-table-column
                prop="name"
                label="单位名称"
              />
              <el-table-column
                prop="city"
                label="区划"
              />
              <el-table-column
                prop="address"
                label="地址"
              />
              <el-table-column
                prop="phone"
                label="联系电话"
              />
              <el-table-column
                prop="supervisor "
                label="上级主管单位名称"
              />
            </el-table>
            <el-row style="margin-top: 15px;">
              <el-col :span="16">
                <el-pagination
                  :current-page="queryInfo.pagenum"
                  :page-sizes="[5, 10, 20, 50]"
                  :page-size="queryInfo.pagesize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                />
              </el-col>
            </el-row>
          </div>
        </el-main>
      </el-container>
      <el-dialog
        v-if="companyinfodialogvisible"
        v-dialogDrag
        :close-on-click-modal="false"
        title="单位详情"
        :visible.sync="companyinfodialogvisible"
        width="50%"
        :modal="false"
        :destroy-on-close="true"
      >
        <div class="company_info_dialog_box">
          <span style="font-size: 2rem;">{{companyinfo.name}}</span>
          <div class="company_info_dialog_box_description">
          <p>{{companyinfo.name}} 位于 {{companyinfo.city}}。详细位置 {{companyinfo.address}}。单位类型为 {{companyinfo.type}}</p>
          <p>单位消防安全负责人是 {{companyinfo.safety_person_name}}</p>
          </div>
        </div>
      </el-dialog>
      <el-dialog
        v-if="newcompanydialogvisible"
        v-dialogDrag
        :close-on-click-modal="false"
        center
        title="联网单位基本信息"
        :visible.sync="newcompanydialogvisible"
        width="50%"
        :modal="false"
        :destroy-on-close="true"
      >
        <div class="newcompany_form" style="color: white">
          <el-form label-width="120px" size="small" :inline="false" :model="newcompanyquery" class="demo-form-inline">
            <el-row>
              <el-col :span="12">
                <el-form-item label="单位名称">
                  <el-input v-model="newcompanyquery.name" placeholder="请输入单位名称" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位类别">
                  <el-input v-model="newcompanyquery.type" placeholder="请输入单位类别" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="行政区划">
                  <el-input v-model="newcompanyquery.city" disabled placeholder="请输入行政区划" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="邮政编码">
                  <el-input v-model="newcompanyquery.city" disabled placeholder="请输入行政区划" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="详细地址">
                  <el-input v-model="newcompanyquery.address" placeholder="请输入详细地址" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="建筑面积">
                  <el-input v-model="newcompanyquery.area" placeholder="请输入建筑面积" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="员工人数">
                  <el-input v-model="newcompanyquery.name" placeholder="员工人数" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="成立时间">
                  <el-input v-model="newcompanyquery.name" placeholder="单位名称" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位平面图">
                  <el-input v-model="newcompanyquery.name" placeholder="单位名称" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="法人代表">
                  <el-input v-model="newcompanyquery.name" placeholder="法人代表" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="法人身份证号">
                  <el-input v-model="newcompanyquery.name" placeholder="单位名称" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="消防安全责任人">
                  <el-input v-model="newcompanyquery.name" placeholder="单位名称" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="责任人身份证号">
                  <el-input v-model="newcompanyquery.name" placeholder="单位名称" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="消控室电话">
                  <el-input v-model="newcompanyquery.name" placeholder="单位名称" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="责任人电话">
                  <el-input v-model="newcompanyquery.name" placeholder="单位名称" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="安全管理人">
                  <el-input v-model="newcompanyquery.name" placeholder="单位名称" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="管理人电话">
                  <el-input v-model="newcompanyquery.name" placeholder="单位名称" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="消防等级">
                  <el-input v-model="newcompanyquery.name" placeholder="单位名称" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="维保单位">
                  <el-input v-model="newcompanyquery.name" placeholder="单位名称" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="消防应急预案">
                  <el-input v-model="newcompanyquery.name" placeholder="单位名称" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="newcompanydialogvisible = false">取 消</el-button>
          <el-button type="primary" @click="newCompanySubmit">提交数据</el-button>
        </span>
      </el-dialog>
    </div>

</template>

<script>
import companyAPI from '@/api/company'
export default {
  name: 'IOT',
  components: {
  },
  data() {
    return {
      selectlist: null,
      total: '',
      queryInfo: {
        pagenum: 1,
        pagesize: 10,
        selectedcity: ''
      },
      defaultProps: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf'
      },
      provincesCode: [],
      countysCode: [],
      districtCode: [],
      onlinecompanyinput: '',
      safetygrade: '',
      safetygradeselectlist: [
        {
          value: '1',
          label: '消防安全重点单位'
        }, {
          value: '2',
          label: '消防安全一般单位'
        }, {
          value: '3',
          label: '九小场所'
        }, {
          value: '4',
          label: '其他'
        }
      ],
      onlinecompanytabledata: [{
        id: 1,
        name: '华凌大酒店',
        type: '',
        city: '',
        address: '',
        phone: '',
        supervisor: ''
      }],
      newcompanydialogvisible: false,
      companyinfodialogvisible: false,
      newcompanyquery: {
        name: '',
        type: '',
        city: '', // 行政区划
        address: '',
        area: '', // 建筑面积
        staff_number: '',
        founding_date: '',
        plan: '', // 平面图
        legal_person_name: '',
        legal_person_idcard: '',
        safety_person_name: '',
        safety_person_idcard: '',
        fire_control_room_phone: '',
        safety_person_phone: '',
        safety_manager_name: '',
        safety_manager_phone: '',
        fire_rating: '',
        maintenance_unit: '',
        fire_emergency_plan: ''
      },
      companyinfo: {}
    }
  },
  created() {
    this.getOnlinecompanylist()
  },
  methods: {
    // 监听 pagesize 改变的事件
    handleSizeChange(newSize) {
      // console.log(newSize)
      this.queryInfo.pagesize = newSize
      this.getOnlinecompanylist()
    },
    // 监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      console.log(newPage)
      this.queryInfo.pagenum = newPage
      this.getOnlinecompanylist()
    },
    checkSelect(data) {
      this.selectlist = data
    },
    async getOnlinecompanylist() {
      const data = await companyAPI.getonlinecompanylist(this.queryInfo)
      if (data.code !== 20000) {
        return this.$message.error('获取联网单位列表失败！')
      }
      this.onlinecompanytabledata = data.onlinecompanylist
      this.total = data.total
    },
    refreshCitysBox() {
      this.provincesCode = []
      this.countysCode = []
      this.districtCode = []
    },
    showNewCompanyDialog() {
      if (this.newcompanyquery.city !== '') {
        this.newcompanydialogvisible = true
      } else {
        this.$message.error('请先在左侧选择行政区')
      }
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    },
    NodeClick(data, node, indeterminate) {
      if (node.level === 4) {
        console.log(data['name'])
        this.queryInfo.selectedcity = data['name']
        this.newcompanyquery.city = data['name']
      }
    },
    handleNodeClick(data) {
      console.log(data)
    },
    // https://www.cnblogs.com/liuw-flexi/p/13627074.html
    loadNode(node, resolve) {
      var provincesData = require('../../assets/json/province.json')

      if (node.level > 3) {
        resolve([])
      }

      if (node.level === 0) {
        return resolve([{ name: '中国', zones: [] }])
      } else if (node.level === 1) {
        var data0 = provincesData['0']// 省数组
        var provinceNames = []

        for (var p1 in data0) {
          if (Object.prototype.hasOwnProperty.call(data0, p1)) {
            this.provincesCode.push(p1)
            provinceNames.push(data0[p1])
          }
        }
        console.log(this.provincesCode)

        var data1 = []
        for (var p in provinceNames) {
          data1.push({ 'name': provinceNames[p] })// 省数据源
        }

        resolve(data1)
      } else if (node.level === 2) {
        // 要知道点开的是第几个节点
        var dataP = provincesData['0']// 省数组

        var key = this.findKey(dataP, node.label)
        console.log('key' + key)
        var data0 = provincesData['0' + ',' + key]
        // console.log(data0)//市对应下的县数组

        var data1 = []
        for (var p in data0) {
          console.log('县code' + p)
          this.countysCode.push(p)// 把县code存起来 供下一个节点使用
          data1.push({ 'name': data0[p] })// 县数据源
        }
        resolve(data1)
      } else if (node.level === 3) {
        // 要知道点开的是第几个节点
        var data0 = provincesData['0']// 省数组

        var key0 = this.findKey(data0, node.parent.label)

        var data1 = provincesData['0' + ',' + key0]// 市数组

        var key1 = this.findKey(data1, node.label)

        var data2 = provincesData['0' + ',' + key0 + ',' + key1]
        // console.log(data0)//市对应下的县数组

        var data3 = []
        for (var p in data2) {
          // this.countysCode.push(p)//把县code存起来 供下一个节点使用
          data3.push({ 'name': data2[p], leaf: true })// 县数据源

          resolve(data3)
        }
      }
    },
    // 由vulue找对象的key
    findKey(obj, value, compare = (a, b) => a === b) {
      return Object.keys(obj).find(k => compare(obj[k], value))
    },
    rowClick(row, column, event) {
      this.companyinfo = row
      console.log(this.companyinfo)
      this.companyinfodialogvisible = true
    }

  }
}
</script>
<style lang="scss">
#company {
  height: 100%;
  background-color: rgb(0, 22, 80);

  .el-container {
    height: 100%;
  }

  .el-aside {
    height: 100%;
  }

  .citys_box {
    color: aliceblue;
    background-color: rgb(0, 22, 80);
    height: 100%;
    padding-left: 5%;
    padding-right: 5%;

    .citys_box_title {
      padding: 5%;
      border-bottom: #A3D8FA 1px solid;
    }

    .citys_box_refresh {
      padding: 3px;
      margin: 3px;
    }
  }

  .el-main {
    color: aliceblue;
    background-color: rgb(6, 24, 74);
    height: 100%;

    .company_type {
      .online_company {
        color: white;
        background-color: rgb(45, 67, 191);
      }

      .service_company {
        color: white;
        background-color: rgb(23, 45, 106);
      }
    }

    .table_box {
      .table_box_tools {
        margin-top: 10px;

        .el-input__inner {
          color: white;
          background-color: rgba(0, 0, 0, 0);
        }

        .table_box_tools_button {
          padding: 8px;
          background-color: rgba(0, 0, 0, 0);
          //font-weight: 20px;
          font-size: 1.3rem;
          color: white;
        }
      }
    }
  }
  .newcompany_form{
    .el-form-item__label{
      color: white;
    }
  }
  .company_info_dialog_box{
    color: white;
    margin: 0;
    padding: 0;
    text-align: center;
    .company_info_dialog_box_description{
      padding: 10px;
      p{
        text-indent:2em;
        color: white;
        font-size: 1.2rem;
      }
      background-color: rgb(84,160,222);
      text-align: left;
    }
  }

  .el-tree {
    color: aliceblue;
    background-color: rgba(0, 0, 0, 0);
  }

  .el-tree-node__content {
    &:hover {
      background: #89c2f7;
    }
  }

  .el-tree-node:focus > .el-tree-node__content {
    background-color: #5daaf0;
  }

  .el-dialog {
    background-color: rgba(18, 56, 97, 0.9);
  }

  .el-dialog__title {
    color: aliceblue;
  }
}

</style>
