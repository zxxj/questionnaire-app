import { FC, useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { Input } from "antd";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { LIST_SEARCH_PARAM_KEY } from "../../constant";

const { Search } = Input;

const SearchList: FC = () => {
  // 路由跳转
  const nav = useNavigate();

  // 获取当前的路由路径
  const { pathname } = useLocation();

  // 获取当前url中的查询参数
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const currentParamsValue = searchParams.get(LIST_SEARCH_PARAM_KEY) || ""; // keyword的值
    // 回显到输入框中
    setValue(currentParamsValue);
  }, [searchParams]);

  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearch = (value: string) => {
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    });
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Search
        allowClear
        value={value}
        placeholder="请输入问卷名称"
        onChange={handleChange}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default SearchList;
