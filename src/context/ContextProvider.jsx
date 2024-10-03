import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { getProducts } from "../utils/productsApi";
import PropTypes from "prop-types";
import Loading from "../assets/loading.gif";

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
    return (
      <div className=" flex justify-center items-center h-screen">
        <img src={Loading} />
      </div>
    );
  }

  return (
    <Context.Provider value={{ allProducts }}>{children}</Context.Provider>
  );
};

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
