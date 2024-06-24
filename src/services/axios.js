import axios from "axios";
import { toast } from "react-toastify";

export const apiProcessor = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshJwt,
  showToast,
}) => {
  try {
    const pending = axios({
      method,
      url,
      data,
    });

    let response = {};
    if (showToast) {
      toast.promise(pending, {
        pending: "Please wait...",
      });
      response = await pending;
      toast[response.data.status](response.data.message);
      return response;
    } else {
      response = await pending;
    }

    return response.data;
  } catch (error) {
    showToast && toast.error(error.message);
    return {
      status: "error",
      message: error.message,
    };
  }
};
