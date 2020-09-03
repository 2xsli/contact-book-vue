import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        contacts: [
            {id: 0, title: 'Andrew USA', phoneNumber: '1 800 111 222 333', editing: false},
            {id: 1, title: 'Alise', phoneNumber: '8 888 666 52 52', editing: false},
            {id: 2, title: 'Mario from Italy', phoneNumber: '1 20 20 40 40', editing: false},
            {id: 3, title: 'Mr. Gambling', phoneNumber: '14 57 82', editing: false},
            {id: 4, title: 'Taxi', phoneNumber: '555 222', editing: false},
            {id: 5, title: 'Vladimir Cheboskari', phoneNumber: '8 808 892 13-88', editing: false},
            {id: 6, title: 'Lina', phoneNumber: '8 900 123 32 10', editing: false},
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