
require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


let Myheader = (require('./components/Myheader.vue'));
let Myfooter = (require('./components/Myfooter.vue'));
let Mypanel = (require('./components/Mypanel.vue'));
let About = (require('./components/About.vue'));




const routes = [
    { path: '/home', component: Mypanel },
    { path: '/about', component: About }
]

const router = new VueRouter({
    mode:"history",
    routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    router,
    components:{
        Myheader,Myfooter
    }
});