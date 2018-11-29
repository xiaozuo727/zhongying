<template>
	<div>
	<headernav headTip="在线客服" backUrl="./home"></headernav>
	
	<div class="content">
		<div class="kefu flex pad-1 space-ard center">
			<div v-for="item,index in kefu" @click="kefuBtn(index)">
				<img class="mar-t-b-5" :src="item.img" alt="" width="80" />
				<div class="kefu_btn " :class="{action:currentIndex === index}">{{item.name}}</div>
				<div class="pad-t-5 color-gray">工作时间：早:8.30 晚:6:30</div>
			</div>

		</div>
		<div class="kefu_bg col-9 auto border-radius-5 flex flex-end-x pad-1">
			<div class="center re">
				<div class="ewm">
					<img src="../assets/img/kefu_ewm1.jpg" alt="" width="100"/>
					<img v-show="ewm2" class="ewm2" src="../assets/img/kefu_ewm2.jpg" alt="" width="100"/>
				</div>
				<div class="pad-t-5">
					保存图片或截图到微信<br/> 扫码添加客服进行相关咨询
				</div>
			</div>
		</div>
		
		
	</div>
	</div>
	
	
</template>

<script>
	export default{
		data(){
			return{
				kefu:[{
					img:require('../assets/img/kefu1.png'),
					name:'客服一号',
				},{
					img:require('../assets/img/kefu2.png'),
					name:'客服二号',
				},],
				currentIndex:0,
				ewm2:false,
			}
		},
		methods:{
			kefuBtn(index){
				this.currentIndex=index;
				if(index == 1){				
					this.ewm2=true
				}else{
					this.ewm2=false
				}
			}
		}
	}
	
</script>

<style scoped>
	.kefu_bg{background:url('../assets/img/kefu_bg.png')no-repeat top center;background-size:cover}
	.kefu_btn{padding:.2rem 2rem;border:1px solid #ccc;border-radius:30px;}
	.kefu_btn.action{border:1px solid #07CBBD;color:#07CBBD}
	.ewm2{position: absolute;left:0;right:0;margin:auto;}
</style>