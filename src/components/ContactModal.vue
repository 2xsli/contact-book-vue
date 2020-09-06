<template>
    <div class="contactModal">

        <transition name="fade">
            <div class="modal" v-show="showContactModal">
                <div class="modal-wrapper">

                    <div class="modal-header">
                        <p class="modal__title">New Contact: </p>
                        <button class="modal-close-btn" 
                                @click="closeContactModal()">
                        ❌
                        </button>
                    </div>

                    <div class="modal-body">
                        <img class="modal__icon" src="../assets/profile-icon.png">

                        <div class="modal-body-wrapper">
                            <input class="modal__input" 
                                    type="text" 
                                    placeholder="First Name" 
                                    v-model="contactTitle">

                            <input class="modal__input" 
                                    type="number" 
                                    placeholder="Add phone"
                                    v-model="contactNumber">
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button class="modal-submit-btn" 
                                @click="createContact()">
                        Create Contact
                        </button>
                    </div>

                    </div>
            </div>
         </transition>

        <div class="modal-open-wrapper">
            <button class="modal-open-btn" 
                    @click="openContactModal()">
            ➕
            </button>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'ContactModal',

    computed: mapState(['contacts']),

    data() {
        return {
            showContactModal: false,
            contactTitle: '',
            contactNumber: '',
        }
    },

    methods: {
        createContact() {
            if (this.contactTitle.trim() !== '' && this.contactNumber.trim() !== '') {
                this.contacts.push({
                    id: this.contacts.length,
                    title: this.contactTitle,
                    phoneNumber: this.contactNumber,
                    editingName: false,
                    editingPhone: false
                });
            } 

            this.contactTitle = '',
            this.contactNumber = ''
            this.showContactModal = false;
        },

        openContactModal() {
            this.showContactModal = true;
        },

        closeContactModal() {
            this.showContactModal = false;
        },
    },
}
</script>