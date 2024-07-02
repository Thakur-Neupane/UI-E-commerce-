import { apiProcessor } from "../../services/axios";
const productEP = import.meta.env.VITE_APP_SERVR_ROOT + "/api/v1/products";

export const postNewProduct = (data) => {
  const obj = {
    url: productEP,
    method: "post",
    data,
    // isPrivate: true
  };

  return apiProcessor(obj);
};
