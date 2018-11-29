<template>
	<div>
	<headernav headTip="交易记录" backUrl="./zhinenghk2"></headernav>
	
	<div class="content">
		<div class="bg-white center pad-t-b-1 border-b-gray re">
			<div class="color-gray pad-t-b-5">代偿金额</div>
			<div class="f24">￥<span>5000</span></div>
			<router-link to="zn_huank" class="huank ab flex">
				<img src="../assets/img/rili.png" alt="" height="14" />
				还款计划
			</router-link>

		</div>
		<div class="time bg-white center flex flex-start-y space-ard pad-5-1 mar-b-5 line-height-2">
			<div>
				<span>开始时间</span>
				<div>07月23日</div>
			</div>
			<div class="re">
				<span>14天</span>
				<hr class="line mar-t-1" />
			</div>
			<div>
				<span>结束时间</span>
				<div>07月23日</div>
			</div>
			<div>
				<span>总手续费</span>
				<div>07月23日</div>
			</div>
		</div>

		<div class="bg-white">
			<div class="flex pad-5-1 border-b-gray">
				<img src="../assets/img/bank_icon15.png" alt="" width="40"/>
				<div class="f1 pad-l-5 line-height-2">
					<div>
						<span class="f16">杨红帅</span>
						<span class="color-gray">建设银行</span>
						<span class="color-gray">信用卡</span>
					</div>
					<div>**** **** 2961</div>
				</div>
			</div>
			<ul class="pad-l-r-1 f15 line-height-1">
				<li class="pad-t-b-5 border-b-gray">
					<span>有效期</span>
					<input class="fr right" type="text" placeholder="MMYY,2018年3月到期即0318" />
				</li>
				<li class="pad-t-b-5 border-b-gray">
					<span>CVN2</span>
					<input class="fr right" type="text" placeholder="卡片背面签字条的三位数字" />
				</li>
				<li class="pad-t-b-5 border-b-gray">
					<span>手机</span>
					<input class="fr right" type="text" placeholder="15093926601" />
				</li>
				<li class="pad-t-b-5 border-b-gray">
					<span>短信验证码</span>
					<div class="fr getYzm">获取验证码</div>
					<input class="fr right mar-r-5" style="width: 30%;" type="text" placeholder="输入验证码" />					
				</li>
			</ul>
		</div>
		
		<div>
			<p class="color-gray pad-1 line-height-1">
				1.本次申请将分16笔偿还，请确保当前信用卡可用额度大于350.00元。<br/>
				2.本次申请将在当日内完成，个别条件下可能需要2个工作日，请留意银行短语。<br/>
				3.单卡单日限交易1次，单卡单日累计限交易10次。
			</p>
			<div class="button bg-green">确认申请</div>
		</div>
		
	</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.content{background:#f3f3f3;}
	.huank{top:1rem;right:1rem;color:#07CBBD;font-size:12px;}
	ul li input{width: 65%;border: none;outline: none;line-height: 30px;}
	.time>div>span{color: #909090;}
	.getYzm{padding:.3rem .6rem;background:#0f7dd9;border-radius:5px;color:#fff;font-size:12px}
</style>