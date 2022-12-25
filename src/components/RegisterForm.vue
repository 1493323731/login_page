<template>
    <el-form ref="registerForm" :rules="registerRlues" :model="registerUser" label-width="120px"
        class="registerForm sign-up-form">
        <el-form-item label="用户名" prop="name">
            <el-input v-model="registerUser.name" placeholder="Enter UserName..." />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerUser.email" placeholder="Enter Email..." />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="registerUser.password" type="password" placeholder="Enter password..." />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirm_password">
            <el-input v-model="registerUser.confirm_password" type="password" placeholder="Enter Confirm_password..." />
        </el-form-item>
        <el-form-item label="选择身份">
            <el-select v-model="registerUser.role" placeholder="请选择身份">
                <el-option lable="管理员" value="admin">admin</el-option>
                <el-option lable="用户" value="user">user</el-option>
                <el-option lable="游客" value="visitor">visitor</el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="submit-btn" @click="handleRegister(registerForm)">注册</el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>
import { ref, inject } from "vue";
import type { FormInstance } from 'element-plus';
const registerForm = ref<FormInstance>();
const axios = inject("axios");

const props = defineProps({
    registerUser: {
        type: Object,
        required: true
    },
    registerRlues: {
        type: Object,
        required: true
    }
});
//注册的处理函数
const handleRegister = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            //@ts-ignore
            // axios.post("/api/v1/auth/register", props.registerUser).then(() => {
            //注册成功
            alert("注册成功,快去登录吧");
            // });
        } else {
            return false;
        }
    })
};
</script>
<style scoped>

</style>
