<template>
	<div>
	<headernav headTip="今日收益明细" backUrl="./zhanghu"></headernav>
	
	<div class="content">
		<div class="shouyi-user flex flex-start-x color-white">
			<img class="border-radius-y mar-r-1" :src="shouyi.user.headerImg" alt="" width="65" />
			<div>
				<div class="f30">{{Math.floor(shouyi.money*100)/100}}<span class="f12">元</span></div>
				<div class="f16">(总金额)</div>
			</div>
		</div>
		
		<ul class="shouyi-mx color-gray line-height-2 f14">
			<li class="pad-1 border-b-gray-5" v-for="(item,index) in shouyi.list">
				<div>
					收益来源:
					<div class="f1 flex">     
						<span class="f18 color-black f1 right ellipsis">{{item.nickName}}</span>
						（	<span class="f12" v-if="item.vip_rank == 0">实习会员</span>
							<span class="f12" v-if="item.vip_rank == 1">普通会员</span>
							<span class="f12" v-if="item.vip_rank == 2">高级会员</span>
							<img src="../assets/img/lv1.png" v-if="item.user_lv ==1 && item.vip_rank == 0" alt="" width="30"/>
							<img src="../assets/img/huang1.png" v-if="item.user_lv ==1 && item.vip_rank == 1" alt="" width="30"/>
							<img src="../assets/img/huang2.png" v-if="item.user_lv ==2 && item.vip_rank == 1" alt="" width="30"/>
							<img src="../assets/img/huang3.png" v-if="item.user_lv ==3 && item.vip_rank == 1" alt="" width="30"/>
							<img src="../assets/img/lan1.png" v-if="item.user_lv ==1 && item.vip_rank == 2" alt="" width="30"/>
							<img src="../assets/img/lan2.png" v-if="item.user_lv ==2 && item.vip_rank == 2" alt="" width="30"/>
							<img src="../assets/img/lan3.png" v-if="item.user_lv ==3 && item.vip_rank == 2" alt="" width="30"/>
							
						）
					</div>
				</div>
				<div>
					收益金额:
					<div>￥
						<span v-if="item.p1id==user_id">{{Math.floor((item.p1fy*1+item.p1gl*1)*100)/100}}</span>
						<span v-else-if="item.p2id==user_id">{{Math.floor((item.p2fy*1+item.p2gl*1)*100)/100}}</span>
						<span v-else-if="item.p3id==user_id">{{Math.floor((item.p3fy*1+item.p3gl*1)*100)/100}}</span>
						<span v-else-if="item.uid==user_id">{{Math.floor(item.uid_money*100)/100}}</span>
					</div>
				</div>
				<div>
					收益时间:
					<div>{{item.fyDate}}</div>
				</div>
			</li>


		</ul>
		
	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				shouyi:{
					money:0,
					list:'',
					user:{
                        headerImg:require('../assets/img/user_tx.png'),
					}
				},
				getMoney:[],
				user_id:localStorage.id,
			}
		},
		// computed:function(){
		//
		// },
		mounted: function(){
			var data = {
				params:{}
			};
			data.params.user_id=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/user/gettime',data,config).then((res) =>{
				console.log(res.data);
				this.shouyi=res.data.data;
				var th=this;
				// for(var item in this.shouyi.list){
				// 	if(localStorage.id==this.shouyi.list[item].p1id){
				// 		th.getMoney[item]=parseInt(th.shouyi.list[item].p1fy)+parseInt(th.shouyi.list[item].p1gl);
				// 		return;
				// 	}else if(localStorage.id==th.shouyi.list[item].p2id){
				// 		th.getMoney[item]=parseInt(th.shouyi.list[item].p2fy)+parseInt(th.shouyi.list[item].p2gl);
				// 		return;
				// 	}else if(localStorage.id==th.shouyi.list[item].p3id){
				// 		th.getMoney[item]=parseInt(th.shouyi.list[item].p3fy)+parseInt(th.shouyi.list[item].p3gl);
				// 		return;
				// 	}
				// }

				
			})
		}
	}
</script>

<style>
	
</style>