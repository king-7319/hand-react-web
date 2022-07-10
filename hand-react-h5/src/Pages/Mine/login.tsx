import React, {useEffect} from 'react';
import userModel from"../../model/userInfo/login"
function Login(props:any) {
    const btn=async ()=>{
        const list=userModel.login({});
        console.log(list)
    }
    useEffect(()=>{
        console.log(props,'1231313')
    })
    return (
        <div>
            <button onClick={btn}>点击</button>
        </div>
    );
}

export default Login;