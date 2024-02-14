import { FC, useState } from "react";

// 学习hooks: useState: 异步更新/性能问题/可能会被合并/不会被合并

const useStateDemo2: FC = () => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("xin");

  const handleCount = () => {
    // 1.useState是异步更新的,所以无法直接拿到最新的state值
    setCount(count + 1);
    console.log(count);

    // 2.如果一个变量不在视图中进行显示,那么最好不要用setSate来管理它,因为每次set都会重新渲染视图,影响性能
    setUsername("xinxin");
    console.log(username);

    // 3.state更新可能会被合并, 因为useSate是异步更新的,所以无论有多少个setCount(count + 1), 它的count都是更新之前的值
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.log(count); // 会被合并, 输出 0,1,2,3,4,5....

    // 4.使用函数,state更新时不会被合并,因为函数执行后无法被合并
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    console.log(count); // 0, 5, 10, 15 ....
  };
  return (
    <>
      <button onClick={handleCount}>点击:{count}</button>
    </>
  );
};

export default useStateDemo2;
