import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import home from './screen/home.vue'
import login from './screen/login.vue'



import "./assets/css/app.min.css";
import "./assets/css/style.css";
import "./assets/css/bundle.css";
import "./assets/css/enjoyhint.css";
import "./config/vue.config"
// // import "./assets/css/owl.carousel.min.css";
// import "./assets/fonts/ionicons/css/ionicons.min.css";
// import "./assets/fonts/fontawesome/css/font-awesome.min.css";
// import "./assets/fonts/flaticon/font/flaticon.css";

Vue.use(VueRouter)

Vue.config.productionTip = false

// Vue.prototype.$serviceUrl = config.API_URL
// Vue.prototype.$imagesUrl = config.API_URL + 'FileService/downloadFile/'

const routes =  [
  {path: '/', component: home},
  {path: '/login', component: login},
  // {path: '/detay/:id', component: detay},
  // {path: '/category/:id', component: category},
  // {path: '/category/:id/:pagno', component: category},
  // {path: '/contact', component: contact},
  // {path: '/about', component: about},
  // {path: '/searchPost/:text', component: searchPost},
  // {path: '/yazi-detay/:id', component: PostDetail}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')