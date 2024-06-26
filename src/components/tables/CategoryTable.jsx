import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoryAction,
  getCategoryAction,
} from "../../features/categories/catAction";
import { EditCategory } from "../forms/EditCategor";
import { setShowModal } from "../../store/systemSlice";
import { MdDelete } from "react-icons/md";

export const CategoryTable = () => {
  const dispatch = useDispatch();
  const [selectedCat, setSelectedCat] = useState({});

  const { cats } = useSelector((state) => state.catInfo);

  useEffect(() => {
    dispatch(getCategoryAction());
  }, [dispatch]);

  const handleOnEdit = (_id, status, title, slug) => {
    setSelectedCat(_id, status, title, slug);
    dispatch(setShowModal(true));
  };

  const handleOnDelete = (_id) => {
    console.log(_id);
    window.confirm("Are you sure you want to delete this category?");
    dispatch(deleteCategoryAction(_id));
  };
  return (
    <div>
      {selectedCat?._id && <EditCategory selectedCat={selectedCat} />}
      <div className="">7 Categories found</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {cats.map(({ _id, status, title, slug }, i) => (
            <tr key={_id}>
              <td>{i + 1}</td>
              <td>{status}</td>
              <td>{title}</td>
              <td>{slug}</td>
              <td>
                <Button
                  onClick={() => handleOnEdit({ _id, status, title, slug })}
                  variant="warning"
                >
                  Edit
                </Button>

                <Button
                  className="m-1"
                  onClick={() => handleOnDelete(_id)}
                  variant="danger"
                >
                  <MdDelete />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
