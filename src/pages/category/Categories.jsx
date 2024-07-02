import React from "react";
import { Button } from "react-bootstrap";
import { CategoryTable } from "../../components/tables/CategoryTable";
import { AddNewCategory } from "../../components/forms/AddNewCategory";
import { CustomModal } from "../../components/common/custom-modal/CustomModal";

import { useCustomModal } from "../../Hooks/useCustomModal";
import { useSelector } from "react-redux";

const Categories = () => {
  const { Categories } = useSelector((state) => state.catInfo);
  const { show, setShow } = useCustomModal();
  return (
    <div>
      <h2>Categories</h2>
      <hr />
      <div className="text-end mb-5">
        <Button className="btn btn-primary" onClick={() => setShow(true)}>
          Add New Category
        </Button>
      </div>

      <CustomModal title="Add New Category" show={show} setShow={setShow}>
        <AddNewCategory />
      </CustomModal>

      <CategoryTable />
    </div>
  );
};

export default Categories;
