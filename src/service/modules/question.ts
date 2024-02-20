import http from "../http";
import type { ResponseDataType } from "../http";

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
