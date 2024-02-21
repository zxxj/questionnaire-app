import { FC } from "react";
import { useLoadQuestionData } from "../../../hooks/useLoadQuestionData";
// import styles from "./index.module.scss";

const StatQuestion: FC = () => {
  const { loading, data } = useLoadQuestionData();
  return (
    <>
      <div>
        StatQuestion
        <p>{loading ? "问卷信息加载中~~" : JSON.stringify(data)}</p>
      </div>
    </>
  );
};

export default StatQuestion;
