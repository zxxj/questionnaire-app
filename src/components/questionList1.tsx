import type { FC } from "react";

import "../styles/questionList1.css";

const questionList = [
  {
    id: "q1",
    title: "问卷1",
    isPublished: true,
  },
  {
    id: "q2",
    title: "问卷2",
    isPublished: false,
  },
  {
    id: "q3",
    title: "问卷3",
    isPublished: true,
  },
  {
    id: "q4",
    title: "问卷4",
    isPublished: false,
  },
];

const handleEdit = (id: string) => {
  console.log("editclick", id);
};

const questionList1: FC = () => {
  return (
    <>
      <h1>问卷列表页</h1>

      {questionList.map((item) => {
        const { id, title, isPublished } = item;
        return (
          <div className="item" key={id}>
            <strong>{title}</strong>
            <div
              className="plublished"
              style={isPublished ? { color: "green" } : { color: "red" }}
            >
              {isPublished ? "已发布" : "未发布"}
            </div>
            <button onClick={() => handleEdit(id)}>编辑问卷</button>
          </div>
        );
      })}
    </>
  );
};

export default questionList1;
