<template>
	<div>
	<headernav headTip="添加信用卡" backUrl="./creditBank"></headernav>
	
	<div class="content">
		<ul class="userinfo-bank">
			<li>
				<span>持卡人</span>
				<input type="text" placeholder="请输入真实姓名" value="" v-model="txt1"/>
				<div class="tish1"></div>
			</li>
			<li>
				<span>身份证</span>
				<input type="text" placeholder="请输入真实身份证号" value="" v-model="txt2"/>
				<div class="tish2"></div>
			</li>
			<li>
				<span>卡号</span>
				<input type="text" placeholder="请输入卡号" value="" v-model="txt3"/>
				<div class="tish3"></div>
			</li>
			<li>
				<span>发卡行</span>
				<input type="text" placeholder="请输入发卡行" value="" v-model="txt4"/>
				<div class="tish4"></div>
			</li>
			<li>
				<span>手机号</span>
				<input type="text" placeholder="请输入银行预留手机号" value="" v-model="txt5"/>
				<div class="tish5"></div>
			</li>
			<li>
				<span>有效期</span>
				<input type="text" placeholder="示例:05/27,输入2705" value="" v-model="txt6"/>
				<div class="tish6"></div>
			</li>
			<li>
				<span>CVN2</span>
				<input type="text" placeholder="卡背面末三位" value="" v-model="txt7"/>
				<div class="tish7"></div>
			</li>
			<!--<li>
				<span>还款日期</span>
				<input type="text" placeholder="例如3月29日,选择:29(选填)" value="" v-model="txt8"/>
			</li>
			<li>
				<span>账单信息</span>
				<input type="text" placeholder="例如3月29日,选择:29(选填)" value="" v-model="txt9"/>
			</li>-->
		</ul>
		
		<div class="button bg-green" @click="creditAdd">添加</div>
			
		<!--loading-->
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
				txt1:'',
				txt2:'',
				txt3:'',
				txt4:'',
				txt5:'',
				txt6:'',
				txt7:'',
				txt8:'',
				txt9:'',
				loading:false,
			}
		},
		methods:{
			creditAdd(){
				var th=this;
				var myreg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/; //卡号
				var myregphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机号码
				var sfzh_num=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/; //身份证号码
				if(this.txt1== '' ||this.txt2== '' ||this.txt3== '' ||this.txt4== '' ||this.txt5== '' ||this.txt6== '' ||this.txt7== '' ){
					alert('请填写完整信息')
					return false;
				}else if(!sfzh_num.test(this.txt2)){
					alert('身份证号格式不正确')
					return;
				}else if(!myregphone.test(this.txt5)){
					alert('手机号码错误')
					return;
				}else{
					th.loading=true;
					var data={
						params:{}
					}
					data.params.ID=localStorage.id;
					data.params.randpwd=localStorage.token;
					data.params.bk_info_name=this.txt1;
					data.params.bk_info_idCard=this.txt2;
					data.params.bk_info_bankNum=this.txt3;
					data.params.bk_info_bankName=this.txt4;
					data.params.bk_info_phoneNum=this.txt5;
					data.params.bk_info_yxTime=this.txt6;
					data.params.bk_info_cvnNum=this.txt7;
					data.params.bk_info_hkTime=this.txt8;
					data.params.bk_info_zdInfo=this.txt9;
					var config= {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
					this.axios.get(this.Global.hostUrl+'mobile/Wkzfbank/addxybank',data,config).then(res=>{
						console.log(res.data)
						if(res.data.error=='success'){
							th.loading=false;
							alert('添加成功')
							this.$router.push({path:'./creditBank'})
						}else{
							th.loading=false
							alert(res.data.msg)
						}
					}).catch(err=>{
						alert("请求失败")
					})
				}
			}
		},
	}
</script>

<style>
</style>