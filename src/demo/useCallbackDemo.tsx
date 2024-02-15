import { FC, useState, useCallback } from "react";

// 学习hook: useCallback

// useCallback用于缓存函数

const UseCallbackDemo: FC = () => {
  const [text, setText] = useState("hello");

  const fn1 = () => console.log("fn1 log", text);

  const fn2 = useCallback(() => {
    console.log("fn2 log", text);
  }, [text]);

  return (
    <>
      <button onClick={fn1}>fn1</button>
      <button onClick={fn2}>fn2</button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default UseCallbackDemo;
