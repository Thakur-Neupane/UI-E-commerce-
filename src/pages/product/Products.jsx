import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductAction } from "../../features/products/productAction";
import { ProductTable } from "../../components/tables/ProductTable";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);
  return (
    <div>
      <h2>Products</h2>
      <hr />
      <div className="text-end">
        <Link to="/admin/products/new">
          <Button>Add new product</Button>
        </Link>
      </div>

      <ProductTable />
    </div>
  );
};

export default Products;
