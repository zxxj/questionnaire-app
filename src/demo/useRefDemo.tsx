import { FC, useRef } from "react";

// 学习hook: useRef

// useRef一般用于操作DOM

const UseRefDemo: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleValue = () => {
    if (inputRef.current) inputRef.current.select();
  };

  // 也可以传入普通的js变量,变量的值可以更新,但是不会触发组件的rerender
  const messageRef = useRef("hello");

  const handleMessage = () => {
    messageRef.current = "hello zhangxinxin";
    console.log(messageRef.current); // hello zhangxinxin, 但是不会触发rerender
  };

  return (
    <>
      <input ref={inputRef} type="text" defaultValue={"zhangxinxin"} />
      <button onClick={handleValue}>选中内容</button>

      <div ref={messageRef}>{messageRef.current}</div>
      <button onClick={handleMessage}>修改message</button>
    </>
  );
};

export default UseRefDemo;
