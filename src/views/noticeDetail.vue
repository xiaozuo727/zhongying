<template>
	<div>
	<headernav headTip="公告信息" backUrl="notice" ></headernav>
		
	<div class="content">
		<div class="center f16 pad-5-1 border-b-gray">
			<p class="pad-b-5">{{cont.title}}</p>
			<p class="f12 color-gray right">发布时间:{{cont.addtime}}</p>
		</div>
		<div class="pad-5-1 line-height-1" v-html="cont.content"></div>
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
				id:'',
				cont:[{
                    title:"",
                    content:"",
                    addtime:"",
				}]
			}
		},
		created:function(){
			this.id=this.$route.query.id;
		},
		mounted: function(){
			var data={
			    params:{}
			};
            data.params.user_id=localStorage.id;
            data.params.randpwd=localStorage.token;
            data.params.id=this.id;
			var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/index/set_notice',data,config).then(res=>{
			    console.log(res.data);
				this.cont=res.data.data;
			}).catch(err=>{

			})
		}
	}
		
</script>

<style>
</style>