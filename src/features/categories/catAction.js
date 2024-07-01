import { setShowModal } from "../../store/systemSlice";
import { getAllCategories, postNewCategory } from "./catAxios";

export const createNewCategoryAction = (catData) => async (dispatch) => {
  const response = await postNewCategory(catData);

  console.log(response);

  if (response.status === "success ") {
    dispatch(setShowModal(false));
  }
};

export const getCategoryAction = () => async (dispatch) => {
  const response = await getAllCategories();

  console.log(response);
};
