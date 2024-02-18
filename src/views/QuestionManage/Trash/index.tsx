import { FC, useState } from "react";
import styles from "./index.module.scss";
import { Table, Tag, Input, Empty, Button, Space, Modal } from "antd";

const qeustionData = [
  {
    _id: "1", // id
    title: "问卷1", // 问卷名称
    isPublished: false, // 是否发布
    isStar: false, // 是否标星
    answerCount: 5, // 答卷人数
    createdAt: "3月10日 13:23", // 问卷创建日期
  },
  {
    _id: "2",
    title: "问卷2",
    isPublished: false,
    isStar: false,
    answerCount: 10,
    createdAt: "3月11日 17:10",
  },

  {
    _id: "3",
    title: "问卷3",
    isPublished: true,
    isStar: true,
    answerCount: 20,
    createdAt: "3月14日 06:05",
  },

  {
    _id: "4",
    title: "问卷4",
    isPublished: true,
    isStar: false,
    answerCount: 88,
    createdAt: "3月20日 09:08",
  },

  {
    _id: "5",
    title: "问卷5",
    isPublished: false,
    isStar: false,
    answerCount: 99,
    createdAt: "3月23日 19:30",
  },
];

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
        dataSource={qeustionData}
        columns={columns}
        pagination={false}
        rowKey={(item) => item._id}
      />
    </>
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>星标问卷</div>
        <div className={styles.right}>
          <Input placeholder="请输入问卷名称" />
        </div>
      </div>

      <div className={styles.content}>
        {qeustionData.length === 0 && <Empty description="暂无数据" />}

        {qeustionData.length > 1 && tableElement}
      </div>

      <div className={styles.footer}>分页</div>
    </div>
  );
};

export default QuestionTrash;
