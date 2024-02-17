import { FC } from "react";
// import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const nav = useNavigate();

  const handleLogin = () => {
    // 跳转到登录页,并且带参数
    nav({
      pathname: "/login",
      search: "username=zxx",
    });
  };

  return (
    <>
      <div>Home</div>
      <button onClick={handleLogin}>点击登录</button>
    </>
  );
};

export default Home;
