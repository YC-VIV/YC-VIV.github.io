<template>
    <div id="container">
        <div class="signpage">
            <div class="signpage-content">
                <div class="signpage-box">
                    <div class="btn-box">
                        <a href="" class="change-btn" :class="flag ? '' : 'clicked-style'"
                            @click.prevent="changeToRegister">登录</a>
                        <a href="" class="change-btn" :class="flag ? 'clicked-style' : ''"
                            @click.prevent="changeToRegister">注册</a>
                    </div>
                    <login-form v-show="!flag"></login-form>
                    <register-form v-show="flag"></register-form>

                    <div class="signpage-tip">
                        <p>注册、登录本网站即代表同意</p><a class="tip-text">《隐私保护协议》</a>
                    </div>

                    <el-divider></el-divider>
                    <div class="social-login">
                        <p>其他方式登录</p>
                        <div class="social-box">
                            <div class="social-item"><i class="fa fa-weixin" aria-hidden="true"></i>微信</div>
                            <div class="social-item"><i class="fa fa-qq" aria-hidden="true"></i>QQ</div>
                        </div>
                    </div>
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
        changeToRegister: function () {
            this.flag = !this.flag;
        },
    },
};
</script>

<style scoped>
.signpage {
  height: 100vh;
  width: 100%;
  background-image: url(../assets/background.jpg);
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
  padding: 20px;
  min-height: 500px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
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

.signpage-tip {
    font-size: 13px;
    color: #808080;
}

.tip-text {
    color: #808080;
}

.tip-text:hover {
    color: black;
    cursor: pointer;
    text-decoration: underline;
}

.social-login {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    color: #808080;
}

.social-box {
    display: flex;
    justify-content: center;
}

.social-box .social-item {
    width: 50px;
    height: 15px;
    padding-right: 10px;
    line-height: 15px;
    cursor: pointer;
}

.social-box .social-item:hover {
    color: black;
}

.signpage-tip {
    margin-top: 50px;
}

/* 分割线样式 */
.el-divider--horizontal {
    margin: 18px 0;
}
</style>
