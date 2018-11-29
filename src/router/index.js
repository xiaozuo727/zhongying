import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/aui.css'
import '../assets/css/style.css'


Vue.use(Router);
import login from '../views/login'
import forgetPwd from '../views/forgetPwd'
import newPwd from '../views/newPwd'
import mycenter from '../views/mycenter'
import home from '../views/home'
import upVIP from '../views/upVIP'
import set from '../views/set'
import tuijian from '../views/tuijianren'
import team from '../views/team'
import zhanghu from '../views/zh_index'
import rank from '../views/rank'
import TodayShouyi from '../views/zh_TodayShouyi'
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
import liucheng_3 from '../views/liucheng_3'
import liucheng_4 from '../views/liucheng_4'
import liucheng_5 from '../views/liucheng_5'
import liucheng_6 from '../views/liucheng_6'
import liucheng_7 from '../views/liucheng_7'
import liucheng_8 from '../views/liucheng_8'
import liucheng_9 from '../views/liucheng_9'
import liucheng_10 from '../views/liucheng_10'
import liucheng_11 from '../views/liucheng_11'
import loan from '../views/loan'
import loandetail from '../views/loandetail'
import creditdetail from '../views/creditdetail'
import creditCard from '../views/creditCard'
import jisujiek from '../views/jisujiek'
import jisujiedetail from '../views/jisujiedetail'
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
import reward_sh from '../views/reward_sh'
import reward_zn from '../views/reward_zn'
import jiaoyijilu from '../views/jiaoyijilu'
import zhinenghk from '../views/zhinenghk'
import zhinenghk2 from '../views/zhinenghk2'
import zn_realN from '../views/zn_realN'
import zn_realName from '../views/zn_realName'
import zn_jiaoyijilu from '../views/zn_jiaoyijilu'
import zn_jiaoyiDetail from '../views/zn_jiaoyiDetail'
import zn_apply from '../views/zn_apply'
import zn_Bank from '../views/zn_Bank'
import zn_huank from '../views/zn_huank'
import bindCredit from '../views/bindCredit'
import zn_course from '../views/zn_course'
import zh_course from '../views/zh_course'

// 商户收款new
import upbank from '../views/upbank'
import upidcard1 from '../views/upidcard1'
import upidcard2 from '../views/upidcard2'
import uphezhao from '../views/uphezhao'
// 智能还卡new
import zn_upbank from '../views/zn_upbank'
import zn_upidcard1 from '../views/zn_upidcard1'
import zn_upidcard2 from '../views/zn_upidcard2'
import zn_uphezhao from '../views/zn_uphezhao'

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
import notice from '../views/notice'
import noticeDetail from '../views/noticeDetail'

export default new Router({
  routes: [
  	{path: '/login',component: login},
    {path: '/forgetPwd',component: forgetPwd},
    {path: '/newPwd',component: newPwd},
  	{path: '/home',component: home},
    {path: '/mycenter',component: mycenter},
    {path: '/upVIP',component: upVIP},
    {path: '/set',component: set},
    {path: '/tuijian',component: tuijian},
    {path: '/team',component: team},
    {path: '/zhanghu',component: zhanghu},
    {path: '/rank',component: rank},
    {path: '/TodayShouyi',component: TodayShouyi},
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
    {path: '/liucheng_3',component: liucheng_3},
    {path: '/liucheng_4',component: liucheng_4},
    {path: '/liucheng_5',component: liucheng_5},
    {path: '/liucheng_6',component: liucheng_6},
    {path: '/liucheng_7',component: liucheng_7},
    {path: '/liucheng_8',component: liucheng_8},
    {path: '/liucheng_9',component: liucheng_9},
    {path: '/liucheng_10',component: liucheng_10},
    {path: '/liucheng_11',component: liucheng_11},
    {path: '/loan',component: loan},
    {path: '/loandetail',component: loandetail},
    {path: '/creditdetail',component: creditdetail},
    {path: '/creditCard',component: creditCard},
    {path: '/jisujiek',component:jisujiek},
    {path: '/jisujiedetail',component:jisujiedetail},
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
    {path: '/reward_sh',component: reward_sh},
    {path: '/reward_zn',component: reward_zn},
    {path: '/jiaoyijilu',component: jiaoyijilu},
    {path: '/zhinenghk',component: zhinenghk},
    {path: '/zhinenghk2',component: zhinenghk2},
    {path: '/zn_realN',component: zn_realN},
    {path: '/zn_realName',component: zn_realName},
    {path: '/zn_jiaoyijilu',component: zn_jiaoyijilu},
    {path: '/zn_jiaoyiDetail',component: zn_jiaoyiDetail},
    {path: '/zn_apply',component: zn_apply},
    {path: '/zn_Bank',component: zn_Bank},
    {path: '/zn_huank',component: zn_huank},
    {path: '/bindCredit',component: bindCredit},
    {path: '/zn_course',component: zn_course},
    {path: '/zh_course',component: zh_course},

     // 商户收款new
    {path: '/upbank',component: upbank},
    {path: '/upidcard1',component: upidcard1},
    {path: '/upidcard2',component: upidcard2},
    {path: '/uphezhao',component: uphezhao},
      // 智能还卡new
      {path: '/zn_upbank',component: zn_upbank},
      {path: '/zn_upidcard1',component: zn_upidcard1},
      {path: '/zn_upidcard2',component: zn_upidcard2},
      {path: '/zn_uphezhao',component: zn_uphezhao},

    {path: '/help',component: help},
    {path: '/kefu',component: kefu},
    {path: '/realName',component: realName},
    {path: '/personalInfo',component: personalInfo},
    
    {path: '/newsinfo',component: newsinfo},
    {path: '/newloan',component: newloan},
    {path: '/newcredit',component: newcredit},
    {path: '/newproduct',component: newproduct},
    {path: '/newDetail',component: newDetail},
    {path: '/gonglueDetail',component: gonglueDetail},
    {path: '/notice',component: notice},
    {path: '/noticeDetail',component: noticeDetail},
  ],
    
})

