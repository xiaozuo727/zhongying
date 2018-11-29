<template>
	<div>
	<headernav headTip="贷款中心" backUrl="./home"></headernav>
	<div class="content">
		<div class="bg-white pad-5">
			<div class="hidden">
				<div class="ban_list flex flex-start-x re">
					<img class="block" src="../assets/img/loan-ban.jpg" alt="" @click="ban(loanList[5],5)" />
					<!--<a href="#"><img class="block" src="img/loan-ban1.png" alt=""/></a>-->
				</div>
			</div>
		</div>
		
		<ul class="loanBox">
			<li class="bg-white pad-l-r-1 border-radius-5 mar-5" v-for="(item,index) in loanList" :index="index">
				<div class="border-b-gray flex pad-t-b-5 f12">
					<div class="f3 re">
						<img :src="item.img" alt="" width="50"/>
						<div class="company f14 ab">{{item.title}}</div>
					</div>
					<div class="f2 center">
						<div class="color-green">{{item.scoped}}</div>
						可贷额度
					</div>
					<div class="col-25 right">
						<div class="color-gray ellipsis">{{item.num}}申请</div>
						<div class="green-btn-s mar-t-5" @click="go_loandetail(item,index)" >一键申请</div>
					</div>
				</div>
				<div class="flex flex-start-x line-height-2">
					<img src="../assets/img/money-g.png" alt="" width="18"/>
					奖金：￥{{item.reward}}
				</div>
			</li>
			
		</ul>
		
		<!--<loanDetail ></loanDetail>-->
	</div>
	</div>
</template>

<script>
	import loanDetail from '../components/loandetail'
	export default{
		data(){
			return{				
				loanList:[
				//     {
				// 	img: require('../assets/img/loan_0.png'),
				// 	title:'中原消费金融',
				// 	scoped:'1-20万',
				// 	reward:'1.8%',
				// 	num:'728.3万',
				// 	age:'18-55',
				// 	time:'6',
				// 	descr:'中原消费金融-免费申请贷款，审批快，最高20万，秒到账！',
				// 	newsid:64,
				// },
					{
					img: require('../assets/img/loan_1.png'),
					title:'众安点点',
					scoped:'1-20万',
					reward:'2.7%',
					num:'215.3万',
					age:'18',
					time:'6',
					descr:'众安点点-免费申请贷款，审批快，最高20万，秒到账！',
					newsid:22,
				},{
					img: require('../assets/img/loan_2.png'),
					title:'房司令',
					scoped:'1-15万',
					reward:'1.8%',
					num:'195.4万',
					age:'20-50',
					time:'6',
					descr:' 房司令-免费申请贷款，审批快，最高15万，秒到账！',
					newsid:18,
				},{
					img: require('../assets/img/loan_3.png'),
					title:'宜人贷',
					scoped:'1-20万',
					reward:'1.15%',
					num:'479.9万',
					age:'22-55',
					time:'2',
					descr:'宜人贷-免费申请贷款，审批快，最高20万，秒到账！',
					newsid:17,
				},{
					img: require('../assets/img/loan_6.png'),
					title:'360借条',
					scoped:'1-20万',
					reward:'1.8%',
					num:'377.7万',
					age:'18-55',
					time:'6',
					descr:' 360借条-免费申请贷款，审批快，最高20万，秒到账！',
					newsid:19,
				},{
					img: require('../assets/img/loan_7.png'),
					title:'小黑鱼',
					scoped:'1-5万',
					reward:'2.7%',
					num:'155.6万',
					age:'18-45',
					time:'6',
					descr:' 小黑鱼-免费申请贷款，审批快，最高5万，秒到账！',
					newsid:21,
				},{
					img: require('../assets/img/loan_9.png'),
					title:'拍拍贷',
					scoped:'1-20万',
					reward:'125元',
					num:'576.8万',
					age:'21-55',
					time:'3',
					descr:'拍拍贷-免费申请贷款，审批快，最高20万，秒到账！',
					newsid:15,
				},{
					img: require('../assets/img/loan_10.png'),
					title:'中安信业',
					scoped:'1-50万',
					reward:'0.9%',
					num:'358.6万',
					age:'20-65',
					time:'6',
					descr:'中安信业-免费申请贷款，审批快，最高50万，秒到账！',
					newsid:27,
				},{
					img: require('../assets/img/loan_11.png'),
					title:'你我贷',
					scoped:'1-5万',
					reward:'2.7%',
					num:'343.5万',
					age:'20-45',
					time:'3',
					descr:'你我贷-免费申请贷款，审批快，最高5万，秒到账！',
					newsid:14,
				},{
					img: require('../assets/img/loan_12.png'),
					title:'信用飞',
					scoped:'1-10万',
					reward:'2.25%',
					num:'174.2万',
					age:'18-55',
					time:'3',
					descr:'信用飞-免费申请贷款，审批快，最高10万，秒到账！',
					newsid:24,
				},{
					img: require('../assets/img/loan_13.png'),
					title:'信而富',
					scoped:'0.2-1.5万',
					reward:'2.7%',
					num:'474.8万',
					age:'18-45',
					time:'6',
					descr:'信而富-免费申请贷款，审批快，最高1.5万，秒到账！',
					newsid:26,
				},{
					img: require('../assets/img/loan_14.png'),
					title:'小树普惠',
					scoped:'0.1-1.0万',
					reward:'1.8%',
					num:'269.4万',
					age:'18-35',
					time:'6',
					descr:'小树普惠-免费申请贷款，审批快，最高1万，秒到账！',
					newsid:25,
				},],
//				currentIndex:'',
			}
		},
		mounted: function(){
			for(var i in this.loanList){
//				console.log(i, typeof i);
				this.loanList[i].url=this.Global.hostUrl+'mobile/haibao/dkhaibao?ID='+localStorage.id+'&i='+(parseInt(i)+1);
				this.loanList[i].logoUrl=this.Global.hostUrl+'Public/img/loan_'+parseInt(i+1)+'.png';
			}

		},
		methods:{
			go_loandetail(item,index){
//				var th = this;
//				this.currentIndex=th.loanList[index];
				this.$router.push({path:'./loandetail', query:{item:item,i:(parseInt(index)+1)}});

			},
			ban(item,index){
                this.$router.push({path:'./loandetail', query:{item:item,i:(parseInt(index)+1)}});
			}

		}
	}
</script>

<style scoped>
	.content{background:#f3f3f3;min-height: 100vh;}
	/*.loanBox li:first-child{position: relative;overflow: hidden;}
	.loanBox li:first-child:before{content: '明星产品';position: absolute;width: 30px;height:30px;top:0;right:-3px;color: #fff;font-size: 10px;z-index: 2;}
	.loanBox li:first-child:after{content: '';position: absolute;width: 0;height:0;border:35px solid transparent;border-bottom:35px solid red;transform: rotate(45deg);top:-35px;right:-35px;}*/
</style>