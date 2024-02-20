import { FC } from "react";
import styles from "./index.module.scss";
import { Form, Input, Space, Button } from "antd";
import { Link } from "react-router-dom";

const Register: FC = () => {
  // 点击注册
  const onFinish = (formValues: any) => {
    console.log(formValues);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <div className={styles.title}>注册新用户!</div>
          <Form
            style={{
              maxWidth: 400,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              label="用户名"
              rules={[
                { required: true, message: "请输入用户名!" },
                {
                  type: "string",
                  min: 5,
                  max: 8,
                  message: "用户名长度为5-8个字符",
                },
                {
                  pattern: /^\w+$/,
                  message: "用户名只能包含是字母数字下划线",
                },
              ]}
            >
              <Input placeholder="请输入用户名" />
            </Form.Item>

            <Form.Item name="nickname" label="昵称">
              <Input placeholder="请输入昵称" />
            </Form.Item>

            <Form.Item
              name="password"
              label="密码"
              rules={[{ required: true, message: "请输入密码!" }]}
            >
              <Input.Password placeholder="请输入密码" allowClear />
            </Form.Item>

            <Form.Item
              name="repassword"
              label="确认密码"
              rules={[
                { required: true, message: "请再次输入密码!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(new Error("两次密码输入不一致!!"));
                    }
                  },
                }),
              ]}
            >
              <Input.Password placeholder="请再次输入密码" allowClear />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Space>
                <Button type="primary" htmlType="submit">
                  注册
                </Button>
                <Link to={"/login"}>已有账号? 去登录!</Link>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
