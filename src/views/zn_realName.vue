<template>
	<div>
	<headernav headTip="实名认证" backUrl="./zhinenghk"></headernav>

	<div class="content">
		<ul class="userinfo-bank">
			<li>
				<span>姓名</span>
				<input type="text" placeholder="请输入真实姓名" v-model="name"/>
				<div class="tish1"></div>
			</li>
			<li>
				<span>身份证</span>
				<input type="text" placeholder="请输入真实身份证号" v-model="idcard"/>
				<div class="tish2"></div>
			</li>
			<li>
				<span>手机号</span>
				<input type="text" placeholder="请输入手机号" v-model="phone"/>
				<div class="tish5"></div>
			</li>

		</ul>

		<div class="center pad-t-5">
			<input type="checkbox" checked="checked" class="vmid" /><span class="f12">阅读并同意</span>
			<div class="color-green" @click="xieyi">《众盈服务平台协议》</div>
		</div>

		<div class="button bg-green" @click="realName">确 定</div>
		<p class="pad-l-r-1 color-gray">温馨提示：请仔细核对<b>实名认证信息</b>，如信息错误将会导致功能无法使用(仅限本人使用)。</p>
	</div>

		<!--协议alert-->
		<div class="mask" v-if="mask">
		<div class="col-8 auto bg-white border-radius-5 pad-1 color-gray" >
			<p class="center pad-5-1 f18">众盈服务平台服务协议</p>
			<div class="line-height-2 " style="height:400px;overflow-y: auto;">
				一、声明与承诺<br/>
				（一）请您确认，在您注册成为“众盈服务平台”用户以接受本服务，使用本服务前，您已充分阅读、理解并接受本协议的全部内容，一旦您使用本服务，即表示您同意遵循本协议之左右约定。
				<br/>
				（二）您同意，本公司有权随时对协议内容进行单方面的变更，并以在本网站公告的方式予以公布，无需另行单独通知您；若您在本协议内容公告变更后继续使用本服务的，表示您已充分阅读、理解并接受修改的协议内容，也将遵循修改后的协议内容使用本服务；若您不同意修改后的协议内容，您应停止使用本服务。
				<br/>
				（三）您保证，在您同意接受本协议并注册成为“众盈服务平台”的用户时，您已经年满18周岁，或者您是在中国大陆地区合法开展经营活动或其他业务的法人或其他组织；本协议内容不受您所属国家或地区法律的排斥。不具备前述条件的，您应立即终止注册或停止使用本服务。您在使用支付宝或网银服务时，应自行判断对方是否是完全民事行为能力人并自行决定是否与对方进行交易或转账给对方等，且您应自行承担与此相关的所有风险。
				<br/>
				（四）您同意，您在“众盈服务平台”上发生的所有交易，同时本公司有权从“众盈服务平台”获取您的相关信息。本公司按照“众盈服务平台”的指令进行资金的冻结。扣划完全来自您的授权，本公司对因此给您造成的任何损失均不承担责任。
				 <br/>
				二、关于“众盈服务平台”收费说明
				<br/>
				（一）所有在“众盈服务平台”购买的产品，都不允许任何形式的退换。
				<br/>
				（二）用户付完款后可以在个人中心看到已买到的产品，之后可以进行使用。
				<br/>
				（三）在“众盈服务平台”充值的金额仅能作为在“众盈服务平台”购买产品使用，不找零，不进行兑换现金服务。
				 <br/>
				三、支付服务使用限制
				<br/>
				（一）您在使用本服务时应遵守中华人民共和国相关法律法规、您所在国家或地区之法令及相关国际惯例，不将本服务用于任何非法目的（包括用于禁止或限制交易物品的交易），也不以任何非法方式使用本服务。
				<br/>
				（二）您不得利用本服务从事侵害他人合法权益之行为，否则本公司有权拒绝提供本服务，且您应承担所有相关法律责任，因此导致本公司或本公司雇员或其他方受损的，您应承担赔偿责任。上述行为包括但不限于：
				<br/>
				1、侵害他人名誉权、隐私权、商业秘密、商标权、著作权、专利权等合法权益。
				<br/>
				2、违反依法定或约定之保密义务。
				<br/>
				3、冒用他人名义使用本服务。
				<br/>
				4、从事不法交易行为，提供黄色、赌博、暴力等不良信息。

			</div>
			<div class="button bg-green" @click="xyYes">我知道了</div>
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
				name:'',
                idcard:'',
				phone:'',
                mask:false,
				loading:false,
			}
		},
		methods:{
            realName(){
                this.loading=true;
                var myregphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机号码
                var sfzh_num=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/; //身份证号码
                if(this.name==''||this.idcard==''||this.phone==''){
                    alert('请填写完整信息');
                    this.loading=false;
                    return;
				}
				if(!sfzh_num.test(this.idcard)){
                    alert('身份证号格式不正确');
                    this.loading=false;
                    return;
				}
				if(!myregphone.test(this.phone)){
                    alert('手机号码错误');
                    this.loading=false;
                    return;
				}
				var data={
				    params:{}
				};
				data.params.user_id=localStorage.id;
				data.params.randpwd=localStorage.token;
				data.params.phone=this.phone;
				data.params.idcard=this.idcard;
				data.params.name=this.name;
                var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/znhkbank/register',data,config).then(res=>{
					console.log(res.data);
					if(res.data.error !=='success'){
					    alert(res.data.msg);
                        this.loading=false;
					}else{
					    this.$router.push({path:'./zhinenghk2'});
                        this.loading=false;
					}
				}).catch(err=>{
				    alert('请求失败');
                    this.loading=false;
				})
			},
            xieyi(){
                this.mask=true
            },
            xyYes(){
                this.mask=false
            }
		}
	}
</script>

<style scoped>

</style>
