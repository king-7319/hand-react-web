import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import {useHistory} from "react-router-dom";
import userModel from "../../model/userInfo/login"
function Register(props:any) {
    const history=useHistory()
    const onFinish = async (values:any) => {
        console.log(values,'11111111')
        //username:values.username,
        //userpwd:values.userpwd,
        //phone:values.phone,
        //email:values.email
        const info=await userModel.register(values);
        console.log(info,'info...info')
    };

    const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
    };
    const getLogin=()=>{
        history.push('/')
    }
    return (
        <div>

            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名:"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '用户名不能为空',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码:"
                    name="userpwd"
                    rules={[
                        {
                            required: true,
                            message: '密码不能为空',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="手机号:"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: '手机号码不能为空',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="邮箱:"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: '邮箱不能为空',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                    <Button type="primary" style={{marginLeft:'30px'}} onClick={getLogin}>
                        去登录
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );
}

export default Register;







