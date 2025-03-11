<script setup>
import {computed, ref} from 'vue'

const oldPassword = ref('')
const newPassword = ref('')
const rePassword =ref('')

const requestBody = computed(() =>({
    old_pwd:   oldPassword.value,
    new_pwd:   newPassword.value,
    re_pwd:    rePassword.value
}))

import {userPwdUpdateService} from '@/api/user.js'
import { ElMessage } from 'element-plus'
import { useRouter } from "vue-router";
import { useTokenStore } from "@/stores/token.js";
const tokenStore = useTokenStore();
const router = useRouter();
const updateUserPassword =async()=>{
     let result=await userPwdUpdateService(requestBody.value)
     ElMessage.success(result.msg? result.msg:'修改成功!,请重新登录')
     tokenStore.removeToken()
     router.push('/login')
}
</script>

<template>
  <el-card id="repw">
    <template #header>
      <div class="card-header">
        <span>重置密码</span>
      </div>
    </template>
    <el-row>
            <el-col :span="12">
                <el-form  label-width="100px" size="large">
                    <el-form-item label="原密码">
                        <el-input v-model="oldPassword"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码">
                        <el-input v-model="newPassword"></el-input>
                    </el-form-item>
                     <el-form-item label="确认密码">
                        <el-input v-model="rePassword"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="updateUserPassword">提交修改</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
  </el-card>
</template>

<style>
#repw{
    background-color: #66CDAA;
}
</style>