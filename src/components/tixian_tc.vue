<template>
	<div class="mask" v-show="mask">
		<div class="tixian-tc col-8 auto bg-white hidden re" style="border-radius: 10px;">
			<div class="pad-1 bg-green f20 center color-white">提现金额</div>
			<div class="f15 pad-1">
				<div class="pad-b-5">
					可提现金额：
					<span>{{tx.money}}</span>
				</div>
				<div class="pad-b-5 flex flex-start-x flex-start-y line-height-2">
					指定银行：
					<div class="selec_banktc re col-6 " @click="bankshow">
						<span ref="cont">{{currentBank.bank_class}}</span>
						<span class="bankTckh">{{currentBank.bank_num}}</span>
						<ul class="selec_bankbox " v-show="banklist" >
							<li v-for="(item,index) in tx.bank" @click="seleItem(index)">{{item.bank_class}}</li>
						</ul>
					</div>
				</div>
				<label class="" for="">
					<div>提现金额：</div>
					<input class="pad-5 col-10 mar-t-b-5 f18 border-gray" name="" v-model="moneyVal" type="text" placeholder="请输入50以上金额" />
				</label>
				<div class="pad-b-5">
					手机号：
					<input class="border-gray pad-5" type="text" placeholder="请输入手机号" v-model="phone">
				</div>
				<div class="pad-b-5">
					验证码：
					<input class="col-4 border-gray pad-5" type="text" placeholder="请输入验证码" v-model="yzm">
					<span class="fr f12 bg-green color-white pad-5 border-radius-5" @click="getYzm" v-html="sendYzm"></span>
				</div>
				<div class="color-gray f12">
					注：请审核对银行信息是否正确。
					       提现时间为9：00 -  12：00、14：00 - 18：00
					     （节假日除外，2小时到账。）
				</div>
				<div class="flex space-ard center mar-t-1 f18">
					<div class="close col-4 bg-gray border-radius-5 pad-5" @click="isHide">取消</div>
					<div class="col-4 bg-green  border-radius-5 pad-5 color-white" @click="applyBtn">申请</div>
				</div>
			</div>
		</div>
		
		<input type="hidden" name="userName" v-model="inputtext.userName" />
		<input type="hidden" v-model="bankDetail" />
		
	</div>
	
	
		
</template>

<script>
	export default{
		props: {
	      // 接收一个由父级组件传递过来的值
	      mask:Boolean,
	      
	    },
		data(){
			return{
				banklist:false,
				moneyVal:'',
				tx:[],
				inputtext:{},
				userName:'',
				bankDetail:{},
				currentBank:{},
				yzm:'',
                sendYzm:'发送验证码',
                phone:'',
				then:0,
                second:60,
                money:'',
			}
		},
//		created(){
//			if(window.localStorage.getItem('id')=="" || window.localStorage.token==""){
//				this.$router.push({path:'./login'})
//			}else{
//				this.$router.push({path:'./mycenter'})
//			}
//		},

		methods:{
			isHide(){
				this.$emit("hideBox",false)
			},
			bankshow(){
				this.banklist= !this.banklist
			},
			seleItem(index){
      			this.currentBank=this.tx.bank[index];
			},
            getYzm(){
                var th=this;
                var myregphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机号码
                if(this.phone=="" ){
                    alert('手机号为空')
                }else if(!myregphone.test(this.phone)){
                    alert('手机号码错误')
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
                        data.params.ID=localStorage.id;
                        data.params.randpwd=localStorage.token;
                        data.params.tel=this.phone;
                        var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
                        this.axios.get(this.Global.hostUrl+'mobile/Smstest/Index',data,config).then((res) => {
                            // console.log(res.data);
                            if(res.data.error !=="success"){
                                alert(res.data.msg)
                            }else{
//								alert('发送成功')
                            }

                        }).catch(err=>{
                            alert('请求失败')
                        })
                    }



                }
			},
			applyBtn(){
				//console.log(1);//zheli这里传过去apply 表示父级的apply方法接收这个参数

				this.$emit("apply",{'money':this.tx.money,'bankLi':this.tx.bank});
				if(this.moneyVal<50){
					alert("请输入50元以上金额");
					return
				}
				if(this.phone==''){
                    alert("请输入手机号码");
                    return
				}
                if(this.yzm==''){
                    alert("请输入验证码");
                    return
                }

				var data={
					params:{}
				};
				data.params.ID=localStorage.id;
				data.params.randpwd=localStorage.token;
				data.params.txmoney=this.moneyVal;
				data.params.username=this.currentBank.username;
				data.params.bank_class=this.currentBank.bank_class;
				data.params.bank_info=this.currentBank.bank_info;
				data.params.bank_num=this.currentBank.bank_num;
				data.params.user_id=this.currentBank.user_id;
				data.params.phonenum=this.phone;
				data.params.yzm=this.yzm;
				var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/user/withdraw_deposit',data,config).then((res) => {
					// console.log(res.data);
					this.tx=res.data.data;
					var th=this;
					if(res.data.error =="success"){
						alert("申请成功，请等待审核");
                        this.$emit("hideBox",false)
						//th.mask=false;
					}else{
						alert(res.data.msg);
                        this.$emit("hideBox",false)
						//th.mask=false;
					}
//					this.mask=false;
//					this.$emit('mask',{'mask':this.mask})
//					console.log('dsga:'+this.mask)
				})
				

			}
		},
		mounted:function(){
			var data={
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/user/tx',data,config).then((res) => {
			  // console.log(res.data)
			  this.tx=res.data.data;
			  this.currentBank=res.data.data.bank[0];

			})
		}
	}
</script>

<style>
</style>