import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import HomeView from '../views/HomeView.vue'

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
