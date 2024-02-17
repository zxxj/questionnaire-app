import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";

const QuestionManageLayout: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>QuestionManageLayout left</div>

      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default QuestionManageLayout;
