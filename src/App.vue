<template>
  <div id="app">
    <div class="container">
      <h1 class="title">{{"Contacts: " + this.$store.contacts.length}}</h1>
      <Search />
      <Profile />
      <Contacts />
    </div>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Profile from './components/Profile.vue'
import Contacts from './components/Contacts.vue'

export default {
  name: 'App',

  components: {
    Search,
    Profile,
    Contacts,
  },
  
}
</script>

<style>
#app {
  width: 600px;
  border: 3px solid #41B883;
  margin: 40px auto;
}

.container {
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
}

.title {
  font-size: 36px;
  font-weight: 700;
  color: #34495E;
  margin: 25px 0;
}
</style>
