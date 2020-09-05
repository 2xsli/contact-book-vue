<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
      <!-- <ContactBook />
      <ContactInfo /> -->
    </div>
  </div>
</template>

<script>
// import ContactBook from './components/ContactBook.vue'
// import ContactInfo from './components/ContactInfo'

export default {
  name: 'App',

  components: {
    // ContactBook,
    // ContactInfo
  },
}

</script>

<style>

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
