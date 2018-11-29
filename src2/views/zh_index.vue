<template>
	<div>
	<headernav headTip="账户管理" backUrl="./mycenter"></headernav>
	<div class="content">
		<div class="zhanghu-top re ">
			<div class="loop_bg ab"></div>
			<div class="loop re color-white center">
				<img class="ab l-r-0 auto" src="../assets/img/loop.png" alt="" width="150" />
				<div class="f30 line-height-2 pad-t-2r mar-b-1">{{tx.money}}</div>
				<span id="tixian-btn" class="zh-tixian" @click="isShow">立即提现</span>
			</div>
		</div>
		<ul class="f16 line-height-2 mar-t-1">
			<router-link to="shouyi" class="pad-1-2 border-b-gray flex"> 
				<img class="mar-r-1" src="../assets/img/zh-icon1.png" alt="" width="25" />
				<div class="f1">
					收益明细
				</div>
				<span class="arrow"></span>
			</router-link>
			<router-link to="tixian" class="pad-1-2 border-b-gray flex">
				<img class="mar-r-1" src="../assets/img/zh-icon2.png" alt="" width="25" />
				<div class="f1">
					提现记录
				</div>
				<span class="arrow"></span>
			</router-link>
			<router-link to="mybank" class="pad-1-2 border-b-gray flex">
				<img class="mar-r-1" src="../assets/img/zh-icon3.png" alt="" width="25" />
				<div class="f1">
					银行卡管理
				</div>
				<span class="arrow"></span>
			</router-link>
		</ul>
		
		<!--调用提现弹窗-->
		<tixiantc :mask="mask" @hideBox="isHide" v-model="mask"></tixiantc>
	</div>
	</div>
	
</template>

<script>
	import tixiantc from '../components/tixian_tc'
	
	export default{
		components:{
			tixiantc,
		},
		data(){
			return{
				mask:false,
				tx:{
					money:0,
				},
			}
		},
		beforeCreate(){
			if(window.localStorage.getItem('id')=="" || window.localStorage.token==""){
				this.$router.push({path:'./login'})
			}else{
				this.$router.push({path:'./zhanghu'})
			}
		},
		methods:{
			isShow(){
				var tixian=true;
				var mydate= new Date();
				var xingqi= mydate.getDay();
				if(xingqi=="6"|| xingqi=="0"||tixian==false){
					alert("对不起，节假日不能提现")
					return;
				}else{
					this.mask=true
				}	
//				this.mask=true
				var data={
					params:{}
				}
				data.params.ID=localStorage.id;
				data.params.randpwd=localStorage.token;
				var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/user/tx',data,config).then((res) => {
				  console.log(res.data)
					if(res.data.data.bank==null){
						this.$router.push({path:'./addbankinfo'});
					}
	
				})
			},
			isHide(){
				this.mask=false
			}
		},
		mounted: function(){
			var data={
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/user/tx',data,config).then(res=>{
				console.log(res.data);
				this.tx=res.data.data;
				var th=this;
				if(res.data.data.money==null){
					th.tx.money=0
				}
			}).catch(err=>{
				alert("请求失败")
			})
			

		}
	}
</script>

<style>
	
</style>