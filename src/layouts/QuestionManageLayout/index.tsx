import { FC, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import { Button, message } from "antd";
import {
  PlusSquareOutlined,
  ProfileOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { createQuestion } from "../../service/modules/question";

const QuestionManageLayout: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();

  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
    const res = await createQuestion();
    const { id } = res;
    message.success("问卷创建成功!");

    nav(`/detail/edit/${id}`);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <Button
            type="primary"
            icon={<PlusSquareOutlined />}
            onClick={handleCreate}
            loading={loading}
          >
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
