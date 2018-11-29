<template>
	<div>
	<headernav headTip="绑定信用卡" backUrl="./zhinenghk2"></headernav>
	
	<div class="content">
		<ul class="pad-l-r-1 bg-white line-height-1">
			<li>
				<span>姓名</span>
				<input class="fr right" type="text" placeholder="杨红帅" />
			</li>
			<li>
				<span>身份证号</span>
				<input class="fr right" type="text" placeholder="4105******0021" />
			</li>
			<li class="re">
				<span>卡号</span>
				<input class="fr right" type="text" placeholder="请输入信用卡号" />
				<div class="zhichi ab f12 color-blue flex"><img src="../assets/img/eye_icon2.png" alt="" width="15" />查看支持卡行</div>
			</li>
			<li>
				<span>手机号</span>
				<input class="fr right" type="text" placeholder="请输入银行预留手机号" />
			</li>
			<li>
				<span>信用卡额度</span>
				<input class="fr right" type="text" placeholder="请输入信用卡额度" />
			</li>
			<li>
				<span>短信验证码</span>
				<span class="fr yzm">获取验证码</span>
				<input class="fr right mar-r-5" style="width: 30%;" type="text" placeholder="请输入验证码" />
			</li>
		</ul>
		
		<div class="button bg-green" @click="addBtn">确 定</div>
	</div>
	
	<!--支持信用卡alert-->
	<div class="mask none">
		<div class="col-8 auto bg-white border-radius-5 pad-1 none">
			<div class=" flex flex-r-w flex-start-x pad-b-5">
				<p>交通银行</p>
				<p>浦发银行</p>
				<p>民生银行</p>
				<p>平安银行</p>
				<p>交通银行</p>
				<p>浦发银行</p>
				<p>民生银行</p>
				<p>平安银行</p>
			</div>
			<div class="pad-t-1 border-t-gray center">确 定</div>
		</div>
		
	</div>
	</div>
	
	
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			addBtn(){
				this.$router.push({path:'./zhinenghk2'})
			}
		}
	}
</script>

<style scoped>
	ul li{padding:.8rem 0;border-bottom:1px solid #e6e6e6;}
	ul li input{width: 60%;border:none;outline:none;}
	ul li .yzm{padding:.3rem .6rem;background: #0f7dd9;border-radius:5px;font-size: 12px;color:#fff;margin-top:-4px;}
	ul li .zhichi{bottom:-2px;}
	.mask p{padding:.5rem;}
</style>