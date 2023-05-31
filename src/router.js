import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppContacts from './pages/AppContacts.vue';
import ProjectList from './pages/ProjectList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/contatti',
            name: 'contacts',
            component: AppContacts
        },
        {
            path: '/portfolio',
            name: 'projects',
            component: ProjectList
        },
    ]
});

export { router };