import { Button, Form } from "react-bootstrap";
import { CustomInput, CustomSelect } from "../common/custom-input/CustomInput";

import { useDispatch } from "react-redux";
import useForm from "../../Hooks/useForm";
import { useEffect } from "react";
import { CustomModal } from "../common/custom-modal/CustomModal";
import { EditCategoryAction } from "../../features/categories/catAction";
import { useCustomModal } from "../../Hooks/useCustomModal";

export const EditCategory = ({ selectedCat }) => {
  const dispatch = useDispatch();
  const { form, setForm, handleOnChange } = useForm({});
  const { show, setShow } = useCustomModal();

  useEffect(() => {
    setForm(selectedCat);
    setShow(true);
  }, [setForm, selectedCat, setShow]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const resp = dispatch(EditCategoryAction(form));
    if (resp) {
      setShow(false);
    }
  };
  const inputs = [
    {
      isSelectType: true,
      label: "Status",
      name: "status",
      type: "text",
      required: true,
      value: form.status,
      options: [
        { label: "-- Select --", value: "" },
        {
          value: "active",
          label: "Active",
          selected: form.status === "active",
        },
        {
          value: "inactive",
          label: "Inactive",
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
      value: form.slug,
      disabled: true,
    },
  ];
  return (
    <CustomModal title="Edit Category" show={show} setShow={setShow}>
      <Form>
        {inputs.map((item, i) =>
          item.isSelectType ? (
            <CustomSelect {...item} key={i} onChange={handleOnChange} />
          ) : (
            <CustomInput {...item} key={i} onChange={handleOnChange} />
          )
        )}
        <div className="d-grid mt-3">
          <Button className="btn btn-primary" onClick={handleOnSubmit}>
            Submit
          </Button>
        </div>
      </Form>
    </CustomModal>
  );
};
