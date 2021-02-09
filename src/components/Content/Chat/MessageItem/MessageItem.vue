<template>
    <div   class="message-item" v-bind:class="this.msgItem.senderId == $store.getters.myUser.id  ? 'outgoing-message' : '' "  >
        <div class="message-avatar">
            <figure class="avatar">
                <img v-bind:src="this.msgItem.senderId == $store.getters.myUser.id ? $store.getters.myUser.profilePicture : $store.getters.activeChatRoom.profilePicture" class="rounded-circle" alt="image">
            </figure>
            <div>
                <h5>{{this.msgItem.senderId == $store.getters.myUser.id ? $store.getters.myUser.name : $store.getters.activeChatRoom.name}}</h5>
                <div class="time">{{moment(new Date(msgItem.timestamp)).format('HH:mm') }} 
                    <i v-if="this.msgItem.senderId == $store.getters.myUser.id && this.msgItem.status == '3' " class="ti-double-check text-info"></i>
                    <i v-if="this.msgItem.senderId == $store.getters.myUser.id && this.msgItem.status == '2' " class="ti-double-check"></i>
                    <i v-if="this.msgItem.senderId == $store.getters.myUser.id && this.msgItem.status == '1' " class="ti-check"></i>
                </div>
            </div>
        </div>
        <figure v-if="this.msgItem.type == 'I' ">
            <img v-bind:src="this.msgItem.fileurl" class="w-25 img-fluid rounded" alt="image">
        </figure>
        <div  v-if="this.msgItem.type == 'M'" v-html="linkparse(msgItem.content)" class="message-content">

        </div>
        <div v-if="this.msgItem.type == 'F' " style="background-color: #B0C4DE;color: #000000;" class="message-content message-file">
            <div class="file-icon">
                <i v-bind:class="getFileIcons(this.msgItem.fileurl)"></i>
            </div>
            <div>
                <div> {{msgItem.content}} <i  style="color:#4169E1" class="small">({{fileSizeToText(this.msgItem.filesize)}})</i></div>
                <ul class="list-inline">
                    <li class="list-inline-item mb-0"><a v-bind:href="this.msgItem.fileurl">indir</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import * as moment from 'moment'
  import {store} from "../../../../vuex/store"
  export default {
    name: 'chatsSlideBar',
    props:["msgItem"],
    store,
    data(){
        return{
            moment:moment,
            messages :[]
        }
    },
    methods:{
        getFileIcons:function(link){
            if(!link) return "ti ti-files"
            var type = link.split(".")[link.split(".").length-1]
            switch (type) {
                case "pdf":
                    return "fa fa-file-pdf-o"
                case "docx":
                    return "fa fa-file-word-o"
                case "js":
                    return "fa fa-file-code-o"
                case "xlsx":
                case "xls":
                    return "fa fa-file-excel-o"
                case "pptx":
                case "ppsx":
                    return "fa fa-file-powerpoint-o"
                case "zip":
                    return "fa fa-file-zip-o"
                default:
                    return "ti ti-files"
            }
        },
        linkparse :function (text) {
            var urlRegex = /(https?:\/\/[^\s]+)/g;
            return text.replace(urlRegex, function(url) {
                return '<a target="_blank" href="' + url + '">' + url + '</a>';
            })
        },
        fileSizeToText:function(bytes){
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (bytes == 0) return '0 Byte';
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        }
    }
    
    
  }
</script>