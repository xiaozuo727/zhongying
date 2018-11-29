<template>
	<div class="mask" v-show="mask">
		<div class="del-bank col-7 auto bg-white pad-1 center border-radius-5 f16">
			<div class="pad-t-b-1">确定删除该银行卡吗？</div>
			<div class="flex space-btw mar-t-1">
				<div class="close col-4 border-radius-5 pad-5 bg-gray" @click="isHide">取消</div>
				<div class="col-4 border-radius-5 pad-5 bg-green color-white" @click="yes">确定</div>
			</div>
		</div>
	</div>
		
</template>

<script>
	export default{
		props:{
			mask:Boolean
		},
		methods:{
			isHide(){
				this.$emit("hideBox")
			},
			yes(){
				this.$emit("addBank")
			}
		}
	}
</script>

<style>
</style>