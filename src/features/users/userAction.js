import { toast } from "react-toastify";
import { postNewUser, verifyUserLink } from "./userAxios";

const apiProcessWithToast = async (obj, func) => {
  const pending = func(obj);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const respons = await pending;
  toast[respons.status](respons.message);
  return respons;
};

export const createNewAdminAction = async (userData) => {
  apiProcessWithToast(userData, postNewUser);
  // further stuff
};

export const verifyUserLinkAction = async (data) => {
  return apiProcessWithToast(data, verifyUserLink);
};
