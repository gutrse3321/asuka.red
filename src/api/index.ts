import Axios, {AxiosRequestConfig} from "axios";

Axios.defaults.timeout = 180000;


export default class Api {

  public static axios(path: string, data?: any) {
    let formData = new FormData();

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        formData.append(key, element);
      }
    }

    //配置参数
    let config: AxiosRequestConfig = {
    baseURL: "http://127.0.0.1:20048",
    headers: {},
    method: "POST",
    url: path,
    data: formData,
    };

    return Axios.request(config);
  }
}