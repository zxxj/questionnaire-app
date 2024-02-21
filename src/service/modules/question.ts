import http from "../http";
import type { ResponseDataType } from "../http";

// 根据问卷id查询问卷
export const getQuestionById = async (
  id: string,
): Promise<ResponseDataType> => {
  const url = `/api/question/${id}`;
  const data = await http.get(url);
  return data;
};

// 创建问卷
export const createQuestion = async (): Promise<ResponseDataType> => {
  const url = "/api/question";
  const data = await http.post(url);

  return data;
};

type SearchOption = {
  keyword: string;
  isStar: boolean;
  isDeleted: boolean;
  page: number;
  pageSize: number;
};

// 获取问卷列表
export const getQuestionList = async (
  options: Partial<SearchOption>,
): Promise<ResponseDataType> => {
  const url = "/api/question";
  const data = await http.get(url, { params: options });
  return data;
};
