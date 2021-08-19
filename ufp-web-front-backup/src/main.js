import Vue from 'vue'

//引入axios
import axios from 'axios'
Vue.prototype.$axios = axios
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

//引入datav
import dataV from '@jiaminghi/data-view'
//引入 百度地图
import BaiduMap from 'vue-baidu-map'
import '@/styles/index.scss' // global css

// 引入Echarts
import Echarts from 'echarts'

Vue.prototype.echarts = Echarts
Vue.use(Echarts)

//引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

//引入iview
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.use(ViewUI)

//引入at ui
import AtComponents from 'at-ui'
import 'at-ui-style'    // 引入组件样式

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import './utils/dialog'
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ViewUI);
Vue.use(AtComponents)
Vue.use(ElementUI)
Vue.use(dataV)
Vue.config.productionTip = false
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'c2xuHU1cqLLMcegUyPtNtEbGFpPsT3r6'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

