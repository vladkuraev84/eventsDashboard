<template>
  <div class="nav-chats-wr">
    <div class="nav-chats">
      <ul>
        <li v-for="(item, idx) of filteredItems" :key="idx">
          <nuxt-link exact no-prefetch active-class="active" class="nav-link" :to="{path: '/chats/'+item.id, query: {name: item.title}}" @click.native="emitData(item)">
            <span class="icon-chat"><span class="material-icons">help</span></span>
            <span class="chat-info">
              <span class="chat-name"><strong>{{item.name}}</strong></span>
              <span class="chat-msg">{{ item.msg }}</span>
            </span>
            <span class="chat-utils">
              <span v-if="item.status==='read'" class="material-icons" style="color: #24da89">done_all</span>
              <span v-else class="material-icons" style="color: #666">done_all</span>
            </span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    "searchKeys": String
  },
  data() {
    return {
      items: [
        {id: 1, name: 'News', msg: 'News text', nickName: 'Nick A', status: 'read'},
        {id: 2, name: 'Logs', msg: 'Logs lorem textLogs lorem textLogs lorem text', nickName: 'Nick B', status: 'read'},
        {id: 3, name: 'Bot', msg: 'Bot text lorem', nickName: 'Nick C', status: 'unread'},
        {id: 4, name: 'Chat 1', msg: 'Bot text lorem', nickName: 'Nick D', status: 'unread'},
        {id: 5, name: 'Chat 2', msg: 'Bot text lorem', nickName: 'Nick E', status: 'read'},
        {id: 6, name: 'Chat 3', msg: 'Bot text lorem', nickName: 'Nick F', status: 'unread'},
        {id: 7, name: 'Chat 4', msg: 'Bot text lorem', nickName: 'Nick G', status: 'unread'},
        {id: 8, name: 'Chat 5', msg: 'Bot text lorem', nickName: 'Nick H', status: 'unread'},
        {id: 9, name: 'Chat 6', msg: 'Bot text lorem', nickName: 'Nick I', status: 'unread'}
      ]
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
        return item.name.toLowerCase().includes(this.searchKeys.toLowerCase()) === true
      })
    }
  },
  methods: {
    emitData(data) {
      this.$store.commit('header/setHeader', data);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
