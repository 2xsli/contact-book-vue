<template>
    <div class="contactInfo">
        <div class="container">
            <ContactItem />
        </div>
    </div>
</template>

<script>
import ContactItem from './ContactItem'

export default {
    name: 'ContactInfo',
    components: {
        ContactItem,
    }
}
</script>

<style>
.contactInfo {
    width: 600px;
    border: 3px solid #41B883;
    margin: 40px auto;
}
</style>