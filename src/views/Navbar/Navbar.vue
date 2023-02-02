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
            <el-table-column prop="navName" label="導覽列名稱" width="180" />
            <el-table-column prop="navUrl" label="網址連結" width="300" />
            <!-- <el-table-column prop="navSort" label="排列順序" width="150" /> -->
            <el-table-column prop="navPriority" label="優先顯示" width="150" />

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
    <el-dialog class="dialog" v-model="dialogVisible" :title="(ifTitle === 'add') ? '新增導覽列' : '編輯導覽列'" width="30%"
        :before-close="handleClose">
        <!-- form 內容 -->
        <el-form :inline="true" :model="formNavbar">
            <el-row>
                <!-- 導覽列名稱 -->
                <el-col :span="24">
                    <el-form-item label="導覽列名稱：">
                        <el-input v-model="formNavbar.navName" placeholder="請輸入導覽列名稱" />
                    </el-form-item>
                </el-col>

                <!-- 導覽列連結 -->
                <el-col :span="24">
                    <el-form-item label="導覽列連結：">
                        <el-input v-model="formNavbar.navLink" placeholder="請輸入導覽列連結" />
                    </el-form-item>
                </el-col>

                <!-- 導覽列排序 -->
                <el-col :span="24">
                    <el-form-item label="導覽列排序">
                        <el-switch v-model="formNavbar.navSort" />
                    </el-form-item>
                </el-col>

                <!-- 輪播圖片排序 -->
                <el-col :span="24">
                    <el-form-item label="優先顯示">
                        <el-checkbox></el-checkbox>
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
import { ref } from 'vue'
export default {
    setup() {
        // Table List from Axios GET
        const tableData = ref([
            {
                navName: "教會簡介",
                navUrl: "http://localhost:5174/home/intro",
                navSort: "排列順序",
                navPriority:"優先顯示"
            },
            {
                navName: "分設教會",
                navUrl: "http://localhost:5174/home/branchChurch",
                navSort: "排列順序",
                navPriority:"優先顯示"
            },
            {
                navName: "傳道師",
                navUrl: "http://localhost:5174/home/preacher",
                navSort: "排列順序",
                navPriority:"優先顯示"
            },
            {
                navName: "聚會時間",
                navUrl: "http://localhost:5174/home/partyTime",
                navSort: "排列順序",
                navPriority:"優先顯示"
            },
            {
                navName: "近期活動",
                navUrl: "http://localhost:5174/home/activity",
                navSort: "排列順序",
                navPriority:"優先顯示"
            },
            {
                navName: "聯絡我們",
                navUrl: "http://localhost:5174/home/contact",
                navSort: "排列順序",
                navPriority:"優先顯示"
            },
            {
                navName: "加入行列",
                navUrl: "http://localhost:5174/home/join",
                navSort: "排列順序",
                navPriority:"優先顯示"
            },
            {
                navName: "參與奉獻",
                navUrl: "http://localhost:5174/home/dedication",
                navSort: "排列順序",
                navPriority:"優先顯示"
            },
        ])

        // 判斷Dialog Title is Insert or Edit
        const ifTitle = ref("");

        // 控制Dialog是否彈出視窗
        const dialogVisible = ref(false);

        // 點擊新增後跳出dialog框
        const jumpDialog = () => {
            dialogVisible.value = true;
            ifTitle.value = "add";
        }

        // 處理dialog close
        const handleClose = (done) => {
            ElMessageBox.confirm('你確定要關閉嗎？')
                .then(() => {
                    done()
                })
                .catch(() => {
                    // catch error
                })
        }

        // formNavbar Table
        const formNavbar = ref({
            navName:"",
            navLink:"",
            navSort:"",
            navPriority:""
        })

        // 新增tableData的資料 Insert
        const handleInsert = () => {
            dialogVisible.value = false;
        }

        // 編輯tableData的資料 Editor
        const handleEdit = (row) =>{
            dialogVisible.value = true;
            ifTitle.value = "edit";
            Object.assign(formNavbar.value,row)
        }

        // 刪除tableData的資料 Delete
        const handleDel = () => {
            console.log("未完成刪除");
        }

        return {
            ifTitle,
            dialogVisible,
            tableData,
            formNavbar,
            jumpDialog,
            handleClose,
            handleInsert,
            handleEdit,
            handleDel
        }
    }
}
</script>
