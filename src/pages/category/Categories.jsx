import React from "react";
import { Button } from "react-bootstrap";
import { CategoryTable } from "../../components/tables/CategoryTable";
import { CustomModal } from "../../components/common/custom-modal/CustomModal";
import { AddNewCategories } from "../../components/forms/AddNewCategories";
import { useDispatch } from "react-redux";
import { setShowModal } from "../../store/systemSlice";

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2> Categories</h2>
      <hr />

      <div className="text-end b-5">
        <Button
          className="btn btn-primary"
          onClick={() => dispatch(setShowModal(true))}
        >
          Add New Category
        </Button>
        <CustomModal title="Add New Category">
          <AddNewCategories />
        </CustomModal>
        <CategoryTable />
      </div>
    </div>
  );
};

export default Categories;
