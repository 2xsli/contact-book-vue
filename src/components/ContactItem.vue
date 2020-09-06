<template>
    <div class="contactItem">
        <div class="contactItem-wrapp">

            <!-- ContactItemHeader -->
            <div class="contactItem-header">

                <div class="contactItem-title">
                    <img class="contact__icon" 
                    src="../assets/profile-icon.png">

                    <h1 class="contact__name">{{ contact.title }}</h1>
                </div>

            </div>
            
            <!-- ContactItemBody -->
            <div class="contactItem-body">
                <div class="contactItem-body-wrapper">

                    <!-- Contact info item -->

                    <div class="contactItem-wrapper-add">
                        <p v-if="!contact.editingName" class="contact__info">Name: <span>{{ contact.title }}</span></p>

                        <input v-else class="contact__info-edit" 
                           type="text" 
                           v-model="contact.title"
                           @blur="doneEditName(contact)" 
                           @keyup.enter="doneEditName(contact)" 
                           @keyup.esc="cancelEditName(contact)" 
                           v-focus>
            
                        <button class="contact__btn" 
                                @click="editName(contact)">
                        🖊️</button>
                    </div>

                    <!-- Contact info item -->
                    
                    <div class="contactItem-wrapper-add">
                        <p v-if="!contact.editingPhone" class="contact__info">{{"Phone: " + contact.phoneNumber }}</p>

                        <input v-else class="contact__info-edit" 
                           type="text" 
                           v-model="contact.phoneNumber"
                           @blur="doneEditPhone(contact)" 
                           @keyup.enter="doneEditPhone(contact)" 
                           @keyup.esc="cancelEditPhone(contact)" 
                           v-focus>
            
                        <button class="contact__btn" 
                                @click="editPhone(contact)">
                        🖊️</button>
                    </div>
                </div>

            </div>

            <!-- ContactItemFooter -->
            <div class="contactItem-footer">

                <router-link :to="{path: '/'}">
                    <button class="contact__btn">◀️</button>
                </router-link>

            </div>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'ContactItem',

    computed: mapState(['contacts']),

    data() {
        return {
            contact: null,
            beforeEditCacheName: '',
            beforeEditCachePhone: '',
        }
    },

    created() {
        const contact = this.$store.state.contacts.find(contact => contact.id == this.$route.params.id)
        if (contact) {
            this.contact = contact
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
        deleteContact() {
            
        },

        // editing functionality
        editName(contact) {
            this.beforeEditCacheName = contact.title;
            contact.editingName = true;
        },

        doneEditName(contact) {
            if (contact.title.trim() === '') {
                contact.title = this.beforeEditCacheName;
            } 

            contact.editingName = false;
        },

        cancelEditName(contact) {
            contact.title = this.beforeEditCacheName;
            contact.editingName = false;
        },
        // editing phoneNumber
        editPhone(contact) {
            this.beforeEditCachePhone = contact.phoneNumber;
            contact.editingPhone = true;
        },

        doneEditPhone(contact) {
            if (contact.phoneNumber.trim() === '') {
                contact.phoneNumber = this.beforeEditCachePhone;
            } 

            contact.editingPhone = false;
        },

        cancelEditPhone(contact) {
            contact.phoneNumber = this.beforeEditCachePhone;
            contact.editingPhone = false;
        },
    }

}
</script>