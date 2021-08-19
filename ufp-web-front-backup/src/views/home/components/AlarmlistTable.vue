<template>
  <div id="alarmlist">
    <div style="height: 20px;">
      <el-row style="padding: 10px 0;">
        <el-col :span="4">
          <div style="margin-left: 20px;">
            <el-select v-model="value" placeholder="全部状态">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="block" style="margin-left: 20px;">
            <el-date-picker
              v-model="value2"
              type="datetimerange"
              :picker-options="pickerOptions"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right"
            />
          </div>
        </el-col>
        <el-col :span="4">
          <div style="margin-left: 20px;">
            <el-input v-model="input" placeholder="请输单位关键字" />
          </div>
        </el-col>
        <el-col :span="2">
          <div style="margin-left: 20px;">
            <el-button>查询</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-table
        height="250"
        :data="fireData"
        stripe
      >
        <el-table-column
          prop="date"
          label="接警时间"
        />
        <el-table-column
          prop="name"
          label="单位名称"
        />
        <el-table-column
          label="警情描述"
        >
          <template slot-scope="scope">
            <u><a style="color: azure" @click="showlocationdialog">{{ scope.row.address }}</a></u>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AlarmlistTable',
  data() {
    return {
      fireData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普'
      }],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: '',
      input: ''
    }
  }
}
</script>

<style lang="scss">
#alarmlist {
  background-color: rgba(9, 37, 70, 0.8);
  width: 100%;

  .el-table {
    margin: 10px;
    width: 100%;
  }

  //修改行背景
  .el-table tr {
    background: rgba(9, 37, 70, 0.8);
  }

  //修改斑马线背景
  .el-table--striped .el-table__body tr.el-table__row--striped td {
    background: rgba(11, 50, 86, 0.8);
  }

  .el-table thead {
    color: aliceblue;
    font-weight: 1;
  }

  .el-table th {
    background: rgba(15, 64, 102, 0.8);
  }

  .el-table__body td, .el-table__body th {
    height: 20px;
    padding: 2px;
    font-size: 14px;
    color: white;
  }

  .el-table {
    background: rgba(0, 0, 0, 0);
  }

  //修改表格鼠标悬浮hover背景色
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #114696;
  }
}
</style>
