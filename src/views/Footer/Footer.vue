<template>
    <el-card class="box-card" style="margin:5rem 2rem">
        <form class="footer_form">
            <!-- 網站導覽管理配置 -->
            <div class="container">
                <h2>網站導覽管理</h2>
                <el-button type="primary">修改</el-button>
            </div>
            <div class="single_footer" v-for="(list, index) in footerList" :key="index">
                <template v-for="(item) in list.tourList">
                    <input class="tour" disabled type="text" :value="item">
                </template>
            </div>
            <!-- 聯絡資訊管理配置 -->
            <h2 style="margin-bottom:0px;">聯絡資訊管理</h2>
            <div class="single_footer" v-for="(list, index) in footerList" :key="index">
                <template v-for="(item) in list.contact">
                    <input class="tel" disabled type="text" :value="item">
                </template>
            </div>
        </form>
    </el-card>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        // 頁尾管理設置 (未來接API)
        const footerList = ref([
            {
                tourTitle: "網站導覽",
                tourList: ["教會沿革", "教會週報"]
            },
            {
                contactTitle: "聯絡資訊",
                contact: ["06-228-2184", "someone@example.com", "700 臺南市中西區公園路 6 號"]
            }
        ])

        return { footerList }
    }
}
</script>


<style lang="less" scoped>

.box-card{
    width:80%;
}

.footer_form {
    display: flex;
    flex-flow: column wrap;
    gap: 10px;
    margin-top: 1rem;

    .container{
        display:flex;
        justify-content: space-between;
    }

    .single_party,
    .single_footer {
        display: flex;
        gap: 10px;

        input {
            width: 100%;
            outline: none;
            font-size: 1.3rem;
            border-radius: 4px;
            border: 1px solid #cdd0d6;
            padding: .4rem .8rem;
            transition: border .3s ease-in;

            &:hover {
                border: 1px solid #409eff;
                transform: translateY(-2px);
            }
        }
    }
}
</style>