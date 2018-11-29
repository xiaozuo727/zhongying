<template>
	<div class="mask" v-show="mask">
		<div class="loanapply-tc col-8 auto bg-white border-radius-5 pad-1">
			<div class="center line-height-2 f18">信息录入</div>
			<div>
				<p><input type="text" placeholder="请输入姓名" v-model="name"  /></p>
				<p><input type="text" placeholder="请输入身份证号" v-model="sfz"/></p>
				<p><input type="text" placeholder="请输入手机号码" v-model="phone"/></p>
				<p class="flex space-btw">
					<input type="text" placeholder="请输入验证码" v-model="yzm"/>
					<span class="f12 bg-green pad-5 border-radius-5" @click="yzmBtn" v-html="sendYzm">发送验证码</span>
				</p>
			</div>
			<div class="center">
				<input type="checkbox" checked="checked" class="vmid" /><span class="f12">阅读并同意</span>
				<div class="color-green" @click="xieyi">《众盈服务平台协议》</div>
			</div>
			<div class="button bg-green" style="margin:.5rem auto" @click="isApply">申请</div>
			<div class="close button bg-gray color-black" style="margin:.5rem auto" @click="isHide">取消</div>
		</div>
		
		<!--协议alert-->
		<div class="col-8 auto bg-white border-radius-5 pad-1 color-gray" v-show="xyAlert">
			<p class="center pad-5-1 f18">众盈服务平台服务协议</p>
			<div class="line-height-2 " style="height:400px;overflow-y: auto;">
				一、声明与承诺<br/>
				（一）请您确认，在您注册成为“众盈服务平台”用户以接受本服务，使用本服务前，您已充分阅读、理解并接受本协议的全部内容，一旦您使用本服务，即表示您同意遵循本协议之左右约定。
				<br/>
				（二）您同意，本公司有权随时对协议内容进行单方面的变更，并以在本网站公告的方式予以公布，无需另行单独通知您；若您在本协议内容公告变更后继续使用本服务的，表示您已充分阅读、理解并接受修改的协议内容，也将遵循修改后的协议内容使用本服务；若您不同意修改后的协议内容，您应停止使用本服务。
				<br/>
				（三）您保证，在您同意接受本协议并注册成为“众盈服务平台”的用户时，您已经年满18周岁，或者您是在中国大陆地区合法开展经营活动或其他业务的法人或其他组织；本协议内容不受您所属国家或地区法律的排斥。不具备前述条件的，您应立即终止注册或停止使用本服务。您在使用支付宝或网银服务时，应自行判断对方是否是完全民事行为能力人并自行决定是否与对方进行交易或转账给对方等，且您应自行承担与此相关的所有风险。
				<br/>
				（四）您同意，您在“众盈服务平台”上发生的所有交易，同时本公司有权从“众盈服务平台”获取您的相关信息。本公司按照“众盈服务平台”的指令进行资金的冻结。扣划完全来自您的授权，本公司对因此给您造成的任何损失均不承担责任。
				 <br/>
				二、关于“众盈服务平台”收费说明
				<br/>
				（一）所有在“众盈服务平台”购买的产品，都不允许任何形式的退换。
				<br/>
				（二）用户付完款后可以在个人中心看到已买到的产品，之后可以进行使用。
				<br/>
				（三）在“众盈服务平台”充值的金额仅能作为在“众盈服务平台”购买产品使用，不找零，不进行兑换现金服务。
				 <br/>
				三、支付服务使用限制
				<br/>
				（一）您在使用本服务时应遵守中华人民共和国相关法律法规、您所在国家或地区之法令及相关国际惯例，不将本服务用于任何非法目的（包括用于禁止或限制交易物品的交易），也不以任何非法方式使用本服务。
				<br/>
				（二）您不得利用本服务从事侵害他人合法权益之行为，否则本公司有权拒绝提供本服务，且您应承担所有相关法律责任，因此导致本公司或本公司雇员或其他方受损的，您应承担赔偿责任。上述行为包括但不限于：
				<br/>
				1、侵害他人名誉权、隐私权、商业秘密、商标权、著作权、专利权等合法权益。
				<br/>
				2、违反依法定或约定之保密义务。
				<br/>
				3、冒用他人名义使用本服务。
				<br/>
				4、从事不法交易行为，提供黄色、赌博、暴力等不良信息。

			</div>
			<div class="button bg-green" @click="xyYes">我知道了</div>
		</div>
		
		
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				name:'',
				sfz:'',
				phone:'',
				yzm:'',
				sendYzm:'发送验证码',
				xyAlert:false,
				then:0,
				second:60,

			}
		},
		props:{
			mask:Boolean,
			
		},
		methods:{			
			isHide(){
				this.$emit("hideBox")
			},
			isApply(){
				this.$emit("apply",{'name':this.name,'sfz':this.sfz,'phone':this.phone,'yzm':this.yzm});
				
			},
			yzmBtn(){	
				var th=this;
				var myregphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机号码
				if(this.phone=="" ){
					alert('手机号为空')
				}else if(!myregphone.test(this.phone)){
					alert('手机号码错误')
				}else{
					var m=60;
					var th=this;
					
					if(th.then==0){
						var time=setInterval(function(){
							m--;			
							if(m>0){
								th.sendYzm=m+'s后重新发送';
								th.then=1;
							}else{
								m=60;
								th.sendYzm='发送验证码';
								th.then=0;
								clearInterval(time)
							}
						},1000);
						var data={
							params:{}
						};
						data.params.ID=localStorage.id;
						data.params.randpwd=localStorage.token;
						data.params.tel=this.phone;
						var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
						this.axios.get(this.Global.hostUrl+'mobile/Smstest/Index',data,config).then((res) => {
							console.log(res.data);
							if(res.data.error !=="success"){
								alert(res.data.msg)
							}else{
//								alert('发送成功')
							}
			
						}).catch(err=>{
							alert('请求失败')
						})
					}

					
					
				}
				
			},
			xieyi(){
				this.xyAlert=true
			},
			xyYes(){
				this.xyAlert=false
			}
		},

	}
</script>

<style>
</style>