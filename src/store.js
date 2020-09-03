import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        contacts: [
            {id: 0, title: 'Sanya from Dublin', phoneNumber: '8 888 888 88-88', editing: false},
            {id: 1, title: 'Vov4ik', phoneNumber: '8 888 666 52-52', editing: false},
            {id: 2, title: 'Mario Italy', phoneNumber: '8 808 892 13-88', editing: false},
            {id: 3, title: 'Mario Italy', phoneNumber: '8 808 892 13-88', editing: false},
            {id: 4, title: 'Mario Italy', phoneNumber: '8 808 892 13-88', editing: false},
            {id: 5, title: 'Mario Italy', phoneNumber: '8 808 892 13-88', editing: false},
            {id: 6, title: 'Mario Italy', phoneNumber: '8 808 892 13-88', editing: false},
        ],
        contactTitle: '',
        contactNumber: '',
        idContact: 7,
    },
    
    mutations: {

    },

    actions: {

    },

    getters: {
        
    }
})

export default store;