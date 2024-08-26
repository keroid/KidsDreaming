import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'
import File1 from '../components/File1.vue'
import File2 from '../components/File2.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
    {
        path: '/',
        component:HelloWorld
    },
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
    history:createWebHashHistory(),
    routes,
})

export default router;

