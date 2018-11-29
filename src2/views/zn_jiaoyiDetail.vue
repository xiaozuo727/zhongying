<template>
	<div>
	<headernav headTip="交易记录" backUrl="./zn_jiaoyijilu"></headernav>
	
	<div class="content">
		<div class="tishi color-red pad-5-1 line-height-2 indent-2 re">
			请确保还款期间每日卡内余额不少于￥0.00.延长“结束日期”,可以降低卡内预留资金，欢迎再次使用。
		</div>
		<ul class="pad-l-r-1 line-height-2">
			<li class="pad-b-5">
				<p class="f16">7月23日</p>
				<div class="pad-5 color-gray bg-white mar-b-5">
					<div class="border-b-gray">
						订单编号：
						<span>41511013156153</span>
					</div>
					<div class="flex center pad-t-5">
						<div class="f1">
							代还金额
							<div class="color-black">￥<span>303.19</span></div>
						</div>
						<div class="f1">
							服务费
							<div class="color-black">￥<span>3.19</span></div>
						</div>
						<div class="f1 color-blue">成功</div>
					</div>
				</div>
				
			</li>
			<li class="pad-b-5">
				<p class="f16">7月23日</p>
				<div class="pad-5 color-gray bg-white">
					<div class="border-b-gray">
						订单编号：
						<span>41511013156153</span>
					</div>
					<div class="flex center pad-t-5">
						<div class="f1">
							代还金额
							<div class="color-black">￥<span>30232613.19</span></div>
						</div>
						<div class="f1">
							服务费
							<div class="color-black">￥<span>3.19</span></div>
						</div>
						<div class="f1 color-blue">成功</div>
					</div>
				</div>
			</li>
		</ul>
		
		
	</div>
	</div>	
</template>

<script>
</script>

<style scoped>
	.content{background:#f3f3f3;}
	.tishi:before{content: '';position: absolute;width: 13px;height:13px;border-radius:50%;background:#0f7dd9;color:#000;left:1.5rem;top:.9rem;}
	.tishi:after{content: '!';color:#fff;position: absolute;left:2px;top:8px;}
</style>