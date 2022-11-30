<template>
<div class="modal fade show"   tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings mr-2"><circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                    </path>
                    </svg> 
                    Yeni Grup
                </h5>
                <button type="button" v-on:click="closeGroupModal()" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="ti-close"></i>
                </button>
            </div>
            <div class="modal-body">
                <ul class="nav nav-tabs" role="tablist">
                    <!-- <li class="nav-item">
                        <a class="nav-link " v-bind:class="account ? 'active' : '' " data-toggle="tab" v-on:click="selectTab('account')" role="tab" aria-controls="account" aria-selected="true">Account</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="nav-link" v-bind:class="notification ? 'active' : '' "  data-toggle="tab" role="tab" v-on:click="selectTab('notification')" aria-controls="notification" aria-selected="false">Grup Bilgileri</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-bind:class="account ? 'contact' : '' "  data-toggle="tab"  role="tab" v-on:click="selectTab('contact')" aria-controls="contact" aria-selected="false">Grup Üyeleri</a>
                    </li>
                </ul>
                <div class="tab-content">
                  
                    <div class="tab-pane show active" v-if="notification" id="notification" role="tabpanel">
                            <label>Grup Adı</label>
                            <input type="text" v-model="name" class="form-control" placeholder="Grup Adı">
                    </div>
                    <div class="tab-pane sidebar-body show active" v-if="contact" id="contact" role="tabpanel">
                          <!-- <v-list two-line> -->
                                <v-list-item-group
                                    v-model="selected"
                                    active-class="pink--text"
                                    multiple>
                                        <template v-for="(item) in sortArrays(personList)">
                                            <v-list-item :key="item.title">
                                                <template  v-slot:default="{ active }">
                                                    <v-list-item-avatar>
                                                        <v-img :src="config.fileurl +  item.profilePicture || '../../../../assets/images/women_avatar5.jpg'"  ></v-img>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title v-text="item.name"></v-list-item-title>
                                                        <v-list-item-subtitle text="Pozisyon">Pozisyon</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                     <v-list-item-action>
                                                    <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                                                        <v-icon
                                                        v-if="!active"
                                                        color="grey lighten-1"
                                                        >
                                                        mdi-star-outline
                                                        </v-icon>
                                                        <v-icon
                                                        v-else
                                                        color="yellow darken-3"
                                                        >
                                                        mdi-star
                                                        </v-icon>
                                                    </v-list-item-action>
                                                </template>
                                            </v-list-item>
                                        </template>
                                </v-list-item-group>
                        <!-- </v-list> -->
                            <!-- <ul class="list-group list-group-flush">
                                <li class="list-group-item" data-navigation-target="chats" v-for="item in sortArrays(personList)" :key="item.id" v-on:click="deneme(item)" >
                                    <div style="display: flex;    align-items: center;">
                                        <div>
                                            <figure class="avatar">
                                                <img v-bind:src=" config.fileurl +  item.profilePicture || '../../../../assets/images/women_avatar5.jpg'" class="rounded-circle" alt="image">
                                            </figure>
                                        </div>
                                        <div class="users-list-body">
                                            <div>
                                                <h6 style="font-size: 0.7rem;">{{item.name}}</h6>
                                                <p style="font-size: 0.7rem;" >Sap Danışmanı</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul> -->
                    
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button"  v-on:click="saveGroupfun()"  class="btn btn-primary">Kaydet</button>
            </div>
        </div>

</div>
</div>
</template>
<script>

  import {store} from "../vuex/store"
  import {getUsers,savegroupandMember} from "../util/ApiUtil"
  import config from '../config/config'

  
  export default {
    name: 'settings',
    store,
    data(){
        return{
            name:"",
            loading:false,
            notificationData:{
                notification:true,
                notificationMsg:true,
                soud:true
            },
            personList :[],
            search:"",
            account:false,
            notification:true,
            contact:false,
            config:config,
            selected: [2]

        }
    },
    created: function () {
       this.getAllUsers();
    },
    components: {

    },
    methods:{
        getAllUsers:function(){
            getUsers().then(res =>{
                console.log(res)
                this.personList = res;
            })
        },
        sortArrays(arrays) {
            return arrays.filter(x => x.username && x.username.toLowerCase().includes(this.search.toLowerCase()))
        },
        saveGroupfun(){
            if(!this.name) alert("Lütfen Grup İsmi Giriniz")
            var values = {
                group:{
                    id:null,
                    name:this.name,
                    status:"",
                    type:"",
                    count:"0",
                    lastMsg:{},
                    crdate:new Date(),
                    chdate:new Date(),
                },
                groupMembers:[
                    {
                        userid:"63873c1a0add47000144e0e0",
                        authorization:"",
                        crdate:new Date(),
                        chdate:new Date(),
                    },
                    {
                        userid:"63873c630add47000144e0e1",
                        authorization:"",
                        crdate:new Date(),
                        chdate:new Date(),
                    },
                    {
                        userid:"63874d830add47000144e0e2",
                        authorization:"",
                        crdate:new Date(),
                        chdate:new Date(),
                    }

                    
                ]
            }
            savegroupandMember(values).then((response) => {
                    if(response.name){
                        alert("Grup Oluşturuldu")
                        this.closeGroupModal();
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
        notificationFun:function(){
            localStorage.setItem("notificationData",JSON.stringify(this.notificationData))
            this.$store.commit('setNotificationData', this.notificationData);
            this.closeGroupModal();
        },
        closeGroupModal:function(){
            this.$store.commit('setGroupModal', false);
        },
        selectTab:function(id){
            this.account =false;
            this.notification =false;
            this.contact =false;
            this[id] =  true;
        }
    }
  }
</script>