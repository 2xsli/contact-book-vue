<template>
    <div class="contactItem">
        
        <div class="contactItem-wrapp">

            <!-- decompose on components | header -->
            <div class="contactItem-wrapp-add">

                <div class="contactItem-info">
                    <img class="contact__icon" 
                    src="../assets/profile-icon.png">

                    <h1 class="contact__name">Andrew USA</h1>
                </div>

            </div>
            <!-- first one's end -->
            <!-- body -->
            <div class="contactItem-fields">

                <div class="contactItem-wrapper">

                    <div class="contactItem-wrapper-add">
                        <p class="contact__field">Name: Andrew USA</p>
            
                        <button class="contact__btn" 
                                @click="editContact(contact)">
                        🖊️</button>
                    </div>
                    
                    <div class="contactItem-wrapper-add">
                        <p class="contact__field">Phone: 1 800 111 222 333</p>
            
                        <button class="contact__btn" 
                                @click="editContact(contact)">
                        🖊️</button>
                    </div>
                </div>

            </div>
            <!-- footer -->
            <div class="contact-footer">

                <router-link :to="{name: 'ContactBook'}">
                    <button class="contact__btn">◀️</button>
                </router-link>

                <button class="contact__btn" 
                                    @click="deleteContact(index)">
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

.contact-footer {
    display: flex;
    justify-content: space-between;
    margin: 30px 15px;
}
</style>