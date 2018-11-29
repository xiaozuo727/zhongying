<template>
	<div>
	<headernav headTip="升级会员" backUrl="./mycenter"></headernav>
	<div class="content">
		<div class="border-b-gray-5 mar-t-1">
			<div class="bg-green-gradient2 border-radius-5 col-9 auto color-white">
				<div class="pad-6 line-height-2">
					<p class="f14 hidden">
						<img src="../assets/img/huang1.png" alt="" width="30" />普通会员
						<span class="f18 fr"><b>￥ 198.0</b></span>
					</p>
					<p>
						时限：永久有效
						<span class="fr">推荐指数：★★★</span>
					</p>
					<p class="">权限：升级普通会员LV1，无卡支付收益，贷款收益、招商收益、办卡收益。</p>
				</div>
				<div class="up-line"></div>
				<div class="Bond-btn pad-1" @click="isShow">
					<img class="mar-r-5" src="../assets/img/money-dai.png" alt="" width="15" />保证金退还说明
					<span class="jiant fr">></span>
				</div>
				
			</div>
			<div class="bg-green border-radius-5 col-3 auto color-white center line-height-3 mar-t-1 mar-b-1" @click="upgrade1">立即升级</div>
		</div>
		
		<div class="border-b-gray-5 mar-t-1">
			<div class="bg-yellow-gradient border-radius-5 col-9 auto " style="color:#ca903d;">
				<div class="pad-6 line-height-2">
					<p class="f14 hidden">
						<img src="../assets/img/lan1.png" alt="" width="30" />高级会员
						<span class="f18 fr"><b>￥ 598.0</b></span>
					</p>
					<p>
						时限：永久有效
						<span class="fr">推荐指数：★★★★★</span>
					</p>
					<p class="">权限：升级高级会员LV1，无卡支付收益，贷款收益、招商收益、办卡收益。</p>
				</div>
				<div class="up-line2"></div>
				<div class="Bond-btn pad-1" @click="isShow">
					<img class="mar-r-5" src="../assets/img/money-dai.png" alt="" width="15" />保证金退还说明
					<span class="jiant fr">></span>
				</div>
				
			</div>
			<div class="bg-yellow border-radius-5 col-3 auto color-white center line-height-3 mar-t-1 mar-b-1" @click="upgrade5">立即升级</div>
		</div>
		
			<!--alert-->
		<div class="mask" v-if="mask" >
			<div class="Bond-tc col-8 auto bg-white color-gray pad-1 border-radius-5">
				<p class="f18 center line-height-2">保证金退还说明</p>
				<div class="scroll-y line-height-2 mar-t-b-1 pad-l-r-1" style="height: 45vh;">
					1、为什么要收取保证金<br/>
					为了保证平台的健康持续发展，为了规范广大会员的互联网推广行为，平台收取的198元是普通会员的保证金，以确保广大会员能遵守互联网法规，规范市场。<br/>
					2、保证金退还规则<br/>
					A、会员等级达到LV3。<br/>
					B、会员办理信用卡30张，并成功拿到佣金。<br/>
					C、完成10单贷款，成功拿到佣金。<br/>
					达到上述3个条件后，会员可在个人中心平台发起保证金退还申请，工作人员审核后将保证金退还。退款后会员身份不变，仍可以享受直推收益。<br/>
					3、平台规范<br/>
					为了进一步规范本平台业务推广宣传的合规性，维护平台与合作机构公司的权益，提升平台声誉，推动平台健康稳定发展，必须坚持——合规展业，良性发展。
		
				</div>
				<div class="close button bg-green" @click="isHide">我知道了</div>
			</div>
		</div>
			
	</div>
	</div>	
	
	
</template>

<script>
	export default{
		data(){
			return{
				mask:false
			}
		},
		beforeCreate(){
			if(window.localStorage.getItem('id')=="" || window.localStorage.token==""){
				this.$router.push({path:'./login'})
			}else{
				this.$router.push({path:'./upVIP'})
			}
		},
		methods:{
			isShow(){
				this.mask=true
			},
			isHide(){
				this.mask=false
			},
			upgrade1(){
				this.$router.push({path:'./pay198'})
			},
			upgrade5(){
				this.$router.push({path:'./pay598'})
			}
		},

	}
</script>

<style>
</style>