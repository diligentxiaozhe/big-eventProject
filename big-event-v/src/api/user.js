import request from '@/utils/request'

//提供调用注册接口的函数
export const userRegisterService=(registerData)=>{
    //借助urlSearchParams拼接参数
    const params=new URLSearchParams();
    for(let key in registerData){
        params.append(key,registerData[key])
    }
    return request.post("/user/register",params);
}

//提供调用登录接口的函数
export const userLoginService=(loginData)=>{
    const params=new URLSearchParams();
    for(let key in loginData){
        params.append(key,loginData[key])
    }
    return request.post('/user/login',params);
}

//获取用户详细信息
export const userInfoService=()=>{
    return request.get('/user/userInfo');
}

//修改个人信息
export const userInfoUpdateService=(userInfoData)=>{
    
    return request.put('/user/update',userInfoData);
}

//修改密码
export const userPwdUpdateService=(pwdData)=>{
    return request.patch('/user/updatePwd',pwdData);
}
