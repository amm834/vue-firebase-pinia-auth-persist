<script setup>
import {useAuthStore} from "./stores/auth";
import {onMounted} from "vue";

const authStore = useAuthStore()
onMounted(() => authStore.getUser)

</script>
<template>
  <main>
    <router-view></router-view>
  </main>
</template>