<script setup>
import {useAuthStore} from "../stores/auth";

const user = $ref({
  email: '',
  password: ''
})

const authStore = useAuthStore()
const login = () => {
  authStore.login(user)
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="user.password">
      </div>
      <button type="submit">Login</button>
    </form>
    <div>
      <p>Haven't been registered?</p>
      <router-link :to="{name:'register'}">Create Account</router-link>
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