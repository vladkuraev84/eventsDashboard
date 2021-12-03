<template>
  <section class="login">
    <transition v-if="$route.query.message" name="fade" >
      <div class="alert alert-danger">
          <p>Need login first</p>
      </div>
    </transition>
    <div class="form-wrapper login">
      <form class="form mb-16" @submit.prevent="onSubmit">
        <h1 class="title text-center">Login page </h1>
        <div class="form-block mb-16">
          <input type="text" placeholder="Name" class="form-control">
        </div>
        <div class="form-block mb-16">
          <input type="password" placeholder="Password" class="form-control">
        </div>
        <div class="text-center form-btns">
          <button class="btn btn-primary" type="submit">Login</button>
        </div>
      </form>
      <p class="text-center">
        <nuxt-link to="/">To home page</nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      this.$store.dispatch('login')
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>

</style>
