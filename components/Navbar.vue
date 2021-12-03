<template>
  <div class="nav-person-wr">
    <div class="nav-person-container">
      <nav>
        <ul>
          <li>
            <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/" @click.native="emitData({name: 'New Group'}); $emit('close')">
              <i class="material-icons">&#xE8D3;</i>
              <span>New Group</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link no-prefetch active-class="active" class="nav-link" to="/settings" @click.native="emitData({name: 'New Channel'}); $emit('close')">
              <i class="material-icons">&#xE0B6;</i>

              <span>New Channel</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link no-prefetch active-class="active" class="nav-link" to="/settings" @click.native="emitData({name: 'Contacts'}); $emit('close')">
              <i class="material-icons">&#xE851;</i>

              <span>Contacts</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link no-prefetch active-class="active" class="nav-link" to="/settings" @click.native="emitData({name: 'FAQ and Support'}); $emit('close')">
              <i class="material-icons">&#xE000;</i>

              <span>FAQ and Support</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link-logout" href="#" @click.prevent="logout">
              <i class="material-icons">&#xE879;</i>

              <span>Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  destroyed() {
    this.$store.commit("header/clearStore");
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    },
    emitData(data) {
      this.$store.commit('header/setHeader', data);
      return this.$store.commit('general/setMobile', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
}
</style>
