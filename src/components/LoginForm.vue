<template>
    <el-form ref="loginForm" :rules="loginRules" :model="loginUser" label-width="120px" class="loginForm sign-in-form">
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="loginUser.email" placeholder="Enter Email..." />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="loginUser.password" type="password" placeholder="Enter password..." />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="submit-btn" @click="handleLogin(loginForm)">登录</el-button>
        </el-form-item>
        <!-- 找回密码 -->
        <div class="tiparea">
            <p>忘记密码？<a @click.prevent="handleForgot" style="cursor: pointer;">立即找回</a></p>
        </div>
    </el-form>
</template>
<script lang="ts" setup>
import { ref, inject } from "vue";
import type { FormInstance } from 'element-plus';
import { useRouter } from "vue-router";
const loginForm = ref<FormInstance>();
const router = useRouter();
const axios = inject("axios");

defineProps({
    loginUser: {
        type: Object,
        required: true
    },
    loginRules: {
        type: Object,
        required: true
    }
});
//登录的处理函数
const handleLogin = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate((valid) => {
        if (valid) {
            alert("登陆成功");
        } else {
            return false;
        }
    })
}
//找回密码的处理函数
const handleForgot = () => {
    router.push("/forgotpassword");
}
</script>
<style scoped>
.submit-btn {
    width: 100%;
}

.tiparea {
    text-align: right;
    font-size: 12px;
    color: #333;
}

.tiparea p a {
    color: #409eff;
}

.loginForm {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px 40px 20px 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px #cccc;
}
</style>
