import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { usePermissStore } from '../store/permiss'
import Home from '../views/home.vue'
import Login from '../views/login.vue'
    const routes : RouteRecordRaw[] = [
        //想要首页暂时不展示内容，故注释
        //{
            //path: '/',
            //redirect: '/',
        //},
        {
            path: '/',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    meta: {
                        title: '系统首页',
                        permiss: '1',
                    },
                    component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
                },
                {
                    path: '/selectInfo',
                    name: 'selectInfo',
                    meta: {
                        title: '项目文件搜索',
                        permiss: '2',
                    },
                    component: () => import(/* webpackChunkName: "table" */ '../views/selectInfo.vue'),
                },
                {
                    path: '/projectInfo',
                    name: 'projectInfo',
                    meta: {
                        title: '项目信息明细 ',
                        permiss: '11',
                    },
                    component: () => import(/* webpackChunkName: "charts" */ '../views/projectInfo.vue'),
                },
                {
                    path: '/fileSource',
                    name: 'fileSource',
                    meta: {
                        title: '部门文件库',
                        permiss: '5',
                    },
                    component: () => import(/* webpackChunkName: "fileSource" */ '../views/fileSource.vue'),
                },
                {
                    path: '/tabs',
                    name: 'tabs',
                    meta: {
                        title: 'tab标签',
                        permiss: '3',
                    },
                    component: () => import(/* webpackChunkName: "tabs" */ '../views/tabs.vue'),
                },
                {
                    path: '/donate',
                    name: 'donate',
                    meta: {
                        title: '鼓励作者',
                        permiss: '14',
                    },
                    component: () => import(/* webpackChunkName: "donate" */ '../views/donate.vue'),
                },
                {
                    path: '/permission',
                    name: 'permission',
                    meta: {
                        title: '权限管理',
                        permiss: '13',
                    },
                    component: () => import(/* webpackChunkName: "permission" */ '../views/permission.vue'),
                },
                {
                    path: '/upload',
                    name: 'upload',
                    meta: {
                        title: '上传插件',
                        permiss: '6',
                    },
                    component: () => import(/* webpackChunkName: "upload" */ '../views/upload.vue'),
                },
                {
                    path: '/icon',
                    name: 'icon',
                    meta: {
                        title: '自定义图标',
                        permiss: '10',
                    },
                    component: () => import(/* webpackChunkName: "icon" */ '../views/icon.vue'),
                },
                {
                    path: '/user',
                    name: 'user',
                    meta: {
                        title: '个人中心',
                    },
                    component: () => import(/* webpackChunkName: "user" */ '../views/user.vue'),
                },
                {
                    path: '/editor',
                    name: 'editor',
                    meta: {
                        title: '富文本编辑器',
                        permiss: '8',
                    },
                    component: () => import(/* webpackChunkName: "editor" */ '../views/editor.vue'),
                },
                {
                    path: '/markdown',
                    name: 'markdown',
                    meta: {
                        title: 'markdown编辑器',
                        permiss: '9',
                    },
                    component: () => import(/* webpackChunkName: "markdown" */ '../views/markdown.vue'),
                },
                {
                    path: '/export',
                    name: 'export',
                    meta: {
                        title: '导出Excel',
                        permiss: '2',
                    },
                    component: () => import(/* webpackChunkName: "export" */ '../views/export.vue'),
                },
                {
                    path: '/import',
                    name: 'import',
                    meta: {
                        title: '导入Excel',
                        permiss: '2',
                    },
                    component: () => import(/* webpackChunkName: "import" */ '../views/import.vue'),
                },
            ],
        },
        {
            path: '/login',
            name: 'Login',
            meta: {
                title: '登录'
            },
            component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
        },
        {
            path: '/403',
            name: '403',
            meta: {
                title: '没有权限',
            },
            component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
        },
    ]
    const router = createRouter({
        history: createWebHashHistory(),
        routes
    })
    //全局前置守卫：初始化时执行、每次路由切换前执行
    router.beforeEach((to, from, next) => {
        //meta里的title赋给浏览器的title
        document.title = `${to.meta.title} `
        //通过ms_username在localStorage获取角色role
        const role = localStorage.getItem('ms_username')
        //引入usePermissStore里存储的权限数据
        const permiss = usePermissStore()
        //如果无角色状态且要去的路径不是登录界面
        if (!role && to.path !== '/login') {
            next('/login')
        } 
        // 如果没有权限，则进入403
        else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
            next('/403')
        } 
        //放行
        else {
            next()
        }
    })
export default router
