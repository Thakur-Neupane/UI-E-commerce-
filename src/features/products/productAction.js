import {
  deleteProduct,
  editProduct,
  getAProduct,
  getAllProducts,
  postNewProduct,
} from "./productAxios";
import { setProd, setProducts } from "./productSlice";

export const createNewProductAction = async (productData) => {
  await postNewProduct(productData);
};

export const getProductAction = () => async (dispatch) => {
  const response = await getAllProducts();

  if (response.status === "success") {
    dispatch(setProducts(response.products));
  }
};
export const getOneProductAction = (_id) => async (dispatch) => {
  const response = await getAProduct(_id);

  if (response.status === "success") {
    dispatch(setProd(response.product));
  }
};

export const editProductAction = (form) => async (dispatch) => {
  const { status } = await editProduct(form);
  if (status === "success") {
    dispatch(getProductAction());
  }
};
export const deleteProductAction = (_id) => async (dispatch) => {
  const { status } = await deleteProduct(_id);
  if (status === "success") {
    dispatch(getProductAction());
  }
};
