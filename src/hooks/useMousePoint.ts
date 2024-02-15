import { useState, useEffect } from "react";

const useMousePoint = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouse = (event: MouseEvent) => {
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    // 监听鼠标事件
    window.addEventListener("mousemove", handleMouse);

    return () => {
      // 组件销毁时一定要卸载组件,否则可能会产生内存泄漏
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return { x, y };
};

export default useMousePoint;
