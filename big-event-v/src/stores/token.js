//定义store
import {defineStore} from 'pinia'
import {ref} from 'vue'
/*
第一个参数:名字，唯一性 
第二个参数:函数，函数的内部可以定义状态的所有内容
 */
 export const useTokenStore=defineStore('token',()=>{
    //定义状态的内容
    const token = ref('')
    //定义方法
    const setToken = (newToken)=>{
          token.value=newToken
    }
    const removeToken = ()=>{
        token.value=''
    }
    return {token,setToken,removeToken}
 },{
    persist:true //持久化存储
})