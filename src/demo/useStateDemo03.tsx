import { FC, useState } from "react";

// 学习hooks: useState: 不可变数据

const useStateDemo2: FC = () => {
  const [userInfo, setUserInfo] = useState({ username: "xin", age: 18 });
  const [list, setList] = useState(["a", "b"]);

  const handleCount = () => {
    // 不可变数据: 就是不去修改state的值,而是要传入一个新的值
    setUserInfo({
      ...userInfo,
      age: 22,
    });
  };

  const handleList = () => {
    // 不可变数据: 就是不去修改state的值,而是要传入一个新的值
    // setList([...list, "c"]);
    setList(list.concat("c"));
  };

  return (
    <>
      <button onClick={handleCount}>
        点击修改info:{JSON.stringify(userInfo)}
      </button>

      <button onClick={handleList}>点击修改list:{JSON.stringify(list)}</button>
    </>
  );
};

export default useStateDemo2;
