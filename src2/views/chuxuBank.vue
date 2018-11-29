<template>
	<div>
	<headernav headTip="储蓄卡" backUrl="./shsk_index"></headernav>
	
	<div class="content">
		<ul class="chuxu banks pad-l-r-1 center">
			<li class="flex flex-start-y" v-for="item,index in bank">
				<div class="bank-icon hidden">
					<img src="../assets/img/yinlian.jpg" alt="" width="100%" />
				</div>
				<div class="f1 color-white f18 line-height-2">
					<div class="pad-t-5">{{item.name}}</div>
					<div class="pad-b-5" v-model="num">{{item.banknum}}</div>
				</div>
				<div class="pad-l-1">
					<span class="del_btn" @click="change(item)">更换</span>
				</div>
			</li>
			
		</ul>
		<ul v-html='none' class="center pad-1"></ul>
		<!--<div class="f12 center" @click="isAdd">
			<div class="green-btn-y">+</div>
			<div class="color-green">添加储蓄卡</div>
		</div>-->
		
		<!--调用删除弹窗-->
		<delBanktc :mask="mask" v-model="mask" @hideBox="isHide" @addBank="yes"></delBanktc>
		
		
	</div>
	</div>
</template>

<script>
	import delBanktc from '../components/delBank_tc'
	export default{
		data(){
			return{
				mask:false,
				bank:[{
					name:'',
					banknum:'',				
				}],
				bank1:{
					id:'',
				},
				none:'',
			}
		},
		components:{
			delBanktc
		},
		inject:['reload'],
		methods:{
			isAdd(){
				this.$router.push({path:'./add_chuxuinfo'})
			},
//			isDel(i){
//				this.mask=true;
//				this.bank1=i;
//			},
			change(i){
				this.bank1=i;
				var data={
					params:{}
				}
				data.params.cxid=this.bank1.id;
				data.params.ID=localStorage.id;
				data.params.randpwd=localStorage.token;
				var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/Wkzfbank/deletecxbank',data,config).then(res=>{
					console.log(res.data)
					if(res.data.error=='success'){
						this.$router.push({path:'./add_chuxuinfo'})
					}else{
						alert(res.data.msg)
					}
				})

			},
			isHide(){
				this.mask=false
			},
			selecBank(){
				this.$router.push({path:'./easypay'})
			},
			yes(){
				var data={
					params:{}
				}
				data.params.cxid=this.bank1.id;
				data.params.ID=localStorage.id;
				data.params.randpwd=localStorage.token;
				var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
				this.axios.get(this.Global.hostUrl+'mobile/Wkzfbank/deletecxbank',data,config).then(res=>{
					console.log(res.data)
					this.reload()
				})
				this.mask=false;
			}
		},
		mounted: function(){
			
			var data={
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			
			var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/Wkzfbank/index',data,config).then(res=>{
				console.log(res.data)
				this.bank=res.data.data
				var th=this;
				if(res.data.error !=='success'){
					th.none='暂无储蓄卡'
				}
			}).catch(err=>{
				
			})
			
		}

	}
</script>

<style>
</style>