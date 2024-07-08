import { useState } from "react";
import { useEffect } from "react";
import { Button, Form, Pagination, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProductAction } from "../../features/products/productAction";

const serverEP = import.meta.env.VITE_APP_SERVR_ROOT;

export const ProductTable = () => {
  const [displayProd, setDisplayProd] = useState([]);

  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    setDisplayProd(products);
  }, [products]);

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const handleDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this category")) {
      dispatch(deleteProductAction(_id));
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-4">
        <div>{products.length} Products Found</div>
        <div>
          <Form.Control placeholder="Search by name..." />
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Sales Price</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {displayProd.map((prod, i) => (
            <tr key={prod._id}>
              <td>{1 + i}</td>
              <td>
                <img src={serverEP + prod.thumbnail} width="70px" alt="" />
              </td>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              <td>{prod.qty}</td>
              <td>
                ${prod.salesPrice}
                <br />
                {prod.salesStart?.slice(0, 10)} To {prod.salesEnd?.slice(0, 10)}
              </td>
              <td>
                <Link to={"/admin/products/edit/" + prod._id}>
                  <Button variant="warning">Edit</Button>
                </Link>
                <Button variant="danger" onClick={() => handleDelete(prod._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div>
        <Pagination>{items}</Pagination>
      </div>
    </div>
  );
};
