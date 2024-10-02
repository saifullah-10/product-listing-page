import { useEffect } from "react";
import { getProducts } from "../utils/productsApi";

const Products = () => {
  useEffect(() => {
    const getProduct = async () => {
      const data = await getProducts();
      console.log(data.products);
    };
    getProduct();
  }, []);
  return <section></section>;
};

export default Products;
