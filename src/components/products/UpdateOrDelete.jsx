import { Link } from "react-router-dom";
import useContextData from "../../hooks/useContextData";
import { axiosInstance } from "../../utils/axiosInstance";
import Swal from "sweetalert2";

const UpdateOrDelete = () => {
  const { allProducts } = useContextData();

  const data = allProducts?.products;

  const deleteProduct = async (id) => {
    try {
      const response = await axiosInstance.delete(`/products/${id}`);
      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Delete Product",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!data) {
    return (
      <>
        <p>Loading...update</p>
      </>
    );
  }

  return (
    <>
      {" "}
      <div className=" font-poppins">
        <div className=" mb-3  border-b-2 pb-2 font-semibold md:text-2xl text-xl ">
          <h2>Update / Delete</h2>
        </div>
        <div className=" font-extralight relative w-full h-96 overflow-x-auto">
          <table className="min-w-full whitespace-nowrap absolute top-0 left-0  table-auto bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600">
                <th className="py-2 px-4 border">Product Id</th>
                <th className="py-2 px-4 border">Product Name</th>
                <th className="py-2 px-4 border">Price</th>
                <th className="py-2 px-4 border">Quantity</th>
                <th className="py-2 px-4 border text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((product) => (
                <>
                  <tr key={product.id} className="text-gray-700">
                    <td className="py-2 px-4 border">{product.id}</td>
                    <td className="py-2 px-4 border">{product.title}</td>
                    <td className="py-2 px-4 border">$ {product.price}</td>
                    <td className="py-2 px-4 border">{product.stock}</td>
                    <td className="py-2 px-4 border flex justify-center gap-2">
                      <Link
                        to={`/dashboard/updateordelete/update/${product.id}`}
                      >
                        <button className=" px-3 py-1 bg-blue-300 rounded-lg text-black">
                          Update
                        </button>
                      </Link>

                      <button
                        onClick={() => deleteProduct(product?.id)}
                        className="px-3 py-1 font-light bg-red-500 rounded-lg text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div>
        <UpdateProduct
          type="update"
          isOpen={isModalOpen}
          onClose={closeModal}
          productId={selectedProductId}
        />
      </div> */}
    </>
  );
};

export default UpdateOrDelete;
