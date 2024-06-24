import { toast } from "react-toastify";
import {
  fetchUserProfile,
  postNewUser,
  userLogin,
  verifyUserLink,
} from "./userAxios";
import { setUser } from "./userSlice";

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

export const loginAdminAction = (data) => async (dispatch) => {
  const { status, jwts } = await userLogin(data);

  if (jwts?.accessJWT && jwts?.refreshJWT) {
    sessionStorage.setItem("accessJWT", jwts.accessJWT);
    localStorage.setItem("refreshJWT", jwts.refreshJWT);

    dispatch(fetchUserProfileAction());
  }

  //  if login success
};

export const fetchUserProfileAction = () => async (dispatch) => {
  const { status, userInfo } = await fetchUserProfile();

  if (status === "success") {
    //mount user in the redux store
    console.log(userInfo);
    dispatch(setUser(userInfo));
  }
};
