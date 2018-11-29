<template>
  <div id="App">
  	<!--<headernav></headernav>-->
  	<router-view v-if="isRouterAlive"></router-view>
  	<footNav></footNav>
  </div>
</template>

<script>
//import headernav from './components/header.vue'
import footNav from './components/footer.vue'

export default {
	name: 'App',
	components: {
		footNav
	},
	provide(){
		return{
			reload:this.reload
		}
	},
	data(){
		return{
			isRouterAlive:true
		}
	},
	methods:{
		reload(){
			this.isRouterAlive = false;
			this.$nextTick(function(){
				this.isRouterAlive= true
			})
		}
	}
}
</script>

<style>

</style>
