<template>
    <div class="chat"  >
        <div class="chat-header">
            <div class="chat-header-user">
                <figure class="avatar" v-bind:class="sessionStatus ? ' avatar-state-success' : ''" >
                    <img v-bind:src="$store.getters.activeChatRoom.profilePicture" class="rounded-circle" alt="image">
                </figure>
                <div>
                    <h5>{{$store.getters.activeChatRoom.name || $store.getters.activeChatRoom.lastMsg.recipientName}}</h5>
                    <small class="text-success">
                        <i v-if="!$store.getters.activeChatRoom.writing && !sessionStatus" >{{lastSeen}}</i>
                        <i v-if="$store.getters.activeChatRoom.writing" >Yazıyor...</i>
                    </small>
                </div>
            </div>
            <div class="chat-header-action">
                <ul class="list-inline">
                    <li  v-on:click="navigationOpen()" class="list-inline-item d-xl-none d-inline">
                        <a  class="btn btn-outline-light mobile-navigation-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-menu">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </a>
                    </li>
                    <li class="list-inline-item" data-toggle="tooltip" title="" data-original-title="Voice call">
                        <a  class="btn btn-outline-light text-success" data-toggle="modal" data-target="#call">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-phone">
                                <path
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                </path>
                            </svg>
                        </a>
                    </li>
                    <li class="list-inline-item" data-toggle="tooltip" title="" data-original-title="Video call">
                        <a  class="btn btn-outline-light text-warning" data-toggle="modal"
                            data-target="#videoCall">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-video">
                                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                            </svg>
                        </a>
                    </li>
                    <li class="list-inline-item" v-on:click="openProfileDialog()">
                        <a  class="btn btn-outline-light" data-toggle="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-more-horizontal">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                        </a>
                        <!-- <div class="dropdown-menu" style="position: absolute">
                            <a  data-navigation-target="contact-information" class="dropdown-item">Profile</a>
                            <a  class="dropdown-item">Add to archive</a>
                            <a  class="dropdown-item">Delete</a>
                            <div class="dropdown-divider"></div>
                            <a  class="dropdown-item text-danger">Block</a>
                        </div> -->
                    </li>
                </ul>
            </div>
        </div>
        <div class="chat-body" v-on:click="allCloseModal()" >
            <div class="messages" >       
                    <messageItem   v-for="msg in messages" :key="msg.id"  v-bind:msgItem="msg"> </messageItem>
                    <!-- <div class="message-item messages-divider sticky-top" data-label="Today"></div> -->
                    <!-- <div class="message-item messages-divider" data-label="1 message unread"></div> -->
                    <p v-if="uploadFileVis" class="message-item outgoing-message" > Dosya gönderiliyor ... ({{uploadFileVis}}) </p>
            </div>  
        </div>
        <div class="chat-footer">
            <form >
               
                <div>
                    <button  v-on:click="openAndCloseEmojiModal()"  class="btn btn-light mr-3" data-toggle="tooltip" title=""  type="button"
                        data-original-title="Emoji">
                        <div>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-smile">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                <line x1="15" y1="9" x2="15.01" y2="9"></line>
                            </svg>
                        </div>
                        <div class="dropdown-content emojiModal">
                                <VEmojiPicker @select="selectEmoji" />
                        </div>
                    </button>
                </div>
                <input type="text" v-model="msgContent" id="msgContent_id" class="form-control" placeholder="Write a message.">
                <div class="form-buttons" >
                    <button class="btn btn-light" data-toggle="tooltip" title="" type="button"  v-on:click="openFileDialog()"
                        data-original-title="Add files">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-paperclip">
                            <path
                                d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                            </path>
                        </svg>
                    </button>
                    <button class="btn btn-light d-sm-none d-block" data-toggle="tooltip" title="" type="button"
                        data-original-title="Send a voice record">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-mic">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                            <line x1="12" y1="19" x2="12" y2="23"></line>
                            <line x1="8" y1="23" x2="16" y2="23"></line>    
                        </svg>
                    </button>
                    <button class="btn btn-primary" v-on:click="(e)=>{ e.preventDefault(); sendMessages(msgContent)}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-send">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>

  import {store} from "../../../vuex/store"
  import * as moment from 'moment'
  import {getChatMessages,uploadFile,getuserSesion} from "../../../util/ApiUtil"
  import messageItem from "./MessageItem/MessageItem"

  import { VEmojiPicker } from 'v-emoji-picker';


  export default {
    name: 'chatsSlideBar',
    store,
    components: {
        messageItem,
        VEmojiPicker
    },
    data(){
        return{
            moment:moment,
            messages :[],
            msgContent :"",
            activeContact:null,
            writingTimeout:false,
            uploadFileVis:false,
            sessionInterval:null,
            sessionStatus:false,
            lastSeen:null
        }
    },
    created: function () {
        this.sessionStatus=false;
        this.getuserSesionInterval();
        this.clipboard();
    },
    computed: {
        activeChatRoom () {
            this.getMessages(store.state.activeChatRoom);
            this.getuserSesion();
            return store.state.activeChatRoom  
        }
    },
    watch: {
        activeChatRoom (newCount) {
            this.sessionStatus=false;
            this.activeContact = newCount
        },
        msgContent(newCount){
            this.setUserWriting(newCount);
        }
    },
    methods:{
        getMessages:function(activeChatRoom){
           this.lastSeen = null;
           this.messages = []
            if(store.state.messages &&  store.state.messages[activeChatRoom.recipientId]){
                this.messages =  store.state.messages[activeChatRoom.recipientId]
                setTimeout(function(){
                    document.getElementsByClassName("chat-body")[0].scrollTo(0,1000000);
                },100)
            }else {
                getChatMessages(store.state.myUser.id,activeChatRoom.recipientId).then(res =>{
                    var messages = store.state.messages;
                    this.messages =  res
                    messages[activeChatRoom.recipientId] =  res
                    this.$store.commit('setMessages', messages)
                    setTimeout(function(){
                        document.getElementsByClassName("chat-body")[0].scrollTo(0,1000000);
                    },100)
                })
            }
            
       },
       sendMessages:function(msgContent,type,fileurl,filesize){
            var stompClient = store.state.stompClient;
            var recipientId = store.state.activeChatRoom.recipientId;
            if (msgContent.trim() !== "") {
                const message = {
                    senderId: store.state.myUser.id,
                    recipientId: recipientId,
                    senderName: store.state.myUser.name,
                    recipientName:  store.state.activeChatRoom.name ,
                    content: msgContent,
                    timestamp: new Date(),
                    status:stompClient.connected ? "1" : 0,
                    type: type ? type : "M",
                    fileurl: fileurl ? fileurl : "",
                    filesize: filesize ? filesize: ""
                };
                this.messages.push(message);
                var allMessages =  store.state.messages;
                allMessages[recipientId] = this.messages
                this.$store.commit('setMessages', allMessages)
                stompClient.send("/app/chat", {}, JSON.stringify(message));
                this.setLastMsg(this.msgContent);
                this.msgContent = "";
                this.scrollToBottom();
            }
        },
        setLastMsg:function(msg){
            var recipientId = store.state.activeChatRoom.recipientId;
            var chatRooms = JSON.parse(JSON.stringify(store.state.chatRooms));
            chatRooms.find(x =>{
                if(x.recipientId == recipientId ) {
                    if (!x.lastMsg) x.lastMsg = {};
                    x.lastMsg.senderId = store.state.myUser.id;
                    x.lastMsg.recipientId = recipientId;
                    x.lastMsg.content = msg;
                    x.lastMsg.timestamp = new Date();
                    x.lastMsg.status = "1";
                }
            })
            this.$store.commit('setChatRooms', chatRooms)
        },
        setUserWriting:function(){
            var _this = this;
            if(!this.writingTimeout){
                this.writingTimeout = true
                const message = {
                    chatId:"",
                    senderId:store.state.myUser.id,
                    recipientId:store.state.activeChatRoom.recipientId,
                    processType :"1",
                };
                var stompClient = store.state.stompClient;
                stompClient.send("/app/writingmessage", {}, JSON.stringify(message));
                setTimeout(function(){
                    _this.writingTimeout = false
                },3000)
            }
        },
        navigationOpen:function(){
            var element = document.getElementsByTagName("body")[1]
            setTimeout(function(){
                element.classList.add("navigation-open");
            },100)
        },
        openFileDialog:function(){
            var input=document.createElement('input');
            input.type="file";
            input.addEventListener("change", this.selectFile, false);
            setTimeout(function(){
                input.click();
            });
        },
        clipboard:function(){
            var _this = this;
            document.onpaste = function(pasteEvent) {
                var activeChatRoom  = store.state.activeChatRoom ;
                if(activeChatRoom && activeChatRoom.recipientId ){
                    var item = pasteEvent.clipboardData.items[0];                
                    if (item.type.indexOf("image") === 0) {
                        var blob = item.getAsFile();
                        console.log(blob)
                        _this.selectFile("",blob);
                    }
                }
            }
        },
        selectFile:function(oEvent,blob){
            var fileItem = null;
            if(blob)  fileItem = blob;
            else  fileItem = oEvent.path[0].files[0];
            var type = fileItem.type;
            var size = fileItem.size;
            type = type.includes("image") ? "I" : "F";
            if(size > 5242880){
                alert("Dosya Boyutu 5 MB Büyük olamaz")
            }else{
                this.uploadFileVis = fileItem.name;
                this.scrollToBottom();
                uploadFile(store.state.myUser.id,fileItem).then(res => {
                    this.uploadFileVis = false;
                    this.sendMessages(fileItem.name,type,res,size)
                })
            }
        },
        getuserSesionInterval:function(){
            this.getuserSesion();
            this.sessionInterval = setInterval(() => {
                this.getuserSesion();
            }, 15000);
        },
        getuserSesion:function(){
            getuserSesion(store.state.activeChatRoom.recipientId).then(res =>{
                if(res.status == "1") this.sessionStatus = true
                else this.sessionStatus = false
                this.lastSeen =  moment(new Date(res.date)).format("DD ddd HH:mm");
            })
        },
        scrollToBottom:function(){
            setTimeout(function(){
                document.getElementsByClassName("chat-body")[0].scrollTo(0,1000000);
            },100)
        },
        openProfileDialog:function(){
            this.$store.commit('setProfileItem', store.state.activeChatRoom)
            this.$store.commit('setProfileModal', true) 
        },
        selectEmoji(emoji) {
            this.msgContent =this.msgContent + " " + emoji.data;
            document.getElementById("msgContent_id").focus();
        },
        // openAndCloseEmojiModal:function(){
        //     this.emojiModal = !this.emojiModal
        // },
        openAndCloseEmojiModal:function(){
            var syl =  document.getElementsByClassName("emojiModal")[0].style.display;
            if(syl == "block" ) return;
            document.getElementsByClassName("emojiModal")[0].style.display = "block"
            function close() {
                console.log("123");
                document.getElementsByClassName("emojiModal")[0].style.display = "none"
                document.body.removeEventListener("click",close)
            }
            setTimeout(() => {
                 document.body.addEventListener("click", close)
            });
        },
        allCloseModal:function(){
        }
    }
  }
</script>