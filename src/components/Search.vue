<template>
  <div id="search">
    <div class="container">

      <input class="search" 
             type="text" 
             placeholder="Search">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchLine: '',
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
