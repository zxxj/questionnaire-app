import "./styles/App.css";
// import UseStateDemo1 from "./demo/useStateDemo01";
// import UseStateDemo2 from "./demo/useStateDemo02";
// import UseStateDemo3 from "./demo/useStateDemo03";
// import ImmerDemo from "./demo/immerDemo";
// import UseEffectDemo from "./demo/useEffectDemo";
// import UseRefDemo from "./demo/useRefDemo";
// import UseMemoDemo from "./demo/useMemoDemo";
// import UseCallbackDemo from "./demo/useCallbackDemo";
// import useTitle from "./hooks/useTitle";
// import useMousePoint from "./hooks/useMousePoint";
// import useGetinfo from "./hooks/useGetinfo";

// import QuestionList from "./views/QuestionList";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  // 自定义hook: 组件挂载完成后更新网页的标题
  // useTitle("xin");

  // 自定义hook: 获取当前鼠标位置
  // const { x, y } = useMousePoint();

  // 模拟异步请求,获取用户信息
  // const { loading, info } = useGetinfo();

  return (
    <>
      {/* <UseEffectDemo /> */}
      {/* <UseRefDemo /> */}
      {/* <UseMemoDemo /> */}
      {/* <UseCallbackDemo />
      <div>{x}</div>
      <div>{y}</div>

      <div>{loading ? "加载中" : info}</div> */}

      {/* <QuestionList /> */}

      <RouterProvider router={router} />
    </>
  );
}

export default App;
