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
            <el-table-column prop="title" label="檔案類型" width="180" />
            <el-table-column prop="file_length" label="總檔案數量" width="300" />
            <el-table-column prop="folder_name" label="資料夾名稱" width="150" />

            <!-- Edit or Del -->
            <el-table-column fixed="right" label="處理" width="120">
                <template #default>
                    <el-button link type="danger" size="small" @click="handleDel">刪除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-row>

    <!-- Dialog Windows-->
    <el-dialog class="dialog" v-model="dialogVisible" title="檔案上傳" width="30%" :before-close="handleClose">
        <!-- form 內容 -->
        <el-form :inline="true" :model="formFile">
            <el-row>

                <!-- 使用者帳號 -->
                <el-col :span="24">
                    <el-form-item label="檔案類型">
                        <el-input v-model="formFile.fileType" placeholder="請輸入檔案類型" />
                    </el-form-item>
                </el-col>

                <!-- 檔案上傳圖片 -->
                <el-col :span="24">
                    <el-form-item label="上傳檔案">
                        <el-upload class="upload-demo" drag
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
                            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                            <div class="el-upload__text">
                                點擊這裡 <em>上傳檔案</em>
                            </div>
                            <!-- <template #tip>
                                <div class="el-upload__tip">
                                    jpg/png files with a size less than 500kb
                                </div>
                            </template> -->
                        </el-upload>
                    </el-form-item>
                </el-col>

                <!-- 指定上傳資料夾 -->
                <el-col :span="24">
                    <el-form-item label="指定資料夾">
                        <div class="flex flex-wrap items-center">
                            <el-dropdown>
                                <el-button type="primary">
                                    輪播圖資料夾<el-icon class="el-icon--right"><arrow-down /></el-icon>
                                </el-button>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item>輪播圖資料夾</el-dropdown-item>
                                        <el-dropdown-item>週報資料夾</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
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
                title: "週報",
                file_length: "15",
                folder_name: "週報資料夾"
            },
            {
                title: "輪播圖",
                file_length: "4",
                folder_name: "輪播圖資料夾"
            },
            {
                title: "週報",
                file_length: "2",
                folder_name: "週報資料夾"
            },
        ])

        // 控制Dialog是否彈出視窗
        const dialogVisible = ref(false);

        // 點擊新增按鈕-彈出Dialog Windows
        const jumpDialog = () => {
            dialogVisible.value = true
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

        // formFile Table
        const formFile = ref({
            fileType: ""
        })

        // 新增tableData的資料 Insert
        const handleInsert = () => {
            dialogVisible.value = false;
        }

        // 刪除tableData的資料 Delete
        const handleDel = () => {
            console.log("123");
        }

        return {
            tableData,
            dialogVisible,
            jumpDialog,
            handleClose,
            formFile,
            handleInsert,
            handleDel
        }
    }
}
</script>