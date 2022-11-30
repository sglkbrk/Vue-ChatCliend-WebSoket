<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
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