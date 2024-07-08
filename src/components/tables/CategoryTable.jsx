import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoryAction,
  fetchCategoryAction,
} from "../../features/categories/catAction";
import { EditCategory } from "../forms/EditCategory";
import { setShowModal } from "../../store/systemSlice";
export const CategoryTable = () => {
  const dispatch = useDispatch();
  const [selectedCat, setSelectedCat] = useState({});
  useEffect(() => {
    dispatch(fetchCategoryAction());
  }, [dispatch]);
  const { categories } = useSelector((state) => state.category);
  const handleEdit = (cat) => {
    setSelectedCat(cat);
    dispatch(setShowModal(true));
  };
  const handleDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this category")) {
      dispatch(deleteCategoryAction(_id));
    }
  };

  return (
    <div>
      {selectedCat._id && <EditCategory selectedCat={selectedCat} />}

      <div>{categories.length} Categories found</div>
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
          {categories.map(({ _id, status, title, slug }, i) => (
            <tr key={_id}>
              <td>{i + 1}</td>
              <td>{status}</td>
              <td>{title}</td>
              <td>{slug}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => handleEdit({ _id, status, title, slug })}
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(_id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
