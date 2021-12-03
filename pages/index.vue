<template>
  <Welcome v-if="!hasToken" />
  <Home v-else />
</template>

<script>
import Welcome from "@/components/Home/Welcome.vue"
import Home from "@/components/Home/Home.vue"

export default {
  components: {Welcome, Home},
  computed: {
    hasToken() {
      return this.$store.getters.hasToken
    }
  },
}
</script>
