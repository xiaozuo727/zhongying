<template>
	<div>
	<headernav headTip="收益明细" backUrl="./zhanghu"></headernav>
	
	<div class="content">
		<div class="shouyi-user flex flex-start-x color-white">
			<img class="border-radius-y mar-r-1" :src="shouyi.headerImg" alt="" width="65" />
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
					<div>￥{{Math.floor(item.uid_money*100)/100}}</div>
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
					headerImg:null,
					money:0,
					list:'',
				},
				getMoney:[],
			}
		},
		// computed:function(){
		//
		// },
		mounted: function(){
			var data = {
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/user/earnings',data,config).then((res) =>{
				console.log(res.data);
				this.shouyi=res.data.data;	
				var th=this;
				for(var item in this.shouyi.list){
					if(localStorage.id==this.shouyi.list[item].p1id){
						th.getMoney[item]=parseInt(th.shouyi.list[item].p1fy)+parseInt(th.shouyi.list[item].p1gl);
						return;
					}else if(localStorage.id==th.shouyi.list[item].p2id){
						th.getMoney[item]=parseInt(th.shouyi.list[item].p2fy)+parseInt(th.shouyi.list[item].p2gl);
						return;
					}else if(localStorage.id==th.shouyi.list[item].p3id){
						th.getMoney[item]=parseInt(th.shouyi.list[item].p3fy)+parseInt(th.shouyi.list[item].p3gl);
						return;
					}else if(localStorage.id==th.shouyi.list[item].uid){
                        th.getMoney[item]=th.shouyi.list[item].uid_money;
                        return;
                    }
				}

				
			})
		}
	}
</script>

<style>
	
</style>