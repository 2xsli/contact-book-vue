import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import ContactBook from '../components/ContactBook'
import ContactInfo from '../components/ContactInfo'

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'ContactBook',
            component: ContactBook
        },

        {
            path: '/Contact',
            name: 'ContactInfo',
            component: ContactInfo,
            props: true
        }
    ],
})

export default router;