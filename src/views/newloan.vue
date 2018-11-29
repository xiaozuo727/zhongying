<template>
	<div>
	<headernav headTip="贷款攻略" backUrl="./home"></headernav>
	
	<div class="content">
		<ul class="new-list" v-if="info">
			<li class="flex flex-start-y border-b-gray pad-5" v-for="item,index in info"  @click="goDetail(item,item.id)">
				<div class="pic col-25 center">
					<img :src="host+item.pic" alt="" width="100%" />
				</div>
				<div class="f1 pad-l-1">
					<div class="col-10">
						<div class="f16 col-7 ellipsis inline-block">{{item.title}}</div>
						<span class="inline-block color-gray fr f10">{{item.number}}阅读</span>
					</div>
					<div class="col-9 ellipsis pad-t-1 color-gray" style="height:30px;" v-html="item.content"></div>
				</div>
			</li>

		</ul>
		<ul v-else="info" class="center pad-t-1">数据加载中....</ul>
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
				info:false,
				host:this.Global.PicUrl2,
			}
		},
		mounted:function(){
			var data={
				params:{
					
				}
			}
			
			var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/index/loans',data,config).then( (res)=>{

				console.log(res.data.data);
				for(var i=0;i<res.data.data.length;i++){
					res.data.data[i].content= htmlspecialchars_decode(res.data.data[i].content); 
				}
				
				this.info=res.data.data;
				
			})
		},
		methods:{
			// goDetail(item){
			// 	item.fromPath='/newloan';
			// 	this.$router.push({
			// 		path:'./newDetail',
			// 		query:{item:item}
			// 	})
			// },

            goDetail(item,id){
                item.fromPath = '/newloan';
                this.$router.push({
                    path:'./newDetail',
                    query:{id:id,item:item}
                })
            }
		},

	
}
</script>

<style>
</style>