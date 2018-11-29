<template>
	<div>
	<headernav headTip="智能还卡" backUrl="./zhinenghk"></headernav>
	
	<div class="content">
		<div class="addBox bg-gray">
			<!--<ul class="addbank pad-1 re">-->
				<!--<li v-for='(item,index) in xykList' @click="selecBank(index)">-->
					<!--<div class="bankshow re flex row-10 pad-l-1" >-->
						<!--<div class="bank-icon hidden">-->
							<!--<img src="../assets/img/yinlian.jpg" style="margin:-10% 0 0 -10%" alt="" width="120%" />-->
						<!--</div>-->
						<!--<div class="f1 color-white f18 line-height-2 center">-->
							<!--<div class="pad-t-5">{{item.bankname}}</div>-->
							<!--<div class="pad-b-5">{{item.xybank}}</div>-->
						<!--</div>-->
						<!--<div class="pad-l-r-1">-->
							<!--<span class="pad-2 border-white border-radius-5 color-white">信用卡</span>-->
						<!--</div>-->
					<!--</div>-->
				<!--</li>-->
			<!--</ul>-->
				<yd-slider  class="addbank re" :callback="sliderChange">
					<yd-slider-item v-for='(item,index) in xykList' :key="index" >
						<div class="list" @click="selecBank(index)">
							<div class="bankshow re flex row-10 pad-l-1" >
								<div class="bank-icon hidden">
									<img src="../assets/img/yinlian.jpg" alt=""/>
								</div>
								<div class="f1 color-white f18 line-height-2 center">
									<div class="pad-t-5">{{item.bankname}}</div>
									<div class="pad-b-5">{{item.xybank}}</div>
								</div>
								<div class="pad-l-r-1">
									<span class="pad-2 border-white border-radius-5 color-white">信用卡</span>
								</div>
							</div>
						</div>
					</yd-slider-item>
					<yd-slider-item>
						<div class="list">
							<div class="addcon" v-show="addbank" @click="addBank">+添加银行卡</div>
						</div>
					</yd-slider-item>
				</yd-slider>


		</div>
		<div class="pad-5-1 flex border-b-gray-5 space-ard center line-height-2">
			<div>
				开始日期
				<div>{{nowDate}}</div>
			</div>
			<div class="re">
				<!--<div class="color-green bold" @click="selecDay">{{tian}}天</div>-->
				<!--<hr class="line mar-t-1" />-->
				<div class="button bg-green" style="width: 100px;padding:.2rem;" @click="selecDay">{{tian}}天</div>
			</div>
			<div>
				结束日期
				<div>{{newDate}}</div>
			</div>
		</div>
		<div class="pad-1 border-b-gray-5">
			还款金额（元）
			<div class="border-b-gray pad-t-b-5 mar-t-5 color-black f20">
				￥<input class="f20 border-no outline-no" type="text" placeholder="最少申请金额500.00" v-model="money"/>
			</div>
		</div>
		<div class="pad-1">
			<!--选择方案-->
			<!--<div class="selecWay f12 line-height-2 mar-t-5 flex">-->
				<!--<div class="pad-5 border-radius-5 border-gray f1 mar-l-r-5" v-for="item,index in way" :class="{action:way1===index}" @click="selecWay(index)">-->
					<!--<div>-->
						<!--<p class="inline-block f15 color-black">{{item.tit}}</p>  -->
						<!--<span class="pad-l-r-5 bg-gray">{{item.more}}</span>-->
					<!--</div>-->
					<!--<div>服务费：￥{{item.serv}}</div>-->
					<!--<div>卡内预留：￥{{item.leave}}</div>-->
				<!--</div>-->

			<!--</div>-->
			<div class="button bg-green border-radius-30" @click="wayApply">生成计划</div>
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

	<!--loading-->
	<loading v-if='loading' :loading='loading'></loading>

	</div>
</template>

<script>
    import loading from '../components/loading'
	export default{
        components:{
            loading,
        },
		data(){
			return{
				money:'',
				mask:false,
				currentIndex:0,
                startTime:'',
				lastTime:'',
				way:[
                    // {
					// tit:'超低预留额度',
					// more:'更低',
					// serv:'服务费：￥0.00',
					// leave:'卡内预留：￥0.00',
					// },
					{
					tit:'超低服务费',
					more:'更省',
					serv:'0.00',
					leave:'0.00',
					number:'',
					},
				],
				way1:0,
				nowDate:'',
				newDate:'',
				addbank:true,
                // xykList:[{
				//     bankname:'暂无名称',
                 //    xybank:'0000',
				// }],
                xykList:[],
                orderId:'',
                loading:false,
				list: 0,
                tian:'10',
			}
		},
		watch: {
            // money: function (newVal, oldVal) {
            //     if(this.money==''){
            //         this.way[0].serv='0.00';
            //         this.way[0].leave='0.00';
            //     }else{
            //         if(this.money < 500)
				// 	{
				// 	    return false;
				// 	}
            //         var th=this;
            //         console.log(this.money);
            //         // this.loading=true;
            //         var data={
            //             params:{}
            //         };
            //         data.params.user_id=localStorage.id;
            //         data.params.randpwd=localStorage.token;
            //         data.params.amount=this.money;
            //         data.params.endData=localStorage.lastTime;
            //         data.params.creditCardNo=this.xykList[th.list].xybank;
            //         localStorage.setItem('amount',this.money);
            //         localStorage.setItem('selecCard',this.xykList[th.list].xybank);
            //         var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
            //         this.axios.get(this.Global.hostUrl+'mobile/znhkbank/appointSplit',data,config).then(res=>{
            //             console.log(res.data);
            //             if(res.data.error=='success'){
            //                 this.way[0].serv=res.data.data.data.fee/100;
            //                 this.way[0].leave=res.data.data.data.firstAmt/100;
            //                 this.way[0].number=res.data.data.data.number;
            //                 this.loading=false;
            //             }else{
            //                 th.$dialog.toast({mes: res.data.msg});
            //                 //alert(res.data.msg);
            //                 this.loading=false;
            //             }
            //         }).catch(err=>{
            //             alert('请求失败');
            //             this.loading=false;
            //         })
            //     }
            // },
            // tian:function(newVal, oldVal){
            //     if(this.tian=="10" && this.money==''){
            //
				// }else{
            //         if(this.money < 500)
            //         {
            //             return false;
            //         }
            //         var th=this;
            //         console.log(this.money);
            //         // this.loading=true;
            //         var data={
            //             params:{}
            //         };
            //         data.params.user_id=localStorage.id;
            //         data.params.randpwd=localStorage.token;
            //         data.params.amount=this.money;
            //         data.params.endData=localStorage.lastTime;
            //         data.params.creditCardNo=this.xykList[th.list].xybank;
            //         localStorage.setItem('amount',this.money);
            //         localStorage.setItem('selecCard',this.xykList[th.list].xybank);
            //         var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
            //         this.axios.get(this.Global.hostUrl+'mobile/znhkbank/appointSplit',data,config).then(res=>{
            //             console.log(res.data);
            //             console.log(111111111+localStorage.lastTime);
            //
            //             if(res.data.error=='success'){
            //                 this.way[0].serv=res.data.data.data.fee/100;
            //                 this.way[0].leave=res.data.data.data.firstAmt/100;
            //                 this.way[0].number=res.data.data.data.number;
            //                 this.loading=false;
            //             }else{
            //                 th.$dialog.toast({mes: res.data.msg});
            //                 //alert(res.data.msg);
            //                 this.loading=false;
            //             }
            //         }).catch(err=>{
            //             alert('请求失败');
            //             this.loading=false;
            //         })
				// }
            // }
		},
		mounted: function(){
			var now=new Date();
			var month=now.getMonth()+1;
			var date=now.getDate();
            this.nowDate=month+'月'+date+'日';

            var time=now.getTime();
            var lastDate=time+(10*1000*3600*24);
            var a=this.getNewDay(lastDate);
            this.newDate=a;
            this.lastTime=lastDate;

			localStorage.setItem('nowDate',this.nowDate);
            localStorage.setItem('newDate',this.newDate);
            localStorage.setItem('lastTime',this.lastTime);
            localStorage.setItem('hkday','10');
			localStorage.setItem('amount',this.money);

			var data={
			    params:{}
			};
            data.params.ID=localStorage.id;
            data.params.randpwd=localStorage.token;
            var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
            this.axios.get(this.Global.hostUrl+'mobile/znhk/xyk',data,config).then(res=>{
                console.log(res.data);
                var th=this;
                if(res.data.error=='seccess'){
                    th.xykList=res.data.data;
				}

            }).catch(err=>{
                alert('请求失败');
            });

		},
		methods:{
            sliderChange(res){
                console.log(res);
				this.list=res;
				console.log(this.xykList);
				this.money='';
				this.way[0].serv='0.00';
                this.way[0].leave='0.00';
			},
			selecDay(){
				this.mask=true
			},
			day(i){
				this.currentIndex=i;
				this.mask=false;
				this.tian=i+1;
				localStorage.setItem('hkday',this.tian);

				var th=this;
				var now=new Date();
				var time=now.getTime();
				var lastDate=time+(i*1000*3600*24);
				this.startTime=time;
				this.lastTime=lastDate;
				var current=time2(lastDate);
				function time2(lastDate){					
					var oDate=new Date();
					oDate.setTime(lastDate);
					var current=oDate.getMonth()+1+'月'+oDate.getDate()+'日';
					th.newDate=current;
					localStorage.setItem('newDate',th.newDate);
				}

				localStorage.setItem('startTime',this.startTime);
                localStorage.setItem('lastTime',this.lastTime);
			},
			selecWay(i){
				this.way1=i
			},
			addBank(){
				this.addbank=false;
				this.bankShow=true;
				this.$router.push({path:'./bindCredit'})
			},
            selecBank(i){
			    this.loading=true;
			    var data={
			        params:{}
				};
                data.params.user_id=localStorage.id;
                data.params.randpwd=localStorage.token;
                data.params.amount=this.money;
                data.params.endData=this.lastTime;
				data.params.creditCardNo=this.xykList[i].xybank;
                localStorage.setItem('amount',this.money);
				localStorage.setItem('selecCard',this.xykList[i].xybank);
				var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
                this.axios.get(this.Global.hostUrl+'mobile/znhkbank/appointSplit',data,config).then(res=>{
                    console.log(res.data);

					if(res.data.error=='success'){
						this.way[0].serv=res.data.data.data.fee/100;
						this.way[0].leave=res.data.data.data.firstAmt/100;
                        this.way[0].number=res.data.data.data.number;
                        this.loading=false;
                    }else{
                        alert(res.data.msg);
                        this.loading=false;
					}
                }).catch(err=>{
                    alert('请求失败');
                    this.loading=false;
                })
			},
            wayApply(){
                var th=this;
			    this.loading=true;
                if(this.money<500){
                    alert('请输入500元以上金额');
                    this.loading=false;

                }else if(th.xykList==''){
                    alert('未绑定信用卡');
                    this.loading=false;
				}else{
                    this.$router.push({
                        path:'./zn_huank',
                        query:{
                            money:this.money,
                            tian:this.tian,
                            selecCardName:this.xykList[th.list].bankname,
                            selecCard:this.xykList[th.list].xybank,

                        }
                    });
                    this.loading=false;

                    //
                    // var data={
                    //     params:{}
                    // };
                    // data.params.user_id=localStorage.id;
                    // data.params.randpwd=localStorage.token;
                    // data.params.amount=this.money;
                    // data.params.fee=this.way[0].serv;
                    // data.params.endData=localStorage.lastTime;
                    // data.params.creditCardNo=localStorage.selecCard;
                    //
                    // var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
                    // this.axios.get(this.Global.hostUrl+'mobile/znhkbank/sendPlan',data,config).then(res=>{
                    //     console.log(res.data);
                    //
                    //     if(res.data.error=='success'){
                    //         this.orderId=res.data.data.data.orderId;
                    //         localStorage.setItem('orderId',this.orderId);
                    //         localStorage.setItem('firstAmt',this.way[0].leave);
                    //         localStorage.setItem('fee',this.way[0].serv);
                    //         localStorage.setItem('bishu',this.way[0].number);
                    //         this.$router.push({
						// 		path:'./zn_huank',
						// 		query:{
                    //                 amount:this.money,
						// 			nowDate:this.nowDate,
						// 			newDate:this.newDate,
                    //                 firstAmt:this.way[0].leave,
                    //                 fee:this.way[0].serv,
						// 			number:this.way[0].number,
						// 		}
                    //         });
						// 	this.loading=false;
                    //     }else{
                    //         alert(res.data.msg);
                    //         this.loading=false;
                    //     }
                    // }).catch(err=>{
                    //     alert('请求失败');
                    //     this.loading=false;
                    // });
                }
            },
		}
	}
</script>

<style scoped>
	.content{color:#9d9d9d;}
	.addBox{overflow-x: auto;}
	.addbank{overflow:hidden;top:0;}
	.addbank .list{position: relative;height:150px;width:calc(100vw - 30px);border-radius:5px;box-shadow:0 5px 2px rgba(0,0,0,.1);background:linear-gradient(to right,#36ce85,#73ef8f) ;float:left;margin:15px;}
	.addbank .yd-slider-item:nth-child(3n-1) .list{background-image: linear-gradient(to right,#3d87e0,#5ef3e0);}
	.addbank .yd-slider-item:nth-child(3n) .list{background-image: linear-gradient(to right,#7587f5,#5df2df);}
	.addbank .list .addcon{position: absolute;width: 240px;height:35px;font:20px/35px '微软雅黑';border-radius: 35px;border:1px solid #fff;top:0;left:0;bottom:0;right:0;margin:auto;text-align: center;color:#fff;}
	.addbank .list .addcon:before{content: '';position: absolute;width:100px;height:100px;background: url('../assets/img/camera.png') ;top:-100%;right:-50px;}
	.addbank .list .bankshow:before{content: 'BANK';position: absolute;color:rgba(255,255,255,.1);font-size: 100px;line-height: 1;font-weight: bold;transform: skew(-15deg);}

	.selecWay>div.action{position: relative;border:1px solid #07CBBD;}
	.selecWay>div.action:before{content: '';position: absolute;right:-20px;bottom:-20px;width: 0;height:0;border:20px solid transparent; border-left:20px solid #07CBBD;transform: rotate(45deg);}
	.selecWay>div.action:after{content: '';position: absolute;right:5px;bottom:5px;width: 5px;height:10px;border-style: solid;border-color: #fff;border-width: 0 1px 1px 0;transform: rotate(45deg);}
	.selecWay>div.action span{background-image: linear-gradient(#5feae2,#71a0f2);color:#fff;}
	.line:before{position: absolute;content: '';width: 10px;border-top:1px solid #9d9d9d;right:0;bottom:5px;transform: rotate(45deg);}
	.day p{width: 20%;margin: 1rem 0;border-radius: 50%;}
	.day p.action{background:#07CBBD;color:#fff;}
</style>