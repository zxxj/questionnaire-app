import { FC } from "react";
// import styles from "./index.module.scss";
import { useNavigate, useSearchParams } from "react-router-dom";

const Login: FC = () => {
  const nav = useNavigate();
  const [searchParams] = useSearchParams(); // 获取url查询参数
  console.log("username", searchParams.get("username"));

  const handleBack = () => {
    nav(-1);
  };

  return (
    <>
      <div>Login</div>
      <button onClick={handleBack}>点击返回</button>
    </>
  );
};

export default Login;
