<template>
    <div class="content">
        <sidebarGroup></sidebarGroup>
        <chat v-if="$store.getters.activeChatRoom.recipientId" ></chat>
        <startView v-if="!$store.getters.activeChatRoom.recipientId" ></startView>
        <profile></profile>
        <audio v-show="false"  id="alarm" src="../../assets/sound/ses.mp3"></audio>
    </div>
</template>


<script>
    import {store} from "../../vuex/store"
    import sidebarGroup from "./SidebarGroup/SidebarGroup"
    import chat from "./Chat/Chat"
    import startView from "./StartView/StartView"
    import profile from "./Profile/Profile"
    import * as Stomp from 'stompjs'
    import * as SockJS from 'sockjs-client'
    import {getUser} from "../../util/ApiUtil"
    import {myMixin} from "../../util/mixin"
    import config from '../../config/config'
    export default {
      name: 'content',
      store,
      data(){
        return{
            SockJS:null,
            stompClient :null,
            config:config
        }
      },
      mixins: [myMixin],
      components: {
        sidebarGroup,
        chat,
        profile,
        startView
      },
      created: function () {
        var _this =this;
        this.onConnect();
        Notification.requestPermission().then(function(result) {
          console.log(result);
        });
        document.onkeydown = function(evt) {
            evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key === "Escape" || evt.key === "Esc");
            } else {
                isEscape = (evt.keyCode === 27);
            }
            if (isEscape) {
              if(store.state.profileModal)_this.$store.commit('setProfileModal', false)
              else _this.$store.commit('setActiveChatRoom', {})
            }
        };
      },
      methods:{
        onConnect:function(){
            this.SockJS = new SockJS(config.soketUrl + "ws");
            this.stompClient = Stomp.over(this.SockJS);
            this.stompClient.connect({}, this.onConnected, this.onError);
            this.$store.commit('setStompClient', this.stompClient);          
        },
        onConnected:function(){
            var userid = store.state.myUser.id;
            console.log("connected");
            var json = JSON.stringify({
                sesionId:"",
                userId: userid,
                status:"",
                date:"",
            });
            this.stompClient.send( "/app/SaveSessionUser", {}, json);
            this.stompClient.subscribe(
              "/user/" + userid + "/queue/messages",
              this.onMessageReceived
            );
             this.stompClient.subscribe(
              "/user/" + userid + "/queue/groupmessages",
              this.onGroupMessageReceived
            );
            this.stompClient.subscribe(
              "/user/" + userid + "/queue/writing",
              this.writeMethod
            );
            this.stompClient.subscribe(
              "/user/" + userid + "/queue/seen",
              this.seenMsgMethod
            );
        },
         onMessageReceived:function(msg){
            const message = JSON.parse(msg.body);
            this.setLastMsg(message);
            const messages = store.state.messages;
            if(!messages[message.senderId]) messages[message.senderId] = [];
            messages[message.senderId].push(message);
            this.$store.commit('setMessages', messages);
            setTimeout(function(){
                document.getElementsByClassName("chat-body")[0].scrollTo(0,1000000);
            },100)
            if(message.senderId == store.state.activeChatRoom.recipientId && document.visibilityState === 'visible'){
              this.sendSeenMessage(message.senderId,"3");
            }
            else {
              this.sendSeenMessage(message.senderId,"2");
              this.setNotification(message);
            }
        },
        onGroupMessageReceived:function(msg){
            debugger
            const message = JSON.parse(msg.body);
            console.log(message);
            this.setLasGrouptMsg(message);
            const messages = store.state.messages;
            if(! [message.recipientId]) messages[message.recipientId] = [];
            messages[message.recipientId].push(message);
            this.$store.commit('setMessages', messages);
            setTimeout(function(){
                document.getElementsByClassName("chat-body")[0].scrollTo(0,1000000);
            },100)
            if(message.recipientId == store.state.activeChatRoom.recipientId && document.visibilityState === 'visible'){
              this.sendSeenMessage(message.recipientId,"3");
            }
            else {
              this.sendSeenMessage(message.recipientId,"2");
              this.setNotification(message);
            }
        },
        writeMethod:function(msg){
            const message = JSON.parse(msg.body);
            this.setUserWriting(message);
            this.setActiveUserWriting(message);
        },
        seenMsgMethod:function(msg){
            var message = JSON.parse(msg.body);
            if(message.processType == "3"){
                const messages = store.state.messages;
                messages[message.senderId].forEach(element => {if(element.status == "2" || element.status == "1") element.status = "3"});
                this.$store.commit('setMessages', messages);
            }else{
                const messages = store.state.messages;
                messages[message.senderId].forEach(element => {if(element.status == "1")  element.status = "2"});
                this.$store.commit('setMessages', messages);
            }
            this.updateSeenLastMessage(message.senderId,message.processType);
        },
        updateSeenLastMessage:function(recipientId,status){
              var chatRooms = JSON.parse(JSON.stringify(store.state.chatRooms));
              chatRooms.find(x =>{
                  if(x.recipientId == recipientId ) {
                      x.lastMsg.status = status;
                  }
              })
              this.$store.commit('setChatRooms', chatRooms)
        },
        onError:function(){
          this.onConnect();
        },
        setLastMsg:function(messages){
              var actRecipientId = store.state.activeChatRoom.recipientId;
              var chatRooms = store.state.chatRooms;
              var item = chatRooms.find(x=> x.recipientId == messages.senderId);
              if(!item) this.setFistMessage(messages);
              else {
                chatRooms.find(x =>{
                    if(x.recipientId == messages.senderId ) {
                        x.lastMsg.content = messages.content;
                        x.lastMsg.timestamp = messages.timestamp;
                        x.lastMsg.senderId = messages.senderId;
                        x.lastMsg.recipientId = messages.recipientId;
                        if(actRecipientId != messages.senderId ) x.count = x.count ? x.count + 1 : 1;
                        else x.count =0;
                    }
                })
                this.$store.commit('setChatRooms', chatRooms)
              }
              
          },
          setLasGrouptMsg:function(messages){
              var actRecipientId = store.state.activeChatRoom.recipientId;
              var chatRooms = store.state.chatRooms;
              var item = chatRooms.find(x=> x.recipientId == messages.senderId);
              if(!item) this.setFistMessage(messages);
              else {
                chatRooms.find(x =>{
                    if(x.recipientId == messages.recipientId ) {
                        x.lastMsg.content = messages.content;
                        x.lastMsg.timestamp = messages.timestamp;
                        x.lastMsg.senderId = messages.senderId;
                        x.lastMsg.recipientId = messages.recipientId;
                        if(actRecipientId != messages.recipientId ) x.count = x.count ? x.count + 1 : 1;
                        else x.count =0;
                    }
                })
                this.$store.commit('setChatRooms', chatRooms)
              }
              
          },
          setFistMessage:function(messages){
            var chatRooms = store.state.chatRooms;
            getUser(messages.senderId).then(res =>{
              chatRooms.push({
                  chatId:"",
                  count: 1,
                  enddate:"",
                  id: "",
                  lastMsg: messages,
                  recipientId: messages.senderId,
                  senderId: messages.recipientId,
                  status:"",
                  type:  "S",
                  writing: false,
                  name:res.userProfile.displayName,
                  profilePicture:res?.userProfile?.profilePictureUrl
                })
                store.commit('setChatRooms', [])
                store.commit('setChatRooms', chatRooms)
            })
          },
          setActiveUserWriting:function(messages){
            var activeChatRoom = store.state.activeChatRoom;
            if(activeChatRoom && activeChatRoom.recipientId && activeChatRoom.recipientId == messages.senderId ) {
              activeChatRoom.writing = true;
              this.$store.commit('setActiveChatRoom', {});
              this.$store.commit('setActiveChatRoom', activeChatRoom);
              setTimeout(() => {
                activeChatRoom.writing = false;
                this.$store.commit('setActiveChatRoom', {});
                this.$store.commit('setActiveChatRoom', activeChatRoom);
              }, 3000);
            }     
          },
          setUserWriting:function(messages){
              var chatRooms = store.state.chatRooms;
              chatRooms.find(x =>{
                  if(x.recipientId == messages.senderId )  x.writing = true;
              })
              this.$store.commit('setChatRooms', []);
              this.$store.commit('setChatRooms', chatRooms);
              setTimeout(() => {
                chatRooms.find(x =>{
                  if(x.recipientId == messages.senderId )  x.writing = false;
              })
              this.$store.commit('setChatRooms', []);
              this.$store.commit('setChatRooms', chatRooms);
              }, 3000);
          }
      }
    }
</script>