    <template>
    <div id="chats" class="sidebar active">
        <header>
            <span> Personeller </span>
            <ul class="list-inline">
                <li class="list-inline-item" data-toggle="tooltip" title="" data-original-title="New group">
                    <a class="btn btn-outline-light"  data-toggle="modal" data-target="#newGroup">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-users">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="btn btn-outline-light" data-toggle="tooltip" title="" 
                        data-navigation-target="friends" data-original-title="New chat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-plus-circle">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                    </a>
                </li>
                <li class="list-inline-item d-xl-none d-inline" v-on:click="closeFriendsSlideBar()" >
                    <a  class="btn btn-outline-light text-danger sidebar-close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </a>
                </li>
            </ul>
        </header>
        <form>
            <input type="text" class="form-control" v-model="search" placeholder="Personel Ara">
        </form>
        <div class="sidebar-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" data-navigation-target="chats" v-for="item in sortArrays(chatRooms)" :key="item.id" v-on:click="setActiveChatRoom(item)" >
                    <div>
                        <figure class="avatar">
                            <img v-bind:src=" config.fileurl +  item.profilePicture || '../../../../assets/images/women_avatar5.jpg'" class="rounded-circle" alt="image">
                        </figure>
                    </div>
                    <div class="users-list-body">
                        <div>
                            <h5>{{item.name}}</h5>
                            <p>Sap Danışmanı</p>
                        </div>
                        <div class="users-list-action">
                            <div class="action-toggle">
                                <div class="dropdown">
                                    <a data-toggle="dropdown" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-more-horizontal">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a  class="dropdown-item">New chat</a>
                                        <a  data-navigation-target="contact-information"
                                            class="dropdown-item">Profile</a>
                                        <div class="dropdown-divider"></div>
                                        <a  class="dropdown-item text-danger">Block</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>

import config from '../../../../config/config'
  import {store} from "../../../../vuex/store"
  import * as moment from 'moment'
  import {getUsers} from "../../../../util/ApiUtil"

  export default {
    name: 'FriendsSlideBar',
    store,
    created: function () {
        this.getAllUsers();
    },
    data(){
        return{
            moment:moment,
            chatRooms :[],
            search:"",
            config:config
        }
    },
    methods:{
       getAllUsers:function(){
            getUsers().then(res =>{
                console.log(res)
                this.chatRooms = res;
            })
       },
       setActiveChatRoom:function(item){
           var json = {
                chatId:"",
                count: 0,
                enddate:"",
                id: "",
                lastMsg: {},
                recipientId: item.id,
                senderId: item.id,
                status:"",
                type:  "S",
                writing: false,
                name:item.name,
                profilePicture:item.profilePicture
           }
           this.$store.commit('setActiveChatRoom', {} )
           this.$store.commit('setActiveChatRoom', json )
            var element = document.getElementsByClassName("mobile-open");
            if(element && element[0])element[0].classList.remove("mobile-open")
       },
       sortArrays(arrays) {
            return arrays.filter(x => x.username && x.username.toLowerCase().includes(this.search.toLowerCase()))
        },
        closeFriendsSlideBar:function(){
            var element = document.getElementsByClassName("mobile-open");
            if(element && element[0])element[0].classList.remove("mobile-open")
        }
    }
  }
</script>
