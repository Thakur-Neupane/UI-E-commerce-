import { setShowModal } from "../../store/systemSlice";
import {
  deleteCategory,
  editCategory,
  getAllCategories,
  postNewCategory,
} from "./catAxios";
import { setCats } from "./catSlice";

export const createNewCategoryAction = (catData) => async (dispatch) => {
  const response = await postNewCategory(catData);

  console.log(response);
  if (response.status === "success") {
    dispatch(setShowModal(false));
    dispatch(getCategoryAction());
  }
};

export const getCategoryAction = () => async (dispatch) => {
  const response = await getAllCategories();

  console.log(response);
  if (response.status === "success") {
    dispatch(setCats(response.categories));
  }
};

export const editCategoryAction = (form) => async (dispatch) => {
  const response = await editCategory(form);

  console.log(response);
  if (response.status === "success") {
    dispatch(getCategoryAction());
  }
};

export const deleteCategoryAction = (_id) => async (dispatch) => {
  console.log(_id);
  const response = await deleteCategory(_id);

  console.log(response);
  if (response.status === "success") {
    dispatch(getCategoryAction());
  }
};
