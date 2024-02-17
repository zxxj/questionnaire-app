import { FC } from "react";
import { Outlet } from "react-router-dom";

const QuestionDetailLayout: FC = () => {
  return (
    <>
      <div className="container">QuestionDetailLayout</div>
      <Outlet />
    </>
  );
};

export default QuestionDetailLayout;
