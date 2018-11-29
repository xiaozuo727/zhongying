<template>
	<div>
	<headernav headTip="信用卡管理" backUrl="./zhinenghk"></headernav>
	
	<div class="content">
		<ul class="xinyong banks pad-l-r-1 center" v-if="bankList">
			<li class="flex " v-for="item,index in bankList">
				<div class="bank-icon hidden center">
					<img style="margin:-10% 0 0 -10%" src="../assets/img/yinlian.jpg" alt="" width="120%" />
				</div>
				<div class="f1 color-white f18 line-height-2">
					<div class="pad-t-5">{{item.bankname}}</div>
					<div class="pad-b-5">{{item.xybank}}</div>
				</div>
				<div class="pad-l-r-1">
					<span class="pad-2 border-white border-radius-5 color-white">信用卡</span>
				</div>
			</li>
			
		</ul>
		<ul v-else v-html="loading" class="center pad-t-1"></ul>

	</div>

		
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				bankList:false,
				loading:'数据加载中....',
			}
		},
		beforeCreate(){
			if(window.localStorage.getItem('id')=="" || window.localStorage.token==""){
				this.$router.push({path:'./login'})
			}else{
				this.$router.push({path:'./zn_Bank'})
			}
		},
		mounted: function(){
            var data={
                params:{}
            };
            data.params.ID=localStorage.id;
            data.params.randpwd=localStorage.token;
            var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
            this.axios.get(this.Global.hostUrl+'mobile/znhk/xyk',data,config).then(res=>{
                // console.log(res.data);
                if(res.data.error=='seccess'){
                    this.bankList=res.data.data;
                }else{
                    if(res.data.data==null){
                        this.loading='暂无信用卡'
                    }
				}

            }).catch(err=>{
                alert('请求失败')
            });



			// var data={
			// 	params:{}
			// };
            // data.params.user_id=localStorage.id;
            // data.params.randpwd=localStorage.token;
			// var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			// this.axios.get(this.Global.hostUrl+'mobile/znhkbank/xybank',data,config).then(res=>{
			// 	console.log(res.data);
			// 	var th=this;
             //    this.bankList=res.data.data;
			// 	if(res.data.data==null||res.data.data==''){
             //        th.loading='暂无信用卡'
			// 	}
            //
			// }).catch(err=>{
			// 	alert("请求失败")
			// })
		},

	}
</script>

<style>
</style>