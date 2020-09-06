<template>
    <div class="contacts">
            
            <div class="contacts-overflow">
                <div class="contacts-wrapper" 
                     v-for="(contact, index) in contacts" 
                     :key="contact.id">
                    
                    <router-link :to="{name: 'ContactInfo', params: { id: contact.id } }">
                        <div v-if="!contact.editingName" 
                             class="contact__item-label">
                            {{  contact.title  }}
                        </div>

                        <input v-else class="contact__item-edit" 
                           type="text" 
                           v-model="contact.title"
                           @blur="doneEdit(contact)" 
                           @keyup.enter="doneEdit(contact)" 
                           @keyup.esc="cancelEdit(contact)" 
                           v-focus>
                    </router-link>

                    <div class="btn-wrapper">
                        <button class="contact__btn" 
                                @click="editContact(contact)">
                        🖊️</button>

                        <button class="contact__btn" 
                                @click="deleteContact(index)">
                        🗑️</button>
                    </div>

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

    data() {
        return {
            beforeEditCache: '',
        }
    },

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

// editing functionality
        editContact(contact) {
            this.beforeEditCache = contact.title;
            contact.editingName = true;
        },

        doneEdit(contact) {
            if (contact.title.trim() === '') {
                contact.title = this.beforeEditCache;
            } 

            contact.editingName = false;
        },

        cancelEdit(contact) {
            contact.title = this.beforeEditCache;
            contact.editingName = false;
        },

    }
}
</script>

<style scoped>
/* contacts block wit overflow */
.contacts-overflow {
    overflow: hidden;
    height: 450px;
    overflow-y: auto;
    width: 100%;
    border-top: 1px solid #34495E;
    border-bottom: 1px solid #34495E;
}

.contacts-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contact__item-label {
    font-size: 24px;
    font-weight: 400;
    color: #34495E;
    margin: 10px 0;
    padding: 15px;
    cursor: pointer;
}

.contact__item-edit {
    width: 100%;
    font-size: 24px;
    font-weight: 400;
    color: #34495E;
    margin: 10px 0;
    padding: 15px;
}

.contact__item-edit:focus {
    color: #41B883;
    border: none;
    outline: none;
}

.btn-wrapper {
    display: flex;
}

.contact__btn {
    margin: 15px;
    background-color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transform: scale(1.3);
}

/* vue-router decoration deleted */

a {
    text-decoration: none;
}

</style>