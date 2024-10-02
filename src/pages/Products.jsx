import { useEffect, useState } from "react";
import useContextData from "../hooks/useContextData";

const Products = () => {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const { allProducts } = useContextData();
  //Implement search functionality in the frontend according to the requirement
  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchValue(search);
    const filteredData = products?.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
    setProducts(filteredData);
  };
  useEffect(() => {
    setProducts(allProducts?.products);
  }, []);
  console.log(products);
  if (!products) {
    return <div>Loading...</div>;
  }
  return (
    <section className=" mt-5 max-w-screen-xl mx-auto ">
      <div className="flex justify-between">
        <div>
          <p>Logo</p>
        </div>
        <div>
          <button className=" md:px-3 md:py-2 border rounded-lg lg:rounded-xl border-gray-300">
            Product Management
          </button>
        </div>
      </div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Search...."
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Products;
