import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch } from "react-redux";
import { getCategoryAction } from "../../features/categories/catAction";

export const CategoryTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryAction());
  }, [dispatch]);
  return (
    <div>
      <div className="">5 Categories found</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Active</td>
            <td>Phones</td>
            <td>Phone</td>
            <td>
              <Button variant="warning">Edit</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
