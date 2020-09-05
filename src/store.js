import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        contacts: [
            {id: 0, title: 'sad', phoneNumber: '1 800 111 222 333', editingName: false, editingPhone: false},
            {id: 1, title: '123', phoneNumber: '1 800 111 222 333', editingName: false, editingPhone: false},
            {id: 2, title: 'n111', phoneNumber: '1 800 111 222 333', editingName: false, editingPhone: false},
            {id: 3, title: 'lol', phoneNumber: '1 800 111 222 333', editingName: false, editingPhone: false},
            {id: 4, title: 'kek', phoneNumber: '1 800 111 222 333', editingName: false, editingPhone: false},
            {id: 5, title: 'shrek', phoneNumber: '1 800 111 222 333', editingName: false, editingPhone: false},
            {id: 6, title: 'gh', phoneNumber: '1 800 111 222 333', editingName: false, editingPhone: false},
            
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