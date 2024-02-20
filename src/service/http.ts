import axios from "axios";
import { message } from "antd";

interface ResponseType {
  code: number;
  data: ResponseDataType;
  msg: string;
}

export interface ResponseDataType {
  [key: string]: any;
}

const http = axios.create({
  timeout: 3000,
});

http.interceptors.response.use((res) => {
  const { code, data, msg } = (res.data || {}) as ResponseType;

  if (code !== 0) {
    if (msg) {
      message.error(msg);
    }

    throw new Error(msg);
  }

  return data as any;
});

export default http;
