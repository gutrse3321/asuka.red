import api from "../index";

export default class FetchApi {

  public static fuck(data: any) {
    const path = "saveDrl";
    return api.axios(path, data);
  }
}