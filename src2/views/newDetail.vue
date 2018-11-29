<template>
	<div>
	<headernav headTip="资讯详情" :backUrl="fromPath" ></headernav>
		
	<div class="content">
		<div class="center f16 pad-5-1 border-b-gray" v-html="item.title"></div>
		<div class="pad-5-1" v-html="item.content"></div>
	</div>
	
	</div>
</template>

<script>
	function htmlspecialchars_decode(str){           
	      str = str.replace(/&amp;/g, '&'); 
	      str = str.replace(/&lt;/g, '<');
	      str = str.replace(/&gt;/g, '>');
	      str = str.replace(/&quot;/g, "''");  
	      str = str.replace(/&#039;/g, "'");  
	      return str;  
	}
	
	export default{
		data(){
			return{
				item:'',
				fromPath: ''
			}
		},
		created:function(){
			console.log(this.$route.query.item)
			this.item=this.$route.query.item;		
			this.fromPath = this.$route.query.item.fromPath;
		},
		mounted: function(){
			this.item.content=htmlspecialchars_decode(this.item.content)
		}
	}
		
</script>

<style>
</style>