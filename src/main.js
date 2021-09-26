import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入全局样式
import './assets/css/global.css'
// 引入element-ui
import './plugins/element'
// 引入font-awsome
import './plugins/font-awesome-4.7.0/font-awesome-4.7.0/css/font-awesome.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
