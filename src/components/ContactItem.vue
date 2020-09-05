<template>
    <div class="contactItem">
        
        <div class="contactItem-wrapp">

            <!-- decompose on components | header -->
            <div class="contactItem-wrapp-add">

                <div class="contactItem-info">
                    <img class="contact__icon" 
                    src="../assets/profile-icon.png">

                    <h1 class="contact__name">{{ contact.title }}</h1>
                </div>

            </div>
            <!-- first one's end -->
            <!-- body -->
            <div class="contactItem-fields">

                <div class="contactItem-wrapper">

                    <div class="contactItem-wrapper-add">
                        <p v-if="!contact.editingName" class="contact__field">Name: <span>{{ contact.title }}</span></p>

                        <input v-else class="contact__item-edit" 
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
                    
                    <div class="contactItem-wrapper-add">
                        <p v-if="!contact.editingPhone" class="contact__field">{{"Phone: " + contact.phoneNumber }}</p>

                        <input v-else class="contact__item-edit" 
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
            <!-- footer -->
            <div class="contact-footer">

                <router-link :to="{path: '/'}">
                    <button class="contact__btn">◀️</button>
                </router-link>

                <button class="contact__btn" 
                                    @click="deleteContact(id)">
                🗑️
                </button>
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
        deleteContact(id) {
            this.contacts.splice(id, 1);
            this.$router.push({name: 'ContactBook'});
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

<style scoped>

.contactItem-wrapp-add {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #34495E;
}

.contactItem-info {
    display: flex;
    align-items: center;
}

.contact__icon {
    padding-right: 20px;
}

.contact__name {
    font-size: 36px;
    font-weight: 700;
    color: #34495E;
    margin: 25px 0;
}

.contact__btn {
    /* margin: 15px; */
    background-color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transform: scale(1.3);
}

.contactItem-fields {
    margin: 30px 0;
}

.contactItem-wrapper {
    border-bottom: 1px solid #34495E;
}

.contactItem-wrapper-add {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 15px;
}

.contact__field {
    font-size: 24px;
    font-weight: 400;
    color: #34495E;
}

.contact__item-edit {
    font-size: 24px;
    font-weight: 400;
    color: #34495E;
    border: none;
    outline: none;
}

.contact-footer {
    display: flex;
    justify-content: space-between;
    margin: 30px 15px;
}
</style>