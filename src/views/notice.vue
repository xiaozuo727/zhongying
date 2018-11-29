<template>
    <div>
        <headernav headTip="公告栏" backUrl="./home"></headernav>

        <div class="content">
            <ul class="f14">
                <li class="pad-5-1 border-b-gray line-height-2" v-for="(item,index) in notice" @click="goDetail(item.id)">
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                notice:[{
                    title:'',
                }],
            }
        },
        mounted:function(){
            var data={
                params:{}
            };
            data.params.ID=localStorage.id;
            data.params.randpwd=localStorage.token;
            var config={headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
            this.axios.get(this.Global.hostUrl+'mobile/index/notice',data,config).then(res=>{
                console.log(res.data);
                if(res.data.error=='success'){
                    this.notice=res.data.data;
                }else{
                    alert(res.data.msg)
                }

            }).catch(err=>{
                alert('请求失败')
            })
        },
        methods:{
            goDetail(i){
                this.$router.push({path:'./noticeDetail',query:{id:i}})
            }
        }
    }
</script>

<style scoped>

</style>