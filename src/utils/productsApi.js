import { axiosInstance } from "./axiosInstance";

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
  } catch (err) {
    console.log("error fetching data", err);
  }
};

export const addProduct = async (data) => {
  try {
    const response = await axiosInstance.post("/products/add", data);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = async (data, id) => {
  try {
    const response = await axiosInstance.put(`/products/${id}`, data);
    return response;
  } catch (err) {
    console.log(err);
  }
};
