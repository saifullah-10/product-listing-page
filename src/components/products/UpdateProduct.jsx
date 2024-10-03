import { useParams } from "react-router-dom";
import ProductForm from "./ProductForm";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../utils/axiosInstance";
import Loading from "../../assets/loading.gif";
const UpdateProduct = () => {
  const { id } = useParams();

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/products/${id}`);
      return response.data;
    },
  });

  if (isLoading || isFetching) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <img src={Loading} />
      </div>
    );
  }
  return (
    <div>
      <ProductForm type="update" data={data} />
    </div>
  );
};

export default UpdateProduct;
