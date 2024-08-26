import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'
import File1 from '../components/File1.vue'
import File2 from '../components/File2.vue'
// import StaticFile from '../static/page.html'

const routes = [
    {
        path: '/',
        component:File1
    },
    {
        path: '/file2',
        component:File2
    }
    // {
    //     path: '/static',
    //     component:StaticFile
    // }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router;

