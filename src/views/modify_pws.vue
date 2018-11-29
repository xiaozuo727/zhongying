<template>
	<div>
	<headernav headTip="修改密码" backUrl="./set"></headernav>
	
	<div class="content">
		<div class="password pad-1">
			<div>请输入密码:</div>
			
			<input type="password" placeholder="旧密码" v-model="formerPwd"/>
			
			<input type="password" placeholder="新密码" v-model="newmerPwd1"/>
			
			<input type="password" placeholder="确认新密码" v-model="newmerPwd2"/>
		</div>
		
		<div class="button bg-green" @click="savePwd">保存</div>
		
	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				formerPwd: '',
                newmerPwd1: '',
                newmerPwd2: '',
			}
		},
		methods:{
			savePwd(){
				if(this.newmerPwd1==''||this.newmerPwd2==''){
					alert('密码不能为空');
					return;
				}
				var data={
					params:{}
				}
				data.params.ID=localStorage.id;
				data.params.randpwd=localStorage.token;
				data.params.formerPwd=this.formerPwd;
            	data.params.newmerPwd1=this.newmerPwd1;
            	data.params.newmerPwd2=this.newmerPwd2;
				var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/user/setpwd',data,config).then(res=>{
					console.log(res.data)
					if(res.data.error == 1){
						alert(res.data.msg);
                        this.$router.go(-1);
                        return
					}else if (res.data.error == 2){
						alert(res.data.msg);
                        return
					}else if (res.data.error == 3){
                        alert(res.data.msg);
                        return
					}else if (res.data.error == 4){
                        alert(res.data.msg);
                        return
					}
				})	
			}
			
		}
	}
</script>

<style>
</style>