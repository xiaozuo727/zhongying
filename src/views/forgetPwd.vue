<template>
	<div>
	<headernav headTip="找回密码" backUrl="./login"></headernav>
	
	<div class="content">
		<ul class="userinfo-bank">
			<li>
				<span>手机号</span>
				<input type="text" placeholder="请输入手机号码" v-model="phone"/>
			</li>
			<li>
				<span>验证码</span>
				<input style="width: 50%" type="text" placeholder="请输入验证码" v-model="yzm"/>
				<span class="fr bg-green center color-white" style="width: 28%" @click="goYzm" v-html="sendYzm"></span>
			</li>

		</ul>	
		<div class="button bg-green" @click="goPwd">确 定</div>
		
		<!--loadding-->
		<loading v-if='loading' :loading='loading'></loading>
		
	</div>
	</div>
</template>

<script>
	import loading from '../components/loading'
	export default{
		components:{
			loading,
		},
		data(){
			return{
				phone:'',
				yzm:'',
                sendYzm:'发送验证码',
				then:0,
				loading:false,
			}
		},
		methods:{
            goYzm(){
                var myregphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机号码
				if(this.phone==''){
				    alert('请输入手机号码');
					return;
				}else if(!myregphone.test(this.phone)){
				    alert('手机号码错误');
					return;
				}else{
                    var m=60;
                    var th=this;

                    if(th.then==0){
                        var time=setInterval(function(){
                            m--;
                            if(m>0){
                                th.sendYzm=m+'s后重新发送';
                                th.then=1;
                            }else{
                                m=60;
                                th.sendYzm='发送验证码';
                                th.then=0;
                                clearInterval(time)
                            }
                        },1000);
                        var data={
                            params:{}
                        };
                        data.params.tel=this.phone;
                        var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
                        this.axios.get(this.Global.hostUrl+'mobile/Smstest/Index',data,config).then((res) => {
                            console.log(res.data);
                            if(res.data.error !=="success"){
                                alert(res.data.msg)
                            }else{
//								alert('发送成功')
                            }

                        }).catch(err=>{
                            alert('请求失败')
                        })
                    }
				}
			},
            goPwd(){
                var myregphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机号码
                if(this.phone==''||this.yzm==''){
                    alert('请输入完整信息');
                    return;
				}else if(!myregphone.test(this.phone)){
                    alert('手机号码错误');
                    return;
				}else{
                    this.loading=true;
                    var data={
                        params:{}
                    };
                    data.params.user_phone=this.phone;
                    data.params.yzm=this.yzm;
                    localStorage.setItem('user_phone',this.phone);
                    var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
                    this.axios.get(this.Global.hostUrl+'mobile/Forgetpwd/userforgetpwd',data,config).then(res =>{
						console.log(res.data);
                        if(res.data.error=='success'){
                            this.$router.push({path:'./newPwd'});
                            this.loading=false;
                        }else{
                            alert(res.data.msg);
                            this.loading=false;
                        }

                    }).catch(err=>{
                        alert('请求失败');
                        this.loading=false;
                    })
				}

			}
		}
	}
</script>

<style>

</style>