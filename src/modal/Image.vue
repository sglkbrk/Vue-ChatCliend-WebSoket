<template>
    <div class="modal fade show" id="disconnected" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-zoom" role="document">
            <div class="modal-content">
                <div class="modal-body" style="padding:0;">
                    <div class="chat-header-action" style="text-align: center;">
                        <a  class="btn btn-outline-light mobile-navigation-button" style="margin-right: 15px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-menu">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </a>

                    <img class="w-85" src="https://i.ytimg.com/vi/jlLu4nnLSxw/hqdefault.jpg"  alt="image">
             
                        <a  class="btn btn-outline-light mobile-navigation-button" style="margin-left: 15px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-menu">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>

  import {store} from "../vuex/store"
  
  export default {
    name: 'Image',
    store,
    data(){
        return{
            loading:false,
            userData:{}
        }
    },
    created: function () {
    //    this.userData = store.state.myUser
    },
    components: {

    },
    methods:{
        // closeUserSettingsModal:function(){
        //     this.$store.commit('setUserSettingsModal', false);
        // }
    }
  }
</script>