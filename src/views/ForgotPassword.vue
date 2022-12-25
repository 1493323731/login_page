<template>
    <el-form label-width="120px" ref="forgotPasswordForm" :model="loginUser" class="container" :rules="loginRules">
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="loginUser.email" placeholder="Enter Email..." />
        </el-form-item>
        <el-form-item>
            <!-- 提交前进行校验 -->
            <el-button @click="handleForgotPassword(forgotPasswordForm)" type="primary"
                class="submit-btn">找回密码</el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { loginUser, loginRules } from "@/utils/loginValidators"
import type { FormInstance } from 'element-plus';
import { useRouter } from "vue-router";
const forgotPasswordForm = ref<FormInstance>();
const router = useRouter();
const handleForgotPassword = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            //@ts-ignore
            // axios.post("/api/v1/auth/register", props.registerUser).then(() => {
            //注册成功
            alert("请您重置密码");
            router.push("/resetpassword");
            // });
        } else {
            return false;
        }
    })
};
</script>
<style scoped>
.container {
    width: 50%;
    margin: 200px auto;
}

.submit-btn {
    width: 100%;
}
</style>
