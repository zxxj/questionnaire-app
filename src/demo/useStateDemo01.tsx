import { FC, useState } from "react";

// 学习hooks:  useState与普通js变量的区别

const useStateDemo1: FC = () => {
  const [count, setCount] = useState(0);
  // let count = 0;

  const handleCount = () => {
    // 1.js变量方式: js普通的变量不能触发组件的更
    // count++;
    // console.log(count); // 1,2,3,4, 但是视图不会更新

    // 2.useState方式: 可以触发组件(组件)的更新
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleCount}>点击:{count}</button>
    </>
  );
};

export default useStateDemo1;
