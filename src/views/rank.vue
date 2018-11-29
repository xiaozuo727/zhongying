<template>
	<div>
	<headernav headTip="排行榜" backUrl="./mycenter"></headernav>
	<div class="content">
		<div> 
			<img src="../assets/img/rank-ban.png" alt="" width="100%" />
		</div>
		<ul class="rank-list f12" v-if="ranklist">
			<li class="flex" v-for="(item,it) in ranklist">
				<!--<p v-for="ranklist in ranklist"></p>-->
				<img class="border-radius-y" :src="item.headerImg" alt="" width="45" />
				<div class="f1 pad-l-5">
					<b class="f14 ellipsis">{{item.nickName}}</b>
					<div class="pad-t-5">{{item.payDate}}</div>
				</div>
				<div class="center mar-l-r-5">
					<img src="../assets/img/money-h.png" alt="" width="15" />
					<div>{{item.ulimit}}</div>
				</div>
				<div class="mc">
					<img v-if="it==0" class="vmid" src="../assets/img/rank_num1.png" alt="" width="65%" />
					<img v-else-if="it==1" class="vmid" src="../assets/img/rank_num2.png" alt="" width="65%" />
					<img v-else-if="it==2" class="vmid" src="../assets/img/rank_num3.png" alt="" width="65%" />
					<span v-else="it">{{it+1}}</span>
				</div>
			</li>
		</ul>
		<ul v-else class="center pad-t-1" v-html="none">数据加载中...</ul>
	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				ranklist:false,
				none:'',
			}
		},
		beforeCreate(){
			if(window.localStorage.getItem('id')=="" || window.localStorage.token==""){
				this.$router.push({path:'./login'})
			}else{
				this.$router.push({path:'./rank'})
			}
		},
		mounted: function(){
			var data={
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/user/rankinglist',data,config).then((res) => {
			  // console.log(res.data);
			  this.ranklist=res.data.data.data;
			  var th=this;
			  if(res.data.data.data == null){
					th.none='暂无排行记录!'
				}
			}).catch(err=>{
				alert("请求失败")
			})
		}

	}
</script>

<style>
</style>