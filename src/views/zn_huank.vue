<template>
	<div>
	<headernav headTip="还款计划" backUrl="./zhinenghk2"></headernav>
	
	<div class="content">
		<div class="huankHead">
			<div class="border-b-white pad-t-b-1">
				<div class="pad-t-b-5">总代还金额</div>
				<div>
					￥ <span class="f30">{{money}}</span>
				</div>
			</div>
			<div class="flex flex-start-y space-ard line-height-2 pad-t-b-1">
				<div>
					开始时间
					<div>{{nowDate}}</div>
				</div>
				<div class="re">
					<div>{{tian}}天</div>
					<hr class="line mar-t-1" />
				</div>
				<div>
					结束时间
					<div>{{newDate}}</div>
				</div>
				<div>
					总服务费
					<div>￥{{fee}}</div>
				</div>
			</div>
		</div>
		<div class="pad-5 color-gray">卡内最低预留金额：<span class="color-red">{{over}}元</span></div>

		<ul v-if="hkList" class="huank pad-1 f15 line-height-1" style="min-height: 40vh;">
			<li class="flex flex-start-y" v-for="(item,index) in hkList">
				<div class="pad-l-r-1">{{item.datetime}}</div>
				<div class="con">
					<div>
						<p>代偿金额:￥<span>{{item.money}}</span></p>
						<!--<span class="color-gray f12">服务费:￥ <span>{{cItem.stagesFee/100}}</span></span>-->
					</div>

				</div>
			</li>

		</ul>
        <ul v-else class="pad-1 center" v-html="load"></ul>
		
		<div class="button bg-green" v-show="isApply" @click="getApply">确定申请</div>

		<!--loading-->
		<loading v-if='loading' :loading='loading'></loading>


	</div>
	</div>
</template>

<script>
    import loading from '../components/loading'
	export default {
        components:{
            loading,
        },
	    data(){
	        return{
	            money:'',
	            nowDate:'',
                newDate:'',
                tian:'0',
                fee:'0.00',
                // hkList:[{
	             //    days:'0000-00-00',
                //     list:[{
                //         stagesAmt:'',
                //         stagesFee:'',
                //     }]
                // }],
                hkList:false,
                over:0,
                load:'数据加载中....',
                isApply:true,
                selecCard:'',
                selecCardName:'',
				loading:false,
            }

		},
		mounted: function(){
	        // this.money=localStorage.amount;
            this.newDate=localStorage.newDate;
            this.nowDate=localStorage.nowDate;
            // this.tian=localStorage.hkday;
			// this.fee=localStorage.fee;

            this.money=this.$route.query.money;
            this.tian=this.$route.query.tian;
            this.selecCard=this.$route.query.selecCard;
            this.selecCardName=this.$route.query.selecCardName;
            console.log(this.selecCard);

            var data={
                params:{}
            };
            data.params.user_id=localStorage.id;
            data.params.randpwd=localStorage.token;
            data.params.amount=this.money;
            data.params.day=this.tian;
            // data.params.orderid=localStorage.orderId;
            var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
            this.axios.get(this.Global.hostUrl+'mobile/znhk/setlist',data,config).then(res=>{
                console.log(res.data);
                console.log(localStorage.id);
                var th=this;
                if(res.data.error=='success'){
                    this.hkList=res.data.data.result;
                    this.over=res.data.data.over;
                    this.fee=res.data.data.fee;
                }else{
                    // alert(res.data.msg)
                }
                if(res.data.data.data==null||res.data.data.data==''){
                    th.load='暂无数据'
                }


            }).catch(err=>{
                alert('请求失败')
            });

            if(this.hkList==true){
                this.isApply=false;
			}else{
                this.isApply=true;
			}
		},
		methods:{
            getApply(){
                this.loading=true;
                var data={
                    params:{}
				};
                data.params.user_id=localStorage.id;
                data.params.randpwd=localStorage.token;
                data.params.cardLastNo=this.selecCard;
                data.params.bankname=this.selecCardName;

				var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/znhk/getlist',data,config).then(res=>{
					console.log(res.data);
					if(res.data.error=='success'){
					    alert(res.data.msg);
                        this.loading=false;
                        this.$router.push({path:'/zn_jiaoyijilu'});
					}else{
					    alert(res.data.msg);
                        this.loading=false;
					}
				}).catch(err=>{
				    alert('请求失败');
                    this.loading=false;
				})
			}
		}
	}
</script>

<style scoped>
	.huankHead{background-image: linear-gradient(#01f6b9,#04beca);color:#fff;text-align: center;}
	.huank .con{padding-left: 1rem;border-left:1px solid #e6e6e6;flex:1;}
	.huank .con>div{position: relative;padding-bottom: .5rem;}
	.huank .con>div:before{position: absolute;content: '';width: 7px;height:7px;border-radius:50%;background:#0f7dd9;left:-20px;top:5px;}
	hr.line{color:#fff;background:#fff;}
	hr.line:before{border:1px solid #fff;}
</style>