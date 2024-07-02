import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../common/custom-input/CustomInput";
import { useDispatch } from "react-redux";
import { createNewProductAction } from "../../features/categories/catAction";
import useForm from "../../Hooks/useForm";

export const AddNewProduct = ({ setShow }) => {
  const dispatch = useDispatch();

  const handleOnSubmit = async () => {
    e.preventDefault;
  };

  const isSuccess = dispatch(createNewProductAction({}));
  isSuccess && setShow(false);
};

const inputs = [
  {
    label: "Title",
    name: "title",
    type: "text",
    required: true,
    placeholder: "Title for product",
  },
  {
    label: "Category",
    name: "category",
    type: "text",
    required: true,
    placeholder: "category",
  },
  {
    label: "sku",
    name: "title",
    type: "number",
    required: true,
    placeholder: "sku",
  },

  {
    label: "Price",
    name: "price",
    type: "number",
    required: true,
    placeholder: "Price of product ",
  },

  {
    label: "SalesPrice",
    name: "salesprice",
    type: "number",
    required: true,
    placeholder: "SalesPrice ",
  },

  {
    label: "SalesStart",
    name: "salesstart",
    type: "date",
    required: true,
    placeholder: "Sales Start Date ",
  },

  {
    label: "SalesEnd",
    name: "salesend",
    type: "date",
    required: true,
    placeholder: "Sales End Date ",
  },

  {
    label: "Description",
    name: "Description",
    type: "text",
    required: true,
    placeholder: "description ",
  },
];
return (
  <div>
    <Form>
      {inputs.map((item, i) => (
        <CustomInput key={i} {...item} />
      ))}

      <div className="d-grid mt-3">
        <Button onChange={handleOnChange} onClick={handleOnSubmit}>
          Submit
        </Button>
      </div>
    </Form>
  </div>
);
