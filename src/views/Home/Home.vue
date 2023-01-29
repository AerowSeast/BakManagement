<template>
    <div class="home">
        <div class="center">
            <h1 class="homeCnt">歡迎進入後台管理系統</h1>
        </div>
    </div>
</template>

<style lang="less" scoped>
.home {
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 150px;
        border-radius:10px;
        background-color: rgba(0, 0, 0, 0.5);

        .homeCnt {
            color:#fff;
            font-size:2.5rem;
            font-weight:600;
        }
    }
}
</style>