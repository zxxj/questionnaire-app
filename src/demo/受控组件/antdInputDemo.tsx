import { FC, useState } from "react";
import type { ChangeEvent } from "react";

const Demo: FC = () => {
  const [text, setText] = useState<string>("hello");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <>
      {/* 页面上手动修改defaultValue的值后, 并不会更新text的值, 因为并没调用setText,也就是说,它是一个非受控组件 */}
      <input defaultValue={text}></input>
      <button onClick={() => alert(text)}>打印text</button>

      <br />
      <br />
      <br />

      {/* 页面上手动修改value的值后, 可以更新text的值, 因为handleChange中调用了setText,也就是说,它是一个受控组件 */}
      <input value={text} onChange={handleChange}></input>
      <button onClick={() => alert(text)}>打印text</button>
    </>
  );
};

export default Demo;
