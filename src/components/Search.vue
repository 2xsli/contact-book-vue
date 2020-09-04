<template>
  <div class="search">
    
    <input class="search__input" 
            type="text" 
            placeholder="Search" 
            v-model="searchLine" @keyup.enter="searchContact()">

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

<style>
.search__input {
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  padding: 13px 20px;
  border: 1px solid #34495E;
  outline: none;
}

.search::placeholder {
  color: #000;
}
</style>
