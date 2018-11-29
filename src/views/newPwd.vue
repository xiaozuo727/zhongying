<template>
	<div>
	<headernav headTip="新密码" backUrl="./forgetPwd"></headernav>
	
	<div class="content">
		<div class="password pad-1">
			<div>请输入密码:</div>

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
                newmerPwd1: '',
                newmerPwd2: '',
			}
		},
		methods:{
			savePwd(){
				if(this.newmerPwd1==''||this.newmerPwd2==''){
					alert('密码不能为空');
					return;
				}else if(this.newmerPwd1!==this.newmerPwd2){
					alert('密码输入不一致');
                    return;
				}else{
                    var data={
                        params:{}
                    };
                    data.params.user_pwd=this.newmerPwd1;
					data.params.user_phone=localStorage.user_phone;
					console.log(data.params.user_phone);
                    var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
                    this.axios.get(this.Global.hostUrl+'mobile/Forgetpwd/resetpwd',data,config).then(res=>{
                        console.log(res.data);
                        if(res.data.error=='success'){
                            this.$router.push({path:"./home"})
                        }else{
                            alert(res.data.msg);
                        }
                    })
                }

			}
			
		}
	}
</script>

<style>
</style>