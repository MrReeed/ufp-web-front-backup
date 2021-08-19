<template>
  <div class="main">

    <!--<div class="leftsidebar_backgroundcard">-->
    <!--</div>-->

    <!--这个div是title区域的wrapper-->
    <slot name="title" class="slot_title">
      <div class="title_wrapper">
      <span>
        <i class="el-icon-office-building"></i>
        {{ getSelectedName }}
      </span></div>
    </slot>


    <!--这个div是input区域的wrapper-->
    <div class="input_wrapper">
      <slot name="input" class="slot_input">
        <input placeholder=" 请输入单位" v-model="search" @input="searchedItem(search)"/>
      </slot>
    </div>

    <slot name="complist" v-if="list.length>0">
      <ul>
        <li v-for="company in list">
          <slot name="listitem" :item="company">
            <!--这个div是侧边栏列表的wrapper-->
            <div class="list_wrapper">
              <el-popover
                placement="right"
                width="200"
                trigger="click"
                popper-class="popoverColor"
              >
                <slot name="poplist" v-if="systemlist.length>0">
                  <!--<div class="backcolor" style="background-color: #13ce66">-->
                    <ul>
                      <li v-for="type in systemlist" style="padding-bottom: 20px;">
                        <span @click="chooseType(type.id)">{{ type.name }}</span>
                      </li>
                    </ul>
                  <!--</div>-->
                </slot>
                <i v-else class="el-icon-loading"></i>
                <slot name="itemcontent">
                  <template slot="reference">
                    <div @click="chooseCompany(company.id)">
                      <i class="el-icon-office-building"></i>
                      {{ company.name }}
                    </div>
                  </template>
                </slot>
              </el-popover>
            </div>
          </slot>
        </li>
      </ul>
    </slot>

    <slot v-else>
      <i class="el-icon-loading"></i>
    </slot>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'LeftSideList',
    data() {
      return {
        search: ''
      }
    },
    computed: {
      ...mapState({
        systemlist: state => state.equipment.types
      }),
      ...mapGetters('company', {
        selected: 'getSelectedItem',
        list: 'getSearchOrAll'
      }),
      getSelectedName() {
        if (this.selected.length > 0) {
          return this.selected[0].name
        } else {
          return '所有列表'
        }
      }
    },
    created() {
      this.fetchAllCompany()
      this.fetchAlltypes()
    },
    methods: {
      ...mapActions({
        fetchAllCompany: 'company/fetchAllCompany',
        fetchAlltypes: 'equipment/fetchAlltypes',
        chooseType: 'equipment/chooseType',
        chooseCompany: 'company/chooseCompany',
        searchedItem: 'company/companyFilterByChar'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    font-size: 16px;
    color: #ccc;
    margin-left: -30px;
  }

  .title_wrapper {
    margin-top: 30px;
  }

  .input_wrapper {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .list_wrapper {
    margin-top: 7px;
  }

  .leftsidebar_backgroundcard {
    width: 340px;
    height: 100px;
    background-color: pink;
  }

  .el-popover,.popoverColor {
    background: #13ce66!important;
  }
</style>
