import { useEffect } from "react";

// 修改网页的标题
const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  });
};

export default useTitle;
