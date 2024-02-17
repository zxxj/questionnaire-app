import { FC } from "react";
// import styles from "./index.module.scss";
import { useParams } from "react-router-dom";

const EditQuestion: FC = () => {
  const { id = "" } = useParams(); // 获取动态路由参数
  console.log(id);
  return (
    <>
      <div>EditQuestion</div>
    </>
  );
};

export default EditQuestion;
