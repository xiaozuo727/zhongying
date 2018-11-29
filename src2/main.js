// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
//import Vuerouter from 'vue-router'
//Vue.use(router);


Vue.config.productionTip = false

Vue.component('headernav',{
	props:['headTip','backUrl'],
	template:'<header><router-link :to="backUrl" class="f1 head-back"></router-link><div class="f8">{{headTip}}</div><div class="f1"></div></header>'
})

//var hostUrl=

/* eslint-disable no-new */
var app=new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  
})
if(!(localStorage.user_id && localStorage.user_pws)){
	if(app.$router.app._route.path!="/login"){
		app.$router.push({'path':'/login'})
	}
}

import global_ from './components/Global'
Vue.prototype.Global = global_


