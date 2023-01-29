<template>
    <!-- Insert Button Control -->
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
            <el-table-column prop="announceTitle" label="公告標題" width="180" />
            <el-table-column prop="announceUnit" label="發布單位" width="300" />
            <el-table-column prop="announceSort" label="公告類別" width="150" />
            <el-table-column prop="announceDate" label="發佈日期" width="150" />

            <!-- Edit or Del -->
            <el-table-column fixed="right" label="處理" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="handleEdit(scope.row)">編輯</el-button>
                    <el-button link type="danger" size="small" @click="handleDel">刪除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-row>

    <!-- Dialog Windows-->
    <el-dialog class="dialog" v-model="dialogVisible" :title="ifTitle === 'add' ? '新增公告' : '編輯公告'" width="30%" :before-close="handleClose">
        <!-- form 內容 -->
        <el-form :inline="true" :model="formAnnounce">
            <el-row>
                <el-col :span="24">
                    <el-form-item label="公告標題">
                        <el-input v-model="formAnnounce.announceTitle" placeholder="請輸入公告標題" />
                    </el-form-item>
                </el-col>

                <el-col :span="24">
                    <el-form-item label="發佈單位">
                        <el-dropdown>
                            <el-button type="primary">
                                <el-icon class="el-icon--right">
                                    <arrow-down />
                                </el-icon>
                            </el-button>
                            <template #dropdown>
                                <el-dropdown-menu v-model="formAnnounce.announceUnit">
                                    <el-dropdown-item>教務處</el-dropdown-item>
                                    <el-dropdown-item>財務處</el-dropdown-item>
                                    <el-dropdown-item>長老室</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </el-form-item>
                </el-col>

                <el-col :span="24">
                    <el-form-item label="公告類別">
                        <el-input v-model="formAnnounce.announceSort" placeholder="請輸入公告類別" />
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="handleInsert()">
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
                announceTitle: "公告標題",
                announceUnit:  "發佈單位",
                announceSort:  "公告類別",
                announceDate:  "發佈日期"
            },
        ])

        // 判斷Dialog Title is Insert or Edit
        const ifTitle = ref("");

        // 控制Dialog是否彈出視窗
        const dialogVisible = ref(false);

        // 點擊新增按鈕-彈出Dialog Windows
        const jumpDialog = () => {
            dialogVisible.value = true;
            ifTitle.value = "add";
        }

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

        // FormAnnounce
        const formAnnounce = ref({
            announceTitle:"",
            announceUnit:"",
            announceSort:""
        })

        // 新增tableData的資料 Insert
        const handleInsert = () => {
            dialogVisible.value = false;
        }

        // 編輯tableData的資料 Edit
        const handleEdit = (row) =>{
            dialogVisible.value =true;
            ifTitle.value = "edit";
            Object.assign(formAnnounce.value,row);
        }

        // 刪除tableData的資料 Delete
        const handleDel = () => {
            console.log("123");
        }

        return {
            ifTitle,
            tableData,
            dialogVisible,
            jumpDialog,
            handleClose,
            formAnnounce,
            handleInsert,
            handleEdit,
            handleDel
        }
    }
}
</script>