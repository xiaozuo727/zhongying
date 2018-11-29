<template>
	<div>
	<headernav headTip="信用卡详情" backUrl="./creditCard"></headernav>
	
	<div class="content">
		<div class="loan-bg" >
			<div class="loan-sj">
				<div class="flex">
					<img :src="item.img" alt="" width="60" />
					<div class="pad-l-1">
						<div class="f15 pad-b-5">{{item.title}}</div>
						<div class="color-gray f12">
							<div>申请人数： <span>{{item.num}}</span>人</div>
							<div>批卡率： <span class="color-red">{{item.pika}}</span></div>
						</div>
					</div>
				</div>
				<div class="flex f15 space-ard mar-t-15">
					<div class="blue-btn-gradient btn" @click="isPoster">
						<img class="vmid mar-r-5" src="../assets/img/ewm-btn.png" alt="" width="20" />二维码
					</div>
					<div class="orange-btn-gradient btn" @click="fenxiang(i)">  
						<img class="vmid mar-r-5" src="../assets/img/share-btn.png" alt="" width="20" />分享
					</div>
				</div>
			</div>
		</div>

		<div class="loan-tit">奖励佣金</div>
		<div class="pad-1 color-green border-b-gray-5">
			您当前等级为：
			<img src="../assets/img/lv1.png" v-if="my.list.user_lv ==1 && my.list.vip_rank == 0" alt="30" width="30"/>
			<img src="../assets/img/huang1.png" v-if="my.list.user_lv ==1 && my.list.vip_rank == 1" alt="" width="30"/>
			<img src="../assets/img/huang2.png" v-if="my.list.user_lv ==2 && my.list.vip_rank == 1" alt="" width="30"/>
			<img src="../assets/img/huang3.png" v-if="my.list.user_lv ==3 && my.list.vip_rank == 1" alt="" width="30"/>
			<img src="../assets/img/lan1.png" v-if="my.list.user_lv ==1 && my.list.vip_rank == 2" alt="" width="30"/>
			<img src="../assets/img/lan2.png" v-if="my.list.user_lv ==2 && my.list.vip_rank == 2" alt="" width="30"/>
			<img src="../assets/img/lan3.png" v-if="my.list.user_lv ==3 && my.list.vip_rank == 2" alt="" width="30"/>
				
				
			<div class="flex space-ard center mar-t-15">
				<div>
					<img src="../assets/img/huang1.png" alt="" width="50" />
					<div>{{lv1}}</div>
				</div>
				<div>
					<img src="../assets/img/huang2.png" alt="" width="50" />
					<div>{{lv2}}</div>
				</div>
				<div>
					<img src="../assets/img/huang3.png" alt="" width="50" />
					<div>{{lv3}}</div>
				</div>
			</div>
			<div class="color-green right mar-t-1 f15 re">
				<img class="vmid" src="../assets/img/loan-guize.png" alt="" width="12" />
				<span class="guize-btn " @click="guizeShow">奖励规则</span>
				<span class="jiant">></span>
				<p class="guize-xl f12" v-if="guize">
					       客户首次注册申请该产品才算有效申请。贷款奖金按平台分发的标准进行结算,贷款奖金结算间 如遇到重大节假日可能会延迟到工作日,客户是首次注册并且申请成功方可结算佣金，若客户之 前有注册或申请该产品则为无效申请,无法计入到代理商名下的业绩,也无法拿到贷款奖金。贷 款号码必须与平台申请号码一致资料通过审批,但没有放款，也不会有贷款奖金。
						<br/>	注：贷款奖励佣金是由合作平台出资支付
				</p>
			</div>
		</div>
		
		<div class="loan-tit">申请条件</div>
		<div class="pad-1 border-b-gray-5 line-height-2">
			1、年龄18周岁以上<br/>
			2、征信良好<br/>
			3、详细信息请看下方申卡攻略
		</div>

		<div class="loan-tit">申请流程</div>
		<div class="pad-1 border-b-gray-5 line-height-2">
			<p>步骤1、填写资料</p>
			<p>步骤2、提交审核</p>
			<p>步骤3、银行核卡</p>

		</div>
		<div class="flex f16 pad-t-b-1 line-height-2">
			<div class="btn bg-green col-4 mar-r-1" @click="gongLue(item,item.newsid)">借款攻略</div>
			<div class="btn bg-green col-4" @click="isShow">立即申请</div>
		</div>
		
		<!--海报alert-->
		<div class="mask" v-show='poster'>
			<span @click="hidePoster" class="close-icon" style="top:10%;left:50%;transform: translateX(-50%);"></span>
			<div class="col-8 auto re" @click="share('推广海报',item.url)">
				<img :src="item.url" alt="" width="100%" />
				<!--<div class="ab col-10" style="height:45px;background: rgba(0,0,0,.5);left:0;bottom:3px"></div>-->
			</div>
		</div>
		
		<!--调用申请弹窗-->
		<applytc :mask="mask" @hideBox="isHide" v-model="mask" @apply="isApply"></applytc>
	</div>
	</div>
	
</template>

<script>
	import applytc from '../components/apply_tc'
	export default{
		components:{
			applytc,
		},
		data(){
			return{
				mask:false,
				guize:false,
				item:'',
				i:'',
				shareUrl:'',
				my:{
					list:{
						user_lv:'',
						vip_rank:'',
					}
				},
				name:'',
				sfz:'',
				phone:'',
				lv1:'',
				lv2:'',
				lv3:'',
				poster:false,
				logoUrl:'',
				gonglue:{
					id:'',
				}
			}
		},
//			传用户等级
		created: function(){
			console.log(this.$route.query.item);
			this.item=this.$route.query.item;
			var jin=parseFloat(this.$route.query.item.reward);
			this.lv1=jin*0.6+'元';
			this.lv2=jin*0.85+'元';
			this.lv3=jin*0.95+'元';
			
			var data={
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/user/index',data,config).then(res=>{
				console.log(res.data);
				this.my=res.data.data;
			}).catch(err=>{
				alert("请求失败")
			})
		},
		methods:{
			isShow(){
				this.mask=true
			},
			isHide(){
				this.mask=false
			},
			guizeShow(){
				this.guize=!this.guize
			},
			isApply(e){
				console.log(e);
				this.name=e.name;
				this.sfz=e.sfz;
				this.phone=e.phone;
				this.yzm=e.yzm;
								
				var myreg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/; //卡号
				var myregphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机号码
				var sfzh_num=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/; //身份证号码			
				if(this.name==''){
					alert('姓名为空')
					return;
				}
				if(this.sfz==''){
					alert('身份证号为空')
					return;
				}
				if(this.phone==''){
					alert('手机号为空')
					return;
				}
				if(this.yzm==''){
					alert('验证码为空')
					return;
				}
				if(!sfzh_num.test(this.sfz)){
					alert('身份证号格式不正确')
					return;
				}
				if(!myregphone.test(this.phone)){
					alert('手机号码错误')
					return;
				}
				var data={
					params:{}
				}
				data.params.ID=localStorage.id;
          		data.params.randpwd=localStorage.token;
          		data.params.name=this.name;
          		data.params.sfz=this.sfz;
          		data.params.phonenum=this.phone;
          		data.params.yzm=this.yzm;
          		data.params.title=this.item.title;
				var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get('http://qp.webziti.com/mobile/Creditcard/creditcard',data,config).then(res=>{
					console.log(res.data);
					if(res.data.error=='success'){
						window.location.href=res.data.data.url
					}else{
						alert(res.data.msg)
					}
					
				})
			},
			isPoster(){
				this.poster=true
			},
			hidePoster(){
				this.poster=false
			},
			fenxiang(i){			
				var data={
					params:{}
				}
				data.params.ID=localStorage.id;
          		data.params.randpwd=localStorage.token;
				data.params.i=i;
				var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/haibao/getlist_xy',data,config).then(res=>{
//					console.log(res.data);
					this.shareUrl=res.data.data;
					console.log(this.item.title)
					console.log(this.item.logoUrl)
					console.log(this.item.descr)
					console.log(this.shareUrl)
					
				}).catch(err=>{
					alert('请求失败')
				})
			},
			gongLue(item,id){
				item.fromPath = '/newcredit';
				this.$router.push({path:'./gonglueDetail',query:{newsid:id,item:item}})	
//				console.log('是不是'+id)
			}
		},

	}
</script>

<style scoped>
	@media only screen and (max-width: 320px) {
		.loan-bg{padding-top:5vh;}
	}
</style>