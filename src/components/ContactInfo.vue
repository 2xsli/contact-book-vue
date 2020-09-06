<template>
    <div class="contactInfo">
        <div class="container">
            <ContactItem />
        </div>
    </div>
</template>

<script>
import ContactItem from './ContactItem'

import { mapState } from 'vuex'

export default {
    name: 'ContactInfo',
    components: {
        ContactItem,
    },

    computed: mapState(['contacts']),
}
</script>