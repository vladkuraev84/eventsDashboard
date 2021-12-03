<template>
  <div class="wrapper" :class="[ isSize ? 'isSize':null, openMenu && hasToken ? 'openMenu':null]">
    <div class="overflow">
      <div class="contain">
        <switchSize @size="isSize = !isSize" />
        <div class="container">
          <div v-if="hasToken" class="nav-wr">
            <div class="utils-block">
              <Burger @click="openMenu = !openMenu"/>
              <SearchInput placeholder="Search..." @input="filterChats" />
            </div>
            <navBar @close="openMenu = false"/>
            <navBarChats :search-keys="searchKeys" />
          </div>
          <main class="main" @click="openMenu = false">
            <MainHeader v-if="hasToken" />
            <Nuxt />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/Navbar.vue";
import navBarChats from "@/components/NavbarChats.vue";
import switchSize from "@/components/SwitchSize.vue";
import Burger from "@/components/Burger/Burger.vue";
import SearchInput from "@/components/SearchInput.vue";
import MainHeader from "@/components/MainHeader/MainHeader.vue";

export default {
  components:{navBar, switchSize, navBarChats, Burger, SearchInput, MainHeader},
  data() {
    return {
      searchKeys: '',
      openMenu: false,
      isSize: process.isClient
        ? localStorage.getItem('false') || null
        : false
    }
  },
  computed: {
    hasToken() {
      return this.$store.getters.hasToken
    }
  },
  mounted() {
    if (localStorage.getItem('isSize')) {
      this.isSize = localStorage.getItem('isSize');
      localStorage.removeItem('isSize');
      if (this.isSize) {
        const el = document.body;
        el.classList.add('size-body');
      }
    }
  },
  methods: {
    filterChats($event) {
      this.searchKeys = $event;
    }
  }
}
</script>
