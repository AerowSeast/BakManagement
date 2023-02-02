<template>
    <!--  Insert Button Control -->
    <el-row class="home" gutter="20" style="padding:15px 0 0 20px;margin:0">
        <el-col :span="24">
            <div class="btn_container">
                <el-button type="primary" @click="jumpDialog">新增</el-button>
            </div>
        </el-col>
    </el-row>

    <!--  List Content -->
    <el-row class="home" gutter="20" style="padding:15px 30px 15px 30px;margin:0">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="title" label="連結標題" width="500" />
            <el-table-column prop="url" label="網址列" width="400" />
            <el-table-column prop="start_date" label="開始日期" width="150" />
            <el-table-column prop="end_date" label="結束日期" width="150" />

            <!-- Edit and Del -->
            <el-table-column fixed="right" label="處理" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="handleEdit(scope.row)">編輯</el-button>
                    <el-button link type="danger" size="small" @click="handleDel">刪除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-row>

    <!-- Dialog Windows-->
    <el-dialog class="dialog" v-model="dialogVisible" :title="(ifTitle === 'add') ? '新增消息' : '編輯消息'" width="30%"
        :before-close="handleClose">
        <!-- form 內容 -->
        <el-form :inline="true" :model="formNews">
            <el-row>
                <!-- 連結標題 -->
                <el-col :span="24">
                    <el-form-item label="連結標題">
                        <el-input v-model="formNews.title" placeholder="請輸入連結標題" />
                    </el-form-item>
                </el-col>
                <!-- 連結網址 -->
                <!-- <el-col :span="24">
                    <el-form-item label="網址連結 (URL)：">
                        <el-input v-model="formNews.url" placeholder="請輸入網址" />
                    </el-form-item>
                </el-col> -->
                <!-- 連結Tabs標題 -->
                <el-col :span="24">
                    <el-form-item label="選擇標籤">
                        <el-dropdown>
                            <el-button type="primary">
                                <el-icon class="el-icon--right">
                                    <arrow-down v-model="formNews.page" />
                                </el-icon>
                            </el-button>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>全部</el-dropdown-item>
                                    <el-dropdown-item>教會事務</el-dropdown-item>
                                    <el-dropdown-item>禮拜資訊</el-dropdown-item>
                                    <!-- <el-dropdown-item>Action 4</el-dropdown-item>
                                    <el-dropdown-item>Action 5</el-dropdown-item> -->
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </el-form-item>
                </el-col>
                <!-- 連結顯示日期 -->
                <el-col :span="24">
                    <el-form-item label="顯示日期">
                        <div class="block">
                            <el-date-picker v-model="formNews.data" type="datetimerange" start-placeholder="開始日期"
                                end-placeholder="結束日期" :default-time="defaultTime1" />
                        </div>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogVisible = false">
                    確認
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        // Table List from Axios GET
        const tableData = ref([
            {
                page: "全部",
                url: "http://tpkch.org.tw/modules/tadnews/index.php?nsn=13",
                title: "目前國內疫情趨緩，部分防疫規定自 4 月 29 日起鬆綁",
                start_date: "2022-09-25",
                end_date: "2022-10-25",
            },
            {
                page: "教會事務",
                url: "http://tpkch.org.tw/modules/tadnews/index.php?nsn=13",
                title: "教會將於 2022 年成立「太平境馬雅各學院」之系列課程",
                start_date: "2022-09-25",
                end_date: "2022-10-25",
            },
            {
                page: "禮拜資訊",
                url: "http://tpkch.org.tw/modules/tadnews/index.php?nsn=13",
                title: "週六禮拜－得利與得救",
                start_date: "2022-09-25",
                end_date: "2022-10-25",
            }
        ])

        // 控制Dialog是否彈出視窗
        const dialogVisible = ref(false);

        // 判斷Dialog Title is Insert or Edit
        const ifTitle = ref("");

        // 點擊新增按鈕-彈出Dialog Windows
        const jumpDialog = () => {
            dialogVisible.value = true;
            ifTitle.value = "add";
        }

        // FormNews Table
        const formNews = ref({
            title: "",
            url: "",
            page: "",
            start_data: ""
        });

        // handle Dialog "x button" Close
        const handleClose = (done) => {
            ElMessageBox.confirm('你確定要關閉嗎？')
                .then(() => {
                    done()
                })
                .catch(() => {
                    // catch error
                })
        }

        // 編輯TableData的資料 Edit
        const handleEdit = (row) => {
            dialogVisible.value = true;
            ifTitle.value = "edit";
            Object.assign(formNews.value, row);
        }

        const handleDel = () =>{
            console.log("未完成刪除");
        }

        return {
            dialogVisible,
            jumpDialog,
            handleEdit,
            handleDel,
            handleClose,
            tableData,
            ifTitle,
            formNews
        }
    }
}
</script>

<style lang="less" scoped>

</style>