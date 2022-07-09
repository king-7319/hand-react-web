import React, {useEffect} from 'react';
// import userModel from "../../model/userInfo/login"
function Login(props:any) {
    useEffect(()=>{
        console.log(props,'1231313')
    })
    return (
        <div>
            登录
        </div>
    );
}

export default Login;