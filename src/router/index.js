import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import {useAuthStore} from "../stores/auth";
import {auth} from "../services/firebase.service";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
    ]
})

router.beforeEach((to, from, next) => {

    const isLoggedIn = !!useAuthStore().user;

    // if we protected route with auth and user is not logged in redirect to the login
    if (to.meta.requiresAuth && !isLoggedIn) next({name: 'login'})
    else next()

})

export default router
