import { FC } from "react";
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
import { useRequest } from "ahooks";

const QuestionManageLayout: FC = () => {
  const nav = useNavigate();

  // 获取当前路由路径
  const { pathname } = useLocation();

  const { loading, run: handleCreate } = useRequest(createQuestion, {
    manual: true, // 手动触发
    onSuccess(res) {
      nav(`/detail/edit/${res.id}`); // 跳转到编辑页
      message.success("问卷创建成功!");
    },
  });

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
