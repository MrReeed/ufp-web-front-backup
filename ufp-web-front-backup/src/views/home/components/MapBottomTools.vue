<template>
  <div id="mapbottomtools">
    <el-select class="xiaofnagliliang" :popper-append-to-body="false" size="mini" v-model="xiaofnagliliang_selected" placeholder="消防力量">
      <el-option
        @click.native="selectclick"
        v-for="item in xiaofnagliliang"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xiaofnagliliang_selected: '',
      xiaofnagliliang: [{
        value: '0',
        label: '全部消防力量'
      }, {
        value: '1',
        label: '室外消火栓'
      }, {
        value: '2',
        label: '消防水源'
      }, {
        value: '3',
        label: '单位微型消防站'
      }, {
        value: '4',
        label: '公共微型消防站'
      }, {
        value: '5',
        label: '公共微型消防站'
      }, {
        value: '6',
        label: '中队'
      }, {
        value: '7',
        label: '大队'
      }, {
        value: '8',
        label: '支队'
      }, {
        value: '9',
        label: '职业消防队'
      }]
    }
  },
  methods: {
    firecoverchange() {
      this.$emit('onfirecoverchange', this.xiaofnagliliang_selected)
    },
    selectclick() {
      this.$emit('onfirecoverchange', this.xiaofnagliliang_selected)
    }
  }
}
</script>
<style lang="scss">
#mapbottomtools {
  height: 100%;
  width: 100%;
  //background-color: red;
  .xiaofnagliliang{
    margin-right: 0;
    .el-input__inner{
      background-color:rgba(6,47,82,0.8) ;
      color:aliceblue;
      //border:0px;
      //border-radius:0px;
      //text-align: center;
    }
  }
  .el-select-dropdown__item{
    background-color:rgba(6,47,82,0.8) ;
    color:aliceblue;
  }
}

</style>
