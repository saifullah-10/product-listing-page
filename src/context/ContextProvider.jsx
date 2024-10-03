import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { getProducts } from "../utils/productsApi";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const {
    data: allProducts,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ["all-products"],
    queryFn: getProducts,
  });

  if (isFetching || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Context.Provider value={{ allProducts }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
