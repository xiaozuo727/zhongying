<template>
	<div>
	<headernav headTip="借款详情" backUrl="./jisujiek"></headernav>

	<div class="content">
		<div class="loan-bg">
			<div class="loan-sj">
				<div class="flex">
					<img :src="item.pic" alt="" width="60" />
					<div class="pad-l-1">
						<div class="f15 pad-b-5">{{item.title}}</div>
						<div class="color-gray f12">
							<div>申请人数： <span>{{item.num}}</span>人</div>
							<div>可贷款额度： <span class="color-red">{{item.money}}</span></div>
						</div>
					</div>
				</div>

					<div class="orange-btn-gradient mar-t-15 border-radius-30 center color-white f16 line-height-2" @click="apply">
						立即申请
					</div>
				</div>
		</div>

		<div class="loan-tit">奖励佣金</div>
		<div class="pad-1 color-green border-b-gray-5">
			您当前等级为：
				<img src="../assets/img/lv1.png" v-if="my.list.user_lv ==1 && my.list.vip_rank == 0" alt="30"  width="30"/>
				<img src="../assets/img/huang1.png" v-if="my.list.user_lv ==1 && my.list.vip_rank == 1" alt="" width="30"/>
				<img src="../assets/img/huang2.png" v-if="my.list.user_lv ==2 && my.list.vip_rank == 1" alt="" width="30"/>
				<img src="../assets/img/huang3.png" v-if="my.list.user_lv ==3 && my.list.vip_rank == 1" alt="" width="30"/>
				<img src="../assets/img/lan1.png" v-if="my.list.user_lv ==1 && my.list.vip_rank == 2" alt="" width="30"/>
				<img src="../assets/img/lan2.png" v-if="my.list.user_lv ==2 && my.list.vip_rank == 2" alt="" width="30"/>
				<img src="../assets/img/lan3.png" v-if="my.list.user_lv ==3 && my.list.vip_rank == 2" alt="" width="30"/>

			<!--<img class="vmid" src="../assets/img/huang1.png" alt="" width="40" />-->
			<div class="flex space-ard center mar-t-15">
				<div>
					<img src="../assets/img/lan1.png" alt="" width="50" />
					<div>{{lv1}}</div>
				</div>
				<div>
					<img src="../assets/img/lan2.png" alt="" width="50" />
					<div>{{lv2}}</div>
				</div>
				<div>
					<img src="../assets/img/lan3.png" alt="" width="50" />
					<div>{{lv3}}</div>
				</div>
			</div>
			<div class="color-green right mar-t-1 f15 re">
				<img class="vmid" src="../assets/img/loan-guize.png" alt="" width="12" />
				<span class="guize-btn " @click="guizeShow">奖励规则</span>
				<span class="jiant">></span>
				<p class="guize-xl f12" v-show="guize">
					       客户首次注册申请该产品才算有效申请。贷款奖金按平台分发的标准进行结算,贷款奖金结算间 如遇到重大节假日可能会延迟到工作日,客户是首次注册并且申请成功方可结算佣金，若客户之 前有注册或申请该产品则为无效申请,无法计入到代理商名下的业绩,也无法拿到贷款奖金。贷 款号码必须与平台申请号码一致资料通过审批,但没有放款，也不会有贷款奖金。
						<br/>	注：贷款奖励佣金是由合作平台出资支付
				</p>
			</div>
		</div>

		<div class="loan-tit">申请条件</div>
		<div class="pad-1 border-b-gray-5 line-height-2">
			{{item.content}}
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
		<applytc :mask="mask" v-model="mask" @hideBox="isHide" @apply="isApply"></applytc>

	</div>
	</div>

</template>

<script>
    function htmlspecialchars_decode(str){
        str = str.replace(/&amp;/g, '&');
        str = str.replace(/&lt;/g, '<');
        str = str.replace(/&gt;/g, '>');
        str = str.replace(/&quot;/g, "''");
        str = str.replace(/&#039;/g, "'");
        return str;
    }

	import applytc from '../components/apply_tc'
	import loading from '../components/loading'
	export default{
		data(){
			return{
				mask:false,
				guize:false,
				item:{},
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
				yzm:'',
				lv1:'',  //等级奖励
				lv2:'',  //等级奖励
				lv3:'',  //等级奖励
				poster:false,
				loading:false,
				logoUrl:'',
				gonglue:{
					id:'',
				},

			}
//			props:{
//				index:Number,
//			}
		},

//			传用户等级
		created: function(){
			this.item=this.$route.query.item;
			this.i=this.$route.query.i;

//			console.log(parseFloat(this.$route.query.item.reward));
			var pat=new RegExp(/^((\d+\.?\d*)|(\d*\.\d+))\%$/);
			var sign=pat.test(this.$route.query.item.bonus)?"%":"元";
			var jin=parseFloat(this.$route.query.item.bonus);
			this.lv1=(jin*0.5).toFixed(2)+sign;
			this.lv2=(jin*0.6).toFixed(2)+sign;
			this.lv3=(jin*0.7).toFixed(2)+sign;

			var data={
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.$http.get(this.Global.hostUrl+'mobile/user/index',data,config).then(res=>{
				console.log(res.data);
				this.my=res.data.data;
			})
		},
        mounted:function(){
		    this.item.content=htmlspecialchars_decode(this.item.content)
        },
		methods:{
			apply(){
				this.mask=true
			},
			isHide(){
				this.mask=false
			},
			guizeShow(){
				this.guize = ! this.guize
			},
			isApply(e){
				var th=this;
				var checkflag=1;//1代表成功
				//var cookie_val = getCookie("yzm");
				var myreg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/; //卡号
				var myregphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;  //手机号码
				var sfzh_num=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/; //身份证号码

				this.name=e.name;
				this.sfz=e.sfz;
				this.phone=e.phone;
				this.yzm=e.yzm;
				if(th.name==''||th.sfz==''||th.phone==''||th.yzm==''){
					alert('请填写完整信息');
					return;
				}else if(!sfzh_num.test(this.sfz)){
					alert('身份证号格式不正确');
					return;
				}else if(!myregphone.test(this.phone)){
					alert('手机号码错误');
					return;
				}else{
					th.loading=true;
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
					this.axios.get(this.Global.hostUrl+'mobile/Credit/credit',data,config).then(res=>{
						// console.log(res.data);
						if(res.data.error=='success'){
							th.loading=false;
							window.location.href=res.data.data.url
						}else{
							th.loading=false;
							alert(res.data.msg)
						}

					}).catch(err=>{
						alert('请求失败')
					})
				}
			},
			isPoster(){
				this.poster=true;

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
				this.axios.get(this.Global.hostUrl+'mobile/haibao/getlist_dk',data,config).then(res=>{
					// console.log(res.data);
					this.shareUrl=res.data.data;
					// console.log(this.item.title)
					// console.log(this.item.logoUrl)
					// console.log(this.item.descr)
					// console.log(this.shareUrl)
          showShare(this.item.title,this.item.descr,this.shareUrl,this.item.logoUrl)
				}).catch(err=>{
					alert('请求失败')
				})
			},
      share(title,imgurl){
        // console.log(title);
        // console.log(imgurl);
        showShare(title,'分享',imgurl,imgurl)
      },
      gongLue(item,id){
        item.fromPath = '/newcredit';
        this.$router.push({path:'./gonglueDetail',query:{newsid:id,item:item}})
//				console.log('是不是'+id)
      }
//			gongLue(i){
//				var data={
//					params:{}
//				}
////				data.params.ID=localStorage.id;
////        		data.params.randpwd=localStorage.token;
//				var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
//				this.axios.get(this.Global.hostUrl+'mobile/index/loans',data,config).then(res=>{
//					console.log(res.data);
//					this.gonglue=res.data.data[i];
////					console.log(this.gonglue);
//					this.$router.push({path:'./newDetail',query:{item:i}})
//				}).catch(err=>{
//					alert('请求失败')
//				})
//			}

		},
		components:{
			applytc,
			loading,
		}
	}
</script>

<style scoped>
	@media only screen and (max-width: 320px) {
		.loan-bg{padding-top:5vh;}
	}
</style>
