// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

Vue.use(YDUI);

//var hostUrl=

/* eslint-disable no-new */

Vue.use(VueAxios, axios);
/*import Vuerouter from 'vue-router'
Vue.use(router);*/

import vueg from 'vueg'
import 'vueg/css/transition-min.css'
const options={
    duration: '0.3',              //转场动画时长，默认为0.3，单位秒
    firstEntryDisable: false,     //值为true时禁用首次进入应用时的渐现动画，默认为false
    firstEntryDuration: '.6',     //首次进入应用时的渐现动画时长，默认为.6
    forwardAnim: 'fadeInRight',   //前进动画，默认为fadeInRight
    backAnim: 'fadeInLeft',       //后退动画，默认为fedeInLeft
    sameDepthDisable: false,      //url深度相同时禁用动画，默认为false
    //默认为[]，name对应路由的name,以实现类似app中点击tab页面水平转场效果，如tab[1]到tab[0]，会使用backAnim动画，tab[1]到tab[2]，会使用forwardAnim动画
    tabsDisable: false,           //值为true时，tabs间的转场没有动画，默认为false
    disable: false,               //禁用转场动画，默认为false，嵌套路由默认为true
}

import global_ from './components/Global'
Vue.prototype.Global = global_;
Vue.config.productionTip = false;

Vue.component('headernav',{
    props:['headTip','backUrl'],
    template:'<header><router-link :to="backUrl" class="f1 head-back"></router-link><div class="f8">{{headTip}}</div><div class="f1"></div></header>'
});



Vue.prototype.getNewDay = function(timestamp){
    var oDate = new Date();
    oDate.setTime(timestamp);
    var now = (oDate.getMonth()+1)+'月'+oDate.getDate()+'日';

    return now
};

var app=new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',

});

Vue.use(vueg, router,options);     //←注意这一句应该在router实例化(router = new VueRouter({})之后

if(!(localStorage.user_id && localStorage.user_pws)){
    if(app.$router.app._route.path!="/login"){
        app.$router.push({'path':'/login'})

    }
}





// Vue.prototype.getNewDay = function (dateTemp, days) {
//     var dateTemp = dateTemp.split("-");
//     var nDate = new Date(dateTemp[1] + '-' + dateTemp[2] + '-' + dateTemp[0]); //转换为MM-DD-YYYY格式
//     var millSeconds = Math.abs(nDate) + (days * 24 * 60 * 60 * 1000);
//     var rDate = new Date(millSeconds);
//     var year = rDate.getFullYear();
//     var month = rDate.getMonth() + 1;
//     if (month < 10) month = "0" + month;
//     var date = rDate.getDate();
//     if (date < 10) date = "0" + date;
//     return (year + "-" + month + "-" + date);
// };

