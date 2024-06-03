import axios from "axios";

const instance = axios.create({
  baseURL: "https://hoangnm-json.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async () => {
  try {
    const data = await instance.get("/products");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default instance;
