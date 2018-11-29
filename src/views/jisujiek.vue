<template>
	<div>
	<headernav headTip="极速借款" backUrl="./home"></headernav>
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
						<img :src="item.pic" alt="" width="50"/>
						<div class="company f14 ab">{{item.title}}</div>
					</div>
					<div class="f2 center">
						<div class="color-green">{{item.money}}</div>
						可贷额度
					</div>
					<div class="col-25 right">
						<div class="color-gray ellipsis">{{item.num}}申请</div>
						<div class="green-btn-s mar-t-5" @click="go_loandetail(item,index)" >一键申请</div>
					</div>
				</div>
				<div class="flex flex-start-x line-height-2">
					<img src="../assets/img/money-g.png" alt="" width="18"/>
					奖金：￥{{item.bonus}}
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
				loanList:[],
//				currentIndex:'',
			}
		},
		mounted: function(){
			var data={
			    params:{}
            };
            var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
            this.axios.get('http://server.webziti.com/mobile/index/jishu',data,config).then(res=>{
                console.log(res.data);
                this.loanList=res.data.data;
                for(var i in this.loanList){
//				console.log(i, typeof i);
                    this.loanList[i].url=this.Global.hostUrl+'mobile/haibao/dkhaibao?ID='+localStorage.id+'&i='+(parseInt(i)+1);
                    this.loanList[i].logoUrl=this.Global.hostUrl+'Public/img/loan_'+parseInt(i+1)+'.png';
                }
            });


		},
		methods:{
			go_loandetail(item,index){
//				var th = this;
//				this.currentIndex=th.loanList[index];
				this.$router.push({path:'./jisujiedetail', query:{item:item,i:(parseInt(index)+1)}});

			},
			ban(item,index){
                this.$router.push({path:'./jisujiedetail', query:{item:item,i:(parseInt(index)+1)}});
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