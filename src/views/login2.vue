<template>
	<div class="cont">
		<div class="f24 center color-white pad-b-1">登 录</div>
		<div class="col-8 auto bg-white border-radius-5 pad-1 color-black line-height-3">
			<b>手机号</b>
			<p class="border-b-gray">
				<input type="number" name="phone" ref="input1" placeholder="请输入手机号码"/>
			</p>
			<b class="mar-t-5">密码</b>
			<p class="border-b-gray">
				<input type="password" name="pws" ref="input2" placeholder="请输入登录密码" />
				<img class="fr pad-t-5" src="../assets/img/eye_icon.png" alt="" width="20" />
			</p>
			<div class="button bg-green line-height-1 " @click="login">登录</div>
		</div>
		
		<div class="col-6 auto center">
			<div class="pad-1 border-b-white">立即注册</div>
			<p class="pad-1">您还可以用以下方式登录</p>
			<img src="../assets/img/wei_icon2.png" alt="" width="50" />
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				result1:null,
				result2:null,

			}
		},
		created() {
			console.log(localStorage.id)
			if(localStorage.id=="" || localStorage.token==""){
					
					
			}else{
				this.$router.push({path:'./home'})
			}
				
		},
		methods:{
			
			login(){
				
				this.result1=this.$refs.input1.value;
				this.result2=this.$refs.input2.value;
				var data = {
					params:{
							user_name:this.result1,
							user_pwd:this.result2,
						}
					}
				var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/login/login',data,config).then((res) =>{
//					console.log(res.data)
					if(res.data.error =="success"){
						localStorage.id=res.data.data.ID
						localStorage.token=res.data.data.rand_psd
						this.$router.push({path:'./home'})
						
					}else{
						
						alert(res.data.msg)
					}

				})
				
			}
			
				

		}
	}
	
</script>

<style scoped>
	.cont{width:100%;height:100vh;background:#00d5c0;padding-top: 50px;color: #fff;}
	input{width: 80%;border:none;outline: none;}
</style>