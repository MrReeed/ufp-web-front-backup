import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
    meta: {}
  },
  // ******************************************** 首   页 ***********************************************
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName:"subpage"*/ '@/views/home/home'),
    meta: { title: '首页', icon: 'home' }

  },

  //   ******************************************** 查    岗 ***********************************************
  // {
  //   path: '/Supervisor',
  //   name: 'Supervisor',
  //   component: () => import('@/views/ChaGang/ChaGang'),
  //   meta: { title: '查岗', icon: 'home' }
  //
  // },
  //   ******************************************** 物    联 ***********************************************
  {
    path: '/IOT',
    name: 'IOT',
    component: () => import('@/views/IOT/IOT'),
    meta: { title: '物联', icon: 'home' }
  },

  //   ******************************************** 运行监测 ***********************************************
  {
    path: '/Operation',
    name: 'Operation',
    component: () => import('@/views/Operation/Operation'),
    meta: { title: '运行监测', icon: 'home' }
  },

  //   ******************************************** 企业档案 ***********************************************

  {
    path: '/company',
    name: 'Company',
    component: () => import('@/views/company/index'),
    // component: resolve => require(['@/views/company/index'], resolve),
    meta: { title: '企业档案', icon: 'home' }
  },

  {
    path: '/equipments',
    name: 'Equipments',
    component: () => import('@/views/Equipments/Equipment'),
    meta: { title: '设备管理', icon: 'home' }
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
    meta: {}
  }

]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
