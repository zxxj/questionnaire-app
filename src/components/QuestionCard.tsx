import { FC, useEffect } from "react";
import classnames from "classnames";
import "../styles/questionCard.css";

interface PropsType {
  id: string;
  title: string;
  isPublished: boolean;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}

const QuestionCard: FC<PropsType> = (props) => {
  const { id, title, isPublished, handleEdit, handleDelete } = props;

  const questionItem = classnames({
    questionItem: true,
    publishTrue: isPublished,
  });

  const edit = () => {
    handleEdit && handleEdit(id);
  };

  const deleteQuestion = () => {
    handleDelete && handleDelete(id);
  };

  useEffect(() => {
    console.log("question card mounted"); // 挂载完成

    return () => {
      console.log("question unmounted", id); // 销毁组件
    };
  });

  return (
    <>
      <div className={questionItem} key={id}>
        <strong>{title}</strong>
        <div className="isPublished">{isPublished ? "已发布" : "未发布"}</div>
        <button onClick={edit}>编辑问卷</button>
        <button onClick={deleteQuestion}>删除问卷</button>
      </div>
    </>
  );
};

export default QuestionCard;
