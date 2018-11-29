<template>
	<li class="pad-5 border-b-gray flex">
		<div class="pad-l-5">{{index+1}}</div>
		<img class="border-radius-y mar-l-r-5" :src="item.headerImg" alt="" width="50" />
		<div class="f1 color-gray line-height-2 f12">
			<div>
				<span class="color-black">{{item.nickName}}</span>
				<img src="img/lan1.png" alt="" width="25" />
			</div>
			<div>
				加入时间:
				<span>{{item.payDate}}</span>
			</div>
		</div>
		<div class="color-green center pad-r-5">
			<img src="../assets/img/wei_icon2.png" alt="" width="35" />
			<div>微信</div>
		</div>
	</li>
</template>

<script>
	export default{
		props:{
			item: Object,
			index:Object

		}
	}
</script>

<style>
</style>