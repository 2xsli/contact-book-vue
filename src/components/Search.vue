<template>
  <div id="search">
    <div class="container">

      <input class="search" 
             type="text" 
             placeholder="Search" 
             v-model="searchLine" @keyup.enter="searchContact()">

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Search',

  computed: mapState(['contacts']),

  data() {
    return {
      searchLine: '',
    }
  },

  methods: {
    searchContact() {
      console.log(this.searchLine);
      this.contacts.filter(contact => contact.length > 4);
    }
  }
}

</script>

<style>
.search {
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
