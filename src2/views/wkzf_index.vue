<template>
	<div>
	<headernav headTip="无卡支付" backUrl="./home"></headernav>
	<div class="content">
		<div class="money-top color-white center re">
			<span class="f16 pad-l-2r">￥</span><input type="text" placeholder="0.00" />
			<div class="line-height-3">(请输入金额)</div>
		</div>
		
		<ul class="select_card pad-l-r-1">
			<li class="flex" @click="creditCard">
				<div class="pad-5">
					<img src="../assets/img/yinlian.jpg" width="70"/>
				</div>
				<div class="f1 f13 pad-r-5 line-height-2">
					<b>实时到账(00:00-21:00) <span class="jifen_icon inline-block">积分</span></b>
					<div class="">单笔500-20000元 当日最高5万元</div>
					<div>费率0.55%+2元/笔</div>
					<div class="color-green">实时到账0.00元,手续费0.00元</div>
					<div class="color-red">提示:出现白板请耐心等待,只能到注册储蓄卡</div>
				</div>
			</li>
			<li class="flex" @click="creditCard">
				<div class="pad-5">
					<img src="../assets/img/yinlian.jpg" width="70"/>
				</div>
				<div class="f1 f13 pad-r-5 line-height-2">
					<b>实时到账(00:00-21:00) <span class="jifen_icon inline-block">积分</span></b>
					<div class="">单笔500-20000元 当日最高5万元</div>
					<div>费率0.55%+2元/笔</div>
					<div class="color-green">实时到账0.00元,手续费0.00元</div>
					<div class="color-red">提示:出现白板请耐心等待,只能到注册储蓄卡</div>
				</div>
			</li>
		</ul>
		
		<div class="button bg-green">
			<router-link to="chuxuBank" class="block color-white">储蓄卡管理</router-link>
			
		</div>
		
		<div>
			<div class="pad-1 bg-green color-white center f18">无卡支付奖金表</div>
			<table class="center mar-1" width="90%" border="1" cellpadding="0" cellspacing="0">
				<tr>
					<td>基础费率</td>
					<td><img src="../assets/img/huang1.png" width="40" /><br />(佣金)</td>
					<td><img src="../assets/img/lan1.png" width="40"/><br />(佣金)</td>
					<td><img src="../assets/img/lan2.png" width="40"/><br />(佣金)</td>
					<td><img src="../assets/img/lan3.png" width="40"/><br />(佣金)</td>
				</tr>
				<tr>
					<td>0.55%</td>
					<td>无</td>
					<td>0.08%</td>
					<td>0.10%</td>
					<td>0.12%</td>
				</tr>
			</table>
			
			<div class="pad-1 line-height-2 color-gray">
				<p>
					高级会员将享受下属团队收益的5%管理费
					<br />普通会员享受2%的管理费
					<p class="f12 pad-t-5">注：会员使用收钱服务费时,银行均按5.5%。（D+0有积分），先行扣除收款服务费，而后平台在银行结束后以奖金的形式返现。</p>
				</p>
				<p class="center f16">温馨提示</p>
				<p>请您在使用信用卡刷卡的时候尽量避免整数大额消费。如5000元、10000元，这样对您的信用卡有好处哦！</p>
			</div>
		</div>
		
	</div>
	</div>
</template>

<script>
	export default{
		methods:{
			creditCard(){
//				if()
				this.$router.push({path:'./creditBank'})
			}
		}
	}
</script>

<style>
</style>