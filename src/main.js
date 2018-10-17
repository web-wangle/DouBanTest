import Vue from 'vue'
import App from './App'
import router from './router'

//vant引入
import { Row, Col } from 'vant'


Vue.use(Row).use(Col)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
