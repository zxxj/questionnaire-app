import { useParams } from "react-router-dom";
import { getQuestionById } from "../service/modules/question";
import { useRequest } from "ahooks";

const useLoadQuestionData = () => {
  const { id = "" } = useParams();
  const load = async () => await getQuestionById(id);
  const { loading, data, error } = useRequest(load);

  return { loading, data, error };
};

export { useLoadQuestionData };
