import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import styles from "./index.module.scss";
import Logo from "../../components/Logo";
import UserInfo from "../../components/UserInfo";

const MainLayout: FC = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <Header className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </div>

      <Content className={styles.content}>
        <Outlet />
      </Content>

      <Footer className={styles.footer}>
        <p>2023.02.14 created by @zhangxinxin</p>
      </Footer>
    </Header>
  );
};

export default MainLayout;
