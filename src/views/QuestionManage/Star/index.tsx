import { FC } from "react";
// import styles from "./index.module.scss";
import { Outlet } from "react-router-dom";

const QuestionStar: FC = () => {
  return (
    <>
      <div>QuestionStar</div>

      <Outlet />
    </>
  );
};

export default QuestionStar;
