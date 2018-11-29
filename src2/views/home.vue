<template>
	<div>
	<headernav headTip="众盈服务平台" backUrl="/home"></headernav>
	<div class="content">
		<div class="mar-5 border-radius-5 hidden">
			
			<transition-group tag="ul" class="ban_list flex flex-start-x re">
				<li v-for="(list,index) in banlist" :key="index" v-show="index===currentIndex" >
					<img class="block" :src="list.img" alt="" />
				</li>

			</transition-group>
		</div>
		<ul class="nav_list center flex flex-start-x flex-r-w pad-b-1 border-b-gray-5" >
			<li class="col-25 pad-t-b-1">
				<router-link to="creditCard">
					<img src="../assets/img/index_icon2.png" alt="" />
					<div>信用卡中心</div>
				</router-link>
			</li>
			<li class="col-25 pad-t-b-1">
				<router-link to="loan">
					<img src="../assets/img/index_icon1.png" alt="" />
					<div>贷款中心</div>
				</router-link>
			</li>
			<li class="col-25 pad-t-b-1" @click="">
				<router-link to="jiuyuan">
					<img src="../assets/img/index_icon6.png" alt="" />
					<div>全国救援</div>
				</router-link>
			</li>
			<li class="col-25 pad-t-b-1">
				<router-link to="bazhe">
					<img src="../assets/img/index_icon3.png" alt="" />
					<div>88折加油</div>
				</router-link>
			</li>
			<li class="col-25 pad-t-b-1" >
				<router-link to="shsk_index">
					<img src="../assets/img/index_icon5.png" alt="" />
					<div>商户收款</div>
				</router-link>
			</li>
			<li class="col-25 pad-t-b-1" @click="znhk">
				<!--<router-link to="" >-->
					<img src="../assets/img/index_icon4.png" alt="" />
					<div>智能还卡</div>
				<!--</router-link>-->
			</li>
			<li class="col-25 pad-t-b-1">
				<router-link to="jinduQuery">
					<img src="../assets/img/index_icon7.png" alt="" />
					<div>进度查询</div>
				</router-link>
			</li>
			<li class="col-25 pad-t-b-1">
				<router-link to="upVIP">
					<img src="../assets/img/index_icon8.png" alt="" />
					<div>升级会员</div>
				</router-link>
			</li>
		</ul>
		<div class="pad-1 border-b-gray-5">
			<div class="title">热门贷款</div>
			<div class="dai_box pad-5 mar-b-5 re">
				<ul class="loanBox">
					<li @click="loanHot(loanItem)">
						<div class="border-b-gray flex flex-end-y pad-t-b-5 f12">
							<img class="mar-r-5" :src="loanItem.img" alt="" width="55"/>
							<div class="f1">
								<div class="f15">{{loanItem.title}}</div>
								<div class="color-green"><b>{{loanItem.scoped}}</b></div>
								<div>可贷额度</div>
							</div>
							<div class="f1">
								<div class="color-green"><b>{{loanItem.lilv}}</b></div>
								<div>参考月利率</div>
							</div>
							<div>
								<!--<div class="color-gray">{{loanItem.num}}申请</div>-->
								<div class="green-btn-s mar-t-5">一键申请</div>
							</div>
						</div>
						<div class="flex flex-start-x pad-t-5">
							<img src="../assets/img/money-g.png" alt="" width="18"/>
							奖金：￥{{loanItem.reward}}
						</div>
					</li>
				</ul>
				<!--指针-->
				<div class="ab">
					<span></span>
					
				</div>
			</div>
		</div>
		
		<div class="pad-1 border-b-gray-5">
			<div class="title">热门资讯</div>
			<ul class="zixun flex space-btw flex-r-w ">
				<router-link to="newsinfo" class="bg-blue-gradient">
					<div class="f18">最新资讯</div>
					<img class="fr mar-r-5 pad-t-5" src="../assets/img/index_zx1.png" alt="" width="25"/>
				</router-link>
				<router-link to="newcredit" class="bg-purple-gradient">
					<div class="f18">信用卡攻略</div>
					<img class="fr mar-r-5 pad-t-5" src="../assets/img/index_zx2.png" alt="" width="30"/>
				</router-link>
				<router-link to="newloan" class="bg-red-gradient">
					<div class="f18">贷款攻略</div>
					<img class="fr mar-r-5 pad-t-5" src="../assets/img/index_zx3.png" alt="" width="25"/>
				</router-link>
				<a class="bg-green-gradient" @click="morePro">
					<div class="f18">更多产品</div>
					<img class="fr mar-r-5 pad-t-5" src="../assets/img/index_zx4.png" alt="" width="30"/>
				</a>
			</ul>
		</div>
		
		<!--完善个人资料alert-->
		<personal v-model="personal" :personal="personal" @gotoPersonal="gotoPerson"></personal>
		
	</div>
	</div>
</template>

<script>
	import personal from '../components/personalInfo_tc'
	
	export default{		
		data(){
			return{
				banlist:[
					{img:require('../assets/img/banner1.png')},
					{img:require('../assets/img/banner2.png')},
					{img:require('../assets/img/banner3.png')},
				],
				currentIndex:0,
				timer:'',
				personal:false,
				loanItem:{
					img: require('../assets/img/loan_0.png'),
					title:'中原消费金融',
					scoped:'1-20万',
					reward:'2%',
					lilv:'6-8厘',
					num:'728.3万',
					age:'18-55',
					time:'6',
					descr:'中原消费金融-免费申请贷款，审批快，最高20万，秒到账！',
					url:this.Global.hostUrl+'mobile/haibao/dkhaibao?ID='+localStorage.id+'&i='+0,
					logoUrl:this.Global.hostUrl+'Public/img/loan_0.png',
					newsid:64,
				}
			}
		},
		components:{
			personal,
		},
		created() {
			
		    //在DOM加载完成后，下个tick中开始轮播
		    var _this=this;
		    this.$nextTick(() => {
		        this.timer = setInterval(() => {
		            _this.autoPlay()
		        }, 2000)
		        
		    })	
		    
		    var data={
		    	params:{}
		    }
		    data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/user/getdata',data,config).then(res =>{
				console.log(res.data) 
				var th=this;
				if(res.data.error !=="success"){
					th.personal=true;

				}
				
			})
		},
		methods:{
			autoPlay() {
			    this.currentIndex++;
			    if (this.currentIndex > this.banlist.length - 1) {
			        this.currentIndex = 0
			    }
			},
			gotoPerson(){
				this.personal=false;
				this.$router.push({path:'./personalInfo'})
			},
			loanHot(item){
				this.$router.push({path:'./loandetail', query:{item:item,i:0}})
			},
			znhk(){
				alert('敬请期待')
			},
			bazhe(){
				alert('产品维护中')
			},
			morePro(){
				alert('敬请期待')
			}
		}
	}
	
</script>

<style>
	.dai_box{position: relative;overflow: hidden;}
	.dai_box:before{content: '推荐';position: absolute;width: 30px;height:30px;top:5px;right:-5px;color: #fff;font-size: 10px;z-index: 2;}
	.dai_box:after{content: '';position: absolute;width: 0;height:0;border:30px solid transparent;border-bottom:30px solid #fb560a;transform: rotate(45deg);top:-30px;right:-30px;}

</style>