import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'
import index from '../components/pages/index.vue'
import hilt from '../components/pages/hilt.vue'

const routes = [
    {
        path: '/',
        component:index
    },
    {
        path: '/Hilt',
        component:hilt
    }

]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router;

