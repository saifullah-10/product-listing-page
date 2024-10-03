import { useEffect, useState } from "react";
import useContextData from "../hooks/useContextData";
import { axiosInstance } from "../utils/axiosInstance";
import { Link } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";
import Loading from "../assets/loading.gif";
const Products = () => {
  const [searchValue, setSearchValue] = useState("");
  const [checked, setChecked] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { allProducts } = useContextData();
  //Implement search functionality in the frontend according to the requirement
  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchValue(search);
    if (!search) {
      setChecked("");
      return setProducts(allProducts?.products);
    }
    const filteredData = products?.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
    setProducts(filteredData);
  };

  // sort functionality from backend
  const handleCheckBoxChange = (value) => {
    if (checked === value) {
      setChecked("");
      setProducts(allProducts?.products);
    } else {
      setChecked(value);
    }
  };

  useEffect(() => {
    if (!checked) return;
    const sortData = async (checked) => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `/products?sortBy=price&order=${checked}`
        );
        const data = response.data.products;

        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    sortData(checked);
  }, [checked]);
  //set all product to the array
  useEffect(() => {
    setProducts(allProducts?.products);
  }, [allProducts]);
  console.log(products);
  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <img src={Loading} />
      </div>
    );
  }
  console.log(products);
  return (
    <section className="mt-5 w-11/12 font-poopins lg:max-w-screen-xl  mx-auto">
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
        </div>
      </div>
      <div>
        <div className=" mb-5 flex justify-center">
          <input
            type="text"
            placeholder="Search...."
            value={searchValue}
            onChange={handleSearch}
            className=" bg-gray-200 outline-none border border-gray-300 px-3 w-96 rounded-full py-2"
          />
        </div>
        <div className="md:flex gap-5 items-start ">
          <aside className="border mb-5 md:mb-0 p-3 rounded-xl">
            <h3>Sort</h3>

            <div className=" flex flex-col">
              <label className=" flex gap-2 whitespace-nowrap">
                <input
                  checked={checked === "desc"}
                  type="checkbox"
                  onChange={() => handleCheckBoxChange("desc")}
                />
                High To Low
              </label>
              <label className=" flex gap-2 whitespace-nowrap">
                <input
                  checked={checked === "asc"}
                  type="checkbox"
                  onChange={() => handleCheckBoxChange("asc")}
                />
                Low To High
              </label>
            </div>
          </aside>
          <div className="grid lg:gap-8 md:gap-5 gap-3 grid-cols-12 w-full justify-items-center">
            {products?.length === 0 ? (
              <p className="col-span-12">No products found</p>
            ) : (
              products?.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
