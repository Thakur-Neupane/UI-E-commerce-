import { postNewProduct } from "./productAxios";

export const createNewProductAction = (productData) => async (dispatch) => {
  const response = await postNewProduct(productData);

  console.log(response);
  if (response.status === "success") {
    dispatch(setShowModal(false));
    dispatch(getProductAction());
  }
};

export const getProductAction = () => async (dispatch) => {
  const response = await getAllProducts();

  console.log(response);
  if (response.status === "success") {
    dispatch(setproducts(response.products));
  }
};
