<template>
    <div>
        <el-form>
            <el-form-item>
                <el-input prefix-icon="el-icon-user" placeholder="请输入账号名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input prefix-icon="el-icon-key" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default {
    name: "login-form",
    data() {
        return{
        }
    }
}
</script>

<style scoped>
.el-form{
    margin-top: 30px;
}
</style>
