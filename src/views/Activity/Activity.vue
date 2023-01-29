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
            <el-table-column prop="activityName" label="活動名稱" width="250" />
            <el-table-column prop="activityDate" label="活動日期" width="200" />
            <!-- <el-table-column prop="activitySort" label="排列順序" width="150" /> -->

            <!-- Edit or Del -->
            <el-table-column fixed="right" label="處理" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="handelEdit(scope.row)">編輯</el-button>
                    <el-button link type="danger" size="small" @click="handleDel">刪除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-row>

    <!-- Dialog Windows-->
    <el-dialog class="dialog" v-model="dialogVisible" 
    :title="ifTitle === 'add' ? '新增活動' : '編輯活動'" 
    width="30%" :before-close="handleClose">
        <!-- form 內容 -->
        <el-form :inline="true" :model="formActivity">
            <el-row>

                <!-- 近期活動名稱 -->
                <el-col :span="24">
                    <el-form-item label="活動名稱">
                        <el-input v-model="formActivity.activityName" placeholder="請輸入活動名稱" />
                    </el-form-item>
                </el-col>

                <!-- 近期活動日期 -->
                <el-col :span="24">
                    <el-form-item label="活動日期">
                        <div class="block">
                            <el-date-picker v-model="formActivity.activityDate" type="date" placeholder="請輸入活動日期" :size="size" />
                        </div>
                    </el-form-item>
                </el-col>

                <!-- 近期活動排序 -->
                <el-col :span="24">
                    <el-form-item label="活動排序">
                        <el-switch v-model="formActivity.activitySort" />
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
                activityName: "活動名稱",
                activityDate: "活動日期",
                activitySort: "排列順序"
            },
            {
                activityName: "中秋節烤肉晚會",
                activityDate: "2022/04/29",
                activitySort: "排列順序"
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

        // FormActivity Table
        const formActivity = ref({
            activityName:"",
            activityDate:"",
            activitySort:""
        })

        // 新增tableData的資料 Insert
        const handleInsert = () => {
            dialogVisible.value = false;
        }

        // 編輯tableData的資料 Edit
        const handelEdit = (row) =>{
            dialogVisible.value = true;
            ifTitle.value = "edit";
            Object.assign(formActivity.value,row)
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
            formActivity,
            handleInsert,
            handelEdit,
            handleDel
        }
    }
}
</script>