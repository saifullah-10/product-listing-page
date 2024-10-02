import { Link, Outlet } from "react-router-dom";

const ProductManagement = () => {
  return (
    <section className="mt-5 max-w-screen-xl mx-auto">
      <div className="flex justify-between">
        <div>
          <p>Logo</p>
        </div>
        <div>
          <Link to={"/"}>
            {" "}
            <button className=" md:px-3 md:py-2 border rounded-lg lg:rounded-xl border-gray-300">
              Home
            </button>
          </Link>
        </div>
      </div>

      <div className=" flex">
        <aside className=" flex flex-col">
          <Link to={"/product-management/add"}>
            <button>Add Product</button>
          </Link>
          <Link to={"/product-management/updateordelete"}>
            <button>Update/Delete</button>
          </Link>
        </aside>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};

export default ProductManagement;
