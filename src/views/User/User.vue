<template><!--  Insert Button Control -->
    <el-row class="home" gutter="20" style="padding: 15px 0 0 20px;margin:0">
        <el-col :span="24">
            <div class="btn_container">
                <el-button type="primary" @click="jumpDialog">新增</el-button>
            </div>
        </el-col>
    </el-row>

    <!--  List Content -->
    <el-row class="home" gutter="20" style="padding: 15px 30px 15px 30px;margin:0">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="SN" label="使用者編號" width="150" />
            <el-table-column prop="Username" label="使用者帳號" width="180" />
            <el-table-column prop="userGroup" label="使用者群組" width="150" />
            <el-table-column prop="DateRegistered" label="創建日期" width="200" />
            <el-table-column label="使用狀態" width="200">
                {{ ifStatus === 0 ? "停用" : "啟用" }}
            </el-table-column>

            <!-- Edit and Del -->
            <el-table-column fixed="right" label="處理" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="handelEdit(scope.row)">編輯</el-button>
                    <el-button link type="danger" size="small" @click="handleDel">停用</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-row>

    <!-- Dialog Windows-->
    <el-dialog class="dialog" v-model="dialogVisible" :title="(ifTitle === 'add') ? '新增用戶' : '編輯用戶'" width="30%"
        :before-close="handleClose">
        <!-- form 內容 -->
        <el-form :inline="true" :model="formUser">
            <el-row>
                <!-- 使用者帳號 -->
                <el-col :span="24">
                    <el-form-item label="使用者帳號：">
                        <el-input v-model="formUser.Username" placeholder="請輸入使用者帳號" />
                    </el-form-item>
                </el-col>

                <!-- 使用者暱稱 -->
                <el-col :span="24">
                    <el-form-item label="使用者暱稱：">
                        <el-input v-model="formUser.Nickname" placeholder="請輸入使用者暱稱" />
                    </el-form-item>
                </el-col>

                <!-- 使用者密碼 -->
                <el-col :span="24">
                    <el-form-item label="使用者密碼：">
                        <el-input type="password" v-model="formUser.Password" placeholder="請輸入使用者密碼" />
                    </el-form-item>
                </el-col>

                <!-- 使用者信箱 -->
                <el-col :span="24">
                    <el-form-item label="使用者信箱：">
                        <el-input v-model="formUser.Email" placeholder="請輸入使用者信箱" />
                    </el-form-item>
                </el-col>

                <!-- 使用狀態 -->
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
                                    <el-dropdown-item>啟用</el-dropdown-item>
                                    <el-dropdown-item>停用</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="handleInsert()"> 確認 </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
// CSRF 複用檔案
import generateRandomCSRF from "@/CSRF/CSRF.js";
export default {
    setup() {
        // CSRF
        generateRandomCSRF();

        // Table List from Axios GET
        const tableData = ref([]);

        // Axios GET Data
        const getList = async () => {
            try{
                const res = await axios.get("https://tpkchcms.000webhostapp.com/");
                console.log(res);
                tableData.value = res.data;
            }catch (err){
                console.log(err.message);
            }
        }

        // 判斷每個使用的的使用狀態(true、false)
        let ifStatus = ref("");

        // 判斷Dialog Title is Insert or Edit
        const ifTitle = ref("");

        // 控制Dialog是否彈出視窗
        const dialogVisible = ref(false);

        // 點擊新增按鈕-彈出Dialog Windows
        const jumpDialog = () => {
            dialogVisible.value = true;
            ifTitle.value = "add";
        };

        // handle Dialog "x button" Close
        const handleClose = (done) => {
            ElMessageBox.confirm("你確定要關閉嗎？")
                .then(() => {
                    done();
                })
                .catch(() => {
                    // catch error
                });
        };

        // FormUser Table
        const formUser = ref({
            Username:"",
            Nickname:"",
            Password:"",
            Email:""
        })

        // FormNews Table
        const formNews = ref({
            title: "",
            url: "",
            page: "",
            start_data: ""
        });

        // Insert Dialog 確認 Button Handle
        const handleInsert = async () => {
            dialogVisible.value = false;

            // Axios POST Data 至後端
            try{
                const response = await axios.post("/api/user",formUser.value,{
                    headers:{
                        xsrfCookieName:'XSRF-TOKEN',
                        xsrfHeaderName:'X-XSRF-TOKEN'
                    }
                });
            }catch (error){
                console.log(error.message);
            }
        };

        // 編輯TableData的資料 Edit
        const handelEdit = (row) => {
            dialogVisible.value = true;
            ifTitle.value = "edit";
            Object.assign(formUser.value, row);
        }

        // 刪除TableData的資料 Delete
        const handleDel = () => {
            axios.delete('/api/user/')
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        };

        // onMounted
        onMounted(() => {
            getList();
        })

        return {
            tableData,
            dialogVisible,
            jumpDialog,
            handleClose,
            formUser,
            formNews,
            handleInsert,
            handelEdit,
            handleDel,
            ifStatus,
            ifTitle
        }
    }
}
</script>