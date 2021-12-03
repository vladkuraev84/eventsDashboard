<template>
  <div class="main-container chat">
    Chats first {{$route.params.id}}, {{$route.query.name}}

    <div class="text-center chat-btn-more-block">
      <button class="btn btn-more">More logs</button>
    </div>

    <div class="msg-wr">
      <div v-for="idx in 20" :key="idx + 'chat'" class="msg">
        Message#{{idx}}......Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem eius, exercitationem facilis iure
        minima minus odit quam quibusdam quisquam! Aut, delectus dolores enim fugit hic modi nam nobis repellendus.

        <p class="msg-date">02/12/2021 18:13</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ['auth'],
  data() {
    return{
      num: 20
    }
  },
  mounted() {
    /* setTimeout( () => {
      const el = this.$el.querySelectorAll('.msg');
      const lastOne = el[el.length-1];

      if (lastOne) {
        lastOne.scrollIntoView({behavior: 'smooth'});
      }
    }, 500) */
  }
}
</script>
