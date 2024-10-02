import { useEffect } from "react";
import { getProducts } from "../utils/productsApi";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["all-products"],
    queryFn: getProducts,
  });

  if (isFetching || isLoading) {
    return <div>Loading...</div>;
  }
  return <section></section>;
};

export default Products;
