<template>
	<div>
	<headernav headTip="智能还卡" backUrl="./zhinenghk"></headernav>
	
	<div class="content">
		<div class="addBox bg-gray">
			<ul class="addbank pad-1 re">
				<li v-for='item in 4'>
					<div class="addcon" v-show="addbank" @click="addBank">+添加银行卡</div>
					<div class="bankshow re flex row-10 pad-l-1" v-if="bankShow">
						<div class="bank-icon hidden">
							<img src="../assets/img/yinlian.jpg" style="margin:-10% 0 0 -10%" alt="" width="120%" />
						</div>
						<div class="f1 color-white f18 line-height-2 center">
							<div class="pad-t-5">中国银行</div>
							<div class="pad-b-5">261722222222</div>
						</div>
						<div class="pad-l-r-1">
							<span class="pad-2 border-white border-radius-5 color-white">储蓄卡</span>
						</div>
					</div>
				</li>

			</ul>
		</div>
		<div class="pad-5-1 flex flex-start-y border-b-gray-5 space-ard center line-height-2">
			<div>
				开始日期
				<div>{{nowDate}}</div>
			</div>
			<div class="re">
				<div class="color-green" @click="selecDay"><b>{{tian}}</b></div>
				<hr class="line mar-t-1" />
			</div>
			<div>
				结束日期
				<div>{{newDate}}</div>
			</div>
		</div>
		<div class="pad-1 border-b-gray-5">
			还款金额（元）
			<div class="border-b-gray pad-t-b-5 mar-t-5 color-black f20">
				￥<input class="f20 border-no outline-no" type="text" placeholder="最少申请金额300.00" v-model="money"/>
			</div>
		</div>
		<div class="pad-1">
			选择方案
			<div class="selecWay f12 line-height-2 mar-t-5 flex">
				<div class="pad-5 border-radius-5 border-gray f1 mar-l-r-5" v-for="item,index in way" :class="{action:way1===index}" @click="selecWay(index)">
					<div>
						<p class="inline-block f15 color-black">{{item.tit}}</p>  
						<span class="pad-l-r-5 bg-gray">{{item.more}}</span>
					</div>
					<div>{{item.serv}}</div>
					<div>{{item.leave}}</div>
				</div>

			</div>
			<div class="button bg-green border-radius-30" @click="wayApply">立即申请</div>
		</div>
	</div>
	
	<!--天数alert-->
	<div class="mask" v-show="mask">
		<div class="col-8 auto bg-white border-radius-5 f18 center">
			<div class="pad-t-b-5 border-b-green line-height-2">选择天数</div>
			<div class="day flex flex-r-w pad-5-1">
				<p :class="{action:currentIndex ===index}" v-for="item,index in 15" @click="day(index)">{{index+1}}</p>

			</div>
		</div>
	</div>
	
	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				money:'',
				mask:false,
				currentIndex:0,
				tian:'选择天数',
				way:[{
					tit:'超低预留额度',
					more:'更低',
					serv:'服务费：￥0.00',
					leave:'卡内预留：￥0.00',
				},{
					tit:'超低服务费',
					more:'更省',
					serv:'服务费：￥0.00',
					leave:'卡内预留：￥0.00',
				},],
				way1:0,
				nowDate:'',
				newDate:'',
				bankShow:false,
				addbank:true,
			}
		},
		mounted: function(){
			var now=new Date();
			var time=now.getTime();
			var month=now.getMonth()+1;
			var date=now.getDate();
			this.nowDate=month+'月'+date+'日';
			this.newDate=month+'月'+date+'日';
			localStorage.setItem('nowDate',this.nowDate);

		},
		methods:{
			wayApply(){
				if(this.money<300){
					alert('请输入300元以上金额')
				}else{
					this.$router.push({path:'./zn_apply'})
				}
			},
			selecDay(){
				this.mask=true
			},
			day(i){
				this.currentIndex=i;
				this.mask=false;
				this.tian=i+1+'天';
				
				var th=this;
				var now=new Date();
				var time=now.getTime();
				var lastDate=time+(i*1000*3600*24);
				var current=time2(lastDate);
				function time2(lastDate){					
					var oDate=new Date();
					oDate.setTime(lastDate);
					var current=oDate.getMonth()+1+'月'+oDate.getDate()+'日'
					th.newDate=current;
					localStorage.setItem('newDate',th.newDate);

				}
			},
			selecWay(i){
				this.way1=i
			},
			addBank(){
				this.addbank=false;
				this.bankShow=true;
				this.$router.push({path:'./bindCredit'})
			}
		}
	}
</script>

<style scoped>
	.content{color:#9d9d9d;}
	.addBox{overflow-x: auto;}
	.addbank{width: 400vw;overflow:hidden;top:0;}
	.addbank li{position: relative;height:150px;width:calc(100vw - 32px);border-radius:5px;box-shadow:0 5px 2px rgba(0,0,0,.1);background:linear-gradient(to right,#36ce85,#73ef8f) ;float:left;margin-right:.5rem;}
	.addbank li:nth-child(3n-1){background-image: linear-gradient(to right,#3d87e0,#5ef3e0);}
	.addbank li:nth-child(3n){background-image: linear-gradient(to right,#7587f5,#5df2df);}
	.addbank li .addcon{position: absolute;width: 240px;height:35px;font:20px/35px '微软雅黑';border-radius: 35px;border:1px solid #fff;top:0;left:0;bottom:0;right:0;margin:auto;text-align: center;color:#fff;}
	.addbank li .addcon:before{content: '';position: absolute;width:100px;height:100px;background: url('../assets/img/camera.png') ;top:-100%;right:-50px;}
	.addbank li .bankshow:before{content: 'BANK';position: absolute;color:rgba(255,255,255,.1);font-size: 100px;line-height: 1;font-weight: bold;transform: skew(-15deg);}

	.selecWay>div.action{position: relative;border:1px solid #07CBBD;}
	.selecWay>div.action:before{content: '';position: absolute;right:-20px;bottom:-20px;width: 0;height:0;border:20px solid transparent; border-left:20px solid #07CBBD;transform: rotate(45deg);}
	.selecWay>div.action:after{content: '';position: absolute;right:5px;bottom:5px;width: 5px;height:10px;border-style: solid;border-color: #fff;border-width: 0 1px 1px 0;transform: rotate(45deg);}
	.selecWay>div.action span{background-image: linear-gradient(#5feae2,#71a0f2);color:#fff;}
	.line:before{position: absolute;content: '';width: 10px;border-top:1px solid #9d9d9d;right:0;bottom:5px;transform: rotate(45deg);}
	.day p{width: 20%;margin: 1rem 0;border-radius: 50%;}
	.day p.action{background:#07CBBD;color:#fff;}
</style>