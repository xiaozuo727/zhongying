<template>
	<div>
	<headernav headTip="帮助说明" backUrl="./mycenter"></headernav>
	
	<div class="content">
		<ul class="help pad-l-r-1">
			<li v-for="(item,index) in help" @click="liShow(index)">
				<p class="color-green">{{item.tit}}</p>
				<div v-if="item.status">{{item.con}}</div>
			</li>

		</ul>
		
		
	</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				help:[{
					tit:'1.苹果手机用户下载软件之后使用不了？提示需要信任软件',
					con:'需要到设置-通用-设备管理-信任软件。上线APP Store后可直接下载安装使用。',
					status: false,
				},{
			 		tit:'2.收不到短信验证码是什么原因？',
					con:'①是安卓手机还是苹果手机，是否有拦截软件？在安装软件是否允许读取短信；②手机信号网络发出的验证信息可能存在延时，可稍后尝试重新验证；③手机号是不是用户本人实名认证的，非实名制的手机号可能部分功能被运营商限制。',
					status: false,
				},{
					tit:'3.平台提现规则是什么？手续费多少？',
					con:'正常的工作时间提现2个小时内到账，没有手续费；工作时间为周一到周五9:00-12:00,14:00-18:00.节假日除外。',
					status: false,
				},{
					tit:'4.智能还卡能帮人代还吗？',
					con:'可以。',
					status: false,
				},{
					tit:'5.办信用卡需要查进度吗？',
					con:'不需要。',
					status: false,
				},{
					tit:'6.绑定银行卡找不到所属支行怎么办？',
					con:'可以找上级支行，如果还是找不到就找更高级的支行。',
					status: false,
				},{
					tit:'7.无卡支付是只能自己使用吗？',
					con:'是的。',
					status: false,
				},{
					tit:'8.二维码是永久的吗？需要更新吗？',
					con:'永久的，不需要更新。',
					status: false,
				},{
					tit:'9.为什么我锁定的人，又被别人锁走了？',
					con:'如果真的被你锁定了，那是不可能被别人锁走的。同一微信号锁定后是永久的。',
					status: false,
				},{
					tit:'10.信用卡可以帮别人申请吗？',
					con:'最好是本人用自己的手机申请。',
					status: false,
				},{
					tit:'11.为什么扫了我的码后显示无推荐人？',
					con:'可能是在扫你的码之前通过其他方式进入过平台，再扫你的码会无推荐人。',
					status: false,
				},{
					tit:'12.信用卡逾期能代还吗？',
					con:'不能。',
					status: false,
				},{
					tit:'13.APP闪退怎么办？',
					con:'建议卸载后重新安装。',
					status: false,
				},{
					tit:'14.平台最多可以绑定多少张卡？',
					con:'暂时没有限制，只要是用户常用的银行卡就行。',
					status: false,
				},{
					tit:'15.保证金如何退还？',
					con:'①升级到正式会员V3；②办理信用卡30张；③办理贷款10笔。满足以上三个条件，可以向平台申请退还保证金。',
					status: false,
				},{
					tit:'16.如何进行锁粉？',
					con:'进入平台点击‘分享’或者‘我的’推广海报，生成自己的二维码，选择喜欢的海报分享到好友或朋友圈，别人扫码进入平台即可锁定。',
					status: false,
				},],
			}
		},
		methods:{
			liShow(index){
				var th = this;
				th.help[index].status = !th.help[index].status;
			}
		}
	}
</script>

<style scoped>
	ul li{border-bottom: 1px solid #e6e6e6;padding:.3rem 0;line-height: 3;}
	ul li>div{position: relative;width: 100%;left:0;top:0;line-height: 2;}
</style>