<template>
	<div>
	<headernav headTip="信用卡中心" backUrl="./home"></headernav>
	
	<div class="content">
		<div class="bg-white pad-5">
			<div class="hidden">
				<div class="ban_list flex flex-start-x re">
					<a href="#"><img class="block" src="../assets/img/loan-ban1.png" alt="" /></a>
					<!--<a href="#"><img class="block" src="img/loan-ban1.png" alt=""/></a>-->
				</div>
			</div>
		</div>
		
		<ul class="">
			<li class="bg-white pad-l-r-1 border-radius-5 mar-5" v-for="item,index in creditCard">
				<div class="border-b-gray flex pad-t-b-5 f12">
					<div class="f3 re">
						<img :src="item.img" alt="" width="50"/>
						<div class="company f14 ab">{{item.title}}</div>
					</div>
					<div class="f2 center">
						<div class="color-green">{{item.pika}}</div>
						批卡率
					</div>
					<div class="col-25 right">
						<div class="color-gray ellipsis">{{item.num}}申请</div>
						<div class="green-btn-s mar-t-5" @click="go_loandetail(item)">一键申请</div>
					</div>
				</div>
				<div class="flex flex-start-x line-height-2">
					<img src="../assets/img/money-g.png" alt="" width="18"/>
					奖金：￥{{item.reward}}
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
				creditCard:[{
					img:require('../assets/img/credit_1.jpg'),
					title:'交通银行',
					pika:'63%',
					reward:'100',
					num:'274543',
					descr:'交通信用卡-免费申请，秒批、额度高！',
					newsid:29,
				},{
					img:require('../assets/img/credit_2.jpg'),
					title:'浦发银行',
					pika:'69%',
					reward:'110',
					num:'242586',
					descr:'浦发信用卡-免费申请，秒批、额度高！',
					newsid:30,
				},{
					img:require('../assets/img/credit_3.jpg'),
					title:'民生银行',
					pika:'67%',
					reward:'65',
					num:'236951',
					descr:'民生信用卡-免费申请，秒批、额度高！',
					newsid:31,
				},{
					img:require('../assets/img/credit_4.jpg'),
					title:'平安银行',
					pika:'66%',
					reward:'65',
					num:'23644',
					descr:'平安信用卡-免费申请，秒批、额度高！',
					newsid:32,
				},{
					img:require('../assets/img/credit_5.jpg'),
					title:'光大银行',
					pika:'68%',
					reward:'60',
					num:'256558',
					descr:'光大信用卡-免费申请，秒批、额度高！',
					newsid:28,
				},{
					img:require('../assets/img/credit_6.jpg'),
					title:'中信银行',
					pika:'62%',
					reward:'0',
					num:'253492',
					descr:'中信信用卡-免费申请，秒批、额度高！',
					newsid:44,
				},{
					img:require('../assets/img/credit_7.jpg'),
					title:'上海银行',
					pika:'68%',
					reward:'60',
					num:'202679',
					descr:'上海信用卡-免费申请，秒批、额度高！',
					newsid:33,
				},{
					img:require('../assets/img/credit_8.jpg'),
					title:'华夏银行',
					pika:'68%',
					reward:'60',
					num:'256879',
					descr:'华夏信用卡-免费申请，秒批、额度高！',
					newsid:65,
				},]
			}
		},
		methods:{
			go_loandetail(item){
				this.$router.push({path:'./creditdetail', query:{item:item}})
			}
		},
		mounted: function(){
			for(var i in this.creditCard){
				this.creditCard[i].url=this.Global.hostUrl+'mobile/haibao/xyhaibao?ID='+localStorage.id+'&i='+(parseInt(i)+1)
				this.creditCard[i].logoUrl=this.Global.hostUrl+'Public/img/credit_'+parseInt(i)+'.jpg';
			}
		}
	}
</script>

<style scoped>
	.content{background:#f3f3f3;min-height: 100vh;}
</style>