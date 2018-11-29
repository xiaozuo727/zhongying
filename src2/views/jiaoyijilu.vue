<template>
	<div>
	<headernav headTip="交易记录" backUrl="./shsk_index"></headernav>
	
	<div class="content">
		<ul class="jiaoyi center">
			<li class="flex pad-5 mar-t-b-5 bg-white" v-for="(item,index) in jilu">
				<div class="f1">
					<div class="f15">{{item.deal_xinyong_name}}</div>
					<div class="f10 color-gray">尾号: <span>{{item.deal_xinyong_num}}</span></div>
				</div>
				<div class="f1">
					<div class="line f16 pad-b-5 re">{{item.deal_money/100}}元</div>
					<div>{{item.deal_time}}</div>
				</div>
				<div class="f1">
					<div class="f15">{{item.deal_chuxv_name}}</div>
					<div class="f10 color-gray">尾号: <span>{{item.deal_xinyong_num}}</span></div>
				</div>
			</li>
			
		</ul>
		<ul v-html='none' class="center pad-1"></ul>
	</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				jilu:{
					deal_time:'',
					deal_money:'',			
				},
				none:'',
			}
		},
		mounted: function(){
			var data={
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/Wkzfbank/wk_record',data,config).then((res) => {
				console.log(res.data.data)
				this.jilu=res.data.data
				var th=this;
				if(res.data.data==null||res.data.data==''){
					th.none='暂无交易记录'
				}
			}).catch(err=>{
				alert("请求失败")
			})
		}
	}
</script>

<style scoped>
	.content{min-height: 100vh;background:#f3f3f3;}
</style>