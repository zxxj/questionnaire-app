import { FC } from "react";
import styles from "./index.module.scss";
import { Card, Button, Tag, Space, Popconfirm } from "antd";
import {
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

type PropsType = {
  _id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createdAt: string;
};

const QuestionCard: FC<PropsType> = (props) => {
  const { _id, title, isPublished, isStar, answerCount, createdAt } = props;

  // 复制问卷
  const handleCopy = () => {
    alert("复制成功");
  };

  // 删除问卷
  const handleDelete = () => {
    alert("删除成功");
  };

  return (
    <Card className={styles.container}>
      {/* 卡片上区域 */}
      <div className={styles.top}>
        <div className={styles.left}>
          <Link
            className={styles.title}
            to={!isPublished ? `/detail/edit/${_id}` : `/detail/stat/${_id}`}
          >
            <Space>
              {isStar && <StarOutlined style={{ color: "red" }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <div className="isPublished">
            {isPublished ? (
              <Tag color="blue">已发布</Tag>
            ) : (
              <Tag color="red">未发布</Tag>
            )}
          </div>
          <div className={styles.count}>答卷:{answerCount}</div>
          <div className="date">{createdAt}</div>
        </div>
      </div>

      {/* 卡片底区域 */}
      <div className={styles.bottom}>
        <div className={styles.left}>
          <Button type="text" className={styles.editBtn}>
            <EditOutlined />
            编辑问卷
          </Button>
          <Button
            disabled={isPublished ? false : true}
            type="text"
            className="sumBtn"
          >
            <PieChartOutlined />
            数据统计
          </Button>
        </div>
        <div className={styles.right}>
          <Button type="text" className="star">
            <StarOutlined />
            {isStar ? "取消标星" : "标星"}
          </Button>

          <Popconfirm
            title="确定要复制此问卷吗?"
            okText="确定"
            cancelText="取消"
            onConfirm={handleCopy}
          >
            <Button type="text" className={styles.copy}>
              <CopyOutlined />
              复制
            </Button>
          </Popconfirm>

          <Popconfirm
            title="确定要删除此问卷吗?"
            okText="确定"
            cancelText="取消"
            onConfirm={handleDelete}
          >
            <Button type="text" className="delete">
              <DeleteOutlined />
              删除
            </Button>
          </Popconfirm>
        </div>
      </div>
    </Card>
  );
};

export default QuestionCard;
