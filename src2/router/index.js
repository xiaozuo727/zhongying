import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/aui.css'
import '../assets/css/style.css'

Vue.use(Router)

import login from '../views/login'
import mycenter from '../views/mycenter'
import home from '../views/home'
import upVIP from '../views/upVIP'
import set from '../views/set'
import tuijian from '../views/tuijianren'
import team from '../views/team'
import zhanghu from '../views/zh_index'
import rank from '../views/rank'
import shouyi from '../views/zh_shouyi'
import tixian from '../views/zh_tixian'
import poster from '../views/poster'
import mybank from '../views/zh_bank'
import modify from '../views/modify_pws'
import addbankinfo from '../views/add_bankinfo'
import api from '../views/api'
import liucheng from '../views/liucheng'
import liucheng_1 from '../views/liucheng_1'
import liucheng_2 from '../views/liucheng_2'
import loan from '../views/loan'
import loandetail from '../views/loandetail'
import creditdetail from '../views/creditdetail'
import creditCard from '../views/creditCard'
import bazhe from '../views/88zhe'
import jiuyuan from '../views/jiuyuan'
import jinduQuery from '../views/jinduQuery'
import wkzf_index from '../views/wkzf_index'
import chuxuBank from '../views/chuxuBank'
import add_chuxuinfo from '../views/add_chuxuinfo'
import creditBank from '../views/creditBank'
import add_creditinfo from '../views/add_creditinfo'
import easypay from '../views/easypay'
import pay198 from '../views/pay198'
import pay598 from '../views/pay598'
import shsk_index from '../views/shsk_index'
import path_explain from '../views/path_explain'
import path from '../views/path'
import reward from '../views/reward'
import jiaoyijilu from '../views/jiaoyijilu'
import zhinenghk from '../views/zhinenghk'
import zhinenghk2 from '../views/zhinenghk2'
import zn_jiaoyijilu from '../views/zn_jiaoyijilu'
import zn_jiaoyiDetail from '../views/zn_jiaoyiDetail'
import zn_apply from '../views/zn_apply'
import zn_huank from '../views/zn_huank'
import bindCredit from '../views/bindCredit'

import help from '../views/help'
import kefu from '../views/kefu'
import realName from '../views/realName'
import personalInfo from '../views/personalInfo'

import newsinfo from '../views/newsinfo'
import newloan from '../views/newloan'
import newcredit from '../views/newcredit'
import newproduct from '../views/newproduct'
import newDetail from '../views/newDetail'
import gonglueDetail from '../views/gonglueDetail'

export default new Router({
  routes: [
  	{path: '/login',component: login},
  	{path: '/home',component: home},
    {path: '/mycenter',component: mycenter},
    {path: '/upVIP',component: upVIP},
    {path: '/set',component: set},
    {path: '/tuijian',component: tuijian},
    {path: '/team',component: team},
    {path: '/zhanghu',component: zhanghu},
    {path: '/rank',component: rank},
    {path: '/shouyi',component: shouyi},
    {path: '/tixian',component: tixian},
    {path: '/poster',component: poster},
    {path: '/mybank',component: mybank},
    {path: '/modify',component: modify},
    {path: '/addbankinfo',component: addbankinfo},
    {path: '/api',component: api},
    {path: '/liucheng',component: liucheng},
    {path: '/liucheng_1',component: liucheng_1},
    {path: '/liucheng_2',component: liucheng_2},
    {path: '/loan',component: loan},
    {path: '/loandetail',component: loandetail},
    {path: '/creditdetail',component: creditdetail},
    {path: '/creditCard',component: creditCard},
    {path: '/bazhe',component: bazhe},
    {path: '/jiuyuan',component: jiuyuan},
    {path: '/jinduQuery',component: jinduQuery},
    {path: '/wkzf_index',component: wkzf_index},
    {path: '/chuxuBank',component: chuxuBank},
    {path: '/add_chuxuinfo',component: add_chuxuinfo},
    {path: '/creditBank',component: creditBank},
    {path: '/add_creditinfo',component: add_creditinfo},
    {path: '/easypay',component: easypay},
    {path: '/pay198',component: pay198},
    {path: '/pay598',component: pay598},
    {path: '/shsk_index',component: shsk_index},
    {path: '/path_explain',component: path_explain},
    {path: '/path',component: path},
    {path: '/reward',component: reward},
    {path: '/jiaoyijilu',component: jiaoyijilu},
    {path: '/zhinenghk',component: zhinenghk},
    {path: '/zhinenghk2',component: zhinenghk2},
    {path: '/zn_jiaoyijilu',component: zn_jiaoyijilu},
    {path: '/zn_jiaoyiDetail',component: zn_jiaoyiDetail},
    {path: '/zn_apply',component: zn_apply},
    {path: '/zn_huank',component: zn_huank},
    {path: '/bindCredit',component: bindCredit},
    
    {path: '/help',component: help},
    {path: '/kefu',component: kefu},
    {path: '/realName',component: realName},
    {path: '/personalInfo',component: personalInfo},
    
    {path: '/newsinfo',component: newsinfo},
    {path: '/newloan',component: newloan},
    {path: '/newcredit',component: newcredit},
    {path: '/newproduct',component: newproduct},
    {path: '/newDetail',component: newDetail},
    {path: '/gonglueDetail',component: gonglueDetail}
  ],
    
})

