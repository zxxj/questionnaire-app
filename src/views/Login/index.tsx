import { FC, useEffect } from "react";
import styles from "./index.module.scss";
import { Form, Input, Checkbox, Space, Button } from "antd";
import { Link } from "react-router-dom";
import { getLocal, removeLocal, setLocal } from "../../utils/auth";

const Login: FC = () => {
  const [form] = Form.useForm(); // 第三方hook

  // 页面挂载完毕后,如果本地中有值,就回显到表单上,代表上次已经选择了记住我
  useEffect(() => {
    const username = getLocal("username");
    const password = getLocal("password");
    form.setFieldsValue({ username, password });
  });

  // 点击登录
  const onFinish = (formValues: any) => {
    console.log(formValues);

    // 如果选择了记住我,则将用户名与密码存到本地,反之则从本地中删除
    if (formValues.remember) {
      setLocal("username", formValues.username);
      setLocal("password", formValues.password);
    } else {
      removeLocal("username");
      removeLocal("password");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <div className={styles.title}>欢迎来到问卷鑫!~</div>
          <Form
            form={form}
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

            <Form.Item
              name="password"
              label="密码"
              rules={[{ required: true, message: "请输入密码!" }]}
            >
              <Input.Password placeholder="请输入密码" allowClear />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Space>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
                <Link to={"/register"}>没有账号? 去注册!</Link>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
