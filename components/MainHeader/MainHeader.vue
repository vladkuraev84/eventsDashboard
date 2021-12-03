<template>
  <div class="main-header">
    <button class="btn btn-back" @click="goBack(false)"><span class="material-icons">arrow_back</span></button>
    <h2 class="chatName">
      <strong>{{getData.name ? getData.name : 'New Group'}}</strong>
      <span>{{getData.nickName ? getData.nickName : 'Nick Major'}}</span>
    </h2>
  </div>
</template>

<script>

export default {
  name: 'MainHeader',
  computed: {
    getData() {
      return this.$store.getters["header/data"];
    },
  },
  methods: {
    goBack(data) {
      return this.$store.commit('general/setMobile', data)
    }
  }
};
</script>
