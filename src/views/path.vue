<template>
	<div>
	<headernav headTip="通道选择" backUrl="./shsk_index"></headernav>
	<div class="content">
		<div class="center color-green2 f18 pad-t-5">
			￥<span class="f30">{{Money}}</span>
		</div>
		<ul class="path pad-1">
			<li class="shadow pad-b-5 re" >
				<div class="head">
					<div class="inline-block pad-l-r-1 bg-white f20 border-radius-30 line-height-1 center color-green2" >通道1</div>
				</div>
				<div class="line-height-1 flex pad-t-b-5">
					<img class="mar-l-r-1" src="../assets/img/yinlian.jpg" alt="" width="60" />
					<div class="f1">
						<p>
							<b>实时到账(07:00-22:30)</b> 
							<span class="jifen_btn inline-block re bg-blue f12 color-white pad-l-r-5">积分</span>
						</p>
						<p>单笔500-20000元 当日最高5万元</p>
						<p>费率0.55% +2元/笔</p>
						<div class="path_btn bg-gray2 border-radius-30 color-white col-8 re center line-height-2 f12" @click="pathOne">查看支持银行列表</div>
					</div>
				</div>
				<div class="bg-green2 border-radius-30 color-white col-4 auto pad-5 center" @click="path(1)">使用通道</div>
				
					<!--支持通道一信用卡-->
				<ul v-if="showBank1" class="provide ab col-10 Z-2 pad-5 flex flex-r-w flex-start-x flex-start-y left" >
					<li>北京银行</li>
					<li>工商银行</li>
					<li>光大银行</li>
					<li>广发银行</li>
					<li>华夏银行</li>
					<li>建设银行</li>
					<li>民生银行</li>
					<li>农业银行</li>
					<li>平安银行</li>
					<li>浦发银行</li>
					<li>上海银行</li>
					<li>兴业银行</li>
					<li>邮储银行</li>
					<li>中国银行</li>
					<li>中信银行</li>
				</ul>
			</li>
			
			<li class="shadow pad-b-5 re">
				<div class="head">
					<div class="inline-block pad-l-r-1 bg-white f20 border-radius-30 line-height-1 center color-blue2">通道2</div>
				</div>
				<div class="line-height-1 flex pad-t-b-5">
					<img class="mar-l-r-1" src="../assets/img/yinlian.jpg" alt="" width="60" />
					<div class="f1">
						<p>
							<b>实时到账(07:00-22:30)</b> 
							<span class="jifen_btn inline-block re bg-blue f12 color-white pad-l-r-5">积分</span>
						</p>
						<p>单笔500-20000元 当日最高5万元</p>
						<p>费率0.55% +2元/笔</p>
						<div class="path_btn bg-gray2 border-radius-30 color-white col-8 re center line-height-2 f12" @click="pathTwo">查看支持银行列表</div>
					</div>
				</div>
				<div class="bg-blue2 border-radius-30 color-white col-4 auto pad-5 center" @click="closePath" >使用通道</div>  <!--@click="path(2)"-->
					<!--支持通道二信用卡-->
				<ul v-if="showBank2" class="provide ab col-10 Z-2 pad-5 flex flex-r-w flex-start-x flex-start-y left" >
					<li>工商银行</li>
					<li>中国建设银行</li>
					<li>农业银行</li>
					<li>中国民生银行</li>
					<li>中国银行</li>
					<li>招商银行</li>
					<li>平安银行</li>
					<li>交通银行</li>
					<li>兴业银行</li>
					<li>浦东发展银行</li>
					<li>中信银行</li>
					<li>广发银行股份有限公司</li>
					<li>华夏银行</li>
					<li>邮政储蓄银行</li>
					<li>光大银行</li>
					<li>深圳农村商业银行</li>
					<li>宁波银行</li>
					<li>上海银行</li>
					<li>江苏银行</li>
					<li>徽商银行</li>
					<li>北京银行</li>
					<li>南京银行</li>
					<li>浙商银行</li>
					<li>汉口银行</li>
					<li>广州银行股份有限公司</li>
					<li>潍坊银行</li>
					<li>渤海银行</li>
					<li>齐鲁银行</li>
					<li>广州农村商业银行股份有限公司</li>
					<li>厦门银行股份有限公司</li>
					<li>青岛银行</li>
					<li>东莞市商业银行</li>
					<li>温州银行</li>
					<li>河北银行</li>
					<li>福建海峡银行</li>
					<li>郑州银行</li>
					<li>哈尔滨银行</li>
					<li>日照银行</li>
					<li>恒丰银行</li>
					<li>成都市商业银行</li>
					<li>锦州银行</li>
					<li>盛京银行</li>
					<li>重庆农村商业银行</li>
					<li>天津银行</li>
					<li>汇丰银行（中国）</li>
					<li>西安银行</li>
					<li>江苏农信社</li>
					<li>珠海华润银行</li>
					<li>浙江省农村信用社联合社</li>
					<li>大连银行</li>
					<li>齐商银行</li>
					<li>渣打银行(中国)</li>
					<li>重庆银行</li>
					<li>晋商银行</li>
					<li>贵阳银行股份有限公司</li>
					<li>宁夏银行</li>
					<li>洛阳银行</li>
					<li>龙江银行</li>
					<li>兰州银行</li>
					<li>辽阳银行股份有限公司</li>
					<li>韩亚银行（中国）</li>
					<li>新韩银行</li>
					<li>抚顺银行</li>
					<li>福建省农村信用社联合社</li>
					<li>江西省农村信用社联合社</li>
					<li>海南省农村信用社联合社</li>
					<li>河南省农村信用社联合社</li>
					<li>赣州银行股份有限公司</li>
					<li>广西农村信用社联合社</li>
					<li>山西省农村信用社</li>
					<li>贵州省农村信用社联合社</li>
					<li>山东农村信用联合社</li>
					<li>深圳福田银座村镇银行</li>
					<li>安徽省农村信用社</li>
					<li>乌鲁木齐银行</li>	
				</ul>
				
			</li>
		</ul>
		
	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				Money:'',
				showBank1:false,
				showBank2:false,
			}
		},
		beforeCreate(){
			if(window.localStorage.getItem('id')=="" || window.localStorage.token==""){
				this.$router.push({path:'./login'})
			}else{
				this.$router.push({path:'./path'})
			}
		},
		methods:{	
			path(type){	
				localStorage.setItem('type',type);
				console.log(localStorage.getItem('type'))
//				localStorage.lastname=v;

				this.$router.push({
					path:'./creditBank',
//			        query: {type: v},       
			    })
				
			},
			pathOne(){
				this.showBank1 =!this.showBank1
			},
			pathTwo(){
				this.showBank2 =!this.showBank2
			},
            closePath(){
			    alert('该通道已暂停，请使用其他通道')
			}
		},
		created:function(){
			this.Money=localStorage.getItem('Money');
			console.log('money=' + this.Money)
		},

	}
</script>

<style>
	
</style>