<template>
	<div>
	<headernav headTip="快捷收款" backUrl="./creditBank"></headernav>
	
	<div class="content">
		<ul class="banks pad-l-r-1 ">

			<li class="bank-purple-gradient flex center">
				<div class="bank-icon hidden">
					<img src="../assets/img/yinlian.jpg" style="margin:-10% 0 0 -10%" alt="" width="120%" />
				</div>
				<div class="f1 color-white f18 line-height-2">
					<div class="pad-t-5">{{bankname}}</div>
					<div class="pad-b-5">{{banknum}}</div>
				</div>
				<div class="pad-l-r-1">
					<span class="pad-2 border-white border-radius-5 color-white">信用卡</span>
				</div>
			</li>
			
			<div class="line-height-3">
				<div class="border-b-gray">
					交易金额：
					<span class="fr color-red">￥<b>{{Money}}</b></span>
				</div>
				<div class="re" >
					到账卡号：
					<span class="fr" @click="selecShow">更换到账卡号</span>
					<ul class="border-t-gray ab col-10 Z-2 bg-white" v-if="chuxbankList">
						<li v-for="(item,index) in chuxList" @click="selec(index)">
							{{item.bankname}}
							<span class="color-gray">{{item.banknum}}</span>
						</li>
					</ul>
				</div>
			</div>
			
			<li class="bank-green-gradient flex center">
				<div class="bank-icon hidden">
					<img src="../assets/img/yinlian.jpg" style="margin:-10% 0 0 -10%" alt="" width="120%" />
				</div>
				<div class="f1 color-white f18 line-height-2">
					<div class="pad-t-5">{{selecChux.bankname}}</div>
					<div class="pad-b-5">{{selecChux.banknum}}</div>
				</div>
				<div class="pad-l-r-1">
					<span class="pad-2 border-white border-radius-5 color-white">储蓄卡</span>
				</div>
			</li>
			
		</ul>
		
		<div class="button bg-green" @click="payYes">确认支付</div>
		
	</div>
	
	<div class="mask" v-if="mask">
		<div class="col-9 auto bg-white pad-1 border-radius-5 center f16">
			<p>请输入验证码</p>
			<!--<div class="yzm-num yzm flex">
				<input onkeyup="T1_onkeyup(this,event)" onfocus="T1_onfocus(this)" class="first" type="number" maxlength="1">
				<input onkeyup="T1_onkeyup(this,event)" type="number" maxlength="1">
				<input onkeyup="T1_onkeyup(this,event)" type="number" maxlength="1">
				<input onkeyup="T1_onkeyup(this,event)" type="number" maxlength="1">
				<input onkeyup="T1_onkeyup(this,event)" type="number" maxlength="1">
				<input onkeyup="T1_onkeyup(this,event)" type="number" maxlength="1">
			</div>-->
			<input class="mar-t-b-1 f16 border-no outline-no border-b-gray center pad-5"  v-model="_yzzm" type="text"  />
			<div class="flex space-ard line-height-2">
				<div class="col-3 cancel bg-gray border-radius-5" @click="isHide">取消</div>
				<div class="pay_succ col-3 bg-green border-radius-5 color-white" @click="payLast">确定</div>
			</div>
		</div>
	</div>
	
	<!--loading-->
	<loading v-if='loading' :loading='loading'></loading>
	
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
				mask:false,
				Money:'',
				bankname:'',
				banknum:'',
				id:'',
				chuxbankList:false,
				chuxList:{
					bankname:'',
					banknum:'',
				},
				selecChux:{
					bankname:'无银行卡',
					banknum:'00000'
				},
				type:'',
				
				_yzzm:'',
				last:{
					accountName:'',
					ordernumber:'',
					amount:'',
					deal_chuxv_num:'',
					deal_chuxv_name:'',
					bankAccount:'',
					deal_xinyong_name:'',
				},
				loading:false,
			}
		},
		created:function(){
//			console.log(this.$route.query.type);
			this.Money=localStorage.getItem('Money');
//			this.type = this.$route.query.type;
			console.log('通道:'+localStorage.getItem("type"))
			this.type = localStorage.getItem("type");
			this.bankname=this.$route.query.bankname;
			this.banknum=this.$route.query.banknum;
			this.id=this.$route.query.id;
		},
		methods:{
			payYes(){
				this.loading=true
				var data={
					params:{}
				}
				data.params.ID=localStorage.id;
				data.params.randpwd=localStorage.token;
				data.params.xyid=this.id;
				data.params.money=this.Money;
				data.params.kahao=this.selecChux.banknum;
				var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				if(this.type==1){
					this.axios.get(this.Global.hostUrl+'mobile/Wkzfbank/ysjfbh_pay1',data,config).then(res=>{
						console.log(res.data);
						var th=this;
						if(res.data.error=="success"){
							th.loading=false;
							window.location.href=res.data.data.url						
						}else{
							th.loading=false;
							alert(res.data.data.RSPMSG)
						}
						
					}).catch(err=>{
						alert("请求失败")
					})
				}
				if(this.type==2){							
					this.axios.get(this.Global.hostUrl+'mobile/Wkzfbank/mzjf_pay1',data,config).then(res=>{
						console.log(res.data);
						this.last=res.data.data;
						var th=this;
						if(res.data.error== "success"){		
							th.loading=false;
							this.mask=true;
						}else{
							th.loading=false;
							alert(res.data.data.RSPMSG);
						}
					}).catch(err=>{
						alert("请求失败")
					})
				}
				
			},
			isHide(){
				this.mask=false
			},
			selecShow(){
				this.chuxbankList=true;
				
			},
			selec(index){
				var th=this;
				th.chuxbankList=false;
				this.selecChux=this.chuxList[index];
				
			},
			payLast(){
				var data={
					params:{}
				}
				data.params.ID=localStorage.id;
				data.params.randpwd=localStorage.token;
				data.params.ordernumber=this.last.ordernumber;
				data.params._yzzm=this._yzzm;
				data.params.accountName=this.last.accountName;
				data.params.amount=this.last.amount;
				data.params.deal_chuxv_name=this.selecChux.bankname;
				data.params.deal_chuxv_num=this.selecChux.banknum;
				data.params.bankAccount=this.banknum;
				data.params.deal_xinyong_name=this.bankname;
					
				var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/Wkzfbank/mzjf_pay2',data,config).then(res=>{
					console.log(res.data);
					
				}).catch(err=>{
					alert("请求失败")
				})
				this.mask=false
			}
			
		},
		
		mounted: function(){
			var data={
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/Wkzfbank/index',data,config).then(res=>{
				console.log(res.data)
				this.chuxList=res.data.data;
				this.selecChux=res.data.data[0];
			}).catch(err=>{
				alert("请求失败")
			})
			
		}
	}
</script>

<style scoped>
	.loading{width: 50px;height:50px;background:rgba(0,0,0,.65);border-radius:5px;position: fixed;left:0;right:0;top:0;bottom:0;margin:auto;z-index: 10;}
	.loading img{position: absolute;left:0;right:0;top:0;bottom:0;margin:auto;animation: loop 1.5s linear infinite;opacity: .8;}
	@-webkit-keyframes loop{
		from{transform: rotate(0deg);}
		to{transform: rotate(360deg);}
	}
</style>