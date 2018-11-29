<template>
	<div>
	<headernav headTip="还款计划" backUrl="./zn_apply"></headernav>
	
	<div class="content">
		<div class="huankHead">
			<div class="border-b-white pad-t-b-1">
				<div class="pad-t-b-5">总代还金额</div>
				<div>
					￥ <span class="f30">5000</span>
				</div>
			</div>
			<div class="flex flex-start-y space-ard line-height-2 pad-t-b-1">
				<div>
					开始时间
					<div>07月23日</div>
				</div>
				<div class="re">
					<div>14天</div>
					<hr class="line mar-t-1" />
				</div>
				<div>
					结束时间
					<div>07月23日</div>
				</div>
				<div>
					总服务费
					<div>￥ 50.00</div>
				</div>
			</div>
		</div>
		
		<ul class="huank pad-1 f15 line-height-1">
			<li class="flex flex-start-y">
				<div class="pad-l-r-1">07月23日</div>
				<div class="con">
					<div>
						<p>代偿金额:￥<span>305.1</span></p>
						<span class="color-gray f12">服务费:￥ <span>3.08</span></span>
					</div>
					
					<div>
						<p>代偿金额:￥<span>305.1</span></p>
						<span class="color-gray f12">服务费:￥ <span>3.08</span></span>
					</div>
				</div>
			</li>
			<li class="flex flex-start-y">
				<div class="pad-l-r-1">07月23日</div>
				<div class="con">
					<div>
						<p>代偿金额:￥<span>305.1</span></p>
						<span class="color-gray f12">服务费:￥ <span>3.08</span></span>
					</div>
					
					<div>
						<p>代偿金额:￥<span>305.1</span></p>
						<span class="color-gray f12">服务费:￥ <span>3.08</span></span>
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
	.huankHead{background-image: linear-gradient(#01f6b9,#04beca);color:#fff;text-align: center;}
	.huank .con{padding-left: 1rem;border-left:1px solid #e6e6e6;flex:1;}
	.huank .con>div{position: relative;padding-bottom: .5rem;}
	.huank .con>div:before{position: absolute;content: '';width: 7px;height:7px;border-radius:50%;background:#0f7dd9;left:-20px;top:5px;}
	hr.line{color:#fff;background:#fff;}
	hr.line:before{border:1px solid #fff;}
</style>