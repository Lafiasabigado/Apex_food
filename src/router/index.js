import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'

const routes = [
    
    {
        path:"/",
        name:"HomeView",
        component:HomeView
    },

    {
        path:"/sign-in",
        name:"SignIn",
        component:SignIn
    },
    {
        path:"/sign-up",
        name:"SignUp",
        component:SignUp
    },
    {
        path:"/about",
        name:"About",
        component:About
    },
    {
        path:"/menu",
        name:"Menu",
        component:Menu
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
