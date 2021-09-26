<template>
    <div>
        <el-form ref="loginForm" :rules="loginRules" :model="loginForm">
            <el-form-item prop="userName">
                <el-input prefix-icon="el-icon-user" v-model="loginForm.userName" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="userPasswork">
                <el-input prefix-icon="el-icon-key" v-model="loginForm.userPasswork" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <!-- 当密码三次错误时显示忘记密码选项 -->
            <div v-show="wrongCount>=3">
                <span @click="drawCookie" class="forget-pass"><i class="fa fa-exclamation-circle" aria-hidden="true"></i> 忘记密码</span>
            </div>
            <el-form-item>
                <el-button @click="submitLogin('loginForm')" type="primary">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default {
    name: "login-form",
    data() {
        // 定义验证规则
        var validateName = (rule,value,callback) => {
            if(value == '')
            {
                callback(new Error('账号名不能为空哦'))
            } else {
                callback();
            }
        }
        var validatePass = (rule,value,callback) => {
            if(value == '')
            {
                callback(new Error('密码不能为空哦'))
            } else {
                callback();
            }
        }

        return{
            wrongCount: 0,
            loginForm:{
                userName:'',
                userPasswork:''
            },
            loginRules:{
                userName: [{
                    validator: validateName, 
                    trigger: 'blur'
                }],
                userPasswork:[{
                    validator: validatePass,
                    trigger: 'blur'
                }]
            },

            testName: 'admin',
            testPass: 'admin'

        }
    },
    methods:{
        drawCookie() {
            this.$message({
                message: '正在施工中...',
                type: 'warning'
            })
            console.log("忘记密码")
        },
        submitLogin(formName) {
            this.$refs[formName].validate((valid) => {    
                if( valid ) {
                    if( this.loginForm.userName==this.testName && this.loginForm.userPasswork==this.testPass )
                    {    
                        this.$message({
                            message: '登录成功，欢迎使用！',
                            type: 'success'
                        })
                        this.$router.push('/home')
                    }
                    else{
                        this.$message({
                            message: '账号或密码错误，登录失败！',
                            type: 'error'
                        })
                        this.wrongCount++
                    }
                }
                else {
                    this.$message({
                        message: '请先输入账号或者密码!',
                        type: 'error'
                    })
                }
            }
        )}
    }
}
</script>

<style scoped>
.el-form {
    margin-top: 30px;
}

.forget-pass {
    display: inline-block;
    font-size: 13px;
    color: #808080;
    margin-bottom: 10px;
    cursor: pointer;
}

.forget-pass:hover {
    color: black;
}
</style>