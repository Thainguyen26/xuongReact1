import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductsContext";
import instance from "../../axios";

const Dashboard = () => {
  const { state, dispatch } = useContext(ProductContext);

  const handlerDelete = async (id) => {
    if (window.confirm("Bạn có muốn xóa không ?")) {
      try {
        if (confirm("Bạn có muốn xóa không?")) {
          await instance.delete(`/products/${id}`);
          dispatch({ type: "DELETE_PRODUCT", payload: id });
        }
      } catch (error) {
        console.log("Không thể xóa sản phẩm", error);
      }
    }
  };

  return (
    <div>
      <h1>Hello, admin</h1>
      <Link to="/admin/product-form" className="btn btn-primary">
        Add new product
      </Link>
      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Thumbnail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>{p.description || "Dang cap nhat"}</td>
              <td>
                {p.thumbnail ? (
                  <img src={p.thumbnail} alt="Dang cap nhat" />
                ) : (
                  "Dang cap nhat"
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handlerDelete(p.id)}
                >
                  Delete
                </button>
                <Link
                  to={`/admin/product-form/${p.id}`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
