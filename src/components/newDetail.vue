<template>
	<div>
	<headernav headTip="最新资讯" v-html="item.title" backUrl="./home"></headernav>
		
	<div class="content">
		{{item.content}}
	</div>
	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				item:'',
			}
		},
		created:function(){
			console.log(this.$route.query.item)
			this.item=this.$route.query.item
		}
	}
		
</script>

<style>
</style>