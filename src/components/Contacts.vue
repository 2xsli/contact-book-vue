<template>
    <div class="contacts">
            <div class="contacts-overflow">
                <div class="contacts-wrapper" 
                     v-for="(contact, index) in contacts" 
                     :key="contact.id">
                    
                    <router-link :to="{name: 'ContactInfo', params: { id: contact.id } }">
                        <div class="contact__item">
                            {{  contact.title  }}
                        </div>
                    </router-link>

                    <button class="contact__btn" 
                            @click="deleteContact(index)">
                    🗑️</button>
                </div>
            </div>
            
            <ContactModal />
    </div>
</template>

<script>
import ContactModal from './ContactModal'
import { mapState } from 'vuex'

export default {
    name: 'Contacts',
    components: {
        ContactModal
    },
    computed: mapState(['contacts']),

    directives: {
        focus: {
            inserted(el) {
                el.focus()
            }
        }
    },
    methods: {
        deleteContact(index) {
            this.contacts.splice(index, 1);
        },
    }
}
</script>