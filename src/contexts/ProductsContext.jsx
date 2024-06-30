import { createContext, useEffect, useReducer } from "react";
import instance from "../axios";
import productReducer from "./../reducer/ProductReducer";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [state, dispatch] = useReducer(productReducer, { products: [] });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/products");
        dispatch({ type: "SET_PRODUCTS", payload: data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
