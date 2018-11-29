<template>
	<div>
	<headernav headTip="信用卡攻略" backUrl="./home"></headernav>
	
	<div class="content">
		<ul class="new-list pad-5" v-if="info">
			<li class="flex flex-start-y bg-gray pad-5 mar-b-5 " v-for="item,index in info"  @click="goDetail(item)">
				<div class="f1 pad-l-5">
					<div class="f16 pad-b-5 ellipsis">{{item.title}}</div>
					<div class="col-9 ellipsis2" v-html="item.content"></div>
				</div>
				<div class="pic col-25 center">
					<img :src="host+item.pic" alt="" width="100%" />
				</div>
			</li>

		</ul>
		<ul v-else="info" class="center pad-t-1">数据加载中...</ul>
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

//	import global from "../components/Global";
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
			this.axios.get(this.Global.hostUrl+'mobile/index/creditcard',data,config).then( (res)=>{

				console.log(res.data.data);
				for(var i=0;i<res.data.data.length;i++){
					res.data.data[i].content= htmlspecialchars_decode(res.data.data[i].content); 
				}
				
				this.info=res.data.data;
				
			})
		},
		methods:{
			goDetail(item){
				item.fromPath = '/newcredit';
				this.$router.push({
					path:'./newDetail',
					query:{item:item}
				})
			}
		}
	
}
</script>

<style>
</style>