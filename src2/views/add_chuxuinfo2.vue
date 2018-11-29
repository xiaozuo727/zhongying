<template>
	<div>
	<headernav headTip="添加储蓄卡" backUrl="./chuxuBank"></headernav>
	
	<div class="content">
		<ul class="userinfo-bank">
			<li>
				<span>持卡人</span>
				<input type="text" placeholder="请输入真实姓名" v-model="bk_info_name"/>
				<div class="tish1"></div>
			</li>
			<li>
				<span>身份证</span>
				<input type="text" placeholder="请输入真实身份证号" v-model="bk_info_idCard"/>
				<div class="tish2"></div>
			</li>
			<li>
				<span>卡号</span>
				<input type="text" placeholder="请输入卡号" v-model="bk_info_bankNum"/>
				<div class="tish3"></div>
			</li>
			<li>
				<span>发卡行</span>
				<input type="text" placeholder="例:中国工商银行" v-model="bk_info_bankName"/>
				<div class="tish4"></div>
			</li>
			<li>
				<span>手机号</span>
				<input type="text" placeholder="请输入银行预留手机号" v-model="bk_info_phoneNum"/>
				<div class="tish5"></div>
			</li>

		</ul>
		
		<div class="button bg-green" @click="idAdd">添加</div>
	</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{		
				bk_info_name:'',
				bk_info_idCard:'',		
				bk_info_bankNum:'',	
				bk_info_bankName:'',
				bk_info_phoneNum:'',
			}
		},
//		mounted:{
//			
//		},
		methods:{
			idAdd(){
				var checkflag=1;//1代表成功
				//var cookie_val = getCookie("yzm");
				var myreg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/; //卡号
				var myregphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机号码
				var sfzh_num=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/; //身份证号码
				if(this.bk_info_name==""|| this.bk_info_idCard== ""|| this.bk_info_bankNum=="" || this.bk_info_bankName==""||this.bk_info_phoneNum==""){
					alert('请填写完整信息')
					return;
				}
				if(!sfzh_num.test(this.bk_info_idCard)){
					alert('身份证号格式不正确')
					return;
				}
				if(!myregphone.test(this.bk_info_phoneNum)){
					alert('手机号码错误')
					return;
				}
				
				
				var data={
					params:{}
				}
				data.params.ID=localStorage.id;
				data.params.randpwd=localStorage.token;
				data.params.bk_info_name=this.bk_info_name;
				data.params.bk_info_idCard=this.bk_info_idCard;
				data.params.bk_info_bankNum=this.bk_info_bankNum;
				data.params.bk_info_bankName=this.bk_info_bankName;
				data.params.bk_info_phoneNum=this.bk_info_phoneNum;
				var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/Wkzfbank/save_vip_bankinfo',data,config).then((res) => {
					console.log(res.data)
					if(res.data.error=="success"){
						alert('添加成功')
						this.$router.push({path:'./chuxuBank'})
					}else{		
						alert(res.data.data.RSPMSG);					
					}
				}).catch(err=>{
					alert("请求失败")
				})
			}
		}
	}
</script>

<style>
</style>