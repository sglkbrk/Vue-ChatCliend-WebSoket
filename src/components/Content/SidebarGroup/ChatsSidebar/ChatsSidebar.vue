<template>
    <div id="chats" class="sidebar active">
        <header>
            <span> Mesajlar </span>
            <ul class="list-inline">
                <!-- <li class="list-inline-item" data-toggle="tooltip" title="" data-original-title="New group">
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
                </li> -->
                <li class="list-inline-item"  v-on:click="OpenAddGroupModal()" >
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
                <li class="list-inline-item d-xl-none d-inline" v-on:click="closeChatSideBar()" >
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
                <li v-for="item in sortArrays($store.getters.chatRooms)" :key="item.recipientId" v-on:click="setActiveChatRoom(item)"  class="list-group-item" v-bind:class="$store.getters.activeChatRoom.recipientId == item.recipientId ? 'open-chat' : '' " >
                    <figure class="avatar">
                        <img v-bind:src="config.fileurl + item.profilePicture" class="rounded-circle" alt="image">
                    </figure>
                    <div class="users-list-body">
                        <div>
                            <h5 v-bind:class="item.count > 0 ? 'text-primary' : '' "  >{{item.name}}</h5>
                            <p v-if="!item.writing" >
                                <i v-if="      item.lastMsg && item.lastMsg.senderId == $store.getters.myUser.id && item.lastMsg.status === '3' " class="ti-double-check text-info"></i>
                                <i v-else-if=" item.lastMsg && item.lastMsg.senderId == $store.getters.myUser.id && item.lastMsg.status === '2' " class="ti-double-check"></i>
                                <i v-else-if=" item.lastMsg && item.lastMsg.senderId == $store.getters.myUser.id && item.lastMsg.status === '1' " class="ti-check"></i>                            
                                {{item.lastMsg && item.lastMsg.content}}
                            </p>
                            <i v-if="item.writing" >Yazıyor...</i>
                        </div>
                        <div class="users-list-action">
                            <div v-if="item.count > 0" class="new-message-count">{{item.count}}</div>
                             
                            <small class="text-primary">{{item.lastMsg && moment(new Date(item.lastMsg.timestamp)).format('HH:mm') }}</small>
                           
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
  import {getUserChatRoom,getUsers,getMyGroup} from "../../../../util/ApiUtil"
  import {_}  from 'vue-underscore';
  import {myMixin} from "../../../../util/mixin"

  export default {
    name: 'chatsSlideBar',
    store,
    mixins: [myMixin],
    created: function () {
        this.getChatRoom();
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
        getChatRoom:function(){
           console.log(store.state.myUser);
            getUserChatRoom(store.state.myUser.id).then(room =>{
                getUsers().then(user =>{
                    room.forEach(item => {
                        var usr = user.find(x => x.id == item.recipientId)
                        if(usr){
                            item.profilePicture = usr.profilePicture
                            item.name = usr.name
                            if(item.count > 0 )
                            this.sendSeenMessage(item.recipientId , "2");
                        }
                        
                    });
                    // this.chatRooms = room;
                    // this.$store.commit('setChatRooms', room)
                    this.getMyGroup(room);
                })
            })
        },
        getMyGroup:function(room){
           console.log(store.state.myUser);
            getMyGroup(store.state.myUser.id).then(group =>{
                console.log(group)
                group.forEach(item => {
                    room.push({
                        // profilePicture : usr.profilePicture
                        name:item.name,
                        id:item.id,
                        chatId:item.id,
                        senderId:item.id,
                        recipientId:item.id,
                        status:"",
                        type:"G",
                        enddate:"",
                        count:0,
                        lastMsg:item.lastMsg,
                    })
                    var allMessages =  store.state.messages;
                    allMessages[item.id] = [];
                    this.$store.commit('setMessages', allMessages)
                });
                this.chatRooms = room;
                this.$store.commit('setChatRooms', room)
                console.log(room)
                
            })
        },
        sortArrays(arrays) {
            var items = _.sortBy(arrays, function(x){ return -(x.lastMsg && new Date(x.lastMsg.timestamp).getTime())},"");
            return items.filter(x =>  x.name && x.name.toLowerCase().includes(this.search.toLowerCase()))
        },
        closeChatSideBar:function(){
            var element = document.getElementsByClassName("mobile-open");
            if(element && element[0])element[0].classList.remove("mobile-open")
        },
        OpenAddGroupModal:function(){
            if(store.state.setgroupModal) return;
            this.$store.commit('setGroupModal', true);
        }
    }
  }
</script>