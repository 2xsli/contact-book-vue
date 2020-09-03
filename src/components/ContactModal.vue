<template>
    <div class="contact-modal">

        <div class="modal" v-show="showContactModal">
            <div class="modal-wrapper">

                <div class="modal-header">
                    <p class="modal__title">New Contact: </p>
                    <button class="modal-close" 
                            @click="modelContactClose()">
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

        <div class="contacts-menu">
            <button class="menu__btn" 
                    @click="newContactModal()">
            ➕
            </button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ContactModal',

    data() {
        return {
            showContactModal: false,
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

        newContactModal() {
            this.showContactModal = true;
        },

        modelContactClose() {
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
</style>