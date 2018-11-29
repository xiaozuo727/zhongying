<template>
	<div>
	<headernav headTip="智能还卡" backUrl="./home"></headernav>
	<div class="content">
		<div class="border-b-gray-5">
			<img class="block" src="../assets/img/znhk_ban.jpg" alt="" width="100%" />
		</div>
		<router-link to="zhinenghk2" class="block deepblue_btn f20 re" style="margin:1rem auto 1.5rem;box-shadow: none;">
			开启智能还卡
			<div class="deep_y "></div>
		</router-link>
		
		<ul class="f16 pad-l-r-1">
			<router-link to='zn_jiaoyijilu' class="flex border-b-gray mar-t-b-5 pad-b-5 re">
				<img src="../assets/img/znhk_1.png" alt="" width="45" />
				<div class="f1 pad-l-1">交易记录</div>
				<div class="arrow" style="left:-10px"> </div>
			</router-link>
			<li class="flex border-b-gray mar-t-b-5 pad-b-5 re">
				<img src="../assets/img/znhk_2.png" alt="" width="45" />
				<div class="f1 pad-l-1">信用卡管理</div>
				<div class="arrow" style="left:-10px"> </div>
			</li>
			<li class="flex border-b-gray mar-t-b-5 pad-b-5 re">
				<img src="../assets/img/shsk_3.png" alt="" width="45" />
				<div class="f1 pad-l-1">奖金说明</div>
				<div class="arrow" style="left:-10px"> </div>
			</li>
			<li class="flex border-b-gray mar-t-b-5 pad-b-5 re">
				<img src="../assets/img/shsk_4.png" alt="" width="45" />
				<div class="f1 pad-l-1">使用教程</div>
				<div class="arrow" style="left:-10px"> </div>
			</li>
		</ul>
		
		
	</div>
	</div>
</template>

<script>
</script>

<style scoped>
	@media screen and (max-width:320px){
		.shsk_head input{margin:0;}
		.shsk_head .f12{padding:.6rem 0;}
	}
	@media screen and (min-width:321px) and (max-width:375px){
		.shsk_head .f12{padding:1.2rem 0;}
	}
	@media screen and (min-width:375px) and (max-width:414px){
		.shsk_head .f12{padding:1.5rem 0;}
	}
</style>