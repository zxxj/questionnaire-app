import { FC } from "react";
import { FormOutlined } from "@ant-design/icons";
import { Space } from "antd";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Logo: FC = () => {
  const nav = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <Space onClick={() => nav("/")}>
          <FormOutlined />
          <div className="text">问卷鑫</div>
        </Space>
      </div>
    </>
  );
};

export default Logo;
