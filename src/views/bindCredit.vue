<template>
	<div>
	<headernav headTip="绑定信用卡" backUrl="./zhinenghk2"></headernav>
	
	<div class="content">
		<ul class="pad-l-r-1 bg-white line-height-1">
			<li>
				<span>姓名</span>
                <span class="fr color-gray" v-html="name"></span>
			</li>
			<li>
				<span>身份证号</span>
                <span class="fr color-gray" v-html="idcard"></span>
			</li>
			<li class="re">
				<span>卡号</span>
				<input class="fr right" type="text" placeholder="请输入信用卡号" v-model="creditCardNo" />
				<div class="zhichi ab f12 color-blue flex" @click="lookBank"><img src="../assets/img/eye_icon2.png" alt="" width="15" />查看支持卡行</div>
				<ul class="ab col-10 bg-white" style="top:50px" v-if="bankShow">
					<li>工商银行</li>
					<li>上海银行</li>
					<li>中信银行</li>
					<li>邮储银行</li>
					<li>中国银行</li>
					<li>民生银行</li>
					<li>招商银行</li>
					<li>兴业银行</li>
					<li>浦发银行</li>
					<li>平安银行</li>
					<li>农业银行</li>
					<li>交通银行</li>
					<li>建设银行</li>
					<li>华夏银行</li>
					<li>广发银行</li>
					<li>光大银行</li>
					<li>北京银行</li>
				</ul>
			</li>
            <li>
                <span>开户行</span>
                <input class="fr right" type="text" placeholder="请输入开户行" v-model="bankname" />
            </li>
			<li>
				<span>手机号</span>
				<input class="fr right" type="text" placeholder="请输入信用卡预留手机号" v-model="mobile" />
			</li>
			<!--<li>-->
				<!--<span>额度</span>-->
				<!--<input class="fr right" type="text" placeholder="请输入信用卡额度" v-model="limit" />-->
			<!--</li>-->
			<!--<li>-->
				<!--<span>信用卡额度</span>-->
				<!--<input class="fr right" type="text" placeholder="请输入信用卡额度" />-->
			<!--</li>-->
			<!--<li>-->
				<!--<span>短信验证码</span>-->
                <!--<span class="fr yzm" @click="yzm" v-html="yzNum"></span>-->
				<!--<input class="fr right mar-r-5" style="width: 30%;" type="text" placeholder="请输入验证码" v-model="inputYzm" />-->
			<!--</li>-->
		</ul>	
		<div class="button bg-green" @click="addBtn">确 定</div>
	</div>
	
	<!--支持信用卡alert-->
	<div class="mask none">
		<div class="col-8 auto bg-white border-radius-5 pad-1 none">
			<div class=" flex flex-r-w flex-start-x pad-b-5">
				<p>交通银行</p>
				<p>浦发银行</p>
				<p>民生银行</p>
				<p>平安银行</p>
				<p>交通银行</p>
				<p>浦发银行</p>
				<p>民生银行</p>
				<p>平安银行</p>
			</div>
			<div class="pad-t-1 border-t-gray center" @click="">确 定</div>
		</div>
		
	</div>

    <!--loading-->
    <loading v-if='loading' :loading='loading'></loading>

	</div>
	
	
</template>

<script>
    import loading from '../components/loading'
	export default{
		data(){
			return{
                creditCardNo:'',
                bankname:'',
                mobile:'',
				limit:'',
                inputYzm:'',
                yzNum:'获取验证码',
                name:'暂无姓名',
                idcard:'0000',
                bankShow:false,
                status:0,
                loading:false,
			}
		},
        components:{
            loading,
        },
		mounted: function(){
		    var data={
		        params:{}
			};
            data.params.ID=localStorage.id;
            data.params.randpwd=localStorage.token;
            var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
            this.axios.get(this.Global.hostUrl+'mobile/znhk/findUser',data,config).then(res=>{
                console.log(res.data);
                if(res.data.error=='success'){
                    this.name=res.data.data.user_name;
                    this.idcard=res.data.data.user_idcard;
				}else{
                    alert(res.data.msg)
				}

            }).catch(err=>{
                alert('请求失败')
            })
		},
		methods:{
            yzm(){
                var myregphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机号码
                if(this.mobile==''){
                    alert('请输入手机号码');
                    return;
                }else if(!myregphone.test(this.mobile)){
                    alert('手机号码错误');
                    return;
                }else{
                    var th=this;
                    var num=60;
                    if(th.status==0){
                        var time=setInterval(function(){
                            num--;
                            if(num>0){
                                th.status=1;
                                th.yzNum=num+'后重新发送'
                            }else{
                                num=60;
                                th.yzNum='获取验证码';
                                clearInterval(time);
                                th.status=0;
                            }
                        },1000);
                        var data={
                            params:{}
                        };
                        data.params.tel=this.mobile;
                        var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
                        this.axios.get(this.Global.hostUrl+'mobile/Smstest/Index',data,config).then((res) => {
                            console.log(res.data);
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
            lookBank(){
				this.bankShow= !this.bankShow;
			},
			addBtn(){
                var th=this;
                var myregphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机号码
			    if(this.creditCardNo==''||this.mobile==''||this.bankname==''){
			        alert('请填写完整信息');
					return;
				}else if(!myregphone.test(this.mobile)){
                    alert('手机号码错误');
                    return;
                }else{
			        th.loading=true;
                    var data={
                        params:{}
                    };
                    data.params.user_id=localStorage.id;
                    data.params.randpwd=localStorage.token;
                    data.params.bankCardNo=this.creditCardNo;
                    data.params.bindMobile=this.mobile;
                    data.params.bankname=this.bankname;
                    // data.params.limit=this.limit;
                    var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
                    this.axios.get(this.Global.hostUrl+'mobile/znhk/bindOrPay',data,config).then(res=>{
                        console.log(res.data);
                        if(res.data.error !=='success'){
                            th.loading=false;
                            alert(res.data.msg)
                        }else{
                            window.andriod.router(res.data.data.url);
                            th.loading=false;
                            setTimeout(function () {
								th.$router.push({path:'./zhinenghk2'})
                            },3000)
                        }

                    }).catch(err=>{
                        alert('请求失败')
                    });

                    // data.params.user_id=localStorage.id;
                    // data.params.randpwd=localStorage.token;
                    // data.params.creditCardNo=this.creditCardNo;
                    // data.params.mobile=this.mobile;
                    // data.params.name=this.name;
                    // data.params.idcard=this.idcard;
                    // data.params.bankname=this.bankname;
                    // data.params.yzm=this.inputYzm;
                    // var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
                    // this.axios.get(this.Global.hostUrl+'mobile/znhkbank/addBankCard',data,config).then(res=>{
                    //     console.log(res.data);
                    //     if(res.data.error !=='success'){
                    //         th.loading=false;
                    //         alert(res.data.msg)
                    //     }else{
                    //         this.$router.push({path:'./zhinenghk2'});
                    //         th.loading=false;
                    //     }
                    //
                    // }).catch(err=>{
                    //     alert('请求失败')
                    // })
                }

			}
		}
	}
</script>

<style scoped>
	ul li{padding:.8rem 0;border-bottom:1px solid #e6e6e6;}
	ul li input{width: 60%;border:none;outline:none;}
	ul li .yzm{padding:.3rem .6rem;background: #0f7dd9;border-radius:5px;font-size: 12px;color:#fff;margin-top:-4px;}
	ul li .zhichi{bottom:-2px;}
	.mask p{padding:.5rem;}
</style>