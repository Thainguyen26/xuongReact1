import React, { useContext } from "react";
import ProductsItem from "../components/ProductsItem";
import { ProductContext } from "./../contexts/ProductsContext";

function Home() {
  const { state } = useContext(ProductContext);
  return (
    <>
      <h1>Danh sach san pham</h1>
      <div className="row">
        {state.products.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <ProductsItem data={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
