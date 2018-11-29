<template>
	<div>
	<headernav headTip="专属推荐人" backUrl="./mycenter"></headernav>
	<div class="content">
		<img src="../assets/img/tuijian_ban.jpg" alt="" width="100%" />
		<div class="center color-gray mar-t-b-1 re">
			<img class="border-radius-y" :src="tui.headerImg" alt="" width="70" />
			<div class="f18 line-height-2">{{tui.nickName}}</div>
			<div class="tuijian-grade ab">
				<span v-if="tui.vip_rank ==0">实习会员</span>	
				<span v-if="tui.vip_rank ==1">普通会员</span>
				<span v-if="tui.vip_rank ==2">高级会员</span>
				
				<img v-if="tui.user_lv ==1 && tui.vip_rank==0" src="../assets/img/lv1.png" alt="" width="30" />
				<img v-if="tui.user_lv ==1 && tui.vip_rank==1" src="../assets/img/huang1.png" alt="" width="30" />
				<img v-if="tui.user_lv ==2 && tui.vip_rank==1" src="../assets/img/huang2.png" alt="" width="30" />
				<img v-if="tui.user_lv ==3 && tui.vip_rank==1" src="../assets/img/huang3.png" alt="" width="30" />
				<img v-if="tui.user_lv ==1 && tui.vip_rank==2" src="../assets/img/lan1.png" alt="" width="30" />
				<img v-if="tui.user_lv ==2 && tui.vip_rank==2" src="../assets/img/lan2.png" alt="" width="30" />
				<img v-if="tui.user_lv ==3 && tui.vip_rank==2" src="../assets/img/lan3.png" alt="" width="30" />

			</div>
		</div>
		<div class="tuij_btn color-white center mar-t-1 f16 flex">
			<div class="" @click="weix"><img class="vmid mar-r-5" src="../assets/img/wei_icon.png" alt="" width="30" />加我微信</div>
			<div class="" @click="phone"><img class="vmid" src="../assets/img/phone_icon.png" alt="" width="30" /></div>
		</div>
		<div class="pad-1 line-height-2">
			<b>温馨提示：</b>
			<div class="color-gray ">1.专属客户助理是平台面对用户的第一责任人，在享用平台相关权益的同时，也肩负指导，培训和为用户排忧解惑的责任和义务。</div>
		</div>
		
	</div>
	
	<div class="mask" v-if="mask">
		<div class="col-8 auto pad-1 bg-white border-radius-5">
			<div v-if="phonenum">手机号 {{this.tui.user_phone}}</div>
			<div v-else>微信号 {{this.tui.user_wxnum}}</div>
			<div class="mar-t-1 center col-3 auto line-height-2 bg-green color-white border-radius-5" @click="yes">确 定</div>
		</div>
	</div>
	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				mask:false,
				phonenum:false,
				tui:{
					user_phone:'',
					user_wxnum:'',
				},
				
				
			}
		},
		mounted:function(){
			var data={
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/user/referrer',data,config).then(res=>{
				console.log(res.data)
				this.tui=res.data.data.p1id
			}).catch(err=>{
				
			})
		},
		methods:{
			weix(){
				this.mask=true
				this.phonenum=false
			},
			phone(){
				this.mask=true
				this.phonenum=true
			},
			yes(){
				this.mask=false
			}
		}
	}
</script>

<style>
</style>