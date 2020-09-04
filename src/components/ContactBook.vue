<template>
    <div class="contactBook">
        <div class="container">
            <h1 class="title">{{"Contacts: " + this.$store.contacts.length}}</h1>

            <Search />
            <Profile />
            <Contacts />
        </div>
    </div>
</template>

<script>
import Search from './Search.vue'
import Profile from './Profile.vue'
import Contacts from './Contacts.vue'

// import { mapState } from 'vuex'

export default {
    name: 'ContactBook',

    components: {
        Search,
        Profile,
        Contacts,
    },

    // computed: mapState(['contacts']),
}
</script>

<style>
.contactBook {
    width: 600px;
    /* height: 827px; */
    border: 3px solid #41B883;
    margin: 40px auto;
}

.title {
  font-size: 36px;
  font-weight: 700;
  color: #34495E;
  margin: 25px 0;
}
</style>