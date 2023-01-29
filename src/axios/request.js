// 引入axios
import axios from "axios";

// 創建axios實例
const service = axios.create({
    // 設置baseURL街口
    baseURL:"http://localhost:52300",
    // 定義統一請求接頭
    headers:{
        'Content-type':"application/json;charset-UTF-8"
    },
    // 配置請求超越時間
    time:10000
})

export default service;


