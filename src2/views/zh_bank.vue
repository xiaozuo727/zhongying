<template>
	<div>
	<headernav headTip="我的银行卡" backUrl="./zhanghu"></headernav>
	
	<div class="content">
		<ul class="mybank pad-l-r-1 center">
			<li class="flex flex-start-y" v-for="item in bank">
				<div class="bank-icon hidden">
					<img style="margin:-10% 0 0 -10%" src="../assets/img/yinlian.jpg" alt="" width="120%" />
				</div>
				<div class="f1 color-white f18 line-height-2">
					<div class="pad-t-5">{{item.bank_class}}</div>
					<div class="pad-b-5">{{item.bank_num}}</div>
				</div>
				<div class="pad-l-1">
					<span class="del_btn" @click="isDel(item)">删除</span>
				</div>
			</li>


		</ul>
		
		<div class="f12 center" @click="add_bank">
			<div class="green-btn-y">+</div>
			<div class="color-green">添加银行卡</div>
		</div>
		
		<!--调用删除弹窗-->
		<delBanktc :mask="mask" @hideBox="isHide" @addBank="yes" v-model="mask"></delBanktc>
		
	</div>
	</div>
	
</template>

<script>
	import delBanktc from '../components/delBank_tc'
	export default{
		data(){
			return{
				mask:false,
				bank:[],
				bank1:[],
			}
		},
		inject:['reload'],
		methods:{
			isDel(i){
//				console.log(i)
				this.mask=true;
				this.bank1=i;
			},
			isHide(){
				this.mask=false
			},
			add_bank(){
				this.$router.push({path:'./addbankinfo'})
			},
			yes:function(){
				
				var data={
					params:{}
				}
				data.params.ID=this.bank1.ID;
				data.params.user_id=localStorage.id;
				data.params.randpwd=localStorage.token;
				var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/user/deletebank',data,config).then(res=>{
					console.log(res.data)
					this.reload()
				})
				this.mask=false;
//				this.$router.push({path:'./mybank'});
//				window.location.replace('./mybank');
			}
		},
		components:{
			delBanktc,
		},
		mounted:function(){
			var data={
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/user/bank',data,config).then((res) => {
				if(res.data.error !=="success"){
					if(res.data.msg=="loginfaild"){
						localStorage.id="";
						localStorage.token="";
						this.$router.push({path:'./login'});
						return;
					}
				}
			    console.log(res.data)
			    this.bank=res.data.data.list;
				this.bank1=res.data.data.list[0];
			})
		}
	}
</script>

<style>

</style>