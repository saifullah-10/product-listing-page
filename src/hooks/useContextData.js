import { useContext } from "react";
import { Context } from "../context/ContextProvider";

const useContextData = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useContextData must be used within a ContextProvider");
  }

  return context;
};

export default useContextData;
