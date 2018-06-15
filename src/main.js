import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'  
import VueResource from "vue-resource"
import routes from './router/router'
import VueRouter from "vue-router";



Vue.use(VueRouter);
Vue.use(ElementUI);
const VueCookie = require('vue-cookie');
Vue.use(VueCookie);
Vue.use(VueResource);


const router = new VueRouter({routes});

const vum = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

export default {vum, router}
