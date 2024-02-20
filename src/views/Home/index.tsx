import { FC, useEffect } from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { useTitle } from "ahooks";
import { Button } from "antd";
import { LOGIN_PATHNAME } from "../../router";
import axios from "axios";

const Home: FC = () => {
  useTitle("问卷鑫 - 首页");
  const nav = useNavigate();

  useEffect(() => {
    axios.get("/api/test").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>问卷调查 | 在线投票</div>
        <div className={styles.center}>
          已累计创建问卷 100 份, 发布问卷 90 份, 收到答卷 980 份
        </div>
        <div className={styles.bottom}>
          <Button
            type="primary"
            size="large"
            onClick={() => nav(LOGIN_PATHNAME)}
          >
            开始使用
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
