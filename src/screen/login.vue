<template>
<body  v-bind:class="$store.getters.template"  >
  <div class="layout">
    <div class="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    Login
                </h5>
            </div>
            <div class="modal-body">
                <div class="tab-content">
                    <div class="tab-pane show active" id="personal" role="tabpanel">
                        <form>
                            <div class="form-group">
                                <label for="fullname" class="col-form-label">Kullanıcı Adı</label>
                                <div class="input-group">
                                    <input v-model="userName" type="text" v-on:keyup="keyCodeEvent"  class="form-control" id="fullname">
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                             <div class="form-group">
                                <label for="fullname" class="col-form-label">Şifre</label>
                                <div class="input-group">
                                    <input  v-model="password" v-on:keyup="keyCodeEvent"  type="password" class="form-control" id="fullname">
                                    <!-- <div class="input-group-append">
                                        <span class="input-group-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        </span>
                                    </div> -->
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                 <button type="button" class="btn btn-primary"  v-on:click="onRegister()" >Kayıt Ol</button>
                <button type="button" class="btn btn-primary"  v-on:click="login(userName,password)" >Giriş</button>
            </div>
        </div>
    </div>
</div>
</body>
  
</template>
<script>

  import {store} from "../vuex/store"

  import {login} from "../util/ApiUtil"
  

  export default {
    name: 'login',
    store,
    data(){
        return{
            userName:"",
            password :""
        }
    },
    methods:{
        keyCodeEvent:function(e){
            if (e.keyCode === 13) {
                this.login(this.userName,this.password)
            } 
        },
        login:function(userName,password){
            var values = {
                password : password,
                username : userName
            }
            login(values).then((response) => {
                    localStorage.setItem("accessToken", response.accessToken);
                    this.$router.push({ path: '/' })
                })
                .catch((error) => {
                    if (error.status === 401) {
                        alert("Şifre Yanlış ")
                    } else {
                        alert("Hata var")
                    }
                });
        },
        onRegister:function(){
            this.$router.push({ path: '/register' })
        }
    }

  }
</script>