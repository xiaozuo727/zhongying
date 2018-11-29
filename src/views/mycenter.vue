<template>
	<div>
	<headernav headTip="个人中心" backUrl="./home"></headernav>
	
	<div class="content">
		<div class="top-round">	</div>	
		<div class="myuser-box re">
			<div class="center re">
				<img class="border-radius-y" :src="my.list.headerImg" alt="" width="60" />
				<div class="f18 line-height-2 ellipsis">{{my.list.nickName}}</div>
				<div class="my-grade ab">
					<img src="../assets/img/lv1.png" v-if="my.list.user_lv ==1 && my.list.vip_rank == 0" alt="" width="30"/>
					<img src="../assets/img/huang1.png" v-if="my.list.user_lv ==1 && my.list.vip_rank == 1" alt="" width="30"/>
					<img src="../assets/img/huang2.png" v-if="my.list.user_lv ==2 && my.list.vip_rank == 1" alt="" width="30"/>
					<img src="../assets/img/huang3.png" v-if="my.list.user_lv ==3 && my.list.vip_rank == 1" alt="" width="30"/>
					<img src="../assets/img/lan1.png" v-if="my.list.user_lv ==1 && my.list.vip_rank == 2" alt="" width="30"/>
					<img src="../assets/img/lan2.png" v-if="my.list.user_lv ==2 && my.list.vip_rank == 2" alt="" width="30"/>
					<img src="../assets/img/lan3.png" v-if="my.list.user_lv ==3 && my.list.vip_rank == 2" alt="" width="30"/>
					<span class="f12" v-if="my.list.vip_rank == 0">(实习会员)</span>
					<span class="f12" v-if="my.list.vip_rank == 1">(普通会员)</span>
					<span class="f12" v-if="my.list.vip_rank == 2">(高级会员)</span>
				</div>
			</div>
			<div class="flex center pad-t-b-5">
				<div class="f1">
					<div class="border-r-gray flex">￥ <span class="f18 ellipsis">{{Math.floor(my.limit*100)/100}}</span></div>
					<div class="color-gray">总收益</div>
				</div>
				<div class="f1">
					<div class="border-r-gray flex">￥ <span class="f18 ellipsis">{{Math.floor(shouyi*100)/100}}</span></div>
					<router-link to="TodayShouyi" class="color-gray">今日收益</router-link>
				</div>
				<div class="f1">
					<div class="flex">￥ <span class="f18 ellipsis">{{Math.floor((my.limit-my.yijiesuan)*100)/100}}</span></div>
					<div class="color-gray">可结算</div>
				</div>
			</div>
			<div id="tixian-btn" class="green-btn-s col-5 border-radius-30 center mar-t-5 f16 line-height-1" style="margin-left: 25%;" @click="isShow" >提现</div>
		</div>
		
		<ul class="my-icon flex flex-r-w flex-start-x pad-l-r-1">
			<li>
				<router-link to="zhanghu">
					<img src="../assets/img/my_icon1.png" alt="" width="30"/>
					<div>收益明细</div>
				</router-link>
			</li>
			<li>
				<router-link to="set">
					<img src="../assets/img/my_icon2.png" alt="" width="30"/>
					<div>个人设置</div>
				</router-link>
			</li>
			<li>
				<router-link to="upVIP">
					<img src="../assets/img/my_icon3.png" alt="" width="30"/>
					<div>升级会员</div>
				</router-link>
			</li>
			<li>
				<router-link to="rank">
					<img src="../assets/img/my_icon4.png" alt="" width="30"/>
					<div>排行榜</div>
				</router-link>
			</li>
			<li>
				<router-link to="tuijian">
					<img src="../assets/img/my_icon5.png" alt="" width="30"/>
					<div>我的推荐</div>
				</router-link>
			</li>
			<li>
				<router-link to="team">
					<img src="../assets/img/my_icon6.png" alt="" width="30"/>
					<div>团队管理</div>
				</router-link>
			</li>
			<li>
				<router-link to="liucheng">
					<img src="../assets/img/my_icon7.png" alt="" width="30"/>
					<div>流程说明</div>
				</router-link>
			</li>
			<!--<li>-->
				<!--<router-link to="api">-->
					<!--<img src="../assets/img/my_icon8.png" alt="" width="30"/>-->
					<!--<div>平台手册</div>-->
				<!--</router-link>-->
			<!--</li>-->
			<li>
				<router-link to="poster">
					<img src="../assets/img/my_icon9.png" alt="" width="30"/>
					<div>推广海报</div>
				</router-link>
			</li>
			<!--<li>-->
				<!--<img src="../assets/img/my_icon10.png" alt="" width="30"/>-->
				<!--<div>培训课堂</div>-->
			<!--</li>-->
			<li>
				<router-link to="help">
					<img src="../assets/img/my_icon11.png" alt="" width="30"/>
					<div>帮助说明</div>
				</router-link>
			</li>
		</ul>
		
		<!--调用提现组件buneng不能加括号对应的哲理 apply方法接收参数 接受的参数是传给applyBtn方法进行处理 -->
		<tixiantc :mask="mask" v-model="mask" @hideBox="isHide" ></tixiantc>
		
	
	</div>
	</div>
</template>

<script>
	import tixiantc from '../components/tixian_tc'
	export default{
		data(){
			return{
				user:{
					
				},
				mask:false,
				my:{
					list:{
						headerImg:require('../assets/img/user_tx.png'),
						nickName:'名称',
						user_lv:null,
						vip_rank:null,
						ulimit:0,
						yijiesuan:0,
						
					}
				},
				shouyi:0,
//				money:'',
//				bankLi:'',
			}
		},
		created:function(){
			var data={
				params:{
					
				}
			};
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/user/index',data,config).then((res)=>{						
				if(res.data.error !="success"){				
					if(res.data.msg=="loginfaild"){
						localStorage.id="";
						localStorage.token="";
						this.$router.push({path:'./login'});
						return
					}
				}
				// console.log(res.data);
				this.my=res.data.data;
				
			}).catch(err=>{
				alert("请求失败")
			});

            data.params.user_id=localStorage.id;
            this.axios.get(this.Global.hostUrl+'mobile/user/gettime',data,config).then((res)=>{
                // console.log(res.data);
                if(res.data.error =="success"){
					this.shouyi=res.data.data.money;
                }


            }).catch(err=>{
                alert("请求失败")
            });

			
		},

		methods:{	
			isShow(){
				var tixian=true;
				var mydate= new Date();
				var xingqi=mydate.getDay();
				if(xingqi=="6"||xingqi=="0" || tixian ==false){
					alert("对不起，节假日不能提现")
				}else{
					this.mask=true;
                    var data={
                        params:{}
                    };
                    data.params.ID=localStorage.id;
                    data.params.randpwd=localStorage.token;
                    var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
                    this.axios.get(this.Global.hostUrl+'mobile/user/tx',data,config).then((res) => {
                        // console.log(res.data);
                        if(res.data.data.bank==null){
                            this.$router.push({path:'./addbankinfo'});
                        }

                    })
				}

			},
			isHide(){
				this.mask=false;
			},
//			applyBtn(data){
//				console.log(data)
//				this.mask=false;
//				this.money=data.money;
//				this.bankLi=data.bankLi;
//				console.log('agafsdfsad'+this.money)
//			},

		},
		components:{
			tixiantc
		},
		
	}
</script>

<style>
	body{overflow-x: hidden;}
</style>