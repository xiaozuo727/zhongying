<template>
	<div>
	<headernav headTip="个人资料" backUrl="./home"></headernav>
	
	<div class="content">
		<ul>
			<li class="pad-l-r-1 border-b-gray flex">
				<img src="../assets/img/person_1.png" alt="" width="25" />
				<span class="pad-l-r-5">头像</span>
				<div class="f1 right pad-r-5">
					<img :src="person.headerImg" class="border-radius-y" alt="" width="30" />
				</div>				
				<span class="arrow"></span>
			</li>
			
			<li class="pad-l-r-1 border-b-gray flex">
				<img src="../assets/img/person_2.png" alt="" width="25" />
				<span class="pad-l-r-5">昵称</span>
				<input class="right f1 mar-r-1" type="text" placeholder="请输入昵称" v-model="person.nickName" />
				<span class="arrow"></span>
			</li>
			<li class="pad-l-r-1 border-b-gray flex">
				<img src="../assets/img/person_3.png" alt="" width="25" />
				<span class="pad-l-r-5">手机号</span>
				<input class="right f1 mar-r-1" type="text" placeholder="请输入手机号码" v-model="txt2" />
				<span class="arrow"></span>
			</li>
			<li class="pad-l-r-1 border-b-gray flex">
				<img src="../assets/img/person_4.png" alt="" width="25" />
				<span class="pad-l-r-5">微信号</span>
				<input class="right f1 mar-r-1" type="text" placeholder="请输入微信号" v-model="txt3" />
				<span class="arrow"></span>
			</li>
			<li class="pad-l-r-1 border-b-gray flex">
				<img src="../assets/img/person_5.png" alt="" width="25" />
				<span class="pad-l-r-5">密码</span>
				<input class="right f1 mar-r-1" type="password" placeholder="请输入密码" v-model="txt4" />
				<span class="arrow"></span>
			</li>
			<li class="pad-l-r-1 border-b-gray flex">
				<img src="../assets/img/person_5.png" alt="" width="25" />
				<span class="pad-l-r-5">确认密码</span>
				<input class="right f1 mar-r-1" type="password" placeholder="请输入确认密码" v-model="txt5" />
				<span class="arrow"></span>
			</li>
		</ul>
		<div class="button bg-green" @click="save">保存</div>
		
		
	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				txt1:'',
				txt2:'',
				txt3:'',
				txt4:'',
				txt5:'',
				person:{
					headerImg:'',
					nickName:'',
				},
			}
		},
		methods:{
			save(){
				var myregphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机号码
				if(this.txt2==''||this.txt3==''||this.txt4==''||this.txt5==''){
					alert('请填写完整资料')
					return;
				}
				if(!myregphone.test(this.txt2)){
					alert('手机号错误')
					return;
				}
				this.$router.push({path:'./home'})
				var data={
					params:{}
				}
				data.params.ID=localStorage.id;
				data.params.randpwd=localStorage.token;
				data.params.phonenum=this.txt2;
				data.params.wxnum=this.txt3;
				data.params.password1=this.txt4;
				data.params.password2=this.txt5;
				var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/user/setdata',data,config).then((res)=>{		
					console.log(res.data)
					if(res.data.error=="success"){
						this.$router.push({path:'./home'})
					}else{
						alert(res.data.msg)
					}
					
				}).catch(err=>{
					alert("请求失败")
				})
				}
		},
		mounted: function(){
			var data={
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/user/index',data,config).then((res)=>{		
				
				if(res.data.error !="success"){				
					if(res.data.msg=="loginfaild"){
						localStorage.id="";
						localStorage.token="";
						this.$router.push({path:'./login'});
						return
					}
				}
				console.log(res.data)
				this.person=res.data.data.list;
				
			}).catch(err=>{
				alert("请求失败")
			})
		}
	}
</script>

<style scoped>
	ul li{height:60px;}
	input{border:none;outline: none;}
</style>