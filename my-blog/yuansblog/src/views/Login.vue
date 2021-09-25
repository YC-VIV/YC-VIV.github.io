<template>
    <div id="container">
        <div class="signpage">
            <div class="signpage-content">
                <div class="signpage-box">
                    <div class="btn-box">
                        <a href="" class="change-btn" :class="flag ? '' : 'clicked-style'"
                            @click.prevent="changeToLogin">登录</a>
                        <a href="" class="change-btn" :class="flag ? 'clicked-style' : ''"
                            @click.prevent="changeToRegister">注册</a>
                    </div>
                    <login-form v-show="!flag"></login-form>
                    <register-form v-show="flag"></register-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import loginForm from "../components/login/login-form.vue";
import registerForm from "../components/login/register-form.vue";

export default {
    name: "Login",
    components: {
        loginForm,
        registerForm,
    },
    data() {
        return {
            comName: "login",
            flag: false,
        };
    },
    methods: {
        changeToLogin: function () {
            this.comName = "login";
            this.flag = false;
            console.log(this.flag);
        },
        changeToRegister: function () {
            this.comName = "register";
            this.flag = true;
            console.log(this.flag);
        },
    },
};
</script>

<style scoped>
.signpage {
  height: 100vh;
  width: 100%;
  background-image: url(../assets/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  background-color: #b8e5f8;

  /* 注意：如果overflow没有设置为auto，当屏幕高度小于登录框时，滚动滚动条，下面的背景会消失 */
  overflow: auto;
}

.signpage-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* 注意：没有高度无法垂直居中 */
  min-height: 600px;
  height: 100%;
}

.signpage-box {
  box-sizing: border-box;
  /* min-height: 480px; */
  width: 380px;
  background-color: #ffffff;
  /* overflow: hidden; */
  align-self: center;
  border-radius: 20px;
  padding: 15px;
  min-height: 500px;
  /* display: flex; */
}

.btn-box {
  height: 40px;
}

.change-btn {
  display: block;
  float: left;
  /* background-color: yellow; */
  margin-right: 20px;
  width: 40px;
  height: 35px;
  line-height: 35px;
}

.clicked-style {
  border-bottom: 3px solid blue;
  font-size: 20px;
  font-weight: bold;
}
</style>
