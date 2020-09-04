<template>
    <div class="contactModal">

        <transition name="fade">
            <div class="modal" v-show="showContactModal">
                <div class="modal-wrapper">

                    <div class="modal-header">
                        <p class="modal__title">New Contact: </p>
                        <button class="modal-close" 
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
                        <button class="submit-btn" 
                                @click="createContact()">
                        Create Contact
                        </button>
                    </div>

                    </div>
            </div>
         </transition>

        <div class="contacts-menu">
            <button class="menu__btn" 
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
            idContact: 7,
        }
    },

    methods: {
        createContact() {
            if (this.contactTitle.trim() !== '' && this.contactNumber.trim() !== '') {
                this.contacts.push({
                    id: this.idContact,
                    title: this.contactTitle,
                    phoneNumber: this.contactNumber,
                    editing: false
                });
            } 

            this.contactTitle = '',
            this.contactNumber = '',
            this.idContact++
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

<style>
.modal-wrapper {
    position: absolute;
    top: 142px;
    right: 0;
    left: 0;
    z-index: 1000;
    width: 680px;
    height: 623px;
    margin: 0 auto;
    padding: 30px;
    background-color: #34495E;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal__title {
    font-size: 24px;
    font-weight: 700;
    color: #41B883;
}

.modal-close {
    background-color: #34495E;
    border: none;
    outline: none;
    cursor: pointer;
    transform: scale(1.3);
}

.modal-body {
    text-align: center;
}

.modal__icon {
    margin-top: 30px;
}

.modal-body-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.modal__input {
    font-size: 18px;
    font-weight: 400;
    width: 600px;
    margin: 30px 0 15px 0;
    padding: 15px;
    border: none;
    outline: none;
}

.modal__input::placeholder {
    color: #000;
}

.modal-footer {
    text-align: center;
}

.submit-btn {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    background-color: #41B883;
    margin-top: 30px;
    padding: 30px;
    border-radius: 40px;
    border: none;
    outline: none;
    cursor: pointer;
}

.contacts-menu {
    margin: 30px 0;
    display: flex;
    justify-content: space-around;
}

.menu__btn {
    padding: 15px;
    background-color: #34495E;
    border-radius: 30px;
    border: none;
    outline: none;
    cursor: pointer;
}

/* Animation for transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

/* delete input[number] arrows */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
</style>