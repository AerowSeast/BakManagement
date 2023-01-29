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
            <el-table-column prop="group_name" label="群組名稱" width="180" />
            <el-table-column prop="group_user" label="群組內用戶" width="280" />
            <el-table-column prop="group_limit" label="所有權限" width="300" />
            <el-table-column prop="group_date" label="建立日期" width="150" />

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
    <el-dialog class="dialog" v-model="dialogVisible" :title="(ifTitle === 'add') ? '新增群組' : '編輯群組'" width="30%"
        :before-close="handleClose">
        <!-- form 內容 -->
        <el-form :inline="true" :model="formGroup">
            <el-row>
                <el-col :span="24">
                    <el-form-item label="群組名稱：">
                        <el-input v-model="formGroup.group_name" placeholder="請輸入群組名稱" />
                    </el-form-item>
                </el-col>

                <el-col :span="24">
                    <el-form-item label="選擇群組：">
                        <div class="m-4">
                            <el-select v-model="formGroup.group_user" multiple placeholder="選擇群組" style="width: 240px">
                                <el-option v-for="item in user_options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </div>
                    </el-form-item>
                </el-col>

                <el-col :span="24">
                    <el-form-item label="設置權限：">
                        <div class="m-4">
                            <el-select v-model="formGroup.group_limit" multiple placeholder="選擇權限" style="width: 240px">
                                <el-option v-for="item in limit_options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </div>
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
                group_name: "長老",
                group_user: "小丁",
                group_limit: "最大管理權限",
                group_date: "2022-11-28"
            },
            {
                group_name: "牧師",
                group_user: "小張",
                group_limit: "主頁管理、消息管理、分頁管理",
                group_date: "2022-12-15"
            },
            {
                group_name: "幹部",
                group_user: "小蔡",
                group_limit: "主頁管理、消息管理",
                group_date: "2022-01-29"
            },
        ])

        // FormGroup Table
        const formGroup = ref({
            group_name: "",
            group_user: "",
            group_limit: "",
            group_date: ""
        })

        // User limit
        const user_options = [
            {
                value: 'Elder',
                label: '長老',
            },
            {
                value: 'Priest',
                label: '牧師',
            },
            {
                value: 'Cadre',
                label: '幹部',
            }
        ]

        // limit Tags
        const limit_options = [
            {
                value: 'maxManage',
                label: '最大管理權限',
            },
            {
                value: 'homeManage',
                label: '主頁管理',
            },
            {
                value: 'newsManage',
                label: '消息管理',
            },
            {
                value: 'groupManage',
                label: '群組管理',
            },
            {
                value: 'usersManage',
                label: '用戶管理',
            },
            {
                value: 'branchPageManage',
                label: '分頁管理',
            },
            {
                value: 'filesManage',
                label: '檔案管理',
            }
        ]

        // 控制Dialog是否彈出視窗
        const dialogVisible = ref(false)

        // 判斷Dialog Title is Insert or Edit
        const ifTitle = ref("");

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

        // Insert Dialog 確認 Button Handle
        const handleInsert = () => {
            dialogVisible.value = false;
            console.log(formGroup.value.group_user);
        }

        // 編輯TableData的資料 Edit
        const handleEdit = (row) => {
            dialogVisible.value = true;
            ifTitle.value = "edit";
            Object.assign(formGroup.value, row);
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
            user_options,
            limit_options,
            handleInsert,
            handleDel,
            handleEdit,
            ifTitle,
            formGroup
        }
    }
}
</script>