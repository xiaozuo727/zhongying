<template>
	<div class="mask" v-show="personal">
		<div class="col-8 auto pad-1 bg-white">
			请前去完善个人资料!
			<div class="mar-t-1 center col-3 auto line-height-2 bg-green color-white border-radius-5" @click="gotoPerson">确定</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			personal:Boolean,
		},
		methods:{
			gotoPerson(){
				this.$emit('gotoPersonal')
			}
		}
	}
</script>

<style>
</style>