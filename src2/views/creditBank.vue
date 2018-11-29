<template>
	<div>
	<headernav headTip="信用卡" backUrl="./path"></headernav>
	
	<div class="content">
		<ul class="xinyong banks pad-l-r-1 center" v-if="bankList">
			<li class="flex flex-start-y" v-for="(item,index) in bankList">
				<div class="bank-icon hidden center">
					<img style="margin:-10% 0 0 -10%" src="../assets/img/yinlian.jpg" alt="" width="120%" />
				</div>
				<div class="f1 color-white f18 line-height-2" @click="easypay(index)">
					<div class="pad-t-5">{{item.bankname}}</div>
					<div class="pad-b-5">{{item.banknum}}</div>
				</div>
				<div class="pad-l-1">
					<span class="del_btn" @click="isDel(item)">删除</span>
				</div>
			</li>
			
		</ul>
		<ul v-else="bankList" v-html="loading" class="center pad-t-1">数据加载中....</ul>

		
		<div class="f12 center" @click="isAdd">
			<div class="green-btn-y">+</div>
			<div class="color-green">添加信用卡</div>
			
		</div>
		
		<!--调用删除弹窗-->
		<!--<delBanktc :mask="mask" v-model="mask" @hideBox="isHide"></delBanktc>-->	
	</div>
	
	<!--删除信用卡alert-->
	<div class="mask" v-if="mask">
		<div class="del-bank col-7 auto bg-white pad-1 center border-radius-5 f16">
			<div class="pad-t-b-1">确定删除该银行卡吗？</div>
			<div class="flex space-btw mar-t-1">
				<div class="close col-4 border-radius-5 pad-5 bg-gray" @click="isHide">取消</div>
				<div class="col-4 border-radius-5 pad-5 bg-green color-white" @click="yes">确定</div>
			</div>
		</div>
	</div>
		
		
	</div>
	
</template>

<script>
//	import delBanktc from '../components/delBank_tc'
	export default{
		data(){
			return{
				mask:false,
				bankList:false,
				type:'',
				selecList:{
					bankname:'',
					banknum:'',
					id:'',
				},
				bank1:'',
				loading:'',
//				isRouterAlive:true,
			}
		},
		beforeCreate(){
			if(window.localStorage.getItem('id')=="" || window.localStorage.token==""){
				this.$router.push({path:'./login'})
			}else{
				this.$router.push({path:'./creditBank'})
			}
		},
		inject:['reload'],
		components:{
//			delBanktc
		},
		created: function(){
			console.log('通道:' + localStorage.getItem('type'))
//			this.type = this.$route.query.type;
//			this.type = localStorage.lastname
			this.type=localStorage.getItem('type')

		},
		mounted: function(){
//			console.log(this.$route.query.type);
			var data={
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/Wkzfbank/xybank',data,config).then(res=>{
				console.log(res.data)
				this.bankList=res.data.data;
				this.selecList=res.data.data[0];
				console.log(res.data.data)
				var th=this;
				if(res.data.data==""){
					th.loading=''
				}
				
			}).catch(err=>{
				alert("请求失败")
			})
		},
		methods:{
			isAdd(){
				this.$router.push({path:'./add_creditinfo'})
			},
			isDel(i){
				this.mask=true;
				this.bank1=i;
//				window.location.replace('./mybank');
				
			},
			yes(){
				var data={
					params:{}
				}
				data.params.xyid=this.bank1.id;
				data.params.ID=localStorage.id;
				data.params.randpwd=localStorage.token;
				var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/Wkzfbank/deletexybank',data,config).then(res=>{
					console.log(res.data)
					if(res.data.error== 'success'){
						alert(res.data.msg)
						this.reload()
//						window.location.replace('./creditBank');
					}else{
						alert(res.data.msg)
					}
				})
				this.mask=false;
			
			},
			isHide(){
				this.mask=false
			},
//			auto(){
//				var getType=this.$route.query.type;
//				this.type=getType
//			},
			easypay(index){
//				var th=this;
//				console.log(th.bankList[index]);
//				return false;
				this.selecList=this.bankList[index];
				this.$router.push({
					path:'./easypay',
					query: {
//						type:this.type,
						bankname:this.selecList.bankname,
						banknum:this.selecList.banknum,
						id:this.selecList.id,
					},
				})			
			},
//			reload(){
//				this.isRouterAlive=false
//				this.$nextTick(function(){
//					this.isRouterAlive =true
//				})
//			}
		}
	}
</script>

<style>
</style>