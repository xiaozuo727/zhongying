<template>
	<div>
	<headernav headTip="智能还卡" backUrl="./home"></headernav>
	<div class="content">
		<div class="border-b-gray-5">
			<img class="block" src="../assets/img/znhk_ban.jpg" alt="" width="100%" />
		</div>
		<div class="block deepblue_btn f20 re" style="margin:1rem auto 1.5rem;box-shadow: none;" @click="openZhinenghk">
			开启智能还卡
			<div class="deep_y "></div>
		</div>
		
		<ul class="f16 pad-l-r-1">
			<router-link to='zn_jiaoyijilu' class="flex border-b-gray mar-t-b-5 pad-b-5 re">
				<img src="../assets/img/znhk_1.png" alt="" width="45" />
				<div class="f1 pad-l-1">我的计划</div>
				<div class="arrow" style="left:-10px"> </div>
			</router-link>
			<router-link to="zn_Bank" class="flex border-b-gray mar-t-b-5 pad-b-5 re">
				<img src="../assets/img/znhk_2.png" alt="" width="45" />
				<div class="f1 pad-l-1">信用卡管理</div>
				<div class="arrow" style="left:-10px"> </div>
			</router-link>
			<router-link to="reward_zn" class="flex border-b-gray mar-t-b-5 pad-b-5 re">
				<img src="../assets/img/shsk_3.png" alt="" width="45" />
				<div class="f1 pad-l-1">奖金说明</div>
				<div class="arrow" style="left:-10px"> </div>
			</router-link>
			<router-link to="zn_course" class="flex border-b-gray mar-t-b-5 pad-b-5 re">
				<img src="../assets/img/shsk_4.png" alt="" width="45" />
				<div class="f1 pad-l-1">使用教程</div>
				<div class="arrow" style="left:-10px"> </div>
			</router-link>
		</ul>

		<!--未认证alert-->
		<div class="mask" v-if="mask">
			<div class="col-8 auto bg-white pad-1 border-radius-5">
				请前去实名认证！
				<div class="flex space-ard center mar-t-1">
					<div class="col-3 pad-5 bg-gray" @click="isHide">取消</div>
					<div class="col-3 pad-5  bg-green color-white" @click="gotoRealName">确定</div>
				</div>
			</div>
		</div>
	</div>

	<!--loading-->
	<loading v-if='loading' :loading='loading'></loading>
	</div>
</template>

<script>
    import loading from '../components/loading'
	export default{
	    data(){
	        return{
				mask:false,
				shim:'',
                loading:false,
			}
		},
        components:{
            loading,
        },
		methods:{
            openZhinenghk(){
                var th=this;
                this.loading=true;
                var data={
                    params:{
                    }
                };
                data.params.ID=localStorage.id;
                data.params.randpwd=localStorage.token;
                var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
                this.axios.get(this.Global.hostUrl+'mobile/znhk/findUser',data,config).then(res=>{
                    console.log(res.data);
                    if(res.data.error=='success'){
                        th.loading=false;
                        this.$router.push({path:'./zhinenghk2'})
                    }else{
                        th.loading=false;
                        th.mask=true;

                    }
                }).catch(err=>{
                    alert('请求失败')
                })
            },
            // openZhinenghk(){
             //    var th=this;
             //    this.loading=true;
             //    var data={
             //        params:{
             //        }
             //    };
             //    data.params.user_id=localStorage.id;
             //    data.params.randpwd=localStorage.token;
             //    var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
             //    this.axios.get(this.Global.hostUrl+'mobile/znhkbank/index',data,config).then(res=>{
             //        console.log(res.data);
             //        if(res.data.error=='success'){
             //            th.loading=false;
             //            this.$router.push({path:'./zhinenghk2'})
			// 		}else{
             //            th.loading=false;
             //            this.mask=true
			// 		}
             //    }).catch(err=>{
             //        alert('请求失败')
             //    })
			// },
            isHide(){
                this.mask=false
			},
            gotoRealName(){
                 this.$router.push({path:'./zn_realN'})
			}
		},

	}
</script>

<style scoped>
	@media screen and (max-width:320px){
		.shsk_head input{margin:0;}
		.shsk_head .f12{padding:.6rem 0;}
	}
	@media screen and (min-width:321px) and (max-width:375px){
		.shsk_head .f12{padding:1.2rem 0;}
	}
	@media screen and (min-width:375px) and (max-width:414px){
		.shsk_head .f12{padding:1.5rem 0;}
	}
</style>