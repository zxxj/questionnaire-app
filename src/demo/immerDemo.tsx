import { FC, useState } from "react";
import { produce } from "immer";

// 学习使用第三方库: immer

// 为什么使用immer?

// 因为我们知道state是不可变数据,我们要改变数据的时候很不方便,操作成本较高,并且有很大的不稳定性, 使用immer可以避免这一问题

const ImmerDemo: FC = () => {
  const [userInfo, setUserInfo] = useState({ username: "xin", age: 18 });
  const [list, setList] = useState(["a", "b", "c"]);

  const handleList = () => {
    setList(
      produce((draft) => {
        draft.push("d");
      }),
    );
  };

  const handleInfo = () => {
    setUserInfo(
      produce((draft) => {
        (draft.username = "z"), (draft.age = 24);
      }),
    );
  };
  return (
    <>
      <div>{JSON.stringify(list)}</div>
      <button onClick={handleList}>操作list</button>

      <div>{JSON.stringify(userInfo)}</div>
      <button onClick={handleInfo}>操作info</button>
    </>
  );
};

export default ImmerDemo;
