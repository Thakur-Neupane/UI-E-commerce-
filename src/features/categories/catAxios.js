import { apiProcessor } from "../../services/axios";

const categoryEP = import.meta.env.VITE_APP_SERVR_ROOT + "/api/v1/categories";

export const postNewCategory = (data) => {
  const obj = {
    url: categoryEP,
    method: "post",
    data,
    isPrivate: true,
    showToast: true,
  };

  return apiProcessor(obj);
};
export const getAllCategories = () => {
  const obj = {
    url: categoryEP,
    method: "get",
    isPrivate: true,
  };

  return apiProcessor(obj);
};
export const editCategory = (form) => {
  const obj = {
    url: `${categoryEP}/${form._id}`,
    method: "put",
    isPrivate: true,
    showToast: true,
    data: form,
  };

  return apiProcessor(obj);
};
export const deleteCategory = (_id) => {
  const obj = {
    url: `${categoryEP}/${_id}`,
    method: "delete",
    isPrivate: true,
    showToast: true,
  };

  return apiProcessor(obj);
};
