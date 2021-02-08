import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

import fastClick from 'fastclick'
import VueLazyload from "vue-lazyload";

import toast from './components/common/toast'

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

Vue.use(toast)

//解决移动端300ms延迟
fastClick.attach(document.body)
//图片懒加载
Vue.use(VueLazyload,{
  loading:require('./assets/images/common/placeholder.png')
})


new Vue({
  render: h => h(App),router,store,
}).$mount('#app')
