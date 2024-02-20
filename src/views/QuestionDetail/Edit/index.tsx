import { FC, useEffect } from "react";
// import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
import { getQuestionById } from "../../../service/modules/question";

const EditQuestion: FC = () => {
  const { id = "" } = useParams(); // 获取动态路由参数
  console.log(id);

  useEffect(() => {
    const fn = async () => {
      const res = await getQuestionById(id);
      console.log(res);
    };

    fn();
  });
  return (
    <>
      <div>EditQuestion</div>
    </>
  );
};

export default EditQuestion;
