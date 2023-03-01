// 產生隨機CSRF
function generateRandomCSRF(){
    // 定義初始字串
    const allString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let resultCSRF = ""
    
    for (let i = 1 ; i <= 20 ; i++){
        // 隨機產生一個字
        const randomSingleStr = Math.floor(Math.random() * allString.length);
        // 將字串代數變數
        resultCSRF += allString[randomSingleStr];
    }

    // 將隨機的CSRF綁入Cookie
    document.cookie = `XSRF-TOKEN=${resultCSRF}`;
}

export default generateRandomCSRF;