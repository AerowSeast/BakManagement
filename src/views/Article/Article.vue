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
            <el-table-column prop="articleTitle" label="文章標題" width="180" />
            <el-table-column prop="articleImage" label="文章圖片" width="300" />
            <el-table-column prop="articleCnt" label="文章內容" width="150" />
            <el-table-column prop="articleDate" label="發佈日期" width="150" />

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
    <el-dialog class="dialog" v-model="dialogVisible" :title="ifTitle === 'add' ? '新增文章' : '編輯文章'" width="30%" :before-close="handleClose">
        <!-- form 內容 -->
        <el-form :inline="true" :model="formArticle">
            <el-row>
                <el-col :span="24">
                    <el-form-item label="文章標題">
                        <el-input v-model="formArticle.articleTitle" placeholder="請輸入文章標題" />
                    </el-form-item>
                </el-col>

                <el-col :span="24">
                    <el-form-item label="上傳圖片">
                        <el-upload v-model:file-list="formArticle.articleImage" class="upload-demo"
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                            :on-change="handleChange">
                            <el-button type="primary">Click to upload</el-button>
                        </el-upload>
                    </el-form-item>
                </el-col>

                <el-col>
                    <el-form-item label="文章內容">
                        <el-input v-model="formArticle.articleCnt" autosize type="textarea" placeholder="請輸入文章內容" />
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
                articleTitle:"文章標題",
                articleImage:"文章圖片",
                articleCnt:"文章內容",
                articleDate:"發佈日期"
            }
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

        // Article Table
        const formArticle = ref({
            articleTitle:"",
            articleImage:"",
            articleCnt:""
        })

        // 新增tableData的資料 Insert
        const handleInsert = () => {
            dialogVisible.value = false;
        }

        // 編輯tableData的資料 Edit
        const handleEdit = (row) =>{
            dialogVisible.value = true;
            ifTitle.value = "edit";
            Object.assign(formArticle.value,row.articleTitle);
        }

        // 刪除tableData的資料 Delete
        const handleDel = () => {
            console.log("123");
        }

        return {
            ifTitle,
            formArticle,
            tableData,
            dialogVisible,
            jumpDialog,
            handleClose,
            handleInsert,
            handleEdit,
            handleDel
        }
    }
}
</script>