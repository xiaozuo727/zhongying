<template>
    <div>
    <headernav headTip="上传身份证件" backUrl="./upidcard1"></headernav>

        <div class="content">
            <div class="pad-l-r-1">
                <div class="upborder auto pad-5">
                    <div id="addpic" class="flex hidden border-radius-5">
                        <img :src="img" alt="" width="100%">
                    </div>
                </div>
                <div class="upbtn flex flex-start-y space-ard">
                    <div class="col-4 re">
                        <div class="button bg-green" style="margin:0;">上传图片</div>
                        <input type="file" name="image" id="image" ref="uploadImage" class="col-10 ab l-t-0 opacity-0" @change="getFile" multiple>
                    </div>

                    <div class="col-4 button bg-green" style="margin:0;" @click="next">下一步</div>
                </div>
                <div class="center mar-t-1">
                    <img src="../assets/img/example3.jpg" alt="" width="100%">
                </div>
            </div>

        </div>

        <!--loading-->
        <loading v-if='loading' :loading='loading'></loading>

    </div>

</template>

<script>
    import loading from '../components/loading'
    export default {
        data(){
            return{
                img:require('../assets/img/upfile3.png'),
                imgData:{
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',
                },
                state:0,
                loading:false,
            }
        },
        components:{
          loading,
        },
        mounted:function(){
            var data={
                params:{}
            };
            data.params.ID=localStorage.id;
            data.params.randpwd=localStorage.token;
            var config= {headers: {'X-Requested-With': 'XMLHttpRequest'},emulateJSON: true};
            this.axios.get(this.Global.upUrl+'mobile/yeepaySkbSdk/findUser',data,config).then(res=>{
                console.log(res.data);
                if(res.data.data.IDcardBack !=''){
                    this.img=this.Global.upUrl+res.data.data.IDcardBack;
                    this.state=1;
                }
            }).catch(err=>{
                // alert('请求失败')
                console.log(res.data);
            })
        },
        methods:{
            getFile(f){
                console.log(f);
                this.loading=true;
                var bankpic=f.target.files[0];
                console.log(bankpic);
                var str='';
                var addpic=document.getElementById('addpic');

                let type=bankpic.type;//文件的类型，判断是否是图片
                let size=bankpic.size;//文件的大小，判断图片的大小
                if(this.imgData.accept.indexOf(type) == -1){
                    alert('请选择我们支持的图片格式！');
                    return false;
                }
                // if(size>512000){
                //     alert('请选择500kb以内的图片！');
                //     return false;
                // }
                let form = new FormData();
                form.append('ID',localStorage.id);
                form.append('randpwd',localStorage.token);
                form.append('img',bankpic);
                form.append('type','idcard_back');
                this.$http.post(this.Global.upUrl+'mobile/YeepaySkbSdk/UploadPhotosBank',form,{
                    headers:{'Content-Type':'multipart/form-data'}
                }).then(response => {
                    console.log(response.data);
                    if(response.data.error=='success'){
                        var reader=new FileReader();
                        reader.readAsDataURL(bankpic);
                        reader.onload = function(e){
                            console.log(e);
                            str+="<img src='"+e.target.result+"' width='100%'>";
                            addpic.innerHTML = str;
                        };
                        this.state=1;
                        this.loading=false;
                    }else{
                        this.state=0;
                        this.loading=false;
                    }

                }).catch(error => {
                    alert('上传图片出错！');
                    this.loading=false;
                })

            },
            next(e){
                if(this.state==1){
                    this.$router.push({path:'/uphezhao'})
                }else{
                    alert('请上传身份证背面照');
                }

            }
        }
    }
</script>

<style scoped>
    .col-4{width: 40%!important;}
</style>