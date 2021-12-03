<template>
  <div class="burger" @click="$emit('click')">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'Burger'
  };
</script>
