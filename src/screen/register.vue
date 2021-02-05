<template>
<body  v-bind:class="$store.getters.template"  >
  <div class="layout">
    <div class="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
        <div class="modal-content" style="width: 500px;">
            <div class="modal-header">
                <h5 class="modal-title">
                    Kayıt
                </h5>
            </div>
            <div class="modal-body">
                <div class="tab-content">
                    <div class="tab-pane show active" id="personal" role="tabpanel">
                        <form>
                            <div class="form-group">
                                <label for="fullname" class="col-form-label">İsim Soyisim</label>
                                <div class="input-group">
                                    <input v-model="name" type="text" class="form-control" id="fullname">
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="fullname" class="col-form-label">Kullanıcı Adı</label>
                                <div class="input-group">
                                    <input v-model="userName" type="text" class="form-control" id="fullname">
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line></svg> 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="fullname" class="col-form-label">E-Mail</label>
                                <div class="input-group">
                                    <input v-model="email" type="text" class="form-control" id="fullname">
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                             <div class="form-group">
                                <label for="fullname" class="col-form-label">Şifre</label>
                                <div class="input-group">
                                    <input  v-model="password"  type="password" class="form-control" id="fullname">
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group" style="justify-content: center;text-align:center">
                                <label for="fullname" class="col-form-label">Profil Resmi</label>
                                <div class="input-group" style="justify-content: center;">
                                    <img class="w-25" v-bind:src="profilePicUrl" /> 
                                    
                                </div>
                                <button  v-on:click="openFileDialog()" style="margin-top: 15px;"> Resim Yükle</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary"  v-on:click="uploadFile()" >Kaydet</button>
            </div>
        </div>
    </div>
</div>
</body>
  
</template>
<script>

  import {store} from "../vuex/store"

  import {signup,uploadFile} from "../util/ApiUtil"
  

  export default {
    name: 'signup',
    store,
    data(){
        return{
            name:"",
            userName:"",
            password :"",
            email:"",
            profilePicUrl:"",
            imageFile:null
        }
    },
    methods:{
        onsave:function(){
            var values = {
                name:this.name,
                email:this.email,
                password : this.password,
                username : this.userName,
                profilePicUrl:this.profilePicUrl
               
            }
            signup(values).then((response) => {
                    if(response.success){
                        this.$router.push({ path: '/login' })
                    }else{
                        alert("Hata")
                    }
            })
            .catch((error) => {
                this.$notify({
                    group: 'error',
                    title: 'Uyarı',
                    text: error.errors[0].defaultMessage
                });
            });
        },
        openFileDialog:function(){
            var input=document.createElement('input');
            input.type="file";
            input.accept="image/*"
            input.addEventListener("change", this.selectFile, false);
            setTimeout(function(){
                input.click();
            });
        },
        selectFile:function(oEvent){
            var _this = this;
            const fileList = oEvent.path[0].files;
            console.log(fileList);
            var size = fileList[0].size;
            if(size > 5242880){
                this.$notify({
                    group: 'foo',
                    title: 'Uyarı',
                    type: 'warn',
                    text: "Dosya Boyutu 5 MB Büyük olamaz"
                });
            }else{
                this.imageFile = fileList[0]
                var fr = new FileReader();
                 fr.onload = function () {
                    _this.profilePicUrl = fr.result;
                }
                fr.readAsDataURL(this.imageFile);
            }
        },
        uploadFile:function(){
            if(this.datacontrol()){
                this.$notify({
                    group: 'foo',
                    title: 'Uyarı',
                    text: this.datacontrol()
                });
            }else{
                var _this = this;
                if(this.imageFile){
                    uploadFile("profile",this.imageFile).then(res => {
                        if(res){
                            _this.profilePicUrl=res;
                            _this.onsave();
                        }
                    })
                }else{
                    _this.onsave();
                }
            }
            
        },
        datacontrol:function(){
            if(!this.name || this.name.trim() == "") return "Lütfen İsim alanını doldurunuz";
            if(!this.email || this.email.trim() == "") return "Lütfen Mail doldurunuz";
            if(!this.password || this.password.trim() == "") return "Lütfen Şifre doldurunuz";
            if(!this.name || this.name.trim() == "") return "Lütfen İsim doldurunuz";
            if(!this.profilePicUrl || this.profilePicUrl.trim() == "") return "Lütfen bir resim şeçiniz";
        }
    }

  }
</script>