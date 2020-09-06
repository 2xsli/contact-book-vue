<template>
  <div class="search">
    <input class="search__input" 
            type="text" 
            placeholder="Search" 
            v-model="searchLine" 
            @keyup.enter="searchContact()">
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchLine: '',
    }
  },
  methods: {
    searchContact() {
      console.log(this.searchLine);
    }
  }
}
</script>

