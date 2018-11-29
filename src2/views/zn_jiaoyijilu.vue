<template>
	<div>
	<headernav headTip="交易记录" backUrl="./zhinenghk"></headernav>
	
	<div class="content">
		<div class="line-height-2 bg-gray color-red center">请确保卡内余额充足，否则将造成还款中断</div>
		
		<ul class="pad-t-1">
			<li class="border-b-gray mar-b-1">
				<div class="border-b-green">
					<span class="date inline-block bg-green">2018年7月</span>
				</div>
				<div class="pad-5-1">
					<span class="color-gray">订单编号:YEDC-153413518616</span>
					<span class="fr color-blue">成功</span>
				
					<div class="flex pad-t-5 line-height-2">
						<img src="../assets/img/bank_icon10.png" alt="" width="30" />
						<div class="f1 pad-l-1">
							<p class="f15">中心银行</p>
							<p>代偿金额:1000.00  服务费:9.80</p>
							<span class="color-gray">2018-07-23 16:15:53</span>
						</div>
						<router-link to='zn_jiaoyiDetail'><i class="arrow mar-r-5"></i></router-link>
					</div>
				</div>
			</li>
			<li class="border-b-gray mar-b-1">
				<div class="border-b-green">
					<span class="date inline-block bg-green">2018年7月</span>
				</div>
				<div class="pad-5-1">
					<span class="color-gray">订单编号:YEDC-153413518616</span>
					<span class="fr color-blue">成功</span>
				
					<div class="flex pad-t-5 line-height-2">
						<img src="../assets/img/bank_icon10.png" alt="" width="30" />
						<div class="f1 pad-l-1">
							<p class="f15">中心银行</p>
							<p>代偿金额:1000.00  服务费:9.80</p>
							<span class="color-gray">2018-07-23 16:15:53</span>
						</div>
						<div><i class="arrow mar-r-5"></i></div>
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
	.date{padding:.2rem 1rem;color:#fff;border-radius: 0 30px 0 0;font-size: 16px;}
</style>