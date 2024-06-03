import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import instance, { getProducts } from "./axios";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/ProductForm";
import Register from "./pages/Register";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/products");
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSubmitForm = (data) => {
    (async () => {
      try {
        if (data.id) {
          // edit product
          await instance.patch(`/products/${data.id}`, data);
          const newData = await getProducts();
          setProducts(newData);
        } else {
          //  add product
          const res = await instance.post("/products", data);
          setProducts([...products, res.data]);
        }
        if (confirm("Thành công, chuyển hướng sang Admin")) {
          navigate("/admin");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  // delete
  const Remove = (id) => {
    console.log(id);
    (async () => {
      try {
        if (confirm("Bạn có muốn xóa không?")) {
          await instance.delete(`/products/${id}`);
          const newData = products.filter((item) => item.id !== id && item);
          setProducts(newData);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home data={products} />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/admin"
            element={<Dashboard data={products} remove={Remove} />}
          />
          {/* <Route
            path="/admin/product-add"
            element={<Dashboard data={products} />}
          /> */}
          <Route
            path="/admin/product-form"
            element={<ProductForm onProduct={handleSubmitForm} />}
          />
          <Route
            path="/admin/product-form/:id"
            element={<ProductForm onProduct={handleSubmitForm} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
