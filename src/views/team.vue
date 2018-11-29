<template>
	<div>
	<headernav headTip="团队管理" backUrl="./mycenter"></headernav>
	<div class="content">
		<div class="flex pad-1">
			<img class="border-radius-y mar-r-1" :src="team.user[0].headerImg" alt="" width="50" />
			<div class="f1">
				团队(人)
				<div class="f16 line-height-2">{{teamNum}}</div>
				<div class="color-gray f12">
					您的身份：
					<span v-if="team.user[0].vip_rank ==0">实习会员</span>
					<span v-else-if="team.user[0].vip_rank ==1">普通会员</span>
					<span v-else="team.user[0].vip_rank ==2">高级会员</span>
					
					<img src="../assets/img/lv1.png" v-if="team.user[0].user_lv ==1 && team.user[0].vip_rank == 0" alt="" width="30"/>
					<img src="../assets/img/huang1.png" v-else-if="team.user[0].user_lv ==1 && team.user[0].vip_rank == 1" alt="" width="30"/>
					<img src="../assets/img/huang2.png" v-else-if="team.user[0].user_lv ==2 && team.user[0].vip_rank == 1" alt="" width="30"/>
					<img src="../assets/img/huang3.png" v-else-if="team.user[0].user_lv ==3 && team.user[0].vip_rank == 1" alt="" width="30"/>
					<img src="../assets/img/lan1.png" v-else-if="team.user[0].user_lv ==1 && team.user[0].vip_rank == 2" alt="" width="30"/>
					<img src="../assets/img/lan2.png" v-else-if="team.user[0].user_lv ==2 && team.user[0].vip_rank == 2" alt="" width="30"/>
					<img src="../assets/img/lan3.png" v-else-if="team.user[0].user_lv ==3 && team.user[0].vip_rank == 2" alt="" width="30"/>

				</div>
			</div>
			<img src="../assets/img/team.jpg" alt="" width="90" />
		</div>
		<div class="team-nav flex color-white line-height-3 center f16">
			<div class="f1 bg-green" v-for="(item,index) in tabs" @click="showItem(index)" :class="{'active':num===index}">{{item}}</div>
			<!--<div class="f1 bg-green">正式</div>-->
		</div>
		<div class="team-box">
			<ul v-if="num ===0">
				<li class="pad-5 border-b-gray flex" v-for="(item,index) in team.list1" :key="index" :item="item">
					<div class="pad-l-5">{{index+1}}</div>
					<img class="border-radius-y mar-l-r-5" :src="item.headerImg" alt="" width="50" />
					<div class="f1 color-gray line-height-2 f12">
						<div>
							<span class="color-black">{{item.nickName}}</span>
							
							<img src="../assets/img/lv1.png" v-if="item.user_lv ==1 && item.vip_rank == 0" alt="" width="25"/>
							<img src="../assets/img/huang1.png" v-else-if="item.user_lv ==1 && item.vip_rank == 1" alt="" width="25"/>
							<img src="../assets/img/huang2.png" v-else-if="item.user_lv ==2 && item.vip_rank == 1" alt="" width="25"/>
							<img src="../assets/img/huang3.png" v-else-if="item.user_lv ==3 && item.vip_rank == 1" alt="" width="25"/>
							<img src="../assets/img/lan1.png" v-else-if="item.user_lv ==1 && item.vip_rank == 2" alt="" width="25"/>
							<img src="../assets/img/lan2.png" v-else-if="item.user_lv ==2 && item.vip_rank == 2" alt="" width="25"/>
							<img src="../assets/img/lan3.png" v-else-if="item.user_lv ==3 && item.vip_rank == 2" alt="" width="25"/>
						</div>
						<div>
							加入时间:
							<span>{{item.payDate}}</span>
						</div>
					</div>
					<div class="color-green center pad-r-5" @click="getPhone(item.user_phone)">
						<img src="../assets/img/phone_icon2.png" alt="" width="35" />
						<div>电话</div>
					</div>
				</li>
				
			</ul>
			
			<ul v-else="">
				<li class="pad-5 border-b-gray flex" v-for="(item,index) in team.list2" :key="index" :item="item">
					<div class="pad-l-5">{{index+1}}</div>
					<img class="border-radius-y mar-l-r-5" :src="item.headerImg" alt="" width="50" />
					<div class="f1 color-gray line-height-2 f12">
						<div>
							<span class="color-black">{{item.nickName}}</span>
							
							<img src="../assets/img/lv1.png" v-if="item.user_lv ==1 && item.vip_rank == 0" alt="" width="25"/>
							<img src="../assets/img/huang1.png" v-else-if="item.user_lv ==1 && item.vip_rank == 1" alt="" width="25"/>
							<img src="../assets/img/huang2.png" v-else-if="item.user_lv ==2 && item.vip_rank == 1" alt="" width="25"/>
							<img src="../assets/img/huang3.png" v-else-if="item.user_lv ==3 && item.vip_rank == 1" alt="" width="25"/>
							<img src="../assets/img/lan1.png" v-else-if="item.user_lv ==1 && item.vip_rank == 2" alt="" width="25"/>
							<img src="../assets/img/lan2.png" v-else-if="item.user_lv ==2 && item.vip_rank == 2" alt="" width="25"/>
							<img src="../assets/img/lan3.png" v-else-if="item.user_lv ==3 && item.vip_rank == 2" alt="" width="25"/>
						</div>
						<div>
							加入时间:
							<span>{{item.payDate}}</span>
						</div>
					</div>
					<div class="color-green center pad-r-5" @click="getPhone(item.user_phone)">
						<img src="../assets/img/phone_icon2.png" alt="" width="35" />
						<div>电话</div>
					</div>
				</li>
				
			</ul>
			
			
		</div>
		
	</div>
	
	<div class="mask" v-show="mask">
		<div class="col-8 auto bg-white pad-1 border-radius-5 f16">
			<span>{{phonenum}}</span>
			<div class="mar-t-1 center col-3 auto line-height-2 bg-green color-white border-radius-5" @click="yes_btn">确 定</div>
		</div>
	</div>
	
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				team:{
					user:[{
						headerImg:null,
						vip_rank:null,
						user_lv:null,
					}],
					list1:{},
					list2:{}

				},
				teamNum:'0',
				tabs:["实习","正式"],
				num:0,
				mask:false,
				phonenum:""
			}
		},
		beforeCreate(){
			if(window.localStorage.getItem('id')=="" || window.localStorage.token==""){
				this.$router.push({path:'./login'})
			}else{
				this.$router.push({path:'./team'})
			}
		},

		mounted:  function() {
			var data={
				params:{}
			}
			data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;
			var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
			this.axios.get(this.Global.hostUrl+'mobile/user/team',data,config).then(res =>{
				// console.log(res.data)
				this.team=res.data.data;
				var th=this;
				// console.log(res.data.data.list1)
				if(th.team.list1==null&& th.team.list2!==null){
					th.teamNum=th.team.list2.length
					return;
				}else if(th.team.list1!==null&& th.team.list2==null){
					th.teamNum=res.data.data.list1.length
					return;
				}else if(th.team.list1==null && th.team.list2==null){
					th.teamNum=0;
					return;
				}else{
					th.teamNum=th.team.list1.length+th.team.list2.length;
					return;
				}
				
			})
		},
		methods: {
			showItem(index){
				this.num=index
			},
			getPhone(index){	
				if(index==""||index==null){
					this.phonenum="无号码"
				}else{
					this.phonenum=index;
				}
				
				this.mask=true
				
			},
			yes_btn(){
				this.mask=false
			}
		}
	}
	
</script>

<style>
</style>