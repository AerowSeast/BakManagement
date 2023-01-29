<template>
    <div class="common-layout">
        <el-container class="all_container">

            <!-- Aside 左導覽列 -->
            <el-aside :width="!$store.state.isCollapse ? '250px' : '70px'">
                <Aside />
            </el-aside>

            <el-container class="el-container" :style="{width:activeWidth + '%'}">

                <!-- Header 右上 -->
                <el-header class="right_header">
                    <Header />
                </el-header>

                <!-- Main 內容顯示 右下 -->
                <el-main class="el-main">
                    <router-view  />
                </el-main>
                
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { ref } from 'vue'
import { defineComponent } from 'vue'
import Header from '../components/Header.vue'
import Aside from '../components/Aside.vue'

export default defineComponent({
    component: {
        Header,
        Aside
    },
    setup(){
        const activeWidth = ref(100);
        return {
            activeWidth
        }
    }
})
</script>

<style lang="less" scoped>
.common-layout {
    width: 100%;
    height: 100%;
    .all_container{
        width:100%;
    }
    .el-container {
        width: 100%;
        height:100%;
        .right_header {
            width: calc(100vw - 245px);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .el-main {
            width:100%;
            height:calc(100vh - 60px);
            padding: 0;
            background-color:#dee2e6;
        }
    }
}
</style>