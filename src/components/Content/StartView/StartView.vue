<template>
    <div class="chat">
         <div class="chat-header">
            <div class="chat-header-user">
                
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
                </ul>
            </div>
        </div>
        <div class="chat-body">
            <!-- <h1>Fivori Team</h1> -->
        </div>      
    </div>
</template>



<script>



  export default {
    name: 'chatsSlideBar',
    methods:{
        navigationOpen:function(){
            var element = document.getElementsByTagName("body")[1]
            setTimeout(function(){
                element.classList.add("navigation-open");
            },100)
        }
    } 
  }
</script>