<template>
	<div>
	<headernav headTip="个人设置" backUrl="./mycenter"></headernav>
	<div class="content">
		<div class="pad-1 center">
			<img class="border-radius-y" :src="set.headerImg" alt="" width="80" />
		</div>
		<ul class="line-height-2 f15">
			<li class="border-b-gray pad-5-1 flex space-btw">
				<span>名称</span>
				<div class="color-gray">{{set.nickName}}</div>
			</li>
			<li class="border-b-gray pad-5-1 flex space-btw">
				<span>微信号</span>
				<div class="color-gray">{{set.user_wxnum}}</div>
			</li>
			<li class="border-b-gray pad-5-1 flex space-btw">
				<span>微信二维码</span>
				<img class="bright-7" :src="set.wx_erweima" alt="" width="25" />
			</li>
			<li class="border-b-gray pad-5-1 flex space-btw">
				<span>手机号</span>
				<div class="color-gray">{{set.user_phone}}</div>
			</li>
			<li class="border-b-gray pad-5-1 flex space-btw">
				<span>密码</span>
				<div class="color-gray">·····</div>
			</li>
		</ul>
		
		<div class="button bg-green">
			<router-link to="modify" class="color-white">修改密码</router-link>
		</div>
		<div class="button bg-green" @click="signOut">退出账号</div>
		
	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				set:{
					nickName:require('../assets/img/user_tx.png')
				},
			}
		},
		beforeCreate(){
			if(window.localStorage.getItem('id')=="" || window.localStorage.token==""){
				this.$router.push({path:'./login'})
			}else{
				this.$router.push({path:'./set'})
			}
		},
		mounted:function(){
			var data={
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config= {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/user/index',data,config).then(res=>{
				
				console.log(res.data)
				this.set=res.data.data.list
			}).catch(err=>{
				alert("请求失败")
			})
		},
		methods:{
			signOut(){
				window.localStorage.id="";
				window.localStorage.token="";
				this.$router.push({path:'./login'})
			}
		}
		
	}
</script>

<style>
</style>