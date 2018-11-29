<template>
	<div>
	<headernav headTip="交易记录" backUrl="./zn_jiaoyijilu"></headernav>
	
	<div class="content">
		<div class="tishi color-red pad-5-1 line-height-2 indent-2 re">
			请确保还款期间每日卡内余额不少于￥{{reservedAmount}}，延长“结束日期”,可以降低卡内预留资金，欢迎再次使用。
		</div>
		<ul v-if="jilu" class="pad-l-r-1 line-height-2">
			<li class="pad-b-5" v-for="(item,index) in jilu">
				<p class="f16">{{item.days}}</p>
				<div class="pad-5 color-gray bg-white mar-b-5" v-for="(cItem,cIndex) in item.list">
					<div class="border-b-gray">
						订单编号：
						<span>{{cItem.subOrderId}}</span>
					</div>
					<div class="flex center pad-t-5">
						<div class="f1">
							代还金额
							<div class="color-black">￥<span>{{cItem.stagesAmt/100}}</span></div>
						</div>
						<div class="f1">
							服务费
							<div class="color-black">￥<span>{{cItem.stagesFee/100}}</span></div>
						</div>
						<div class="f1 color-blue">
							<span v-if="cItem.status==0">待执行</span>
							<span v-if="cItem.status==1">成功</span>
							<span v-if="cItem.status==2">待查询</span>
							<span v-if="cItem.status==3">待补发</span>
							<span v-if="cItem.status==4">待补发成功</span>
							<span v-if="cItem.status==5">待补扣</span>
							<span v-if="cItem.status==6">补扣成功</span>
							<span v-if="cItem.status==7">转催收</span>
							<span v-if="cItem.status==8">失败</span>
							<span v-if="cItem.status==9">人工置成功</span>
							<span v-if="cItem.status==10">催收成功</span>
							<span v-if="cItem.status==11">催收失败</span>
							<span v-if="cItem.status==12">人工置失败</span>
							<span v-if="cItem.status==13">处理中</span>
							<span v-if="cItem.status==14">人工取消</span>

						</div>
					</div>
				</div>
			</li>

		</ul>
		<ul v-else class="pad-1 center" v-html="loading"></ul>
		
	</div>
	</div>	
</template>

<script>
	export default {
	    data(){
	        return{
                oriChannelOrderId:'',
                transId:'',
                reservedAmount:0,
				// jilu:[{
                 //    days:'0000-00-00',
				// 	list:[{
                 //        subOrderId:'暂无',
                 //        stagesAmt:0,
                 //        stagesFee:0,
                 //        status:'状态',
				// 	}]
				// }],
				jilu:false,
				loading:'数据加载中....',

			}
		},
		mounted:function(){
	        this.transId=this.$route.query.transId;
	        this.reservedAmount=this.$route.query.reservedAmount;
            var th=this;
	        var data={
	            params:{}
			};
            data.params.user_id=localStorage.id;
            data.params.randpwd=localStorage.token;
            data.params.transId=this.transId;
			var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
	        this.axios.get(this.Global.hostUrl+'mobile/znhkbank/queryAppointApply',data,config).then(res=>{
				console.log(res.data);
				if(res.data.error=='success'){
                    this.jilu=res.data.data.data;
                    // this.orderId=res.data.data.data.orderId;
                    this.compAmount=res.data.data.data.compAmount/100;
                    this.compFee=res.data.data.data.compFee/100;

				}else{
                    this.loading='暂无交易记录';
				}

				if(res.data.data.data==null||res.data.data.data==''){
				    th.loading='暂无交易记录'
				}

			}).catch(err=>{
			    console.log(err);
                this.loading='暂无交易记录';
			    alert('请求失败')
			})
		}
	}
</script>

<style scoped>
	.content{background:#f3f3f3;}
	.tishi:before{content: '';position: absolute;width: 13px;height:13px;border-radius:50%;background:#0f7dd9;color:#000;left:1.5rem;top:.9rem;}
	.tishi:after{content: '!';color:#fff;position: absolute;left:5px;top:8px;}
</style>