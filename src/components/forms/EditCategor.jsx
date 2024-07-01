import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput, CustomSelect } from "../common/custom-input/CustomInput";
import { useDispatch } from "react-redux";

import useForm from "../../Hooks/useForm";
import { CustomModal } from "../common/custom-modal/CustomModal";
import { editCategoryAction } from "../../features/categories/catAction";
import { useCustomModal } from "../../Hooks/useCustomModal";

export const EditCategory = ({ selectedCat }) => {
  const dispatch = useDispatch();

  const { form, setForm, handleOnChange } = useForm({});
  const { show, setShow } = useCustomModal();

  useEffect(() => {
    setForm(selectedCat);
    setShow(true);
  }, [selectedCat, setForm, setShow]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(editCategoryAction(form));
  };

  const inputs = [
    {
      isSelectType: true,
      label: "Status",
      name: "status",
      type: "text",
      required: true,
      options: [
        {
          text: "Active",
          value: "active",
          selected: form.status === "active",
        },
        {
          value: "inactive",
          text: "Inactive",
          selected: form.status === "inactive",
        },
      ],
    },
    {
      label: "Title",
      name: "title",
      type: "text",
      required: true,
      value: form.title,
    },
    {
      label: "Slug",
      name: "slug",
      type: "text",
      required: true,
      placeholder: "Phones",

      value: form.slug,
      disabled: true,
    },
  ];
  return (
    <CustomModal title="Edit Category" show={show} setShow={setShow}>
      <Form className=" ">
        {inputs.map((item, i) =>
          item.isSelectType ? (
            <CustomSelect key={i} {...item} onChange={handleOnChange} />
          ) : (
            <CustomInput onChange={handleOnChange} key={i} {...item} />
          )
        )}

        <div className="d-grid mt-3">
          <Button onClick={handleOnSubmit}>Submit</Button>
        </div>
      </Form>
    </CustomModal>
  );
};
