<template>
    <div>
    <headernav headTip="上传银行卡" backUrl="./zn_realN"></headernav>

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
                <img src="../assets/img/example1.jpg" alt="" width="100%" v-model="imgData">

            </div>
        </div>

    </div>

        <!--loading-->
        <loading  v-if='loading' :loading='loading'></loading>

    </div>
</template>

<script>
    import loading from '../components/loading'
    export default {
        data(){
            return{
                img:require('../assets/img/upfile1.png'),
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
            this.axios.get(this.Global.upUrl+'mobile/znhk/findUser',data,config).then(res=>{
                console.log(res.data);
                if(res.data.data.user_bankImg !=''){
                    this.img=this.Global.upUrl+res.data.data.user_bankImg;
                    this.state=1;
                }

            }).catch(err=>{
                // alert('请求失败')
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
                form.append('type','bank');
                this.$http.post(this.Global.upUrl+'mobile/znhk/UploadPhotosBank',form,{
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
                            localStorage.setItem('upbank',e.target.result);
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

                // this.file.prop("src",window.URL.createObjectURL(event.srcElement.files.item(0)));

            },
            next(e){
                if(this.state==1){
                    this.$router.push({path:'/zn_upidcard1'})
                }else{
                    alert('请上传银行卡图片');
                }
                // console.log(this.$refs.uploadImage.files[0]);
                // let reader =new FileReader();
                // let img1=this.$refs.uploadImage.files[0];

            }
        }
    }
</script>

<style scoped>
    .col-4{width: 40%!important;}
</style>