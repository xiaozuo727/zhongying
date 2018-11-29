<template>
	<div>
	<headernav headTip="攻略详情" :backUrl="fromPath" ></headernav>
		
	<div class="content">
		<div class="center f16 pad-5-1 border-b-gray" v-html="item.title"></div>
		<div class="pad-5-1" v-html="item.content"></div>
	</div>
	
	<div v-html='loading' class="center pad-1"></div>
	
	</div>
</template>

<script>
//	function htmlspecialchars_decode(str){           
//	      str = str.replace(/&amp;/g, '&'); 
//	      str = str.replace(/&lt;/g, '<');
//	      str = str.replace(/&gt;/g, '>');
//	      str = str.replace(/&quot;/g, "''");  
//	      str = str.replace(/&#039;/g, "'");  
//	      return str;  
//	}
	
	export default{
		data(){
			return{
				item:'',
				fromPath: '',
				newsid:'',
				loading:'',
			}
		},
		created:function(){
			this.fromPath = this.$route.query.item.fromPath;
			this.newsid=this.$route.query.newsid;
		},
		mounted: function(){
//			this.item.content=htmlspecialchars_decode(this.item.content)
			var data={
					params:{}
				}
				data.params.ID=localStorage.id;
          		data.params.randpwd=localStorage.token;
          		data.params.id=this.newsid;
				var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/index/index',data,config).then(res=>{
					console.log(res.data);
					this.item=res.data.data;
					var th=this;
					if(res.data.data==''||res.data.data==null){
						this.loading='数据加载中'
					}
				}).catch(err=>{
					alert('请求失败')
				})
		}
	}
		
</script>

<style>
</style>