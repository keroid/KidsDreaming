import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'
import File1 from '../components/File1.vue'
import File2 from '../components/File2.vue'

const routes = [
    {
        path: '/',
        com
    }
    {
        path: '/file1',
        component:File1
    },
    {
        path: '/file2',
        component:File2
    }
]

const router = createRouter({
    // history: createWebHistory(),
    history:createWebHashHistory(),
    routes,
})

export default router;

