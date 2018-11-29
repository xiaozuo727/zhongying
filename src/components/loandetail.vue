<template>
	<div>
	<headernav headTip="贷款详情" backUrl="./loan"></headernav>
	
	<div class="content">
		<div class="loan-bg">
			<div class="loan-sj">
				<div class="flex">
					<img src="img/dian.png" alt="" width="60" />
					<div class="pad-l-1">
						<div class="f15 pad-b-5">卡卡贷</div>
						<div class="color-gray f12">
							<div>申请人数： <span>21355</span>人</div>
							<div>可贷款额度： <span class="color-red">1万-20万元</span></div>
						</div>
					</div>
				</div>
				<div class="flex f15 space-ard mar-t-15">
					<div class="blue-btn-gradient btn">
						<img class="vmid mar-r-5" src="../assets/img/ewm-btn.png" alt="" width="20" />二维码
					</div>
					<div class="orange-btn-gradient btn">  
						<img class="vmid mar-r-5" src="../assets/img/share-btn.png" alt="" width="20" />分享
					</div>
				</div>
			</div>
		</div>

		<div class="loan-tit">奖励佣金</div>
		<div class="pad-1 color-green border-b-gray-5">
			您当前等级为： <img class="vmid" src="../assets/img/huang1.png" alt="" width="40" />
			<div class="flex space-ard center mar-t-15 line-height-3">
				<div>
					<img src="../assets/img/huang1.png" alt="" width="50" />
					<div>1%</div>
				</div>
				<div>
					<img src="../assets/img/huang1.png" alt="" width="50" />
					<div>1%</div>
				</div>
				<div>
					<img src="../assets/img/huang1.png" alt="" width="50" />
					<div>1%</div>
				</div>
			</div>
			<div class="color-green right mar-t-1 f15 re">
				<img class="vmid" src="img/loan-guize.png" alt="" width="12" />
				<span class="guize-btn ">奖励规则</span>
				<span class="jiant">></span>
				<p class="guize-xl none ">
					1.奖励规则嘎距离更近了管理结构类似人呢来到凤凰街上溜达来发行金额哦人脸很健康产品图落后人类可能奖励规则嘎距离更近了管理结构类似人呢来到凤凰街上溜达来发行金额哦人脸很健康产品图落后人类可能
				</p>
			</div>
		</div>
		
		<div class="loan-tit">申请条件</div>
		<div class="pad-1 border-b-gray-5 line-height-2">
			1、年龄：20~60周岁<br/>
			2、手机实名使用6个月以上<br/>
			3、信用卡使用时间满6个月以上
		</div>

		<div class="loan-tit">申请流程</div>
		<div class="pad-1 border-b-gray-5 line-height-2">
			<p>步骤1：注册登录</p>
			<p>步骤2：申请借款</p>
			<p>步骤3：填写资料</p>
			<p>步骤4：认证信息</p>
			<p>步骤5：提交审核</p>
			<p>步骤6：等待批核</p>

		</div>
		<div class="flex f16 pad-t-b-1 line-height-2">
			<div class="btn bg-green col-4 mar-r-1">借款攻略</div>
			<div class="btn bg-green col-4" @click="apply">立即申请</div>
		</div>
		
	
		<!--调用申请弹窗-->
		<applytc :mask="mask" v-model="mask" @hideBox="isHide"></applytc>
		
	</div>
	</div>
	
</template>

<script>
	import applytc from '../components/apply_tc'
	export default{
		data(){
			return{
				mask:false,
				loandetail:[{
					age:'年龄18周岁以上',
					time:'手机实名制使用6个月以上',
				},{
					age:'年龄20-50周岁',
					time:'手机实名制使用6个月以上',
				},{
					age:'年龄22-55周岁',
					time:'手机实名制使用2个月以上',
				},{
					age:'年龄18-55周岁',
					time:'手机实名制使用6个月以上',
				},{
					age:'年龄21-55周岁',
					time:'手机实名制使用3个月以上',
				},{
					age:'年龄18-45周岁',
					time:'手机实名制使用6个月以上',
				},{
					age:'年龄21-55周岁',
					time:'手机实名制使用3个月以上',
				},{
					age:'年龄21-55周岁',
					time:'手机实名制使用3个月以上',
				},{
					age:'年龄21-55周岁',
					time:'手机实名制使用3个月以上',
				},{
					age:'年龄21-55周岁',
					time:'手机实名制使用3个月以上',
				},{
					age:'年龄21-55周岁',
					time:'手机实名制使用3个月以上',
				},{
					age:'年龄21-55周岁',
					time:'手机实名制使用3个月以上',
				}],
			}
//			props:{
//				index:Number,	
//			}
		},
		methods:{
			apply(){
				this.mask=true
			},
			isHide(){
				this.mask=false
			}
		},
		components:{
			applytc,
		}
	}
</script>

<style scoped>
	@media only screen and (max-width: 320px) {
		.loan-bg{padding-top:5vh;}
	}
</style>