<template>
	<div class="content">

		<div class="password pad-1" id="demo" >
			<div>请输入密码</div>
			<router-view :key="activeDate"></router-view>
			<input type="password" placeholder="旧密码" v-model="formerPwd"/>
			
			<input type="password" placeholder="新密码"  v-model="newmerPwd1"/>

			<input type="password" placeholder="新密码"  v-model="newmerPwd2"/>

		</div>

		<div class="button bg-green"   v-on:click='btnClick'>保存</div>


		
	</div>

</template>

<script>


    export default{
		data(){
		    return{
                data1: {
                    formerPwd: 'formerPwd',
                    newmerPwd1: 'newmerPwd1',
                    newmerPwd2: 'newmerPwd2',
                }
			}
		},
        methods: {
            btnClick: function() {
					var data={
                        params:{}
					}
					data.params.ID="811";
					data.params.formerPwd=this.formerPwd;
                	data.params.newmerPwd1=this.newmerPwd1;
                	data.params.newmerPwd2=this.newmerPwd2;

                var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};

                this.$http.get('http://192.168.1.110/mobile/user/setpwd',data,config).then(res => {
                    console.log(res.data);
                    if(res.data.error == 1){
						alert("修改成功!");
                       this.$router.go(0);
					}else if (res.data.error == 2){
						alert("修改失败,密码错误!");
                        this.$router.go(0);
					}else if (res.data.error == 3){
                        alert("修改失败!");
                        this.$router.go(0);
					}else if (res.data.error == 4){
                        alert("两次输入密码不一致!");
                        this.$router.go(0);
					}

                }).catch(err=>{
                    alert("请求失败")
                })
            },
            data(){
                return{
                    ranklist:[],
                }
            },
            mounted: function () {
            },
        },

    }





</script>

<style>
</style>