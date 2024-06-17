import axios from "axios";

export const apiProcessor = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshJwt,
}) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
