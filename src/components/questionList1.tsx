import type { FC } from "react";
import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import { produce } from "immer";

import "../styles/questionList1.css";

const QuestionList1: FC = () => {
  // []: 表示无依赖,组件初次渲染时会执行
  useEffect(() => {
    console.log("ajax请求");
  }, []);

  const [questionList, setQuestionList] = useState([
    { id: "q1", title: "问卷1", isPublished: false },
    { id: "q2", title: "问卷2", isPublished: true },
    { id: "q3", title: "问卷3", isPublished: false },
    { id: "q4", title: "问卷4", isPublished: true },
  ]);

  // [questionList]: 表示依赖questionList,questionList中的数据发生变化时,就会执行
  useEffect(() => {
    console.log("questionList");
  }, [questionList]);

  const handleEdit = (id: string) => {
    console.log("editclick", id);
    setQuestionList(
      produce((draft) => {
        const currentItem = draft.find((item) => item.id === id);
        if (currentItem) currentItem.isPublished = true;
      }),
    );
  };

  const handleAdd = () => {
    const r = Math.random().toString().slice(-3);

    setQuestionList(
      produce((draft) => {
        draft.push({
          id: "q" + r,
          title: "问卷" + r,
          isPublished: false,
        });
      }),
    );
  };

  const handleDelete = (id: string) => {
    setQuestionList(
      produce((draft) => {
        const currentItem = draft.findIndex((item) => item.id === id);
        draft.splice(currentItem, 1);
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
            handleDelete={handleDelete}
          />
        );
      })}

      <button onClick={handleAdd}>新增问卷</button>
    </>
  );
};

export default QuestionList1;
