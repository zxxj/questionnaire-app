import { FC, useState } from "react";
import styles from "./index.module.scss";
import { Table, Tag, Empty, Button, Space, Modal, Spin } from "antd";
import { useTitle } from "ahooks";
import SearchList from "../../../components/SearchList";
import { useLoadQuestionListData } from "../../../hooks/useLoadQuestionListData";

const columns = [
  {
    title: "问卷名称",
    dataIndex: "title",
  },
  {
    title: "是否发布",
    dataIndex: "isPublished",
    render: (isPublished: boolean) => {
      return isPublished ? (
        <Tag color="green">已发布</Tag>
      ) : (
        <Tag color="red">未发布</Tag>
      );
    },
  },
  {
    title: "答卷人数",
    dataIndex: "answerCount",
  },
  {
    title: "是否标星",
    dataIndex: "isStar",
    render: (isStar: boolean) => {
      return isStar ? (
        <Tag color="green">已标星</Tag>
      ) : (
        <Tag color="red">未标星</Tag>
      );
    },
  },
  {
    title: "创建时间",
    dataIndex: "createdAt",
  },
];

const QuestionTrash: FC = () => {
  useTitle("问卷鑫 - 回收站");

  const { loading, list } = useLoadQuestionListData({ isDeleted: true });

  const { confirm } = Modal;
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const handleDelete = () => {
    confirm({
      title: "彻底删除",
      content: "您确定要彻底删除此问卷吗? 删除后无法找回!!!",
      okText: "确定",
      cancelText: "再想想",
      onOk: () => alert("删除成功"),
    });
  };

  const tableElement = (
    <>
      {/* 恢复和删除按钮 */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Space>
          <Button type="primary" disabled={selectedRowKeys.length === 0}>
            恢复问卷
          </Button>
          <Button
            danger
            disabled={selectedRowKeys.length === 0}
            onClick={handleDelete}
          >
            彻底删除
          </Button>
        </Space>
      </div>

      {/* 表格 */}
      <Table
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKey) => {
            setSelectedRowKeys(selectedRowKey as string[]);
          },
        }}
        dataSource={list}
        columns={columns}
        pagination={false}
        rowKey={(item) => item._id}
      />
    </>
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>回收站</div>
        <div className={styles.right}>
          <SearchList />
        </div>
      </div>

      <div className={styles.content}>
        {!loading && list.length === 0 && <Empty description="暂无数据" />}

        {loading && (
          <div style={{ textAlign: "center" }}>
            <Spin />
          </div>
        )}

        {!loading && list.length > 1 && tableElement}
      </div>

      <div className={styles.footer}>分页</div>
    </div>
  );
};

export default QuestionTrash;
