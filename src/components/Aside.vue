<template>
    <el-menu :collapse="$store.state.isCollapse" :collapse-transition="false">
        <div class="logo_box" @click="homeLink">
            <div class="logo_image">
                <img src="../images/user_inform.jpg" alt="TPK-Logo" />
            </div>
            <div class="logo_title" v-show="!$store.state.isCollapse ? true : false">
                <h1>太平境馬雅各教會</h1>
                <h2>後台管理系統</h2>
            </div>
        </div>

        <!-- 有次列表 -->
        <el-sub-menu v-for="item in yesChildren" :index="item.name" :key="item.name" @click="clickJump(item)">
            <template #title>
                <component class="icon_class" :is="item.icon" />
                <span>{{ item.label }}</span>
            </template>
            <!-- 次列表顯示 -->
            <el-menu-item-group>
                <el-menu-item v-for="subItem in item.children" :key="subItem.name" :index="subItem.path"
                    @click="clickJump(subItem)">
                    {{ subItem.label }}
                </el-menu-item>

            </el-menu-item-group>
        </el-sub-menu>

        <!-- 無次列表 -->
        <el-menu-item v-for="item in noChildren" :index="item.name" :key="item.navId" @click="clickJump(item)">
            <component class="icon_class" :is="item.icon" />
            <span>{{ item.label }}</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from "vue"
export default {
    setup() {
        const router = useRouter();
        const store = useStore();

        const nav_lists = [
            {
                name: "homeMange",
                label: "主頁管理",
                icon: "Management",
                children: [
                    {
                        path: "/navbar",
                        name: "navbar",
                        label: "導覽列管理",
                        url: "Navbar/Navbar"
                    },
                    {
                        path: "/activity",
                        name: "activity",
                        label: "近期活動管理",
                        url: "Activity/Activity"
                    },
                    {
                        path: "/partyTime",
                        name: "partyTime",
                        label: "聚會時間管理",
                        url: "partyTime/partyTime"
                    },
                    // {
                    //     path: "/announce",
                    //     name: "announce",
                    //     label: "公告管理",
                    //     url: "announce/announce"
                    // },
                    {
                        path: "/article",
                        name: "article",
                        label: "文章管理",
                        url: "article/article"
                    },
                    {
                        path: "/footer",
                        name: "footer",
                        label: "頁尾設置",
                        url: "Footer/Footer"
                    }
                ]
            },
            // {
            //     path: "/carousel",
            //     name: "carousel",
            //     label: "輪播圖管理",
            //     icon: "Picture",
            //     url: "Picture/Picture",
            // },
            {
                path: "/news",
                name: "news",
                label: "消息管理",
                icon: "List",
                url: "News/News",
            },
            {
                path: "/group",
                name: "group",
                label: "群組管理",
                icon: "UserFilled",
                url: "group/group",
            },
            {
                path: "/user",
                name: "user",
                label: "用戶管理",
                icon: "user",
                url: "UserMange/UserMange",
            },
            {
                path: "/branch",
                name: "branch",
                label: "分頁管理",
                icon: "Document",
                url: "branch/branch",
            },
            {
                path: "/fileUpload",
                name: "fileUpload",
                label: "檔案管理",
                icon: "Document",
                url: "fileUpload/fileUpload",
            }
        ];

        // 判斷有無次菜單
        const noChildren = computed(() => {
            return nav_lists.filter((list) => !list.children);
        });

        const yesChildren = computed(() => {
            return nav_lists.filter((list) => list.children);
        });

        // 跳轉路由 、麵包屑
        const clickJump = (item) => {
            // Router 跳轉
            router.push({
                path: item.path
            })

            // VueX 麵包屑狀態管理
            store.commit("selectMenu", item)
        }

        // 跳轉回首頁(Home)
        const homeLink = () => {
            router.push({
                path:"/home"
            })
        }

        return { noChildren, yesChildren, clickJump , homeLink};
    },
};
</script>

<style lang="less" scoped>
.aside_container {
    color: black;
    overflow-x: hidden;
    // border-right:none;
}

.logo_box {
    padding: 10px;
    display: flex;
    place-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    cursor: pointer;

    .logo_image {
        &>img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }

    .logo_title {
        display: flex;
        flex-direction: column;

        &>h1 {
            font-size: 1.2rem;
        }

        &>h2 {
            text-align: right;
            font-size: 0.9rem;
        }
    }
}

.icon_class {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}
</style>
