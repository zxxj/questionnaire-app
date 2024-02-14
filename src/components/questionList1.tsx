import type { FC } from "react";
import { useState } from "react";
import QuestionCard from "./QuestionCard";

import "../styles/questionList1.css";

const questionList1: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: "q1", title: "问卷1", isPublished: false },
    { id: "q2", title: "问卷2", isPublished: true },
    { id: "q3", title: "问卷3", isPublished: false },
    { id: "q4", title: "问卷4", isPublished: true },
  ]);

  const handleEdit = (id: string) => {
    console.log("editclick", id);
    setQuestionList(
      questionList.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          isPublished: true,
        };
      }),
    );
  };

  const handleAdd = () => {
    const r = Math.random().toString().slice(-3);

    setQuestionList(
      questionList.concat([
        {
          id: "q" + r,
          title: "问卷" + r,
          isPublished: false,
        },
      ]),
    );
  };

  const handleDelete = (id: string) => {
    setQuestionList(
      // 删除 filter
      questionList.filter((item) => {
        if (item.id === id) return false;
        else return true;
      }),
    );
  };

  return (
    <>
      <h1>问卷列表页</h1>

      {questionList.map((item) => {
        const { id, title, isPublished } = item;
        return (
          <QuestionCard
            key={id}
            id={id}
            title={title}
            isPublished={isPublished}
            handleEdit={handleEdit}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
};

export default questionList1;
