import { FC, useState, useMemo } from "react";

// 学习hook: useMemo

// useMemo可以实现数据的缓存,用法与useEffect类似,也是可以依赖单个或多个数据项

const UseMemoDemo: FC = () => {
  console.log("mounted");
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(20);
  const [text, setText] = useState("hello");

  const sum = useMemo(() => {
    console.log("sum: 改变了依赖项的数据 num1或num2才会执行");
    return num1 + num2;
  }, [num1, num2]);

  return (
    <>
      <div>测试useMemo能否实现缓存效果?{sum}</div>
      <div>num1:{num1}</div>
      <div>num2:{num2}</div>
      <button onClick={() => setNum1(num1 + 1)}>修改num1的值</button>
      <button onClick={() => setNum2(num2 + 1)}>修改num2的值</button>

      <input value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
};

export default UseMemoDemo;
