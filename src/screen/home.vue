<template>
<body   v-on:click="navigationClose()"  v-bind:class="$store.getters.template"  >
  <div v-if="loading" class="layout">
    <navigation></navigation>
    <contentCpn></contentCpn>
    <userSettings v-if="$store.getters.userSettingsModal"></userSettings>
    <imageModal v-if="false" ></imageModal>
  </div>
</body>
  
</template>
<script>
  import navigation from "../components/Navigation/Navigation"
  import contentCpn from "../components/Content/Content"
  import userSettings from "../modal/UserSettings"
  import imageModal from "../modal/Image"
  import {getMyUser} from "../util/ApiUtil"

  import {store} from "../vuex/store"
  
  export default {
    name: 'home',
    store,
    data(){
        return{
            loading:false,
        }
    },
    created: function () {
        this.getMyUser();
    },
    components: {
      navigation,
      contentCpn,
      userSettings,
      imageModal
    },
    methods:{
      getMyUser:function(){
        if (!localStorage.getItem("accessToken")) {
          this.$router.push({ path: '/login' })
            return 
        }
        getMyUser().then(res =>{
          this.loading =true
          this.$store.commit('setMyUser', res)
        })
      },
      navigationClose:function(){
          var element = document.getElementsByTagName("body")[1]
          element.classList.remove("navigation-open");
      }
    }
  }
</script>