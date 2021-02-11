<template>
  <div id="app">
    <notifications group="foo" position="center center" />
    <notifications group="error" class="error" position="center center" />
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    created:function(){
      document.title = "SChat"
    },
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Sağlık Chat :)',
      // all titles will be injected into this template
      //  titleTemplate: '%s | My Awesome Webapp'
    }
  }
</script>