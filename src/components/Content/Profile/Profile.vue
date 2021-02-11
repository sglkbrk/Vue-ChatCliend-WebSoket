<template>
    <div class="sidebar-group mobile-open" v-bind:style="$store.getters.profileModal ? '' : 'display:none'" >
        <div id="contact-information" class="sidebar" v-bind:class="$store.getters.profileModal ? 'active' : '' ">
            <header>
                <span>Profile</span>
                <ul class="list-inline" v-on:click="closerofileDialog()">
                    <li class="list-inline-item">
                        <a class="btn btn-outline-light text-danger sidebar-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </a>
                    </li>
                </ul>
            </header>
            <div class="sidebar-body">
                <div class="pl-4 pr-4">
                    <div class="text-center">
                        <figure class="avatar avatar-xl mb-4">
                            <img v-bind:src="$store.getters.profileItem.profilePicture" class="rounded-circle" alt="image">
                        </figure>
                        <h5 class="mb-1">{{$store.getters.profileItem.name}}</h5>
                        <small class="text-muted font-italic">Son Görülme: 395 yıl önce</small>

                        <ul class="nav nav-tabs justify-content-center mt-5" id="myTab" role="tablist">
                            <li v-on:click="selectTab('home')" class="nav-item">
                                <a class="nav-link" v-bind:class="home ? 'active' : '' "  id="home-tab" data-toggle="tab"  role="tab"
                                    aria-controls="home" aria-selected="true">Hakkında</a>
                            </li>
                            <li v-if="$store.getters.profileItem.id == $store.getters.myUser.id ? false : true " v-on:click="selectTab('media')" class="nav-item">
                                <a class="nav-link"  v-bind:class="media ? 'active' : '' " id="profile-tab" data-toggle="tab"  role="tab"
                                    aria-controls="profile" aria-selected="false">Fotograf Ve Dosyalar</a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade" v-bind:class="home ? 'show active' : '' " id="home" role="tabpanel" aria-labelledby="home-tab">
                            <p class="text-muted">İtirazım Var</p>
                            <div class="mt-4 mb-4">
                                <h6>Phone</h6>
                                <p class="text-muted">(555) 555 55 55</p>
                            </div>
                            <div class="mt-4 mb-4">
                                <h6>City</h6>
                                <p class="text-muted">Türkiye / Niğde</p>
                            </div>
                            <div class="mt-4 mb-4">
                                <h6>Website</h6>
                                <p>
                                    <a href="#">www.bsaglik.com</a>
                                </p>
                            </div>
                            <div class="mt-4 mb-4">
                                <h6 class="mb-3">Social media accounts</h6>
                                <ul class="list-inline social-links">
                                    <li class="list-inline-item">
                                        <a class="btn btn-sm btn-floating btn-facebook" data-toggle="tooltip"
                                            title="" data-original-title="Facebook">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn btn-sm btn-floating btn-twitter" data-toggle="tooltip"
                                            title="" data-original-title="Twitter">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn btn-sm btn-floating btn-dribbble" data-toggle="tooltip"
                                            title="" data-original-title="Dribbble">
                                            <i class="fa fa-dribbble"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn btn-sm btn-floating btn-whatsapp" data-toggle="tooltip"
                                            title="" data-original-title="Whatsapp">
                                            <i class="fa fa-whatsapp"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn btn-sm btn-floating btn-linkedin" data-toggle="tooltip"
                                            title="" data-original-title="Linkedin">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn btn-sm btn-floating btn-google" data-toggle="tooltip"
                                            title="" data-original-title="Google">
                                            <i class="fa fa-google"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn btn-sm btn-floating btn-behance" data-toggle="tooltip"
                                            title="" data-original-title="Behance">
                                            <i class="fa fa-behance"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn btn-sm btn-floating btn-instagram" data-toggle="tooltip"
                                            title="" data-original-title="Instagram">
                                            <i class="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-4 mb-4">
                                <h6 class="mb-3">Ayarlar</h6>
                                <div class="form-group">
                                    <div class="form-item custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch11">
                                        <label class="custom-control-label" for="customSwitch11">Engelle</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-item custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" checked=""
                                            id="customSwitch12">
                                        <label class="custom-control-label" for="customSwitch12">Sezsiz</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-item custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch13">
                                        <label class="custom-control-label" for="customSwitch13">Bildirim</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" v-bind:class="media ? 'show active' : '' " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h6 class="mb-3 d-flex align-items-center justify-content-between">
                                <span>Recent Files</span>
                            </h6>
                            <div>
                                <ul class="list-group list-group-flush">
                                    <li  v-for="media in $store.getters.profilMedia " :key="media.id" class="list-group-item pl-0 pr-0 d-flex align-items-center">
                                        <a>
                                            <i  v-bind:class="getFileIcons(media.content)"></i> {{media.content}}
                                        </a>
                                         <a  v-bind:href="media.fileurl" target="_black" class="btn btn-link small dowlandIcon">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><path d="M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"></path><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="2" x2="12" y2="16"></line></svg>
                                             İndir
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {store} from "../../../vuex/store"
    export default {
        name: 'profil',
        store,
        data(){
            return{
                SockJS:null,
                stompClient :null,
                home:true,
                media:false
            }
        },
        components: {
        },
        created: function () {
            console.log("qdsa")
        },
        methods:{
            closerofileDialog:function(){
                this.$store.commit('setProfileModal', false) 
                this.$store.commit('setProfileItem', {})
            },
            selectTab:function(tab){
                this.home=false;
                this.media=false;
                this[tab]= true;
            },
            getFileIcons:function(link){
                if(!link) return "ti ti-files"
                var type = link.split(".")[link.split(".").length-1]
                switch (type) {
                    case "png":
                    case "jpeg":
                    case "gif":
                        return "fa fa-image text-danger mr-2"
                    case "pdf":
                        return "fa fa-file-pdf-o text-danger mr-2"
                    case "docx":
                        return "fa fa-file-word-o text-danger mr-2"
                    case "js":
                        return "fa fa-file-code-o text-danger mr-2"
                    case "xlsx":
                    case "xls":
                        return "fa fa-file-excel-o text-danger mr-2"
                    case "pptx":
                    case "ppsx":
                        return "fa fa-file-powerpoint-o text-danger mr-2"
                    case "zip":
                        return "fa fa-file-zip-o text-danger mr-2"
                    default:
                        return "ti ti-files text-danger mr-2"
                }
            },
        }
    }
</script>