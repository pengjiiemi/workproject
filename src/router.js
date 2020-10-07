import Vue from 'vue'
import VueRouter from 'vue-router'
// import routes from './views/index'
const Home  = () => import('./views/Home.vue')
Vue.use(VueRouter)
const route = new VueRouter({
    routes:[
        {
            path:'/',
            component:Home
        },
    ]
})

export default route