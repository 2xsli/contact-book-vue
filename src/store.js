import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        contacts: [
            {id: 0, title: 'Alexa', phoneNumber: '1 800 111 222 333', editingName: false, editingPhone: false},
            {id: 1, title: 'Bruen Black', phoneNumber: '1 800 123 123 123', editingName: false, editingPhone: false},
            {id: 2, title: 'Kanye West', phoneNumber: '1 808 100 200 300', editingName: false, editingPhone: false},
            {id: 3, title: 'Swaroop', phoneNumber: '13 37', editingName: false, editingPhone: false},
            {id: 4, title: 'Kyle Fly', phoneNumber: '1 800 101 202 303', editingName: false, editingPhone: false},
            {id: 5, title: 'Vladimir Vladimirovich', phoneNumber: '7 900 111 22 33', editingName: false, editingPhone: false},
            {id: 6, title: 'Big G', phoneNumber: '1 888 888 888 888', editingName: false, editingPhone: false},
            
        ],

        
    },
    
    mutations: {

    },

    actions: {

    },

    getters: {
        
    }
})

export default store;