<template>
  <div class="text-center welcome-page">
    <div class="index-logo-top">
      <Logo />
    </div>

    <h1 class="title">System logs</h1>
    <p class="light-gray">Welcome to the official system logs</p>
    <ul class="auth-ul">
      <li><NuxtLink to="/login" class="btn btn-auth">Authorization</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue"

export default {
  components: {Logo}
}
</script>
