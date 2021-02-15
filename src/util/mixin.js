import {store} from "../vuex/store"
export const myMixin = {
    store,
    data(){
        return{
            msgSize:0,
        }
    },
    created: function () {
        var _this = this;
        document.addEventListener("visibilitychange", function() {
            if (document.visibilityState === 'visible') {
                var item = store.state.activeChatRoom
                if(item && item.recipientId){
                    _this.sendSeenMessage(item.recipientId,"3");
                    document.title = "SChat";
                }
                this.msgSize = 0;
            }
          });
    },
    methods: {
        setActiveChatRoom:function(item){
            item.writing = item.writing ? item.writing  :  false;
            console.log(item);
            this.$store.commit('setActiveChatRoom', item )
            this.setLastMsgCount(item);
            this.sendSeenMessage(item.recipientId,"3");
             var element = document.getElementsByClassName("mobile-open");
             if(element && element[0])element[0].classList.remove("mobile-open")
             document.getElementById('alarm').played
        },
        setLastMsgCount:function(item){
            var chatRooms = store.state.chatRooms;
            chatRooms.find(x =>{
                if(x.recipientId == item.recipientId ) {
                     x.count =0;
                }
            })
            this.$store.commit('setChatRooms', chatRooms)
        },
        sendSeenMessage:function(recipientId,status){
            var stompClient = store.state.stompClient;
            if(stompClient.connected && recipientId){
                const message = {
                msgId:"",
                chatId:"",
                senderId:store.state.myUser.id,
                recipientId:recipientId,
                processType :status,
                };
                stompClient.send("/app/seenmessage", {}, JSON.stringify(message));
            }
        },
        setNotification:function(message){
            var _this = this;
            if (document.visibilityState != 'visible' && store.state.notificationData.notification) {
                var json = {
                    data: message
                }
                if(store.state.notificationData.notificationMsg) json.body = message.content;
                var notification = new Notification(message.senderName,json);
                notification.onclick = function(param) {
                    console.log(param.currentTarget.data.senderId)
                    var item = store.state.chatRooms.find(x => x.recipientId == param.currentTarget.data.senderId )
                    _this.setActiveChatRoom(item);
                    window.focus();
                }
            }
            if (document.visibilityState != 'visible'){
                this.msgSize ++;
                document.title = "SChat(" + this.msgSize + ")"
            }
            if(store.state.notificationData.soud) document.getElementById('alarm').play();
        }
    }
}