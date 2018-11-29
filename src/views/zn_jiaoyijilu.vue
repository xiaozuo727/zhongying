<template>
	<div>
		<headernav headTip="我的计划" backUrl="./zhinenghk"></headernav>

		<div class="content">
			<div class="line-height-2 bg-gray color-red center">请确保卡内余额充足，否则将造成还款中断</div>

			<ul v-if="recordList" class="pad-t-1">
				<li class="border-b-gray mar-b-1" v-for="(item,index) in recordList">
					<!--<div class="border-b-green">-->
						<!--<span class="date inline-block bg-green">{{item.days}}</span>-->
					<!--</div>-->
					<div class="pad-5-1">
						<span class="color-gray">时间：{{item.startdate}}</span>
						<span class="fr color-dgre" v-if='item.status==1'>待执行</span>
						<span class="fr color-dgre" v-else-if='item.status==2'>执行中...</span>
						<b class="fr color-green" v-else-if='item.status==3'>执行成功</b>
						<span class="fr color-red" v-else-if='item.status>3'>执行失败</span>

						<div class="flex pad-t-5 line-height-2">
							<img src="../assets/img/yinlian.jpg" alt="" width="30" />
							<div class="f1 pad-l-1">
								<p class="f15">{{item.bankname}}</p>
								<p>代偿金额:{{item.money}}  服务费:{{item.fee}}</p>
								<!--<span class="color-gray">{{item.date}}</span>-->
							</div>
							<!--<div @click="goDetail(cItem.transId,cItem.reservedAmount)"><i class="arrow mar-r-5"></i></div>-->
						</div>
					</div>
				</li>
			</ul>

			<ul v-else class="pad-1 center" v-html="loading"></ul>

		</div>
	</div>

</template>

<script>
	export default{
	    data(){
	        return{
                // recordList:[{
                //     days:'0000-00',
					// list:[{
                //         orderid:'',
                //         bankname:'暂无名称',
                //         money:0,
                //         fee:0,
                //         date:'0000-00-00 00:00:00',
                //         oriChannelOrderId:'',
                //         transId:'',
					// }],
                // }],
                recordList:false,
                loading:'数据加载中....',
			}
		},
		mounted: function(){
            var data={
                params:{}
            };
            data.params.user_id=localStorage.id;
            data.params.randpwd=localStorage.token;
            var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
            this.axios.get(this.Global.hostUrl+'mobile/znhk/gettasklist',data,config).then(res=>{
                console.log(res.data);
                var th=this;
                if(res.data.error== 'success'){
                    this.recordList=res.data.data;
					if(res.data.data==null ||res.data.data==''){
                        th.loading='暂无计划'
					}
				}else{
                    alert(res.data.msg)
				}

            }).catch(err=>{
                alert('请求失败')
			})
		},
		methods:{
            goDetail(id,amount){
                // console.log(i)
                this.$router.push({
					path:'./zn_jiaoyiDetail',
					query:{
                        // oriChannelOrderId:this.recordList[i].list.oriChannelOrderId,
                        transId:id,
                        reservedAmount:amount,
					}
                })
			}
		}
	}
</script>

<style scoped>
	.date{padding:.2rem 1rem;color:#fff;border-radius: 0 30px 0 0;font-size: 16px;}
</style>