<template style="display:flex;">
    <section class="center">
        <div class="wrap">
            <div class="all_login">
                <h1>Login</h1>
                <form action="">
                    <input type="text" v-model="loginInform.username" placeholder="Username">
                    <input type="password" v-model="loginInform.password" placeholder="Password">
                </form>
                <button class="btn-login" @click="handleLogin">登入</button>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
import {useRouter} from "vue-router";
    export default{
        setup(){
            // define router
            const router = useRouter();

            // initial Login Information
            const initialInform = {
                username:"AerowSeast",
                password:"0923"
            }

            // login information data
            const loginInform = ref({
                username:"",
                password:""
            })

            // handle login function
            const handleLogin = () =>{
                if ((loginInform.value.username === initialInform.username) && (loginInform.value.password === initialInform.password)){
                    router.push({
                        path:"/home"
                    })
                    // alert("登入成功");
                }else{
                    alert("登入失敗，請重新輸入帳密");
                }
            }

        return { loginInform , handleLogin }
        }
    }
</script>

<style lang="less" scoped>
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../images/church.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100%;
    min-height: 100vh;

    .wrap {
        overflow: hidden;
        position: relative;
        width: 450px;
        height: 600px;
        padding: 0 20px;
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column wrap;
        gap: 2rem;

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 600px;
            height: 800px;
            background: linear-gradient(transparent, #00E7FF, #00E7FF, #00E7FF, transparent);
            animation: animate 3s linear infinite;
            transform-origin: top left;
        }

        &::after {
            content: "";
            position: absolute;
            inset: 6px;
            background-color: #292929;
        }

        @keyframes animate {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        .all_login {
            display:flex;
            justify-content: center;
            align-items:center;
            flex-flow:column wrap;
            gap:30px;
            position:absolute;
            z-index:999;

            h1 {
                position:relative;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 3rem;
                font-weight: 700;
                color: #4B56D2;
                &::after{
                    content:"";
                    position:absolute;
                    left: 50%;
                    bottom: -12px;
                    transform: translateX(-50%);
                    background-color:white;
                    width: 60px;
                    height: 3px;
                }
            }

            form {
                display: flex;
                flex-direction: column;
                gap: 20px;
                input {
                    outline: none;
                    border: none;
                    border-radius:4px;
                    width: 100%;
                    height: 40px;
                    padding: 8px 10px;
                    background-color: #fafafa;
                    font-size: 1.2rem;
                }
            }

            .btn-login {
                display: block;
                width: 200px;
                padding: 8px 0;
                font-size: 1.1rem;
                outline: none;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                background-color: #181818;
                color: #fafafa;
                transition:all .3s;
                &:hover{
                    filter:brightness(1.2);
                }
            }
        }
    }
}
</style>