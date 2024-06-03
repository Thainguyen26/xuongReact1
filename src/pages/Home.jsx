import React from "react";
import Button from "../components/Button";
import ProductsItem from "../components/ProductsItem";

function Home({ data }) {
  return (
    <>
      <h1>Danh sach san pham</h1>
      <div className="row">
        {data.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ProductsItem data={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
