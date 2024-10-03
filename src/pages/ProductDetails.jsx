import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { CiStar } from "react-icons/ci";
import Loading from "../assets/loading.gif";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["datadetails", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/products/${id}`);
      return response.data;
    },
  });
  console.log(data);

  const discountPrice = (
    data?.price -
    (data?.price * data?.discountPercentage) / 100
  ).toFixed(2);

  if (isLoading || isFetching) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <img src={Loading} />
      </div>
    );
  }
  return (
    <section className=" mt-5 w-11/12 font-poopins lg:max-w-screen-xl  mx-auto">
      <div className="flex mb-5 justify-between">
        <div>
          <Link to={"/"}>
            {" "}
            <p className=" text-2xl">Nexbell</p>
          </Link>
        </div>
        <div>
          <Link to={"/dashboard/add-product"}>
            {" "}
            <button className=" px-3 py-1 md:px-5 md:py-2 border rounded-lg lg:rounded-xl border-gray-300">
              Dashboard
            </button>
          </Link>
          <Link to={"/"}>
            {" "}
            <button className=" px-3 py-1 md:px-5 md:py-2 border rounded-lg lg:rounded-xl border-gray-300">
              Home
            </button>
          </Link>
        </div>
      </div>
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img className="w-full" src={data?.images[0]} alt="product image" />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              {data?.title}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                {data?.discountPercentage ? (
                  <>
                    <div className=" flex gap-2">
                      <del className=" font-light text-xl">${data?.price}</del>$
                      {discountPrice}
                    </div>
                  </>
                ) : (
                  data?.price
                )}
              </p>
              <div>Discount {data?.discountPercentage}%</div>
            </div>
            <div className="flex my-5 items-center gap-2 mt-2 ">
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>
              <p className="text-sm font-medium leading-none text-gray-500 ">
                ({data?.rating})
              </p>
            </div>
            <div className="">
              {" "}
              <p className=" font-light">
                {" "}
                <span className=" font-medium">Stock:</span>{" "}
                {data?.stock === 0 ? "Out Of Stock" : `${data?.stock} pcs`}
              </p>
            </div>
            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <a
                href="#"
                title=""
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 "
                role="button"
              >
                <svg
                  className="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
                Add to favorites
              </a>

              <a
                href="#"
                title=""
                className="mt-4 sm:mt-0 bg-primary-700 border hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5  flex items-center justify-center"
                role="button"
              >
                <svg
                  className="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Add to cart
              </a>
            </div>

            <hr className="my-6 md:my-8 border-gray-800" />

            <p className="mb-6 text-gray-500 dark:text-gray-400">
              {data?.description}
            </p>
          </div>
        </div>
        <div>
          <hr className=" border-gray-800" />
          <div>
            <div>
              <p className=" text-center md:text-xl">Details</p>
            </div>
            <hr className=" border-gray-800 md:mb-5 mb-3" />
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">
                    Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">
                    Info
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Brand</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data?.brand || "No-Brand"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Warranty</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data?.warrantyInformation || "No-Warranty"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Shipping Information
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data?.shippingInformation || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Minimum Order Quantity
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data?.minimumOrderQuantity || 1}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Return Policy
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data?.returnPolicy || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Dimensions
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    width: {data?.dimensions.width}, height:{" "}
                    {data?.dimensions.height}, depth: {data?.dimensions.depth}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <hr className=" border-gray-800 md:mt-5 mt-3" />
            <div>
              <p className=" text-center md:text-xl">Reviews</p>
            </div>
            <hr className=" border-gray-800 md:mb-5 mb-3" />

            <div className="flex flex-col mb-8 gap-3">
              {data?.reviews.map((review) => {
                const isoDate = review?.date;
                const normalDate = new Date(isoDate).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour12: true,
                });

                return (
                  <>
                    <div className=" border p-2 rounded-xl">
                      <div className="flex items-center gap-2">
                        <div>
                          <p className="font-semibold flex items-center text-sm">
                            {review.reviewerName}{" "}
                            <span className="text-gray-500 flex items-center ">
                              ( <CiStar className=" text-lg" /> {review.rating}{" "}
                              )
                            </span>
                          </p>
                          <p className="text-gray-600">{review.comment}</p>
                          <p className="text-gray-600">{normalDate}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
