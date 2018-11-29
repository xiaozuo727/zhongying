<template>
	<div id="loading" v-if="loading">
	    <div data-loader="circle"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		props:{
			loading:Boolean
		},
		methods:{
			
		}
	}
</script>

<style scoped>
#loading{
	opacity: 1;
	position: fixed;
	z-index: 999;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	-webkit-transition-duration: 400ms;
	transition-duration: 400ms;
	/*background: white;*/
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	justify-content:center;
	align-items:center;
	width: 50px;
	height:50px;
	border-radius: 5px;
	background: rgba(0,0,0,.5);
	margin:auto
}
[data-loader=circle] {
	width: 25px;
	height: 25px;
	-webkit-animation: circle infinite .75s linear;
	-moz-animation: circle infinite .75s linear;
	-o-animation: circle infinite .75s linear;
	animation: circle infinite .75s linear;
	border: 2px solid #fff;
	border-top-color:  #7bafcf;;
	border-radius: 100%
}
@-webkit-keyframes circle {
	0% {
		-webkit-transform: rotate(0);
		-ms-transform: rotate(0);
		-o-transform: rotate(0);
		transform: rotate(0)
	}
	100% {
		-webkit-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg)
	}
}

@-moz-keyframes circle {
	0% {
		-webkit-transform: rotate(0);
		-ms-transform: rotate(0);
		-o-transform: rotate(0);
		transform: rotate(0)
	}
	100% {
		-webkit-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg)
	}
}

@-o-keyframes circle {
	0% {
		-webkit-transform: rotate(0);
		-ms-transform: rotate(0);
		-o-transform: rotate(0);
		transform: rotate(0)
	}
	100% {
		-webkit-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg)
	}
}

@keyframes circle {
	0% {
		-webkit-transform: rotate(0);
		-ms-transform: rotate(0);
		-o-transform: rotate(0);
		transform: rotate(0)
	}
	100% {
		-webkit-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg)
	}
}
</style>