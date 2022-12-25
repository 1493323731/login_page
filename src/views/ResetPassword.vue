<template>
    <el-form label-width="120px" ref="resetPasswordForm" :model="registerUser" class="container" :rules="registerRlues">
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="registerUser.password" placeholder="Enter Password..." />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirm_password">
            <el-input v-model="registerUser.confirm_password" type="password" placeholder="Enter Confirm_password..." />
        </el-form-item>
        <el-form-item>
            <!-- 提交前进行校验 -->
            <el-button @click="handleForgotPassword(resetPasswordForm)" type="primary"
                class="submit-btn">重置密码</el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { registerUser, registerRlues } from "@/utils/registerValidators"
import type { FormInstance } from 'element-plus';
import { useRouter } from "vue-router";
const resetPasswordForm = ref<FormInstance>();
const router = useRouter();
const handleForgotPassword = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            //@ts-ignore
            // axios.post("/api/v1/auth/register", props.registerUser).then(() => {
            //注册成功
            alert("重置密码成功");
            router.push("/");
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