<template>
    <!-- Insert Button Control -->
    <el-row class="home" gutter="20" style="padding:15px 0 0 20px;margin:0">
        <el-col :span="24">
            <div class="btn_container">
                <el-button type="primary" @click="jumpEditorJS">新增</el-button>
            </div>
        </el-col>
    </el-row>

    <!--  List Content -->
    <el-row class="home" gutter="20" style="padding:15px 30px 15px 30px;margin:0">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="article_title" label="分頁名稱" width="180" />
            <el-table-column prop="article_block" label="分頁區塊" width="300" />
            <el-table-column prop="article_link" label="分頁連結" width="150" />
            <el-table-column prop="article_date" label="建立日期" width="150" />

            <!-- Edit or Del -->
            <el-table-column fixed="right" label="處理" width="120">
                <template #default>
                    <el-button link type="primary" size="small">編輯</el-button>
                    <el-button link type="danger" size="small" @click="handleDel">刪除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-row>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();

        // Table List from Axios GET
        const tableData = ref([
            {
                article_title: "分頁名稱",
                article_block: "分頁區塊",
                article_link: "分頁連結",
                article_date: "建立日期"
            }
        ])

        // 點擊新增按鈕-跳轉router
        const jumpEditorJS = () => {
            router.push({
                path: "/editor"
            })
        }

        // Insert Dialog 確認 Button Handle
        const handleInsert = () => {
            dialogVisible.value = false;
        }

        // 編輯TableData的資料 Edit
        const handleDel = () => {
            console.log("123");
        }

        return {
            tableData,
            jumpEditorJS,
            handleInsert,
            handleDel
        }
    }
}
</script>