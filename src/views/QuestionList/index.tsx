import { FC, useState } from "react";
import styles from "./index.module.scss";
import QuestionCard from "../../components/QuestionCard";
import { Input } from "antd";

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
const QuestionList: FC = () => {
  const [data] = useState(qeustionData);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.left}>我的问卷</div>
          <div className={styles.right}>
            <Input placeholder="请输入问卷名称" />
          </div>
        </div>

        <div className={styles.content}>
          {data.map((item) => {
            const { _id } = item;

            return <QuestionCard key={_id} {...item} />;
          })}
        </div>

        <div className="footer">footer</div>
      </div>
    </>
  );
};

export default QuestionList;
