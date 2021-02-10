<template>
<div class="modal fade show" id="editSettingsModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings mr-2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Ayarlar
                </h5>
                <button type="button" v-on:click="closeUserSettingsModal()" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="ti-close"></i>
                </button>
            </div>
            <div class="modal-body">
                <ul class="nav nav-tabs" role="tablist">
                    <!-- <li class="nav-item">
                        <a class="nav-link " v-bind:class="account ? 'active' : '' " data-toggle="tab" v-on:click="selectTab('account')" role="tab" aria-controls="account" aria-selected="true">Account</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="nav-link" v-bind:class="notification ? 'active' : '' "  data-toggle="tab" role="tab" v-on:click="selectTab('notification')" aria-controls="notification" aria-selected="false">Bildirim Ayarları</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" v-bind:class="account ? 'contact' : '' "  data-toggle="tab"  role="tab" v-on:click="selectTab('contact')" aria-controls="contact" aria-selected="false">Security</a>
                    </li> -->
                </ul>
                <div class="tab-content">
                    <div class="tab-pane show active" v-if="account" id="account" role="tabpanel">
                        <div class="form-item custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" checked="" id="customSwitch1">
                            <label class="custom-control-label" for="customSwitch1">Allow connected contacts</label>
                        </div>
                        <div class="form-item custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" checked="" id="customSwitch2">
                            <label class="custom-control-label" for="customSwitch2">Confirm message requests</label>
                        </div>
                        <div class="form-item custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" checked="" id="customSwitch3">
                            <label class="custom-control-label" for="customSwitch3">Profile privacy</label>
                        </div>
                        <div class="form-item custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="customSwitch4">
                            <label class="custom-control-label" for="customSwitch4">Developer mode options</label>
                        </div>
                        <div class="form-item custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" checked="" id="customSwitch5">
                            <label class="custom-control-label" for="customSwitch5">Two-step security
                                verification</label>
                        </div>
                    </div>
                    <div class="tab-pane show active" v-if="notification" id="notification" role="tabpanel">
                        <div class="form-item custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" v-on:change="notificationFun" v-model="notificationData.notification" id="customSwitch6">
                            <label class="custom-control-label" for="customSwitch6">Bildirimler</label>
                        </div>
                        <div class="form-item custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" v-model="notificationData.notificationMsg" id="customSwitch7">
                            <label class="custom-control-label" for="customSwitch7">Bildirim İçeriği</label>
                        </div>
                        <div class="form-item custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input"  v-model="notificationData.soud"  id="customSwitch8">
                            <label class="custom-control-label" for="customSwitch8">Mesaj Sesi</label>
                        </div>
                    </div>
                    <div class="tab-pane show active" v-if="contact" id="contact" role="tabpanel">
                        <div class="form-item custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="customSwitch9">
                            <label class="custom-control-label" for="customSwitch9">Suggest changing passwords every
                                month.</label>
                        </div>
                        <div class="form-item custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" checked="" id="customSwitch10">
                            <label class="custom-control-label" for="customSwitch10">Let me know about suspicious
                                entries to your account</label>
                        </div>
                        <div class="form-item">
                            <p>
                                <a class="btn btn-light" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus mr-2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Security Questions
                                </a>
                            </p>
                            <div class="collapse" id="collapseExample">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Question 1">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Answer 1">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Question 2">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Answer 2">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button"  v-on:click="saveSettings()"  class="btn btn-primary">Kaydet</button>
            </div>
        </div>

</div>
</div>
</template>
<script>

  import {store} from "../vuex/store"
  
  export default {
    name: 'settings',
    store,
    data(){
        return{
            loading:false,
            notificationData:{
                notification:true,
                notificationMsg:true,
                soud:true
            },
            account:false,
            notification:true,
            contact:false,

        }
    },
    created: function () {
       this.notificationData = store.state.notificationData
    },
    components: {

    },
    methods:{
        notificationFun:function(){
            if(this.notificationData.notification ){
                Notification.requestPermission().then(function(result) {
                    console.log(result);
                });
            }
        },
        saveSettings:function(){
            localStorage.setItem("notificationData",JSON.stringify(this.notificationData))
            this.$store.commit('setNotificationData', this.notificationData);
            this.closeUserSettingsModal();
        },
        closeUserSettingsModal:function(){
            this.$store.commit('setSettingsModal', false);
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