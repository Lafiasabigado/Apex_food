import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
    
    {
        path:"/",
        name:"HomeView",
        component:HomeView
    },

    {
        path:"/views/login",
        name:"Login",
        component:Login
    },
    {
        path:"/views/signup",
        name:"Signup",
        component:Signup
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
