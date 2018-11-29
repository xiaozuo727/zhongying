<template>
	<div>
	<headernav headTip="确认申请" backUrl="./zhinenghk2"></headernav>
	
	<div class="content">
		<div class="bg-white center pad-t-b-1 border-b-gray re">
			<div class="color-gray pad-t-b-5">代偿金额</div>
			<div class="f24">￥<span>{{amount}}</span></div>
			<div class="huank ab flex" @click="gotoHk">
				<img src="../assets/img/rili.png" alt="" height="14" />
				还款计划
			</div>

		</div>
		<div class="time bg-white center flex flex-start-y space-ard pad-5-1 mar-b-5 line-height-2">
			<div>
				<span>开始时间</span>
				<div>{{nowDate}}</div>
			</div>
			<div class="re">
				<span>{{hkday}}</span>
				<hr class="line mar-t-1" />
			</div>
			<div>
				<span>结束时间</span>
				<div>{{newDate}}</div>
			</div>
			<div>
				<span>总手续费</span>
				<div>{{fee}}元</div>
			</div>
		</div>

		<div class="bg-white">
			<div class="flex pad-5-1 border-b-gray">
				<img src="../assets/img/yinlian.jpg" alt="" width="40"/>
				<div class="f1 pad-l-5 line-height-2">
					<div>
						<span class="f16">{{name}}</span>
						<span class="color-gray">{{bankname}}</span>
						<span class="color-gray">信用卡</span>
					</div>
					<div>{{xybank}}</div>
				</div>
			</div>
			<ul class="pad-l-r-1 f15 line-height-1">
				<li class="pad-t-b-5 border-b-gray">
					<span>有效期</span>
					<input class="fr right" type="text" placeholder="MMYY,2018年3月到期即0318" v-model="txt1" />
				</li>
				<!--<li class="pad-t-b-5 border-b-gray">-->
					<!--<span>还款日</span>-->
					<!--<input class="fr right" type="text" placeholder="请输入还款日" v-model="txt2" />-->
				<!--</li>-->
				<li class="pad-t-b-5 border-b-gray">
					<span>CVN2</span>
					<input class="fr right" type="text" placeholder="卡片背面签字条的三位数字" v-model="txt3" />
				</li>
				<li class="pad-t-b-5 border-b-gray">
					<span>手机</span>
					<input class="fr right" type="text" placeholder="请输入手机号码" v-model="txt4" />
				</li>
				<li class="pad-t-b-5 border-b-gray">
					<span>短信验证码</span>
					<div class="fr getYzm" @click="getYzm" v-html="sendYzm">获取验证码</div>
					<input class="fr right mar-r-5" style="width: 30%;" type="text" placeholder="输入验证码" v-model="txt5" />
				</li>
			</ul>
		</div>
		
		<div>
			<p class="color-gray pad-1 line-height-1">
				1.本次申请将分 <span class="color-red">{{number}}笔</span>偿还，请确保当前信用卡可用额度大于<span class="color-red">{{firstAmt}}元。</span><br/>
				2.本次申请将在当日内完成，个别条件下可能需要<span class="color-red">2个工作日</span>，请留意银行短语。<br/>
				3.单卡单日限交易<span class="color-red">1次</span>，单卡单月累计限交易<span class="color-red">3次</span>。
			</p>
			<div class="button bg-green" @click="lastApply">确认申请</div>
		</div>
		
	</div>

	<!--loading-->
	<loading v-if='loading' :loading='loading'></loading>

	</div>
</template>

<script>
    import loading from '../components/loading'
	export default {
	    data(){
	        return{
	            amount:'',
				nowDate:'00:00',
				newDate:'00:00',
                hkday:'0天',
                firstAmt:'',
				fee:0,
				number:'',
				name:'暂无姓名',
                bankname:'无银行卡',
                xybank:'0000',
				txt1:'',
                txt2:'',
                txt3:'',
                txt4:'',
                txt5:'',
                channelOrderid:'',
				smsSignNo:'',
                loading:false,
                sendYzm:"发送验证码",
				then:0,
			}
		},
        components:{
            loading,
        },
		mounted: function(){
            // this.newDate=this.$route.query.newDate;
            // this.nowDate=this.$route.query.nowDate;
            // this.firstAmt=this.$route.query.firstAmt;
            // this.fee=this.$route.query.fee;
            // this.number=this.$route.query.number;
            this.amount=localStorage.amount;
            this.hkday=localStorage.hkday;
            this.nowDate=localStorage.nowDate;
            this.newDate=localStorage.newDate;
            this.fee=localStorage.fee;
			this.number=localStorage.bishu;
			this.firstAmt=localStorage.firstAmt;
			var data={
			    params:{}
			};
            data.params.user_id=localStorage.id;
            data.params.randpwd=localStorage.token;
            data.params.xybank=localStorage.selecCard;
            var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
            this.axios.get(this.Global.hostUrl+'mobile/znhkbank/xykbank',data,config).then(res=>{
                console.log(res.data);
                if(res.data.error=='success'){
					this.name=res.data.data.name;
					this.bankname=res.data.data.bankname;
					this.xybank=res.data.data.xybank;
                }else{
                    alert(res.data.msg)
                }
            }).catch(err=>{
                alert('请求失败')
            });

		},
		methods:{
            getYzm(){
                this.loading=true;
                var th=this;
                var num=60;
                var status=0;
                var myregphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机号码
                if(this.txt1==''||this.txt3==''||this.txt4==''){
                    alert('请填写完整信息');
                    this.loading=false;
					return;
				}else if(!myregphone.test(this.txt4)){
                    alert('手机号码错误');
                    this.loading=false;
                    return;
				}else{
                    var m=60;
                    var th=this;
                    if(th.then==0){
                        var time=setInterval(function(){
                            m--;
                            if(m>0){
                                th.sendYzm=m+'s后重新发送';
                                th.then=1;
                            }else{
                                m=60;
                                th.sendYzm='发送验证码';
                                th.then=0;
                                clearInterval(time)
                            }
                        },1000);

                        var data={
                            params:{}
                        };
                        data.params.user_id=localStorage.id;
                        data.params.randpwd=localStorage.token;
                        data.params.creditCardNo=localStorage.selecCard;
                        data.params.amount=this.amount;
                        data.params.fee=this.fee;
                        data.params.endData=localStorage.lastTime;
                        data.params.orderid=localStorage.orderId;
                        data.params.reservedAmount=this.firstAmt;
                        data.params.expiredDate=this.txt1;
                        // data.params.repaymentDate=this.txt2;
                        data.params.cvv2=this.txt3;
                        data.params.mobile=this.txt4;

                        var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
                        this.axios.get(this.Global.hostUrl+'mobile/znhkbank/ApplicationOrder',data,config).then(res=>{
                            console.log(res.data);
                            if(res.data.error == 'success'){
                                th.channelOrderid=res.data.data.data.channelOrderId;
                                th.smsSignNo=res.data.data.data.smsSignNo;
                                console.log(res.data.data.data.channelOrderId);
                                localStorage.setItem('channelOrderid',this.channelOrderid);
                                localStorage.setItem('smsSignNo',this.smsSignNo);
                                this.loading=false;
                                console.log(th.channelOrderid);
                                console.log(th.smsSignNo);
                            }else{
                                // alert(res.data.msg);
                                this.loading=false;
                            }

                        }).catch(err=>{
                            alert('请求失败');
                            this.loading=false;
                        });
					}

				}
			},
            lastApply(){
                this.loading=true;
                var data={
                    params:{}
                };
                data.params.user_id=localStorage.id;
                data.params.randpwd=localStorage.token;
                data.params.oriChannelOrderId=this.channelOrderid;
                data.params.smsSignNo=this.smsSignNo;
                data.params.vercode=this.txt5;
                data.params.money=this.amount;
                data.params.fee=this.fee;
                data.params.endData=localStorage.lastTime;
                data.params.orderid=localStorage.orderId;
				data.params.creditCardNo=localStorage.selecCard;
				data.params.reservedAmount=this.firstAmt;
				data.params.bankname=this.bankname;
                console.log(data.params);
                var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
                this.axios.get(this.Global.hostUrl+'mobile/znhkbank/CreateAnOrder',data,config).then(res=>{
                    console.log(res.data);
                    console.log(data.params.oriChannelOrderId);
					if(res.data.error=='success'){
						// this.$dialog.toast({mes:'提交成功'});
						alert('提交成功');
					    this.$router.push({path:'./zhinenghk2'});
                        this.loading=false;
					}else{
					    alert(res.data.msg);
                        this.loading=false;
					}
                }).catch(err=>{
                    alert('请求失败');
                    this.loading=false;
                });
			},
            gotoHk(){
                this.$router.push({path:'./zn_huank'})
			}
		}
	}
</script>

<style scoped>
	.content{background:#f3f3f3;}
	.huank{top:1rem;right:1rem;color:#07CBBD;font-size:12px;}
	ul li input{width: 65%;border: none;outline: none;line-height: 30px;}
	.time>div>span{color: #909090;}
	.getYzm{padding:.3rem .6rem;background:#0f7dd9;border-radius:5px;color:#fff;font-size:12px}
</style>