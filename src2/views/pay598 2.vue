<template>
	<div>
	<headernav headTip="升级支付" backUrl="./upVIP"></headernav>
	
	<div class="content">
		<div class="border-b-gray-5 mar-t-1 pad-b-1">
			<div class="bg-yellow-gradient border-radius-5 col-9 auto " style="color:#ca903d;">
				<div class="pad-6 line-height-2">
					<p class="f14 hidden">
						<img src="../assets/img/huang1.png" alt="" width="30" />高级会员
						<span class="f18 fr"><b>￥ 598.0</b></span>
					</p>
					<p>
						时限：永久有效
						<span class="fr">推荐指数：★★★★★</span>
					</p>
					<p class="">权限：升级高级会员LV1，无卡支付收益，贷款收益、招商收益、办卡收益。</p>
				</div>
				<div class="up-line2"></div>
				<div class="Bond-btn pad-1">
					<img class="mar-r-5" src="../assets/img/money-dai.png" alt="" width="15" />保证金退还说明
					<span class="jiant fr">></span>
				</div>
				
			</div>

		</div>
		
		<div class="pad-1">
			<b>选择支付方式</b>
			<ul class="pay_method pad-t-1">
				<li class="flex pad-t-b-1" v-for="(item,index) in payMent" @click="selec_pay(index)">
					<img class="mar-r-5" :src="item.img" alt="" width="25" />
					<div class="f1">{{item.name}}</div>
					<div class="selec_y " :class="{active:item.status}"></div>
				</li>

			</ul>
			
			<div class="button bg-green border-radius-30">立即支付</div>
			<div class="color-gray f12 bold center">选择支付方式后，立即支付即可</div>
		</div>
	
	
	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				payMent: [{
					img: require('../assets/img/zhifu_icon.png'),
					name: '支付宝支付',
					status:false
				},{
					img: require('../assets/img/wei_icon1.png'),
					name: '微信支付',
					status:false
				}]
			}

		},
		methods:{
			selec_pay(index){
				for(var i in this.payMent){
					this.payMent[i].status = i == index? true : false;
				}
			}
		}
	}
</script>

<style>
</style>