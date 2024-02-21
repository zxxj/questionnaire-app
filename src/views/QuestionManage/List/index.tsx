import { FC } from "react";
import styles from "./index.module.scss";
import QuestionCard from "../../../components/QuestionCard";
import { Empty, Spin } from "antd";
import { useTitle } from "ahooks";
import SearchList from "../../../components/SearchList";
import { useLoadQuestionListData } from "../../../hooks/useLoadQuestionListData";

const QuestionList: FC = () => {
  useTitle("问卷鑫 - 我的问卷");

  const { loading, list } = useLoadQuestionListData({});

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.left}>我的问卷</div>
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
          {!loading &&
            list.length > 0 &&
            list.map((item: any) => {
              const { _id } = item;
              return <QuestionCard key={_id} {...item} />;
            })}
        </div>

        <div className="footer">触底加载~</div>
      </div>
    </>
  );
};

export default QuestionList;
