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
            <el-table-column prop="partyName" label="聚會標題" width="180" />
            <el-table-column prop="partyDate" label="聚會日期" width="150" />
            <el-table-column prop="partyArea" label="聚會地點" width="150" />

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
    <el-dialog class="dialog" v-model="dialogVisible" :title="(ifTitle === 'add') ? '新增聚會' : '編輯聚會'" width="30%"
        :before-close="handleClose">
        <!-- form 內容 -->
        <el-form :inline="true" :model="formParty">
            <el-row>
                <!-- 聚會標題 -->
                <el-col :span="24">
                    <el-form-item label="聚會標題：">
                        <el-input v-model="formParty.partyName" placeholder="請輸入聚會標題" />
                    </el-form-item>
                </el-col>

                <!-- 聚會日期 -->
                <el-col :span="24">
                    <el-form-item label="聚會日期：">
                        <div class="block">
                            <el-date-picker v-model="formParty.partyDate" type="date" placeholder="請輸入聚會日期"
                                :size="size" />
                        </div>
                    </el-form-item>
                </el-col>

                <!-- 聚會地點 -->
                <el-col :span="24">
                    <el-form-item label="聚會地點：">
                        <el-input v-model="formParty.partyArea" placeholder="請輸入聚會地點" />
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="handleInsert()">確認</el-button>
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
                partyName: "聚會標題",
                partyDate: "2023-01-06",
                partyArea: "太平境教會教堂"
            },
            {
                partyName: "聚會標題",
                partyDate: "2023-01-06",
                partyArea: "太平境教會教堂"
            },
            {
                partyName: "聚會標題",
                partyDate: "2023-01-06",
                partyArea: "太平境教會教堂"
            }
        ])

        // FormParty Table
        const formParty = ref({
            partyName: "",
            partyArea: "",
            partyDate: "",
        })

        // 控制Dialog是否彈出視窗
        const dialogVisible = ref(false);

        // 判斷Dialog Title is Insert or Edit
        const ifTitle = ref("");

        // 點擊新增按鈕-彈出Dialog Windows
        const jumpDialog = () => {
            formParty.value = "";
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

        // Insert Dialog 確認 Button Handle
        const handleInsert = () => {
            dialogVisible.value = false;
        }

        // 編輯TableData的資料 Edit
        const handleEdit = (row) => {
            dialogVisible.value = true;
            Object.assign(formParty.value, row);
            ifTitle.value = "edit";
        }

        // 刪除TableData的資料 Delete
        const handleDel = () => {
            console.log("未刪除成功");
        }

        return {
            tableData,
            dialogVisible,
            jumpDialog,
            handleClose,
            formParty,
            handleInsert,
            handleDel,
            ifTitle,
            handleEdit
        }
    }
}
</script>