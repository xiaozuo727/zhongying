<template>
	<div>
	<headernav headTip="添加银行卡" backUrl="./mybank"></headernav>
	
	<div class="content">
		<ul class="add-bank bg-white pad-l-r-1">
			<li class="re border-b-gray pad-t-b-1">
				持卡人
				<input class="name ab" type="text" placeholder="请输入真实姓名" v-model="con1" />
				<span class="tish1 fr"></span>
			</li>
			<li class="re border-b-gray pad-t-b-1">
				身份证
				<input class="phone ab" type="text" placeholder="请输入身份证号码" v-model="con2" />
				<span class="tish2 fr"></span>
			</li>
			<li class="re border-b-gray pad-t-b-1">
				手机号
				<input class="phone ab" type="text" placeholder="请输入手机号" maxlength="11" v-model="con3" />
				<span class="tish3 fr"></span>
			</li>
			<li class="re border-b-gray pad-t-b-1">
				发卡行
				<input class="kz ab bg-none" type="text" placeholder="例:中国建设银行" v-model="con4" @click="bankall"/>
				<span class="tish4 fr"></span>
				<!--<ul class="selec_bank ab col-8 bg-white" v-show="bankList">
					<li class="line-height-3" @click="bankItem">中国银行</li>
					<li class="line-height-3" @click="bankItem">建设银行</li>
				</ul>-->
			</li>
			<li class="re border-b-gray pad-t-b-1">
				卡号
				<input class="kh ab" type="text" placeholder="请输入卡号" v-model="con5" />
				<span class="tish5 fr"></span>
			</li>
			<li class="re border-b-gray pad-t-b-1">
				开户支行
				<input class="ab" type="text" placeholder="例：北京怀柔区雁栖支行" v-model="con6" />
			</li>
		</ul>
		<p class="f12 color-gray center pad-t-1">注：填写信息请核对无误后再提交</p>
		<div class="button bg-green" @click="addBank">提交</div>

	</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				con1:"",
				con2:"",
				con3:"",
				con4:"",
				con5:"",
				bankList:false,
			}
		},
		methods:{
			addBank(){
				var checkflag=1;//1代表成功
				//var cookie_val = getCookie("yzm");
				//var myreg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/; //卡号
				var myreg = /^(\d{16}|\d{19})$/;
				var myregphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机号码
				var sfzh_num=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/; //身份证号码
				if(this.con1==""|| this.con2== ""|| this.con3=="" || this.con4==""||this.con5==""){
					alert('请填写完整信息')
					return;
				}
				if(!sfzh_num.test(this.con2)){
					alert('身份证号格式不正确')
					return;
				}
				if(!myregphone.test(this.con3)){
					alert('手机号码错误')
					return;
				}
				if(!myreg.test(this.con5)){
					alert('卡号格式不正确')
					return;
				}
				
				var data={
					params:{}
				}
				data.params.ID=localStorage.id;
				data.params.randpwd=localStorage.token;
				data.params.bk_info_name=this.con1;
				data.params.bk_info_idCard=this.con2;
				data.params.bk_info_phoneNum=this.con3;
				data.params.bk_info_bankName=this.con4;
				data.params.bk_info_bankNum=this.con5;
				data.params.bk_info_bankinfo=this.con6;
				var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/user/addbank',data,config).then((res) => {
				   console.log(res.data);
				  if(res.data.error=="faild"){
				  	alert(res.data.data.RSPMSG);
				  	return
				  }
				 
				  this.$router.push({path:'./mybank'})
				})
			},
			bankall(){
				this.bankList=true
			},
			bankItem(){
				this.bankList=false
			}
		},
		mounted:function(){
			
		}
	}
</script>

<style>
</style>