<template>
    <div class="contactBook">
        <div class="container">
            <h1 class="title">{{"Contacts: " + this.$store.state.contacts.length}}</h1>

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

export default {
    name: 'ContactBook',
    components: {
        Search,
        Profile,
        Contacts,
    },
}
</script>