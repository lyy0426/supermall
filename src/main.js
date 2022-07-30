import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from '@/components/common/toast'
import VueLazyLoad from "vue-lazyload"

Vue.config.productionTip = false

//安装toast插件
Vue.use(toast)
Vue.use(VueLazyLoad)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
