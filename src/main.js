// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/reset.css'
import './styles/index.scss'
import {get, post} from './util/http'

import VueDataTables from 'vue-data-tables'
Vue.use(VueDataTables)



Vue.prototype.$post = post;
Vue.prototype.$get = get;

Vue.use(Element, { size: 'medium' })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
