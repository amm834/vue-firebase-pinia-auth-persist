<script setup>
import {useAuthStore} from "../stores/auth";

const user = $ref({
  email: '',
  password: ''
})

const authStore = useAuthStore()
const register = () => {
  authStore.register(user)
}
</script>

<template>
  <div>
    <h1>Create Account</h1>
    <form @submit.prevent="register">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="user.password">
      </div>
      <button type="submit">Register</button>
    </form>
    <div>
      <p>Already registered?</p>
      <router-link :to="{name:'login'}">Login</router-link>
    </div>

  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

label {
  display: block;
}

button {
  padding: 8px 16px;
  background: #ff8800;
  color: #ffffff;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 10px;
  border-radius: 6px;
}
</style>