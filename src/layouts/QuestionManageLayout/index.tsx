import { FC } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import { Button } from "antd";
import {
  PlusSquareOutlined,
  ProfileOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const QuestionManageLayout: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <Button type="primary" icon={<PlusSquareOutlined />}>
            新建问卷
          </Button>
        </div>

        <div>
          <Button
            type={pathname === "/manage/list" ? "dashed" : "default"}
            icon={<ProfileOutlined />}
            onClick={() => nav("/manage/list")}
          >
            我的问卷
          </Button>
        </div>

        <div>
          <Button
            type={pathname === "/manage/star" ? "dashed" : "default"}
            icon={<StarOutlined />}
            onClick={() => nav("/manage/star")}
          >
            星标问卷
          </Button>
        </div>

        <div>
          <Button
            type={pathname === "/manage/trash" ? "dashed" : "default"}
            icon={<DeleteOutlined />}
            onClick={() => nav("/manage/trash")}
          >
            回收站
          </Button>
        </div>
      </div>

      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default QuestionManageLayout;
