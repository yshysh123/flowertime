// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import mock from './mock/mock'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store/store'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
	preLoad: 1.3,
	loading: require('./assets/imgload.gif'),//这个是加载的loading过渡效果
	attempt: 1,
	try: 2 // 这个是加载图片数量
})
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
