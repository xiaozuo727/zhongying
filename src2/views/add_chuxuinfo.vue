<template>
	<div>
	<headernav headTip="添加储蓄卡" backUrl="./chuxuBank"></headernav>
	
	<div class="content">
		<ul class="userinfo-bank">
			<li>
				<span>持卡人</span>
				<input type="text" placeholder="请输入真实姓名" v-model="name"/>
				<div class="tish1"></div>
			</li>
			<li>
				<span>身份证</span>
				<input type="text" placeholder="请输入真实身份证号" v-model="idCard"/>
				<div class="tish2"></div>
			</li>
			<li>
				<span>卡号</span>
				<input type="text" placeholder="请输入卡号" v-model="bankNum"/>
				<div class="tish3"></div>
			</li>
			<li>
				<span>发卡行</span>
				<input type="text" placeholder="请选择发卡行" disabled="disabled" v-model="bankName"/>
				<i class="arrow" @click="selecBank"></i>
				<ul class="ab col-10 bg-white Z-2" v-show="banklist" style="top:40px;left:0;">
					<li v-for="item,index in bank" @click="bankOne(index)">{{item.name}}</li>

				</ul>
			</li>
			<li>
				<span>手机号</span>
				<input type="text" placeholder="请输入银行预留手机号" v-model="phone"/>
				<div class="tish5"></div>
			</li>
		</ul>	
		<div class="button bg-green" @click="realNameBtn">确 定</div>
		
		<!--loadding-->
		<!--<div style="width:50px;height:50px;background:rgba(0,0,0,.5);border-radius:5px;padding:.5rem;">
			<div style="width:100%;height:100%;border-radius:50%;border:3px solid #ddd;"></div>
		</div>-->

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
				name:'',
				idCard:'',
				bankNum:'',
				bankName:'',
				phone:'',				
				banklist:false,
				bank:[{
					name:'中国工商银行'
				},{
					name:'中国建设银行'
				},{
					name:'中国农业银行'
				},{
					name:'中国银行'
				},{
					name:'中信银行'
				},{
					name:'交通银行'
				},{
					name:'招商银行'
				},{
					name:'广发银行'
				},{
					name:'中国邮政'
				},{
					name:'浦发银行'
				},{
					name:'兴业银行'
				},{
					name:'民生银行'
				},{
					name:'光大银行'
				},{
					name:'平安银行'
				},{
					name:'华夏银行'
				},],
				loading:false
			}
		},
		methods:{
			realNameBtn(){
				var th=this;
				var checkflag=1;//1代表成功
				//var cookie_val = getCookie("yzm");
				//var myreg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/; //卡号
				//var reg = /^(\d{16}|\d{19})$/; //银行卡号
				var myregphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机号码
				var sfzh_num=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/; //身份证号码
				
				if(this.name==''||this.idCard==''||this.bankNum==''||this.bankName==''||this.phone==''){
					alert('请填写完整信息');
					return;
				}else if(!sfzh_num.test(this.idCard)){
					alert('身份证号格式不正确');
					return;
				}
//				else if(!reg.test(this.bankNum)){
//					alert('卡号格式不正确');
//					return;
//				}
				else if(!myregphone.test(this.phone)){
					alert('手机号码错误')
					return;
				}else{
					th.loading=true
					var data={
						params:{}
					}
					data.params.ID=localStorage.id;
					data.params.randpwd=localStorage.token;
					data.params.bk_info_name=this.name;
					data.params.bk_info_idCard=this.idCard;
					data.params.bk_info_bankNum=this.bankNum;
					data.params.bk_info_bankName=this.bankName;
					data.params.bk_info_phoneNum=this.phone;
					var config= {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
					this.axios.get(this.Global.hostUrl+'mobile/Wkzfbank/save_vip_bankinfo',data,config).then(res=>{
						console.log(res.data)
						var th=this;
						if(res.data.error=="success"){
							th.loading=false
							alert('添加成功!');
							this.$router.push({path:'./chuxuBank'})
	
						}else{		
							th.loading=false
							alert(res.data.data.RSPMSG);
							
						}
					}).catch(err=>{
						alert('请求失败')
					})
				}
			},
			selecBank(){
				this.banklist =! this.banklist
			},
			bankOne(i){
				var banktxt=this.bank[i].name;
				this.bankName=banktxt;
				this.banklist=false
			}
		}
	}
</script>

<style>
	
</style>