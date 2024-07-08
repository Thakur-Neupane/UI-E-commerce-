import { Button, Form } from "react-bootstrap";
import useForm from "../../Hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  editProductAction,
  getOneProductAction,
} from "../../features/products/productAction";
import {
  CustomInput,
  CustomSelect,
} from "../../components/common/custom-input/CustomInput";
import { useEffect } from "react";
import { fetchCategoryAction } from "../../features/categories/catAction";
import { dateFormatter } from "../../helpers/dateFormatter";

const initialState = {
  status: "",
  parentCatId: "",
  name: "",
  sku: "",
  slug: "",
  qty: 0,
  price: 0,
  salesPrice: 0,
  salesStart: "",
  salesEnd: "",
  description: "",
};

const EditProduct = () => {
  const { _id } = useParams();

  const { form, setForm, handleOnChange, handleOnImgChange, images } =
    useForm(initialState);

  const { categories } = useSelector((state) => state.category);
  const { prod } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories || categories.length === 0) {
      dispatch(fetchCategoryAction());
    }
  }, [dispatch, categories]);

  useEffect(() => {
    if (_id !== form._id) {
      dispatch(getOneProductAction(_id));
      prod?._id && setForm(prod);
    }
  }, [_id, dispatch, prod, setForm, form]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Check if categories are available before proceeding
    if (!categories || categories.length === 0) {
      console.error("Categories are not loaded yet");
      return;
    }

    // populate the form data
    const formData = new FormData();
    for (let key in form) {
      formData.append(key, form[key]);
    }
    // append the images
    if (images.length > 0) {
      [...images].forEach((img) => formData.append("images", img));
    }
    dispatch(editProductAction(formData));
  };

  const inputs = [
    {
      isSelectType: true,
      label: "Status",
      name: "status",
      type: "text",
      required: true,
      options: [
        { label: "-- Select --", value: "" },
        { value: "active", text: "Active" },
        { value: "inactive", text: "Inactive" },
      ],
    },
    {
      label: "Category ",
      name: "parentCatId",
      type: "text",
      required: true,
      isSelectType: true,
      options: categories
        ? categories
            .filter((p) => p.status === "active")
            .map(({ title, _id }) => {
              return { text: title, value: _id };
            })
        : [],
    },
    {
      label: "Name",
      name: "name",
      type: "text",
      required: true,
      placeholder: "Phones",
    },
    {
      label: "SKU",
      name: "sku",
      type: "text",
      required: true,
      placeholder: "DJK-H9879",
      disabled: true,
    },
    {
      label: "Slug",
      name: "slug",
      type: "text",
      required: true,
      placeholder: "",
      disabled: true,
    },
    {
      label: "Qty",
      name: "qty",
      type: "num",
      min: 1,
      required: true,
      placeholder: "22",
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      min: 1,
      required: true,
      placeholder: "234",
    },
    {
      label: "Sales Price",
      name: "salesPrice",
      type: "number",
      min: 1,
      placeholder: "22",
    },
    {
      label: "Sales Start Date",
      name: "salesStart",
      type: "date",
    },
    {
      label: "Sales End Date",
      name: "salesEnd",
      type: "date",
    },
    {
      label: "Description",
      name: "description",
      type: "text",
      as: "textarea",
      maxLength: 5000,
      rows: 10,
      required: true,
      placeholder: "Write product details",
    },
  ];

  return (
    <div>
      <h2>Edit product</h2>
      <hr />

      <Link to="/admin/products">
        <Button variant="secondary">&lt; Back</Button>
      </Link>
      <Form onSubmit={handleOnSubmit} encType="multipart/form-data">
        {inputs.map((item, i) =>
          item.isSelectType ? (
            <CustomSelect
              key={i}
              {...item}
              onChange={handleOnChange}
              value={form[item.name]}
            />
          ) : item.type === "date" ? (
            <CustomInput
              key={i}
              {...item}
              onChange={handleOnChange}
              value={form[item.name] ? dateFormatter(form[item.name]) : ""}
            />
          ) : (
            <CustomInput
              key={i}
              {...item}
              onChange={handleOnChange}
              value={form[item.name]}
            />
          )
        )}

        <Form.Group>
          <Form.Label>Upload Images</Form.Label>

          <Form.Control
            type="file"
            name="images"
            required={true}
            accept="image/jpg, image/png, image/gif, image/jpeg"
            multiple
            onChange={handleOnImgChange}
          />
        </Form.Group>

        <div className="d-grid mt-3">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default EditProduct;
