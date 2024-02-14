import { useState, useEffect, FC } from "react";

const UseEffectDemo: FC = () => {
  const [count, setCount] = useState(0);

  // 什么是副作用?
  // 从字面意思理解, 我们知道react中,组件是一个函数,组件返回的是jsx片段,但返回了jsx片段后,我们如果想让这个函数实现一些事件的监听(例如,组件更新时,组件销毁时),就会产生副作用

  // []: 表示无依赖,组件初次渲染时会执行
  useEffect(() => {
    console.log("函数初次加载");
  }, []);

  // [count]: 表示依赖于一个数据项,当依赖的数据项发生变化时,useEffect也会随之执行
  useEffect(() => {
    console.log("count的值发生变化");
  }, [count]);

  // useEffect初次渲染时为什么会执行两次?
  // 因为从react18开始,useEffect在开发环境下默认会执行两次,生产环境中会执行一次
  // 为什么要这样做?
  // 是因为它在模拟组件的创建,销毁,再创建的完整流程,这样会及早的暴露问题,以便修复

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCount}>count + 1</button>
    </>
  );
};

export default UseEffectDemo;
