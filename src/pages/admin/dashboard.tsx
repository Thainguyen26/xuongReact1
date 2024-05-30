import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Hello, admin</h1>
      <Link to="/admin/product-add" className="btn btn-primary">
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
          {data.map((p) => (
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
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-warning">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
