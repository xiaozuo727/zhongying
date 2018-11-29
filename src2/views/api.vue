<template>
	<div>
	<headernav headTip="平台手册" backUrl="./mycenter"></headernav>
	<div class="content">
		<ul class="apiNav flex f16 center line-height-3 border-b-gray">
			<li class="f1" v-for="item,index in nav" :class="{action:currentIndex === index}" @click="navList(index)">{{item.name}}</li>
		</ul>
		
		<div class="apiPic">
			<!--概述-->
			<div v-show="pic1">
				<img src="../assets/img/api_gais1.jpg" alt="" width="100%" />
				<img src="../assets/img/api_gais2.jpg" alt="" width="100%" />
				<img src="../assets/img/api_gais3.jpg" alt="" width="100%" />
				<img src="../assets/img/api_gais4.jpg" alt="" width="100%" />
			</div>
			
			<!--首页-->
			<div v-show="pic2">
				<img src="../assets/img/api_home1.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home2.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home3.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home4.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home5.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home6.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home7.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home8.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home9.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home10.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home11.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home12.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home13.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home14.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home15.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home16.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home17.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home18.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home19.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home20.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home21.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home22.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home23.jpg" alt="" width="100%" />
				<img src="../assets/img/api_home24.jpg" alt="" width="100%" />
			</div>
			
			<!--个人中心-->
			<div v-show="pic3">
				<img src="../assets/img/api_person1.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person2.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person3.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person4.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person5.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person6.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person7.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person8.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person9.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person10.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person11.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person12.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person13.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person14.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person15.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person16.jpg" alt="" width="100%" />
				<img src="../assets/img/api_person17.jpg" alt="" width="100%" />
			</div>
		</div>
		
		
	</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				nav:[{name:'概述'},{name:'首页'},{name:'个人中心'},],
				currentIndex:0,
				pic1:true,
				pic2:false,
				pic3:false,
			}
		},
		methods:{
			navList(i){
				this.currentIndex= i;
				if(i== 0){
					this.pic1=true
					this.pic2=false
					this.pic3=false
				}
				if(i== 1){
					this.pic1=false
					this.pic2=true
					this.pic3=false
				}
				if(i== 2){
					this.pic1=false
					this.pic2=false
					this.pic3=true
				}
			}		
			
		}
	}
</script>

<style scoped>
	.apiNav .action{background: #aaa;color:#fff;}
	.apiPic img{display: block;}
</style>