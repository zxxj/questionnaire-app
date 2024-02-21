import { useSearchParams } from "react-router-dom";
import { LIST_SEARCH_PARAM_KEY } from "../constant/index";
import { useRequest } from "ahooks";
import { getQuestionList } from "../service/modules/question";

type OptionsType = {
  isStar?: boolean;
  isDeleted?: boolean;
};

const useLoadQuestionListData = (options: OptionsType) => {
  const { isStar, isDeleted } = options;
  const [searchParams] = useSearchParams();

  const fn = async () => {
    const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || "";
    const page = Number(searchParams.get("page")) || 1;
    const pageSize = Number(searchParams.get("pageSize")) || 10;

    const data = await getQuestionList({
      keyword,
      isStar,
      isDeleted,
      page,
      pageSize,
    });
    return data;
  };

  const { loading, data = {} } = useRequest(fn, {
    refreshDeps: [searchParams],
  });
  const { list, total } = data;

  return { loading, list, total };
};

export { useLoadQuestionListData };
