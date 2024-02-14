import { FC } from "react";

interface PropsType {
  id: string;
  title: string;
  isPublished: boolean;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}

const QuestionCard: FC<PropsType> = (props) => {
  const { id, title, isPublished, handleEdit, handleDelete } = props;

  const edit = () => {
    handleEdit && handleEdit(id);
  };

  const deleteQuestion = () => {
    handleDelete && handleDelete(id);
  };

  return (
    <>
      <div className="item" key={id}>
        <strong>{title}</strong>
        <div
          className="plublished"
          style={isPublished ? { color: "green" } : { color: "red" }}
        >
          {isPublished ? "已发布" : "未发布"}
        </div>
        <button onClick={edit}>编辑问卷</button>
        <button onClick={deleteQuestion}>删除问卷</button>
      </div>
    </>
  );
};

export default QuestionCard;
