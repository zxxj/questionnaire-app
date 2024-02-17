import { FC } from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
  const nav = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="您访问的页面路径有误, 请重试!!!"
      extra={<Button onClick={() => nav("/")}>返回首页</Button>}
    />
  );
};

export default NotFound;
