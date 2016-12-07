import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import VueResource from 'vue-resource'
//import VueTouch from 'vue-touch' //vue-touch  不支持 vue2.0

import store from 'store'
import routes from './route-config'
import filters from './filters'
import directives from './directives'

import 'weui/dist/style/weui.min.css'
import 'lib-flexible/flexible.js'


import App from './App'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    routes
})

router.afterEach((to, from) => {
    let head = document.getElementsByTagName('head')[0],
        meta = document.createElement('meta');

    meta.name = 'description'
    meta.content = to.meta.content;
    head.appendChild(meta);
    document.title = to.meta.title || 'ios7';

    let fromPath = from.path || '/';
    let toPath = to.path;
    let toPath_end = toPath.lastIndexOf('/');
    let backPath = toPath.slice(0 , toPath_end);
    store.dispatch('BACK_PATH' , backPath)
})

//sync(store , router)

filters(Vue)
directives(Vue)

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
