<template>
	<div>
	<headernav headTip="升级支付" backUrl="./upVIP"></headernav>

	<div class="content">
		<div class="border-b-gray-5 mar-t-1 pad-b-1">
			<div class="bg-yellow-gradient border-radius-5 col-9 auto " style="color:#ca903d;">
				<div class="pad-6 line-height-2">
					<p class="f14 hidden">
						<img src="../assets/img/lan1.png" alt="" width="30" />高级会员
						<span class="f18 fr"><b>￥ 598.0</b></span>
					</p>
					<p>
						时限：永久有效
						<span class="fr">推荐指数：★★★★★</span>
					</p>
					<p class="">权限：升级高级会员LV1，无卡支付收益，贷款收益、招商收益、办卡收益。</p>
				</div>
				<div class="up-line2"></div>
				<div class="Bond-btn pad-1">
					<img class="mar-r-5" src="../assets/img/money-dai.png" alt="" width="15" />保证金退还说明
					<span class="jiant fr">></span>
				</div>

			</div>

		</div>

    <div class="pad-1">
      <b>选择支付方式</b>
      <ul class="pay_method pad-t-1">
        <li class="flex pad-t-b-1" @click="selec_pay(index,item.payName)" v-for="(item, index) in payMent">
          <img class="mar-r-5" :src="item.img" alt="" width="25" />
          <div class="f1">{{item.title}}</div>
          <div class="selec_y" :class="{active: item.status}"></div>
        </li>
      </ul>
      <div class="button bg-green border-radius-30" @click="dopay">立即支付</div>
      <div class="color-gray f12 bold center">选择支付方式后，立即支付即可</div>
    </div>


	</div>
	</div>
</template>

<script>
	export default{
    data(){
      return{
        payMent: [{
          img: require('../assets/img/zhifu_icon.png'),
          title: '支付宝支付',
          payName:'alipay',
          status: false
        }, {
          img: require('../assets/img/wei_icon1.png'),
          title: '微信支付',
          payName:'wxpay',
          status: false
        }],
        paymethd:null
      }
    },
    beforeCreate(){
			if(window.localStorage.getItem('id')=="" || window.localStorage.token==""){
				this.$router.push({path:'./login'})
			}else{
				this.$router.push({path:'./pay598'})
			}
		},
    methods:{
      selec_pay(index,payName){

        var th = this;
        for(var i in th.payMent)
        {
          th.payMent[i].status = i == index ? true : false;
        }
        this.paymethd=payName

      },
      dopay(){
        if(this.paymethd=='wxpay'){
          var data={
            params:{}
          }
          data.params.ID=localStorage.id;
          data.params.randpwd=localStorage.token;
          data.params.uid=localStorage.id;
          data.params.paymoney=598;
          var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
          this.axios.get(this.Global.hostUrl+'mobile/Wechatpay/createorder',data,config).then((res) => {
            console.log(res.data);
            if(res.data.error=="success"){
              wxpay(res.data.data.outTradeNo)
            }
          }).catch(err=>{
            alert("请求失败")
          })
          //window.android.wxpay()
        }else if(this.paymethd=='alipay'){
          var data={
            params:{}
          }
          data.params.ID=localStorage.id;
          data.params.randpwd=localStorage.token;
          data.params.uid=localStorage.id;
          data.params.paymoney=598;
          var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
          this.axios.get(this.Global.hostUrl+'mobile/alipay/createorder',data,config).then((res) => {
            console.log(res.data);
            if(res.data.error=="success"){
              alipay(res.data.data.params)
            }
          }).catch(err=>{
            alert("请求失败")
          })
          //window.android.alipay()
        }

        //window.android.wxpay();
      }

    }
	}
</script>

<style>
</style>
