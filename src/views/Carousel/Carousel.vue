<template>
    <!-- Carousel Button Control -->
    <el-row class="home" gutter="20" style="padding:15px 0 0 20px;margin:0">
        <el-col :span="24">
            <div class="btn_container">
                <el-button type="primary" @click="jumpDialog">新增</el-button>
            </div>
        </el-col>
    </el-row>

    <!-- Carousel List Content -->
    <el-row class="home" gutter="20" style="padding:15px 30px 15px 30px;margin:0">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="title" label="圖片標題" width="180" />
            <el-table-column prop="img_src" label="圖片縮圖" width="300" />
            <el-table-column prop="start_date" label="開始日期" width="150" />
            <el-table-column prop="end_date" label="結束日期" width="150" />
            <el-table-column prop="sort" label="圖片排序" width="150" />

            <!-- 編輯與刪除 -->
            <el-table-column fixed="right" label="處理" width="120">
                <template #default>
                    <!-- <el-button link type="primary" size="small">編輯</el-button> -->
                    <el-button link type="danger" size="small" @click="handleDel">刪除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-row>

    <!-- click insert jump dialog-->
    <el-dialog class="dialog" v-model="dialogVisible" title="新增輪播圖" width="30%" :before-close="handleClose">
        <!-- form 內容 -->
        <el-form :inline="true" :model="formImage">
            <el-row>

                <!-- 輪播標題 -->
                <el-col :span="24">
                    <el-form-item label="圖片標題">
                        <el-input v-model="all_dialog.img_title" placeholder="請輸入圖片標題" />
                    </el-form-item>
                </el-col>

                <!-- 輪播上傳圖片 -->
                <el-col :span="24">
                    <el-form-item label="上傳圖片">
                        <el-upload v-model:file-list="fileList" class="upload-demo"
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                            :on-change="handleChange">
                            <el-button type="primary">Click to upload</el-button>
                            <!-- <template #tip>
                        <div class="el-upload__tip">
                            圖片大小限制：800KB
                        </div>
                    </template> -->
                        </el-upload>
                    </el-form-item>
                </el-col>

                <!-- 輪播顯示日期 -->
                <el-col :span="24">
                    <el-form-item label="顯示日期">
                        <div class="block">
                            <el-date-picker v-model="all_dialog.carousel_data" type="datetimerange"
                                start-placeholder="開始日期" end-placeholder="結束日期" :default-time="defaultTime1" />
                        </div>
                    </el-form-item>
                </el-col>

                <!-- 輪播圖片排序 -->
                <el-col :span="24">
                    <el-form-item label="圖片排序">
                        <el-switch v-model="all_dialog.sort" />
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
        const tableData = ref([
            {
                title: "輪播圖片標題",
                img_src: "圖片路徑或URL",
                start_date: "2022-09-25",
                end_date: "2022-10-25",
                sort: "排列順序",
            },
            {
                title: "輪播圖片標題",
                img_src: "圖片路徑或URL",
                start_date: "2022-09-25",
                end_date: "2022-10-25",
                sort: "排列順序",
            },
            {
                title: "輪播圖片標題",
                img_src: "圖片路徑或URL",
                start_date: "2022-09-25",
                end_date: "2022-10-25",
                sort: "排列順序",
            },
            {
                title: "輪播圖片標題",
                img_src: "圖片路徑或URL",
                start_date: "2022-09-25",
                end_date: "2022-10-25",
                sort: "排列順序",
            },
        ])

        // 控制dialog顯示或隱藏
        const dialogVisible = ref(false)

        // 點擊新增後跳出dialog框
        const jumpDialog = () => {
            dialogVisible.value = true
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

        // formImage
        const formImage = ref({})

        //dialog 所有input的數據
        const all_dialog = ref({
            img_title: "",
            carousel_data: "",
            sort: ""
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
            all_dialog,
            formImage,
            handleInsert,
            handleDel
        }
    }
}
</script>

<style lang="less" scoped>

</style>