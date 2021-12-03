<template>
  <div class="main-header">
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
    }
  }
};
</script>
