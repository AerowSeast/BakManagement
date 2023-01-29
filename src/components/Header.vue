<template>
    <div class="left_cnt">
        <!-- <el-button @click="changeCollapse" style="display:none">
            <el-icon>
                <Menu />
            </el-icon>
        </el-button> -->
    </div>

    <div class="center_cnt">
        <el-breadcrumb class="bread" separator="/">
            <!-- 首頁-鎖死 (必然存在) -->
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item :to="current" v-if="current">{{ current }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>

    <div class="right_cnt">
        <el-dropdown>
            <span class="el-dropdown-link">
                <img class="user_img" :src="getImgSrc()" alt="User">
            </span>
            <template #dropdown>
                <!-- Logout -->
                <el-dropdown-menu>
                    <el-dropdown-item @click="handleLogout">登出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script>
import { useRouter  } from 'vue-router';
export default {
    setup() {
        // define router
        const router = useRouter();

        // 動態綁定image src屬性
        const getImgSrc = () => {
            return new URL("../images/user_inform.jpg", import.meta.url).href;
        }

        // handle logout
        const handleLogout = () =>{
            router.push({
                path:"/login"
            })
        }

        return { getImgSrc , handleLogout }
    }
}
</script>

<style lang="less" scoped>

.left_cnt{
    visibility: hidden;
}

.center_cnt {
    .bread span {
        font-size: 1.3rem;
    }
}

.right_cnt {
    margin-right:1.5rem;
    .user_img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
}
</style>