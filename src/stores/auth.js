import {defineStore} from "pinia";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import {auth} from "../services/firebase.service";
import {useRouter} from "vue-router";
import {readonly} from "vue";
import {useStorage} from "@vueuse/core/index";

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()

    // persist user
    let authUser = $ref(useStorage('user', null))

    async function register(user) {
        try {
            const {email, password} = user;
            await createUserWithEmailAndPassword(auth, email, password)
            authUser = auth.currentUser;
            await router.push({name: 'home'})
        } catch (error) {
            alert(error.message)
        }
    }

    async function login(user) {
        try {
            const {email, password} = user;
            await signInWithEmailAndPassword(auth, email, password)

            authUser = auth.currentUser;

            await router.push({name: 'home'})
        } catch (error) {
            const errorMessage = error.message;
            console.log(error)
        }
    }

    async function logout() {
        await signOut(auth)
        authUser = null; // clear user

        await router.push({name: 'login'})
    }

    async function getUser() {
        await onAuthStateChanged(auth, async user => {
            // auth user
            if (user) {
                if (router.currentRoute.value.name === 'login') {
                    await router.push('/')
                }
            } else {
                authUser = null;
            }
        })
    }


    return $$({
        user: authUser,

        register,
        login,
        logout,
        getUser
    })
})