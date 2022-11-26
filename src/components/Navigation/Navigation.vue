<template>
    <nav class="navigation">
        <div class="nav-group">
            <ul>
                <li data-navigation-target="chats" v-on:click="changed('')"  class="logo">
                    <a href="#">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px" y="0px" width="612px" height="612px" viewBox="0 0 612 612"
                            style="enable-background:new 0 0 612 612;" xml:space="preserve">
                            <g>
                                <g id="_x32__26_">
                                    <g>
                                        <path
                                            d="M401.625,325.125h-191.25c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h191.25
                                    c10.557,0,19.125-8.568,19.125-19.125S412.182,325.125,401.625,325.125z M439.875,210.375h-267.75
                                    c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h267.75c10.557,0,19.125-8.568,19.125-19.125
                                    S450.432,210.375,439.875,210.375z M306,0C137.012,0,0,119.875,0,267.75c0,84.514,44.848,159.751,114.75,208.826V612
                                    l134.047-81.339c18.552,3.061,37.638,4.839,57.203,4.839c169.008,0,306-119.875,306-267.75C612,119.875,475.008,0,306,0z
                                    M306,497.25c-22.338,0-43.911-2.601-64.643-7.019l-90.041,54.123l1.205-88.701C83.5,414.133,38.25,345.513,38.25,267.75
                                    c0-126.741,119.875-229.5,267.75-229.5c147.875,0,267.75,102.759,267.75,229.5S453.875,497.25,306,497.25z">
                                        </path>
                                    </g>
                                </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                        </svg>
                    </a>
                </li>
                <li>
                    <a v-bind:class="$store.getters.activeSideBar == 'chatsSidebar' ? 'active' : 'dd' " data-navigation-target="chats" v-on:click="changed('chatsSidebar')" data-toggle="tooltip" title=""
                        data-placement="right" data-original-title="Chats">
                        <span v-if="deneme()" class="badge badge-warning"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-message-circle">
                            <path
                                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                            </path>
                        </svg>
                    </a>
                </li>
                <li class="brackets">
                    <a v-bind:class="$store.getters.activeSideBar == 'friendsSidebar' ? 'active' : 'dd' "  v-on:click="changed('friendsSidebar')" data-toggle="tooltip" title="" data-placement="right"
                        data-original-title="Friends">
                        <!-- <span class="badge badge-danger"></span> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-user">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </a>
                </li>
                <!-- <li>
                    <a  v-bind:class="$store.getters.activeSideBar == 'favoritesSidebar' ? 'active' : 'asd' "  v-on:click="changed('favoritesSidebar')" data-toggle="tooltip" title="" data-placement="right" href="#"
                        data-original-title="Favorites">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                    </a>
                </li> -->
                <!-- <li class="brackets">
                    <a v-bind:class="$store.getters.activeSideBar == 'archivedSidebar' ? 'active' : 'asd' "  v-on:click="changed('archivedSidebar')" data-toggle="tooltip" title="" data-placement="right"
                        data-original-title="Archived">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-archive">
                            <polyline points="21 8 21 21 3 21 3 8"></polyline>
                            <rect x="1" y="3" width="22" height="5"></rect>
                            <line x1="10" y1="12" x2="14" y2="12"></line>
                        </svg>
                    </a>
                </li> -->
                <li>
                    <a class="dark-light-switcher"  v-on:click="changedTemplate()" data-toggle="tooltip" title="" data-placement="right"
                        data-original-title="Light mode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-moon">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </a>
                </li>
                <li data-toggle="tooltip" title="" data-placement="right" v-on:click="openProfile()" d data-original-title="User menu">
                    <a  data-toggle="dropdown">
                        <figure class="avatar">
                            <img v-bind:src=" config.fileurl + $store.getters.myUser.profilePicture" class="rounded-circle" alt="image">
                        </figure>
                    </a>
                    <div class="dropdown-content profileModal" >
                        <a  class="dropdown-item" data-toggle="modal"  v-on:click="openProfileDialog()" data-navigation-target="contact-information">{{$store.getters.myUser.name}}</a>
                        <a  class="dropdown-item" data-toggle="modal"  v-on:click="openUserSettingsModal()"   data-target="#editProfileModal">Edit Profil</a>
                        <a  class="dropdown-item" data-toggle="modal"  v-on:click="openSettingsModal()"   data-target="#editProfileModal">Ayarlar</a>

                        <!-- <a  class="dropdown-item" data-toggle="modal" data-target="#settingModal">Settings</a>  -->
                        <div class="dropdown-divider"></div>
                        <a  v-on:click="onLogon()"  class="dropdown-item text-danger">Çıkış</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
  import {store} from "../../vuex/store"
 import config from '../../config/config'

  export default {
    name: 'navigation',
    store,
    data(){
        return{
            config:config
        }
    },
    methods: {
        openProfile:function(){
            var syl =  document.getElementsByClassName("profileModal")[0].style.display;
            if(syl == "block" ) return;
            document.getElementsByClassName("profileModal")[0].style.display = "block"
            function close() {
                console.log("123");
                document.getElementsByClassName("profileModal")[0].style.display = "none"
                document.body.removeEventListener("click",close)
            }
            setTimeout(() => {
                 document.body.addEventListener("click", close)
            });
        },
        openProfileDialog:function(){
            this.$store.commit('setProfileItem', store.state.myUser)
            this.$store.commit('setProfileModal', !store.state.profileModal)
            this.openProfile();
        },
        changed: function(param) {
            this.$store.commit('setActiveSideBar', param )
            var element = document.getElementsByClassName("sidebar-group")[0];
            if(this.isMobile()  )element.classList.add("mobile-open")
            else element.classList.remove("mobile-open")
        },
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || document.body.scrollWidth < 1200 ) {
                return true
            } else {
                return false
            }
        },
        changedTemplate: function() {
            var tm = store.state.template == " " ? "dark" : " " 
            this.$store.commit('setTemplate',tm)
            localStorage.setItem("template", tm)
        },
        onLogon: function(){
           var stompClient = store.state.stompClient;
           stompClient.disconnect();
           this.$router.push({ path: '/login' })
           localStorage.clear();
        },
        openUserSettingsModal:function(){
            if(store.state.userSettingsModal) return;
            this.$store.commit('setUserSettingsModal', true);
            document.getElementsByClassName("profileModal")[0].style.display = "block"
        },
        openSettingsModal:function(){
            if(store.state.settingsModal) return;
            this.$store.commit('setSettingsModal', true);
            document.getElementsByClassName("profileModal")[0].style.display = "block"
        },
        deneme:function(){
            var chatRooms = store.state.chatRooms;
            var bool = false
            chatRooms.find(x =>{
                if(x.count > 0 ) {
                    bool = true;
                    return 
                }
            })
            return bool;
        },
    }
  }
</script>