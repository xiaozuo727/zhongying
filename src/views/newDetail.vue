<template>
	<div>
	<headernav headTip="资讯详情" :backUrl="fromPath" ></headernav>
		
	<div class="content">
		<div class="center f16 pad-5-1 border-b-gray" v-html="cont.title"></div>
		<div class="pad-5-1" v-html="cont.content"></div>
	</div>
	
	</div>
</template>

<script>
	function htmlspecialchars_decode(str){           
	      str = str.replace(/&amp;/g, '&'); 
	      str = str.replace(/&lt;/g, '<');
	      str = str.replace(/&gt;/g, '>');
	      str = str.replace(/&quot;/g, "''");  
	      str = str.replace(/&#039;/g, "'");  
	      return str;  
	}
	
	export default{
		data(){
			return{
				item:'',
				fromPath: '',
                listid:'',
                cont:[{
                    title:"",
                    content:"",
                    addtime:"",
                }],
			}
		},
		created:function(){
			this.item=this.$route.query.item;
			this.fromPath = this.$route.query.item.fromPath;

            this.listid=this.$route.query.id;
		},
		// mounted: function(){
		// 	this.item.content=htmlspecialchars_decode(this.item.content)
		// },

        // 获取后台信息
        mounted:function(){
            var data={
                params:{}
            };
            data.params.user_id=localStorage.id;
            data.params.randpwd=localStorage.token;
            data.params.id=this.listid;
            var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
            this.axios.get(this.Global.hostUrl+'mobile/index/set_notice',data,config).then(res=>{
                // console.log(res.data);
                this.cont=res.data.data;
            })
        },
	}
		
</script>

<style>
</style>