<template>
    <div>
        <el-form :rules="registerRules" ref="registerForm" :model="registerForm">
            <el-form-item prop="userName">
                <el-input prefix-icon="el-icon-user" v-model="registerForm.userName" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="userPasswork">
                <el-input prefix-icon="el-icon-key" v-model="registerForm.userPasswork"  placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item prop="userPassCheck">
                <el-input prefix-icon="el-icon-key" v-model="registerForm.userPassCheck"  placeholder="请再次输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default {
    name: "register-form",
    data() {
        // 定义验证规则
        var validateName = (rule,value,callback) => {
            if(value == '')
            {
                callback(new Error('账号名不能为空哦'))
            }
        }
        var validatePass = (rule,value,callback) => {
            if(value == '')
            {
                callback(new Error('密码不能为空哦'))
            }
        }
        var checkPass = (rule,value,callback) => {
            if(this.registerForm.userPasswork == '')
            {
                callback(new Error('请先输入密码'))
            }
            if(value != this.registerForm.userPasswork)
            {
                callback(new Error('两次输入的密码不正确'))
            }
        }


        return{
            registerForm:{
                userName:'',
                userPasswork:'',
                userPassCheck: '',
            },
            registerRules:{
                userName: [{
                    validator: validateName, 
                    trigger: 'blur'
                }],
                userPasswork:[{
                    validator: validatePass,
                    trigger: 'blur'
                }],
                userPassCheck:[{
                    validator: checkPass,
                    trigger: 'blur'
                }]
            }
        }
    }
}
</script>

<style scoped>
.el-form{
    margin-top: 30px;
}
</style>
