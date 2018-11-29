<template>
	<div>
	<headernav headTip="个人中心" backUrl="./home"></headernav>
	
	<div class="content">
		<div class="top-round">	</div>	
		<div class="myuser-box re">
			<div class="center re">
				<img class="border-radius-y" :src="ranklist[0].headerImg" alt="" width="50" />
				<div class="f18 line-height-2 ellipsis">{{ranklist[0].nickName}}</div>
				<div class="my-grade ab">
					<img  v-if="ranklist[0].user_lv ==1"  src="../assets/img/lan1.png" alt="" width="20"/>
					<img  v-if="ranklist[0].user_lv ==2"  src="../assets/img/lan2.png" alt="" width="20"/>
					<img  v-if="ranklist[0].user_lv ==3"  src="../assets/img/lan3.png" alt="" width="20"/>
					<span class="f12" v-if="ranklist[0].vip_rank ==0">(实习会员)</span>
					<span class="f12" v-if="ranklist[0].vip_rank ==1">(普通会员)</span>
					<span class="f12" v-if="ranklist[0].vip_rank ==2">(高级会员)</span>
				</div>
			</div>
			<div class="flex center pad-t-b-5">
				<div class="f1">
					<div class="border-r-gray flex">￥ <span class="f18 ellipsis">{{ranklist[0].ulimit}}</span></div>
					<div class="color-gray">总收益</div>
				</div>
				<div class="f1">
					<div class="border-r-gray flex">￥ <span class="f18 ellipsis">{{ranklist[0].yijiesuan}}</span></div>
					<div class="color-gray">已结算</div>
				</div>
				<div class="f1">
					<div class="flex">￥ <span class="f18 ellipsis">{{ranklist[0].ulimit - ranklist[0].yijiesuan}}</span></div>
					<div class="color-gray">可结算</div>
				</div>
			</div>
			<div id="tixian-btn" class="green-btn-s col-5 border-radius-30 center mar-t-5 f16 line-height-1" style="margin-left: 25%;" @click="isShow">提现</div>
		</div>
		
		<ul class="my-icon flex flex-r-w flex-start-x pad-l-r-1">
			<li>
				<router-link to="zhanghu">
					<img src="../assets/img/my_icon1.png" alt="" width="30"/>
					<div>账户管理</div>
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
					<div>专属推荐人</div>
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
			<li>
				<img src="../assets/img/my_icon8.png" alt="" width="30"/>
				<div>平台手册</div>
			</li>
			<li>
				<router-link to="poster">
					<img src="../assets/img/my_icon9.png" alt="" width="30"/>
					<div>推广海报</div>
				</router-link>
			</li>
			<li>
				<img src="../assets/img/my_icon10.png" alt="" width="30"/>
				<div>培训课堂</div>
			</li>
			<li>
				<img src="../assets/img/my_icon11.png" alt="" width="30"/>
				<div>帮助说明</div>
			</li>
		</ul>
		
		<!--调用提现组件-->
		<tixiantc :mask="mask" @hideBox="isHide" v-model="mask"></tixiantc>
		
	
	
	</div>
	</div>
</template>

<script>
	import tixiantc from '../components/tixian_tc'
	export default{
		data(){
			return{
				user:[],
				mask:false,
                ranklist:[],
			}
		},
        mounted: function () {
            var data={
                params:{}
            }
            data.params.ID="811";
          //  data.params.randpwd="bd14c685a0e3761d03e25da91fae2dcc";

            var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};

            // GET /someUrl
            this.$http.get('http://192.168.1.110/mobile/user/index',data,config).then(res => {
                console.log(res.data);
                console.log(data);
                this.ranklist=res.data.data.list;

            }).catch(err=>{
                alert("请求失败")
            })
        },
		methods: {
			isShow(){
			    var tixian=true;
				var mydate= new Date();
				var xingqi=mydate.getDay();
				if(xingqi=="6"||xingqi=="0" || tixian== false){
					alert("对不起，节假日不能提现")
				}else{
					this.mask=true

				}			
			},
			isHide(){
				this.mask=false
			},		
		},
		components:{
			tixiantc
		},
	}
</script>

<style>
	body{overflow-x: hidden;}
</style>