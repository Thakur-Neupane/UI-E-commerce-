import { apiProcessor } from "../../services/axios";
const userEP = import.meta.env.VITE_APP_SERVR_ROOT + "/api/v1/users";

export const postNewUser = (data) => {
  const obj = {
    url: userEP,
    method: "post",
    data,
    // isPrivate: true
  };

  return apiProcessor(obj);
};
