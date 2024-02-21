import { useState, useEffect } from "react";

// 模拟网络请求获取用户信息

const getInfo = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("我真帅");
    }, 2000);
  });
};

const useGetinfo = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState("");

  useEffect(() => {
    getInfo().then((res) => {
      setLoading(false);
      setInfo(res);
    });
  }, []);

  return { loading, info };
};

export default useGetinfo;
