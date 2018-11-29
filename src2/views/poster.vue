<template>
	<div class="content">
		
		<div class="pad-5 mar-t-1 flex">
			<img class="poster_l" src="../assets/img/jiant_icon.png" alt="" width="40" @click="move(-1)" />
			<div class="f1 mar-l-r-1">
				<transition-group tag="ul" name="list" :class="directionTo" class="slide-ul poster-box re flex flex-start-x"><!--:style="containerStyle"-->
					<li v-for="item,index in ranklist" :key="index" v-show="index===currentIndex">
			            <img :src="item.hburl" @click="share('推广海报',item.hburl)">
			            <!--<div class="ab col-10" style="height:35px;background: rgba(0,0,0,.5);left:0;bottom:3px"></div>-->

			        </li>
				</transition-group>
			</div>
			<img class="poster_r rotate-180" src="../assets/img/jiant_icon.png" alt="" width="40" @click="move(1)"/>
		</div>
		
		<div class="color-green f16 center">
			<b>点击图片分享 </b>
			<div id="poster-guize" class="f12" @click="guize">《众盈服务平台推广规则》</div>
		</div>
		
		<div class="pad-5 mar-t-1 bg-green">
			<div class="poster-list scroll-x">
				<div class="flex flex-start-x re">
					<img v-if="isShow" v-for="item,index in ranklist" @click="change(index)" :src="item.hburl" alt="" width="100%"/>
				</div>
			</div>
		</div>
		
		<div class="mask" v-show="mask">
			<div class="poster-tc col-8 auto bg-white color-gray pad-1 border-radius-5 re">
				<!--<span class="close close-icon" style="position:absolute;top:10px;right:10px;"></span>-->
				<p class="f18 center line-height-2">众盈服务平台推广规则</p>
				<div class="scroll-y line-height-2 mar-t-b-1 pad-l-r-1" style="height: 50vh;">
				为了进一步规范众盈服务平台业务推广宣传的合规性，维护平台与合作机构的权益，提升众盈服务平台声誉，推动平台健康稳定发展，必须坚持-合规展业，良性发展。<br/>
	
				一、众盈服务平台是一个推广服务平台，我们作为银行的拓客推广服务商，与平台上所有银行均签署的是互联网推广协议，显示推广仅限于会员在互联网上进行推广，建议会员不到街面摆摊设点，当然，大家可以针对性的找公司，写字楼，工厂等机型批量办卡。
				<br/>
				二、会员在进行推广时，请务必严格遵守以下规定：<br/>
				1、不得发布与国家法律法规相悖的推广内容<br/>
				2、不得以任何理由，利用众盈服务平台的名义在任何平台从事注册账户、发布信息、招聘等活动：例如58、boss直聘。<br/>
				3、不得虚假宣传，更不得向任何人信用卡申请或贷款额度承诺<br/>
				4、不得以任何理由向办信用卡、贷款的用户收取任何费用<br/>
				5、不得利用明显带有贬义的内容进行恶意引流。例如：诈骗、传销等<br/>
				6、不得使用暗示的内容进行宣传或诱导用户做违法违规的行为。例如信用卡套现<br/>
				7、不得使用和传播任何未经众盈服务平台授权的图文资料。例如：公司营业执照、公司合同等<br/>
				
				三、会员在推广信用卡时，请严格遵守众盈服务平台信用卡申请操作规范指南<br/>
				1、禁止银行黑名单用户在平台申请信用卡<br/>
				2、信用卡申请必须由申请人本人填写，禁止代劳<br/>
				3、填写申请资料时，务必真实有效，不得伪造虚构信息进行申请。如：无业，填写一份工作的单位信息<br/>
				4、如无信用卡需求，请不要随意申请，下卡不激活，同样会影响到诚信记录，严重将会被列入黑名单<br/>
				
				众盈服务平台会员在拓客推广服务过程中，凡有违反以上任何一条规范的，一律冻结账号，永不解封！平台对此不警告，不提示，不做解释。凡因违规推广，给用户。平台或合作商造成损失的，平台将直接向有关管理机构举报，并将协助追回所有非法所得，同时，公司将保留进一步追诉损失的权利。
				</div>
				<div class="button bg-green" @click="yes">我知道了</div>
			</div>
		</div>
	
	
	</div>
	
	
</template>

<script>
	import poster1 from "../assets/img/poster1.jpg";
	import poster2 from "../assets/img/poster2.jpg";
	import poster3 from "../assets/img/poster3.jpg";
	import poster4 from "../assets/img/poster4.jpg";
    export default{
        data(){
            return{
                ranklist:[{
                	hburl:'',
                }],
				isShow:true,
				currentIndex:0,
				direction:1,
				mask:false,
            }
        },
        mounted: function () {
			var data={
                params:{}
			}
            data.params.ID=localStorage.id;
			data.params.randpwd=localStorage.token;

            var config = {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
//             GET /someUrl
            this.$http.get(this.Global.hostUrl+'mobile/haibao/getlist_tg',data,config).then(res => {
                console.log(res.data);
                this.ranklist=res.data.data;

            }).catch(err=>{
                alert("请求失败")
            })

//			this.ranklist=[{hburl:poster1},{hburl:poster2},{hburl:poster3},{hburl:poster4}]
			
       },
       computed:{
	       	directionTo:function(){
	       		return this.direction==1?"right":"left";
	       	}
       },
        methods:{
        	move(a){
        		this.direction=a;
        		this.currentIndex+=a;
        		var width=this.ranklist.length;
        		console.log('gjglj'+this.ranklist.length);
        		if(this.currentIndex>width-1){
        			this.currentIndex=0;
        		}
        		if(this.currentIndex<0){
        			this.currentIndex=width-1;
        		}
        	},
        	change(index) {
            	this.currentIndex = index;
        	},
        	guize(){
        		this.mask=true
        	},
        	yes(){
        		this.mask=false
        	},
        	share(title,imgurl){
        		console.log(title);
        		console.log(imgurl)
//      		window.android.showshare(title,"","",imgurl);
        	}
        	
        }

    }
</script>

<style scoped>
	.content{background:#c5f3f0;}
	.poster-box {
	  transition: all .5s;
		-moz-transition: all .5s;	/* Firefox 4 */
		-webkit-transition: all .5s;	/* Safari 和 Chrome */
		-o-transition: all .5s;	/* Opera */
	}
	 

.slide-ul {
	height: 500px;
}

.slide-ul li {
  position: absolute;
}


.left .list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.left .list-leave-active {
  transition: all 1s ease;
  transform: translateX(100%)
}

.left .list-enter {
  transform: translateX(-100%)
}

.left .list-leave {
  transform: translateX(0)
}

.right .list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.right .list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.right .list-enter {
  transform: translateX(100%)
}

.right .list-leave {
  transform: translateX(0)
}
</style>