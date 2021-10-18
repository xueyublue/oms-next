import React from "react";
import { Form, Button, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "../styles/Login.module.css";
import Router from "next/router";

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (values.username === "oms" && values.password === "oms") Router.push("/dashboard");
  };

  return (
    <div className={styles.loginbox}>
      <img src="/logo-login.png" className={styles.logo}></img>
      <Form name="normal_login" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: "Please input your Username!" }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" size="large" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className={styles.loginformforgot} href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.loginformbutton} size="large">
            LOGIN
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
