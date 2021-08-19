<template>
  <div id="firebox">
    <div class="left-chart-1">
      <div class="lc1-header">火警</div>
      <div class="statustab">
        <div><a @click="changefirestats(1)">未处理</a></div>
        <div><a @click="changefirestats(2)">已处理</a></div>
        <div><a @click="changefirestats(0)">全部</a></div>
        <span><a @click="showalarmlistdialog">更多>></a></span>
      </div>
    </div>
    <div id="firetable">
      <el-table
        height="250"
        :data="fireData"
        stripe
        style="margin-left:8px;width: 96%"
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
    <el-dialog
      center
      title="位置展示"
      :visible.sync="locationdialogVisible"
      width="50%"
      :modal="false"
    >
      <div style="text-align: center;height: 300px;">
        <dv-border-box-8 />
      </div>
    </el-dialog>
    <el-dialog
      center
      title="24小时告警列表"
      :visible.sync="alarmlistdialogVisible"
      width="70%"
      :modal="false"
    >
      <dv-border-box-8 style="text-align: center;height: 300px;">
        <AlarmlistTable />
      </dv-border-box-8>
    </el-dialog>
  </div>
</template>

<script>
import AlarmlistTable from '@/views/home/components/AlarmlistTable'
export default {
  name: 'FireBox',
  components: {
    AlarmlistTable
  },
  data() {
    return {
      fireData: [],
      fireData_all: [{
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
      fireData_nodeal: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀'
      }],
      fireData_deal: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀'
      }],
      locationdialogVisible: false,
      alarmlistdialogVisible: false
    }
  },
  created: function() {
    this.changefirestats(0)
  },
  methods: {
    showlocationdialog() {
      this.locationdialogVisible = true
    },
    showalarmlistdialog() {
      this.alarmlistdialogVisible = true
    },
    changefirestats(stats) {
      switch (stats) {
        case 0: {
          this.fireData = this.fireData_all
          break
        }
        case 1: {
          this.fireData = this.fireData_nodeal
          break
        }
        case 2: {
          this.fireData = this.fireData_deal
          break
        }
      }
    }
  }
}
</script>

<style lang="scss">
.left-chart-1 {
  width: 100%;
  height: 37%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;

  .lc1-header {
    text-align: center;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .lc1-details {
    height: 20px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;

    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 20px;
      margin-left: 20px;
    }
  }

  .lc1-chart {
    flex: 1;
  }

  .statustab {
    height: 20px;
    background-color: rgba(3, 25, 50, 0.5);

    div {
      text-align: center;
      width: 28%;
      font-size: 15px;
      float: left;
    }

    a {
      font-size: 10px;
      line-height: 13px;
    }
  }
}

//固定表格的高度后将表格没有数据的部分背景颜色设定为透明
#firetable .el-table {
  background: rgba(0, 0, 0, 0);
}

//修改头部背景
#firetable .el-table th {
  background: rgba(14, 75, 129, 0.8);
  padding: 2px;
}

#firetable .el-table thead {
  color: aliceblue;
  font-weight: 1;
}

//修改行背景
#firetable .el-table tr {
  background: #16203C;
  padding: 2px;
}

#firetable .el-table__body td, .el-table__body th {
  height: 20px;
  padding: 2px;
  font-size: 14px;
  color: white;
}

//修改斑马线背景
#firetable .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #1f284c;
}

//修改表格鼠标悬浮hover背景色
#firetable .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #114696;
}

//#firebox .el-dialog__header{
//  background-color: rgba(18,56,97,0.8);
//}
#firebox .el-dialog {
  background-color: rgba(18, 56, 97, 0.8);
}

#firebox .el-dialog__title {
  color: aliceblue;
}

</style>
