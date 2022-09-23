<script setup>
import {useAuthStore} from "../stores/auth";

const {logout} = useAuthStore()
</script>
<template>
  <div>
    <h1>Hello User</h1>
    <button @click="logout">Logout</button>
  </div>
</template>