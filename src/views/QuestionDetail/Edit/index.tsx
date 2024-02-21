import { FC } from "react";
// import styles from "./index.module.scss";
import { useLoadQuestionData } from "../../../hooks/useLoadQuestionData";

const EditQuestion: FC = () => {
  const { loading, data } = useLoadQuestionData();

  return (
    <>
      <div>
        EditQuestion
        <p>{loading ? "问卷加载中~~" : JSON.stringify(data)}</p>
      </div>
    </>
  );
};

export default EditQuestion;
