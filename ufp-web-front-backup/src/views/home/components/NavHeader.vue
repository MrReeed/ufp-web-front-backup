<template>
  <div class="content_header">
    <img style="float: left" src="http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/header_logo.png" alt="">
    <div class="nav_box">
      <ul>
        <li v-for="subpage in subpages" :key="subpage.name">
          <router-link :to="{name:subpage.name}">
            <div>{{ subpage.meta.title }}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <span @click="logout" class="exit_button">
        退出
      </span>
  </div>
</template>
<script>
import '@/router/routeinfo'

export default {
  name: 'NavHeader',
  data() {
    return {
      subpages: this.$router.options.routes
    }
  },
  created() {
  },
  computed: {},
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login`)
    }
  }
}
</script>

<style lang="scss">
.content_header {
  height: 100px;
  width: 100%;
  background-color: rgb(1, 11, 23);
  background-image: url('http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/header_background.png');
  background-size: 100%;
  background-repeat: no-repeat;
  //z-index: 99;
  //position:absolute;
  .nav_box {
    width: 58%;
    height: 35%;
    margin: 1.6% 0 1% 3.5%;
    //background-color: red;
    float: left;

    div {
      margin: 0 -1.2%;
      width: 14%;
      height: 100%;
      background: url('http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/header_nav_bg.png');
      background-size: 100%;
      background-repeat: no-repeat;
      float: left;
      color: #6FD3F7;
      text-align: center;
      font-size: 1.6em;
    }

    div:hover {
      background: url('http://lixiaole.oss-cn-beijing.aliyuncs.com/xiaofang/images/header_nav_bg_active.png');
      background-size: 100%;
      background-repeat: no-repeat;
    }

  }

  .exit_button {
    color: white;
    position: absolute;
    right: 40px;
    top: 40px;
    cursor: pointer
  }
}
</style>
