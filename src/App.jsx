import React, { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import instance, { getProducts } from "./axios";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/admin/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductForm from "./pages/admin/ProductForm";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="/admin" element={<PrivateRoute />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/product-form" element={<ProductForm />} />
            <Route path="/admin/product-form/:id" element={<ProductForm />} />
          </Route>

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
