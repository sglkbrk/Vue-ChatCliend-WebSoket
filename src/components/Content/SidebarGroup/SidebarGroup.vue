<template>
    <div class="sidebar-group" v-bind:class="isMobile() ? 'mobile-open' : '' ">
        <archivedSidebar  v-if="$store.getters.activeSideBar == 'archivedSidebar' ">  </archivedSidebar> 
        <chatsSidebar     v-if="$store.getters.activeSideBar == 'chatsSidebar' " ></chatsSidebar>
        <favoritesSidebar v-if="$store.getters.activeSideBar == 'favoritesSidebar' "></favoritesSidebar>
        <friendsSidebar   v-if="$store.getters.activeSideBar == 'friendsSidebar' "></friendsSidebar>
    </div>
</template>


<script>
    import archivedSidebar from "./ArchivedSidebar/ArchivedSidebar"
    import chatsSidebar from "./ChatsSidebar/ChatsSidebar"
    import favoritesSidebar from "./FavoritesSidebar/FavoritesSidebar"
    import friendsSidebar from "./FriendsSidebar/FriendsSidebar"
    import {store} from "../../../vuex/store"

  
  export default {
    name: 'SidebarGroup',
    store,
    components: {
      archivedSidebar,
      chatsSidebar,
      favoritesSidebar,
      friendsSidebar
    },
    methods:{
      isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || document.body.scrollWidth < 1200 ) {
            return true
        } else {
            return false
        }
      }
    }
  }
</script>