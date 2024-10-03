import { useEffect, useState } from "react";
import useContextData from "../hooks/useContextData";
import { axiosInstance } from "../utils/axiosInstance";
import { Link } from "react-router-dom";

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
  if (!products || loading) {
    return <div>Loading...</div>;
  }
  return (
    <section className=" mt-5 max-w-screen-xl mx-auto ">
      <div className="flex justify-between">
        <div>
          <p>Logo</p>
        </div>
        <div>
          <Link to={"/dashboard/add-product"}>
            {" "}
            <button className=" md:px-3 md:py-2 border rounded-lg lg:rounded-xl border-gray-300">
              Dashboard
            </button>
          </Link>
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
        <div className="flex ">
          <aside>
            <div>
              <h3>Sort</h3>

              <div className=" flex flex-col">
                <label>
                  <input
                    checked={checked === "desc"}
                    type="checkbox"
                    onChange={() => handleCheckBoxChange("desc")}
                  />
                  High To Low
                </label>
                <label>
                  <input
                    checked={checked === "asc"}
                    type="checkbox"
                    onChange={() => handleCheckBoxChange("asc")}
                  />
                  Low To High
                </label>
              </div>
            </div>
          </aside>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Products;
