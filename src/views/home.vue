<template>
	<div>
	<header><div class="f1"></div><div class="f8">众盈服务平台</div><div class="f1"></div></header>
	<div class="content">
		<div class="border-radius-5 hidden">

			<!--<transition-group tag="ul" class="ban_list flex flex-start-x re">-->
				<!--<li v-for="(list,index) in banlist" :key="index" v-show="index===currentIndex" @click="selecBan(index)">-->
					<!--<img class="block" :src="list.img" alt="" />-->
				<!--</li>-->
			<!--</transition-group>-->

			<yd-slider class="ban_list flex flex-start-x re" autoplay="3000">
				<yd-slider-item v-for="(list,index) in banlist" :key="index" >
					<img class="block" :src="list.img" alt="" @click="selecBan(index)" />
				</yd-slider-item>
			</yd-slider>
		</div>
		<div class="pad-5-1 flex flex-start-x" style="background: #fdfcea;color:#ff7b08;">
			<img src="../assets/img/notice.png" alt="" width="16">
			公告:
			<div class="f1 pad-l-1" style="height:16px">
				<yd-slider autoplay="3000" direction="vertical" :show-pagination="false">
					<yd-slider-item v-for="(item,index) in notice" :key="index" class="ellipsis" @click.native="goDetail(item.id)">{{item.title}}</yd-slider-item>
				</yd-slider>
			</div>
			<router-link to="notice" style="color:#c3ac76;">更多</router-link>
		</div>
		<ul class="nav_list center flex flex-start-x flex-r-w pad-t-b-5" style="box-shadow:0 1px 3px #b1afb0;" >
			<li class="col-25 pad-t-b-1">
				<router-link to="creditCard">
					<img src="../assets/img/index_icon2.png" alt="" />
					<div>信用卡中心</div>
				</router-link>
			</li>
			<li class="col-25 pad-t-b-1" >
				<router-link to="shsk_index">
					<img src="../assets/img/index_icon4.png" alt="" />
					<div>商户收款</div>
				</router-link>
			</li>
			<li class="col-25 pad-t-b-1"> <!-- @click="znhk"-->
				<router-link to="zhinenghk" >
					<img src="../assets/img/index_icon5.png" alt="" />

					<div>智能还卡</div>
				</router-link>
			</li>
			<li class="col-25 pad-t-b-1" @click="jifenchange">
				<!--<router-link to="bazhe">-->
					<img src="../assets/img/index_icon9.png" alt="" />
					<div>积分兑现</div>
				<!--</router-link>-->
			</li>

			<li class="col-25 pad-t-b-1">
				<router-link to="loan">
					<img src="../assets/img/index_icon1.png" alt="" />
					<div>贷款中心</div>
				</router-link>
			</li>
			<li class="col-25 pad-t-b-1">
				<router-link to="jinduQuery">
					<img src="../assets/img/index_icon7.png" alt="" />
					<div>进度查询</div>
				</router-link>
			</li>
			<li class="col-25 pad-t-b-1">
				<router-link to="upVIP">
					<img src="../assets/img/index_icon3.png" alt="" />
					<div>升级会员</div>
				</router-link>
			</li>
			<li class="col-25 pad-t-b-1" @click="">
				<router-link to="jisujiek">
					<img src="../assets/img/index_icon6.png" alt="" />
					<div>极速借款</div>
				</router-link>
			</li>
		</ul>
		<div class="pad-1 border-b-gray">
			<div class="title">热门信用卡</div>
			<div class="dai_box pad-5 re">
				<ul class="loanBox">
					<li @click="loanHot(loanItem)">
						<div class="border-b-gray flex flex-end-y pad-b-5 f12">
							<img class="mar-r-5" :src="loanItem.img" alt="" width="50"/>
							<div class="f1">
								<div class="f15">{{loanItem.title}}</div>
								<div class="color-green"><b>{{loanItem.pika}}</b></div>
								<div>批卡率</div>
							</div>
							<div class="f1">
								<div class="color-green"><b>￥{{loanItem.reward}}</b></div>
								<div>奖金</div>
							</div>
							<div>
								<!--<div class="color-gray">{{loanItem.num}}申请</div>-->
								<div class="green-btn-s mar-t-5">一键申请</div>
							</div>
						</div>
						<div class="flex flex-start-x">
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

		<div class="pad-1">
			<div class="title">热门资讯</div>
			<ul class="zixun flex space-btw flex-r-w f14 color-white">
				<!--<router-link to="newsinfo" class="bg-blue-gradient">-->
					<!--<div class="f18">最新资讯</div>-->
					<!--<img class="fr mar-r-5 pad-t-5" src="../assets/img/index_zx1.png" alt="" width="25"/>-->
				<!--</router-link>-->
				<router-link to="newcredit" class="bg-blue-gradient">
					<b class="f18">信用卡攻略</b>
					<div class="pad-t-5">高额低息</div>
					<!--<img class="fr mar-r-5 pad-t-5" src="../assets/img/index_zx2.png" alt="" width="30"/>-->
				</router-link>
				<router-link to="newloan" class="bg-purple-gradient">
					<b class="f18">贷款攻略</b>
					<div class="pad-t-5">快如闪电</div>
					<!--<img class="fr mar-r-5 pad-t-5" src="../assets/img/index_zx3.png" alt="" width="25"/>-->
				</router-link>
				<router-link to="newsinfo" class="bg-red-gradient" ><!--@click="morePro"-->
					<b class="f18">更多资讯</b>
					<div class="pad-t-5">新口子</div>
					<!--<img class="fr mar-r-5 pad-t-5" src="../assets/img/index_zx4.png" alt="" width="30"/>-->
				</router-link>
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
				loanItem:
					// {
					// img: require('../assets/img/loan_0.png'),
					// title:'中原消费金融',
					// scoped:'1-20万',
					// reward:'1.8%',
					// lilv:'6-8厘',
					// num:'728.3万',
					// age:'18-55',
					// time:'6',
					// descr:'中原消费金融-免费申请贷款，审批快，最高20万，秒到账！',
					// url:this.Global.hostUrl+'mobile/haibao/dkhaibao?ID='+localStorage.id+'&i='+0,
					// logoUrl:this.Global.hostUrl+'Public/img/loan_0.png'
					// }
                    {
                        img:require('../assets/img/credit_1.png'),
                        title:'交通银行',
                        pika:'63%',
                        reward:'100',
                        num:'274543',
                        descr:'交通信用卡-免费申请，秒批、额度高！',
                        newsid:29,
                        url:this.Global.hostUrl+'mobile/haibao/xyhaibao?ID='+localStorage.id+'&i='+1,
                        logoUrl:this.Global.hostUrl+'Public/img/credit_1.png'
                    }
                    ,
                notice:[{
                    title:'',
                }],
			}
		},
		components:{
			personal,
		},

		created() {
            if(window.localStorage.getItem('id')=="" || window.localStorage.token==""){
                this.$router.push({path:'./login'})
            }

		    //在DOM加载完成后，下个tick中开始轮播
		    var _this=this;
		    /*this.$nextTick(() => {
		        this.timer = setInterval(() => {
		            _this.autoPlay()
		        }, 2000)
		    });*/

		    var data={
		    	params:{}
		    };
		    data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/user/getdata',data,config).then(res =>{
				// console.log(res.data);
				var th=this;
				if(res.data.error !=="success"){
					th.personal=true;
				}

			});


		},
		mounted(){
            var data={
                params:{}
            };
            data.params.ID=localStorage.id;
            data.params.randpwd=localStorage.token;
            var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
            this.axios.get(this.Global.hostUrl+'mobile/index/notice',data,config).then(res =>{
                // console.log(res.data);
                if(res.data.error=='success'){
                    this.notice=res.data.data;
                }else{
                    alert(res.data.msg)
                }

            });
		},
		methods:{
			// autoPlay() {
			//     this.currentIndex++;
			//     // /*if (this.currentIndex > this.banlist.length - 1) {
			//     //     this.currentIndex = 0
			//     // }*/
			// },
            selecBan(i){
			  	if(i==0){
			  	    this.$router.push({path:'./loan'})

				}else if(i==1){
                    this.$router.push({path:'./newcredit'})
				}else if(i==2){
                    this.$router.push({path:'./shsk_index'})
                }
			},
			gotoPerson(){
				this.personal=false;
				this.$router.push({path:'./personalInfo'})
			},
			loanHot(item){
				this.$router.push({path:'./creditdetail', query:{item:item,i:0}})
			},
			znhk(){
				alert('敬请期待')
			},
			bazhe(){
				alert('产品维护中')
			},
			morePro(){
				alert('敬请期待')
			},
            jifenchange(){
                var data={
                    params:{}
                };
                data.params.ID=localStorage.id;
                data.params.randpwd=localStorage.token;
                var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
                this.axios.get(this.Global.hostUrl+'mobile/Exchangejf/curl_request',data,config).then(res =>{
                    console.log(res.data);
					if(res.data.error=='success'){
                        window.location.href=res.data.data.data.data;
					}

                });

			},
            goDetail(i){
			    this.$router.push({path:'./noticeDetail',query:{id:i}});

            }
		}
	}

</script>

<style scoped>
    .f18{font-size: 16px!important;}
	.dai_box{position: relative;overflow: hidden;}
	.dai_box:before{content: '推荐';position: absolute;width: 30px;height:30px;top:5px;right:-5px;color: #fff;font-size: 10px;z-index: 2;}
	.dai_box:after{content: '';position: absolute;width: 0;height:0;border:30px solid transparent;border-bottom:30px solid #fb560a;transform: rotate(45deg);top:-30px;right:-30px;}
</style>
