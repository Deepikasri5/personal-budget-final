import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {Link,useHistory} from 'react-router-dom';
import { login } from '../../api/auth';
import LocalStorageService from '../../utils/localstorage';
import "./login.css"
import Navbar from '../navBar/NavBar';


const Login = () => {
  let history = useHistory();
  const onFinish = (values) => {
    
    login(values).then((response) => {
      console.log('response', response);
      if(response && response.success){
        LocalStorageService.setData('token', response.token);
        LocalStorageService.setData('refresh', response.refresh);
        history.push("/user/dashboard");
      }
    })
    console.log('Success:', values);
  };



  return (
    <>
    <Navbar/>
    <Form
      name="normal_login"
      className="login-box"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h1>Login</h1>
      <Form.Item
        name="email"
        className="user-box"
        rules={[{ required: true, message: 'Please input your Email ID!' }]}
      >
        <Input  placeholder="Email ID" />
      </Form.Item>
      <Form.Item
        name="password"
        className="user-box"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        &emsp; Or &nbsp; &nbsp;
        <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
    </>)
}

export default Login;