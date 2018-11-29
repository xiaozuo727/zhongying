<template>
	<footer class="foot fix col-10 flex space-ard center color-gray">
		<!--<div v-for="(item,index) in foot" @click="footLink(item.id)">
			<img class="filter-gray" :src="item.img" alt="" width="25"/>
			<div class="color-gray" >{{item.name}}</div>
		</div>-->
		
		
		<div>
			<router-link to="home">
				<img class="filter-gray block auto" src="../assets/img/foot-index.png" alt="" width="25"/>
				<div >首页</div>
			</router-link>
		</div>
		<div>
			<router-link to="poster">
				<img class="filter-gray block auto" src="../assets/img/foot-share.png" alt="" width="25"/>
				<div >分享</div>
			</router-link>
		</div>
		<div>
			<router-link to="kefu">
				<img class="filter-gray block auto" src="../assets/img/foot-kefu.png" alt="" width="25"/>
				<div>客服</div>
			</router-link>
		</div>
		<div>
			<router-link to="mycenter">
				<img class="filter-gray block auto" src="../assets/img/foot-my.png" alt="" width="25"/>
				<div>我的</div>
			</router-link>
		</div>
	</footer>
</template>

<script>
	export default{
		data(){
			return{
				foot:[{
					name:'首页',
					img:require('../assets/img/foot-index.png'),
					status:false,
					id:'1',
				},{
					name:'分享',
					img: require('../assets/img/foot-share.png'),
					status:false,
					id:'2',
				},{
					name:'客服',
					img:require('../assets/img/foot-kefu.png'),
					status:false,
					id:'3',
				},{
					name:'我的',
					img:require('../assets/img/foot-my.png'),
					status:false,
					id:'4',
				},],

			}
		},
		methods:{
			footLink(id){
				if(id ==1){
					this.$router.push({path:'./home'})
				}else if(id ==2){
					this.$router.push({path:'./poster'})
				}else if(id ==3){
					this.$router.push({path:'./login'})
				}else if(id ==4){
					this.$router.push({path:'./mycenter'})
				}
			}
		}
	}
</script>

<style>
	.router-link-active{color:#07CBBD!important;}
	.router-link-active img{filter:grayscale(0);}
</style>