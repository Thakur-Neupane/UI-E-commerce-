import React, { forwardRef, useRef } from "react";
import { CustomInput } from "../common/custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createNewCategoryAction } from "../../features/categories/catAction";
export const AddNewCategories = () => {
  const titleRef = useRef("");
  const dispatch = useDispatch();
  const handleOnSubmit = () => {
    const title = titleRef.current.value;
    if (!title) {
      return alert("Must fill up the form");
    }
    dispatch(
      createNewCategoryAction({
        title,
      })
    );
  };
  // call api and send data
  const inputs = [
    {
      label: "Title",
      name: "title",
      type: "text",
      required: true,
      placeholder: "Phones ",
      forwardRef: titleRef,
    },
  ];
  return (
    <div>
      <Form className="">
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} />
        ))}

        <div className="d-grid mt-3">
          <Button type="submit" onClick={handleOnSubmit}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
