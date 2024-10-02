import { axiosInstance } from "./axiosInstance";

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
  } catch (err) {
    console.log("error fetching data");
  }
};
