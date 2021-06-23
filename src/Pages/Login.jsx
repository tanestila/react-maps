import { Form, Input, Button, Checkbox } from "antd";
import { Redirect, NavLink } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export const Login = ({ isAuthenticated, onChangeAuth }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    onChangeAuth(true);
  };

  if (isAuthenticated) return <Redirect to="/lab" />;
  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <NavLink className="login-form-forgot" to="/forgot">
            Forgot password
          </NavLink>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <NavLink to="/register">register now!</NavLink>
        </Form.Item>
      </Form>
    </div>
  );
};
