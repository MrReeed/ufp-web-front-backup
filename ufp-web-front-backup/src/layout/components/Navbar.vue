<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
<!--          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">-->
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjA2MDEyMTQzNzIzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU0MDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjY1LjggMzkwYzAgNTMuOSA0My43IDk3LjYgOTcuNiA5Ny42IDUzLjkgMCA5Ny42LTQzLjcgOTcuNi05Ny42IDAtNTMuOS00My43LTk3LjYtOTcuNi05Ny42LTUzLjkgMC05Ny42IDQzLjYtOTcuNiA5Ny42eiBtLTc3LjIgMjQyLjhzMCAwLjEgMCAweiBtMzQ5LjYgMS4zdi0wLjIgMC4yeiBtMC0wLjN2LTAuMyAwLjN6TTg1MS45IDUwOC4ybC04LTAuMWMtMi44IDAtNy4xIDEuMS05LjUgMi40IDAgMC02LjQgMy43LTEyLjIgNi4yLTE3LjUgNy41LTM3LjQgMTEuOS01OC41IDExLjktMjEgMC00MC45LTQuMi01OC4zLTExLjctNS45LTIuNS0xMi41LTYuMy0xMi41LTYuMy0yLjUtMS40LTYuNy0yLjUtOS41LTIuNGwtNy45IDAuMWMtMzIgNC4yLTY1LjUgMzIuNi03NS4yIDYzLjIgMCAwLTEwLjIgMjAuNy0xMS43IDYxLjQtMC4xIDUuMyA0LjIgMTIgOS42IDE0LjkgMCAwIDU0LjQgMzUgMTY1LjEgMzUgMTEwLjcgMCAxNjUuMS0zNSAxNjUuMS0zNSA1LjQtMi45IDkuOC0xMC4zIDkuNi0xNS0xLjQtNDAuNS0xMS4zLTYwLjQtMTEuMy02MC40LTguOC0zMC45LTQyLjktNTkuNS03NC44LTY0LjJ6TTkzOC4yIDYzM3YtMC4yIDAuMnogbTAgMC41di0wLjQgMC40eiBtMCAwTTI1NC44IDQ4MWM0Ny42IDAgODcuMi0zNC4xIDk1LjgtNzkuMi0xMy42LTI0LjMtMjEuNC01Mi4yLTIxLjgtODEuOC0xNy45LTIwLjktNDQuNC0zNC4xLTc0LTM0LjEtNTMuOSAwLTk3LjYgNDMuNy05Ny42IDk3LjYgMCA1My44IDQzLjcgOTcuNSA5Ny42IDk3LjV6TTIyNSA2MDIuNGMxMC44LTMzLjIgMzYuNC02NC4xIDY3LjYtODUtMTEuOSAzLjEtMjQuNSA0LjctMzcuNiA0LjctMjEgMC00MC45LTQuMi01OC4zLTExLjctNS45LTIuNS0xMi41LTYuMy0xMi41LTYuMy0yLjUtMS40LTYuNy0yLjUtOS41LTIuNGwtNy45IDAuMWMtMzIgNC4yLTY1LjUgMzIuNi03NS4yIDYzLjIgMCAwLTEwLjIgMjAuNy0xMS43IDYxLjQtMC4xIDUuMyA0LjIgMTIgOS42IDE0LjkgMCAwIDM5LjEgMjUgMTE4LjEgMzIuNyA0LjktNDEuOSAxNC45LTY2IDE3LjQtNzEuNnoiIGZpbGw9IiNBRUQ3RkYiIHAtaWQ9IjU0MDEiPjwvcGF0aD48cGF0aCBkPSJNNzYzLjUgNzA4LjRsMS4yLTAuOGMwLjQtMC4zIDEtMS4zIDEuNS0yLjEtNC40LTU0LjctMTguNS04Mi4yLTE4LjctODIuNWwtMS44LTQuMmMtMTIuNS0zNy44LTU3LjYtNzMuNy05OS03OWwtMTAuOCAwLjNjLTAuMSAwLjEtMS43IDAuNS0yLjQgMC44LTIuOCAxLjgtMTIuMSA3LjQtMjEuMiAxMS43LTMxLjcgMTUuMy02Ni40IDIzLjgtMTAzIDI1LjMtMzYgMS41LTcyLjItNC4zLTEwNC41LTE2LjYtOC44LTMuMy0xNy44LTcuOC0yMS42LTkuNy0zNy4zIDE1LjktNzAuOSA1MS41LTgwLjkgODguNSAwIDAtMTMuNiAzMC41LTEzLjMgODkuNCAwLjEgMy42IDEuNiA3LjUgMy45IDExLjEgMzcuNiAxMy44IDExMi44IDM0IDIyMy42IDI5LjUgMTY0LjQtNi42IDI0Ni4yLTYxLjEgMjQ3LTYxLjd6TTUyNiAyMTYuNWMtNzggMC0xNDEuMiA2My4yLTE0MS4yIDE0MS4yIDAgOC40IDAuOSAxNi42IDIuMyAyNC42IDIyLjMgMzguNyA2NCA2NSAxMTEuOCA2NSA3MS4xIDAgMTI4LjktNTcuOCAxMjguOS0xMjguOSAwLTMwLjgtMTAuOS01OS4xLTI5LTgxLjQtMjEuMy0xMy00Ni4xLTIwLjUtNzIuOC0yMC41eiIgZmlsbD0iI0FFRDdGRiIgcC1pZD0iNTQwMiI+PC9wYXRoPjxwYXRoIGQ9Ik01MDAuMyA4MDEuN2MtMTczLjcgMC0yNjIuOS01Mi41LTI3MS43LTU4LTEzLjctNy41LTIzLjUtMjMuMi0yMy4zLTM3Ljd2LTAuM2MyLjItNjEuNCAxNi42LTk2LjMgMTkuOC0xMDMuMyAxNy43LTU0LjggNzUuOS0xMDMuNCAxMzIuOC0xMTFsMS45LTAuMSAxMi42LTAuMWM3LjMtMC4xIDE2LjkgMi4yIDIzLjMgNS45IDAuMiAwLjEgOS45IDUuNyAxOC40IDkuMyAyNi41IDExLjQgNTYuNiAxNy40IDg2LjkgMTcuNCAzMC43IDAgNjAuMS01LjkgODcuMi0xNy42IDguNC0zLjUgMTcuOC05IDE3LjktOWwwLjUtMC4zYzYuMi0zLjMgMTUuNy01LjcgMjIuNy01LjdsMTQgMC4xIDEuMSAwLjJjNTcuMSA4LjQgMTE1LjkgNTguNyAxMzEuOSAxMTIuNSAzLjMgNy40IDE3IDQxLjEgMTkgMTAxLjV2MC43aDAuNHYwLjRoLTAuNHYwLjJoMC40djAuNmgtMC40IDAuNHYwLjVoLTAuNHYwLjFoMC40LTAuNGMtMC44IDEzLjItMTAuNyAyOC43LTIzLjEgMzUuNy04LjEgNS05Ny4zIDU4LTI3MS45IDU4eiBtLTI2My4yLTk1LjJjMC4xIDIgMyA3LjMgNi44IDkuM2wxLjIgMC43YzAuOCAwLjUgODYgNTMuMyAyNTUuMSA1My4zIDE2OS4yIDAgMjU0LjMtNTIuOCAyNTUuMi01My4zbDEtMC42YzMuMi0xLjcgNi43LTcuMyA3LjEtOS43LTIuMS01OS41LTE2LjMtODkuNC0xNi40LTg5LjdsLTAuNi0xLjMtMC40LTEuNGMtMTItNDIuMy02MC4xLTgzLjYtMTA1LjMtOTAuOGwtMTEuNy0wLjFjLTEuNiAwLTUuNyAxLTcuNSAxLjktMiAxLjEtMTEuNyA2LjYtMjEgMTAuNS0zMSAxMy40LTY0LjYgMjAuMi05OS43IDIwLjItMzQuNiAwLTY4LjktNi45LTk5LjQtMjAtMTAuMi00LjQtMjEuMS0xMC43LTIxLjYtMTAuOS0xLjMtMC43LTUuMi0xLjctNi45LTEuN2gtMC4zbC0xMS43IDAuMWMtNDQuMyA2LjMtOTIuNyA0Ny4zLTEwNi4xIDg5LjlsLTAuNCAxLjItMC41IDEuMWMtMC4xIDAuMi0xNC44IDMxLjMtMTcgOTFsMC4xIDAuMWgtMC4xYzAuMSAwIDAuMSAwLjEgMC4xIDAuMnpNNTAwLjYgNDkwYy05NC43IDAtMTcxLjgtNzcuMS0xNzEuOC0xNzEuOCAwLTk0LjcgNzcuMS0xNzEuOCAxNzEuOC0xNzEuOCA5NC43IDAgMTcxLjggNzcuMSAxNzEuOCAxNzEuOC0wLjEgOTQuNy03Ny4xIDE3MS44LTE3MS44IDE3MS44eiBtMC0zMTEuN2MtNzcuMiAwLTEzOS45IDYyLjgtMTM5LjkgMTM5LjkgMCA3Ny4yIDYyLjggMTM5LjkgMTM5LjkgMTM5LjkgNzcuMiAwIDEzOS45LTYyLjggMTM5LjktMTM5LjkgMC03Ny4yLTYyLjgtMTM5LjktMTM5LjktMTM5Ljl6IiBmaWxsPSIjMTE5NUZFIiBwLWlkPSI1NDAzIj48L3BhdGg+PHBhdGggZD0iTTUwMC4zIDgxMi43Yy0xNzYuNCAwLTI2Ny43LTUzLjUtMjc3LjUtNTkuNi0xNi44LTkuMS0yOC44LTI4LjctMjguNS00Ny4zIDIuMi02MS41IDE1LjktOTcuMSAyMC41LTEwNy40IDE5LjEtNTguMiA4MS4yLTEwOS45IDE0MS43LTExNy45bDIuNi0wLjIgMTMuMi0wLjJjOS4yLTAuMSAyMC44IDIuNyAyOC44IDcuMyAwLjIgMC4xIDkuNSA1LjQgMTcuMyA4LjggMjUuMiAxMC44IDUzLjcgMTYuNSA4Mi41IDE2LjUgMjkuMiAwIDU3LjEtNS42IDgyLjgtMTYuNyA3LjgtMy4zIDE2LjctOC40IDE2LjgtOC40bDAuNy0wLjRjOC00LjMgMTkuMi03IDI4LTdsMTYuNyAwLjRjNjEuNCA5IDEyMyA2MS41IDE0MC43IDExOS41IDQuMiA5LjYgMTYuMiA0MS4xIDE5LjMgOTVoMC41bDAuNCAyMy4zLTIuMiAwLjFjLTQgMTQtMTQuMyAyNy43LTI3IDM0LjgtOS40IDUuOC0xMDAuMyA1OS40LTI3Ny4zIDU5LjR6TTM3MyA1MDIuMWgtMC40bC0xMy45IDAuMmMtNTIuMyA2LjktMTA2LjYgNTIuNC0xMjMuMSAxMDMuNGwtMC40IDEuMmMtMi44IDYuMS0xNi42IDM5LjUtMTguOCA5OS4xLTAuMiAxMC41IDcuNCAyMi41IDE3LjUgMjggOS44IDYuMSA5Ni4yIDU2LjYgMjY2LjUgNTYuNiAxNzAuOCAwIDI1Ni44LTUwLjYgMjY2LTU2LjQgOS40LTUuMyAxNy4yLTE3LjIgMTgtMjYuN1Y3MDZjLTItNTkuMi0xNS40LTkxLjctMTguMS05Ny43bC0wLjUtMS40Yy0xNC45LTQ5LjktNzAtOTYuOS0xMjMtMTA0LjdoLTAuM2wtMTMuMy0wLjFjLTUuMSAwLTEyLjggMS45LTE3LjQgNC40LTAuNiAwLjMtMTAuMyA1LjktMTkuMyA5LjctMjguNCAxMi4zLTU5LjIgMTguNS05MS41IDE4LjUtMzEuOCAwLTYzLjMtNi4zLTkxLjItMTguMy05LjEtMy45LTE5LjUtOS45LTE5LjYtOS45LTQuNS0yLjUtMTEuOC00LjQtMTcuMi00LjR6IG0xMjcuMyAyNzguOGMtMTcyLjIgMC0yNjAuMi01NC41LTI2MS01NWwtMC45LTAuNWMtNC41LTIuMy04LjItNi45LTEwLjMtMTEuNGwtMi4xLTEgMC4yLTcuM2MwLjEtMi4xIDAuMi00LjEgMC4zLTYuMWwwLjItNC4yYzMuNS01NC43IDE3LTgzLjUgMTcuNi04NC44bDAuMy0wLjhjMTQuNy00Ni44IDY2LjMtOTAuNSAxMTUtOTcuNWwxLjUtMC4xIDExLjctMC4xYzMuOCAwLjEgOS41IDEuMyAxMi42IDMuMSAxLjIgMC43IDExLjMgNi40IDIwLjUgMTAuNCAyOS4xIDEyLjUgNjIgMTkuMSA5NS4xIDE5LjEgMzMuNiAwIDY1LjctNi41IDk1LjMtMTkuMyA4LjgtMy43IDE4LjEtOSAxOS45LTEwIDMuNS0xLjggOS4zLTMuMyAxMy0zLjNsMTMuNCAwLjNjNDkuNyA3LjkgMTAwLjkgNTIuMSAxMTQuMiA5OC43bDAuMyAwLjljMS42IDMuNSAxNS41IDM0LjQgMTcuNiA5NC4xdjFsLTAuMiAxYy0wLjggNS42LTYuMyAxNC4zLTEyLjcgMTcuOGwtMC42IDAuNGMtMC43IDAuMS04OC4zIDU0LjYtMjYwLjkgNTQuNnogbS0yMjkuMi02My43YzM0LjEgMTUuMSAxMTAuOSA0MS42IDIyOS4yIDQxLjYgMTY0LjUgMCAyNDguNS01MS4xIDI0OS4zLTUxLjdsMS4yLTAuN2MwLjQtMC4zIDEuMS0xLjIgMS42LTItMi4yLTU0LjktMTUuMi04Mi45LTE1LjMtODMuMmwtMS42LTQuMmMtMTAuOS0zOC4zLTU0LjYtNzYtOTUuNy04Mi45TDYyOSA1MzRjLTAuMSAwLjEtMS43IDAuNS0yLjQgMC43LTIuOSAxLjYtMTIuNCA2LjktMjEuNiAxMC44LTMyLjMgMTQtNjcuMyAyMS0xMDMuOSAyMS0zNi4xIDAtNzEuOS03LjItMTAzLjctMjAuOS05LjUtNC4xLTE5LjMtOS42LTIyLjItMTEuMi0wLjctMC4yLTEuOS0wLjUtMi40LTAuNWwtMTAuNiAwLjFjLTQwLjMgNi4xLTg0LjMgNDMuNi05Ni40IDgyLjJsLTEuNiAzLjljLTAuMSAwLjEtMTIuNiAyNy42LTE1LjYgNzkuNWwyMi41IDE3LjZ6IG00ODEuOC0xMy42ek01MDAuNiA1MDFjLTEwMC44IDAtMTgyLjgtODItMTgyLjgtMTgyLjggMC0xMDAuOCA4Mi0xODIuOCAxODIuOC0xODIuOHMxODIuOCA4MiAxODIuOCAxODIuOEM2ODMuMyA0MTkgNjAxLjMgNTAxIDUwMC42IDUwMXogbTAtMzQzLjVjLTg4LjYgMC0xNjAuOCA3Mi4xLTE2MC44IDE2MC44IDAgODguNiA3Mi4xIDE2MC44IDE2MC44IDE2MC44UzY2MS40IDQwNyA2NjEuNCAzMTguM2MtMC4xLTg4LjctNzIuMi0xNjAuOC0xNjAuOC0xNjAuOHogbTAgMzExLjdjLTgzLjIgMC0xNTEtNjcuNy0xNTEtMTUxczY3LjctMTUxIDE1MS0xNTEgMTUxIDY3LjcgMTUxIDE1MS02Ny44IDE1MS0xNTEgMTUxeiBtMC0yNzkuOWMtNzEuMSAwLTEyOC45IDU3LjgtMTI4LjkgMTI4LjkgMCA3MS4xIDU3LjggMTI4LjkgMTI4LjkgMTI4LjkgNzEuMSAwIDEyOC45LTU3LjggMTI4LjktMTI4LjkgMC03MS4xLTU3LjktMTI4LjktMTI4LjktMTI4Ljl6IiBmaWxsPSIjMTE5NUZFIiBwLWlkPSI1NDA0Ij48L3BhdGg+PC9zdmc+" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item>
            数据中台
          </el-dropdown-item>
          <el-dropdown-item>
            数据中台
          </el-dropdown-item>
          <router-link to="/">
            <el-dropdown-item>
              数据中台
            </el-dropdown-item>
          </router-link>
          <a href="#">
            <el-dropdown-item>账号管理</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss">
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
