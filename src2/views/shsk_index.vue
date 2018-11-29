<template>
	<div>
	<headernav headTip="商户收款" backUrl="./home"></headernav>
	<div class="content">
		<div>
			<img class="re" src="../assets/img/shsk_head.jpg" alt="" width="100%" />
			<div class="shsk_head ab col-10 center">
				<div class="f20">设置金额</div>
				<input class="shskNum" type="text" placeholder="￥0.00" v-model="shskNum" />
				<div class="f12 color-gray pad-t-5 col-7 auto">
					<b>注:请输入500 - 20000内金额</b><br/>
					商户收款只支持本人使用，信用卡与储蓄卡需姓名一致！
				</div>
				<div class="deepblue_btn f18" @click="payBtn">确 认</div>
			</div>
		</div>
		
		<ul class="f16 pad-l-r-1">
			<router-link to="path_explain" class="flex border-b-gray mar-t-b-5 pad-b-5 re">				
				<img src="../assets/img/shsk_1.png" alt="" width="45" />
				<div class="f1 pad-l-1">通道说明</div>
				<div class="arrow" style="left:-10px"> </div>
			</router-link>

			<router-link to="chuxuBank" class="flex border-b-gray mar-t-b-5 pad-b-5 re">
				<img src="../assets/img/shsk_2.png" alt="" width="45" />
				<div class="f1 pad-l-1">储蓄卡管理</div>
				<div class="arrow" style="left:-10px"> </div>
			</router-link>

			<router-link to="reward" class="flex border-b-gray mar-t-b-5 pad-b-5 re">
				<img src="../assets/img/shsk_3.png" alt="" width="45" />
				<div class="f1 pad-l-1">奖金说明</div>
				<div class="arrow" style="left:-10px"> </div>
			</router-link>

			<router-link to="reward" class="flex border-b-gray mar-t-b-5 pad-b-5 re">
				<img src="../assets/img/shsk_4.png" alt="" width="45" />
				<div class="f1 pad-l-1">使用教程</div>
				<div class="arrow" style="left:-10px"> </div>
			</router-link>
			
			<router-link to="jiaoyijilu" class="flex border-b-gray mar-t-b-5 pad-b-5 re">
				<img src="../assets/img/shsk_5.png" alt="" width="45" />
				<div class="f1 pad-l-1">交易记录</div>
				<div class="arrow" style="left:-10px"> </div>
			</router-link>

		</ul>
		
		
	</div>
	
	<div class="mask" v-if="mask">
		<div class="col-8 auto bg-white pad-1 border-radius-5">
			请前去实名认证!
			<div class="flex space-btw mar-t-15 center">
				<div class="close col-4 border-radius-5 pad-5 bg-gray" @click="isHide">取消</div> 
				<div class="col-4 border-radius-5 pad-5 bg-green color-white" @click="realName">确定</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				mask:false,
				shskNum:'',
				hostUrl:this.Global.hostUrl,
			}
		},
//		beforeCreate(){
//			if(window.localStorage.getItem('id')=="" || window.localStorage.token==""){
//				this.$router.push({path:'./login'})
//				this.mask=true
//			}else{
//				this.$router.push({path:'./shsk_index'})
//			}
//		},
		created(){
			if(window.localStorage.getItem('id')=="" || window.localStorage.token==""){
				this.mask=true
			}else{
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
			this.axios.get(this.Global.hostUrl+'mobile/Wkzfbank/index',data,config).then((res) => {
				console.log(res.data)
				if(res.data.error !=="success"){
					 this.mask=true	
				}
			}).catch(err=>{
				alert("请求失败")
			})
		},
		methods:{
			realName(){
				this.$router.push({path:'./realName'})	
			},
			isHide(){
				this.mask=false
			},
			payBtn(){
				if(this.shskNum >=500){
					var data={
						params:{}
					}
					data.params.ID=localStorage.id;
					data.params.randpwd=localStorage.token;
					data.params.money=this.shskNum;
					localStorage.setItem('Money',this.shskNum);
					var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
					this.axios.get(this.Global.hostUrl+'mobile/Wkzfbank/index',data,config).then( (res)=>{
						console.log(res.data);
						if(res.data.error !=='success'){
							this.mask=true
						}else{
							this.$router.push({path:'./path'})
						}
												
					})
					
				}else{
					alert("请输入500元以上金额")
					
				}
			}
			
		}
	}
</script>

<style scoped>
	.deepblue_btn{width: 40%;}
	@media screen and (max-width:320px){
		.shsk_head{top:11%}
		.shsk_head input{margin:0;}
		.shsk_head .f12{padding:.3rem 0;}
		.shsk_head>div:first-child{font-size: 16px;}
	}
	@media screen and (min-width:321px) and (max-width:375px){
		.shsk_head .f12{padding:.5rem 0;}
	}
	@media screen and (min-width:376px) and (max-width:414px){
		.shsk_head .f12{padding:1rem 0;}
	}
</style>