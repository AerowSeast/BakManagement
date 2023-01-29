import { createRouter, createWebHistory } from 'vue-router';

// 路由比對
const routes = [
    {
        redirect: "/home",
        path: "/",
        component: () => import("@/views/Main.vue"),
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("@/views/Home/Home.vue")
            },
            {
                path: "/navbar",
                name: "navbar",
                component: () => import("@/views/Navbar/Navbar.vue")
            },
            {
                path: "/activity",
                name: "activity",
                component: () => import("@/views/Activity/Activity.vue")
            },
            {
                path: "/partyTime",
                name: "partyTime",
                component: () => import("@/views/PartyTime/PartyTime.vue")
            },
            {
                path: "/announce",
                name: "announce",
                component: () => import("@/views/Announce/Announce.vue")
            },
            {
                path: "/Article",
                name: "Article",
                component: () => import("@/views/Article/Article.vue")
            },
            {
                path: "/footer",
                name: "footer",
                component: () => import("@/views/Footer/Footer.vue")
            },
            {
                path: "/news",
                name: "news",
                component: () => import("@/views/News/News.vue")
            },
            {
                path: "/branch",
                name: "branch",
                component: () => import("@/views/branch_manage/branch.vue")
            },
            {
                path: "/group",
                name: "group",
                component: () => import("@/views/Group/Group.vue")
            },
            {
                path: "/user",
                name: "user",
                component: () => import("@/views/User/User.vue")
            },
            {
                path: "/fileUpload",
                name: "fileUpload",
                component: () => import("@/views/FileLoad/FileUpload.vue")
            },
            {
                path: "/fileUpload",
                name: "fileUpload",
                component: () => import("@/views/FileLoad/FileUpload.vue")
            },
            {
                path: "/editor",
                name: "editor",
                component: () => import("@/views/Editor/Editor.vue")
            }
        ]
    },
    {
        path: "/login",
        component: () => import("@/login/login.vue")
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


// export給main.js使用
export default router


