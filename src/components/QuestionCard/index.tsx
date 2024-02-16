import { FC } from "react";
import styles from "./index.module.scss";

type PropsType = {
  _id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createdAt: string;
};

const QuestionCard: FC<PropsType> = (props) => {
  const { title, isPublished, isStar, answerCount, createdAt } = props;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.right}>
          <div className="isPublished">
            {isPublished ? <span>已发布</span> : <span>未发布</span>}
          </div>
          <div className={styles.count}>答卷:{answerCount}</div>
          <div className="date">{createdAt}</div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.left}>
          <button className={styles.editBtn}>编辑问卷</button>
          <button className="sumBtn">数据统计</button>
        </div>
        <div className={styles.right}>
          <div className="star">标星{isStar}</div>
          <div className={styles.copy}>复制</div>
          <div className="delete">删除</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
