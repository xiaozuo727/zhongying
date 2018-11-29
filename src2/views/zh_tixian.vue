<template>
	<div>
	<headernav headTip="提现记录" backUrl="./zhanghu"></headernav>
	
	<div class="content">
		<ul v-if="tx">
			<li class="flex bg-white pad-1 mar-t-5 center" v-for="item in tx" >
				<div class="f1">{{item.date}}</div>
				<div class="f1">众盈平台提现</div>
				<div class="f1">
					<div class="f16">{{item.txmoney}}</div>
					<div class="color-green" v-if="item.status ==0">未审核</div>
					<div class="color-green" v-if="item.status ==1">已审核</div>
					<div class="color-green" v-if="item.status ==2">已打款</div>
					<div class="color-green" v-if="item.status ==3">未通过</div>
				</div>
			</li>

		</ul>
		<ul v-else="tx" v-html="loading" class="center pad-t-1">
			数据加载中.....
		</ul>

	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tx:false,
				loading:''
			}
		},
		mounted:function(){
			var data={
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var th=this;
			var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.$http.get(this.Global.hostUrl+'mobile/user/deposit',data,config).then(res=>{			
				console.log(res.data);
				this.tx=res.data.data.tixian;
				
				
				if(res.data.data.tixian == null){
					th.loading='您没有提现记录，赶紧推广盈利吧!'
				}
			}).catch(err=>{
				alert("请求失败")
			})
		},
	}
</script>

<style scoped>
	.content{background:#f3f3f3;min-height:100vh;}
</style>