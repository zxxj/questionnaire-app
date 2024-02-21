import { FC, useEffect, useState } from "react";
import { Pagination } from "antd";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

interface PropsType {
  total: number;
}

const ListPagination: FC<PropsType> = (props: PropsType) => {
  const { total } = props;
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const nav = useNavigate();

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    setPage(page);

    const pageSize = Number(searchParams.get("pageSize")) || 10;
    setPageSize(pageSize);
  }, [searchParams]);

  const handleChange = (page: number, pageSize: number) => {
    searchParams.set("page", page.toString());
    searchParams.set("pageSize", pageSize.toString());
    nav({
      pathname,
      search: searchParams.toString(),
    });
  };

  return (
    <Pagination
      current={page}
      pageSize={pageSize}
      total={total}
      onChange={handleChange}
    />
  );
};

export default ListPagination;
