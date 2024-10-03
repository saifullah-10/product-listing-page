import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="mt-5 w-11/12  lg:max-w-screen-xl  mx-auto">
      <div className="flex justify-between">
        <div>
          <Link to={"/"}>
            {" "}
            <p className=" font-poopins text-2xl">Nexbell</p>
          </Link>
        </div>
        <div>
          <NavLink to={"/"}>
            {" "}
            <button className=" px-3 py-1 md:px-5 md:py-2 border rounded-lg lg:rounded-xl border-gray-300">
              Home
            </button>
          </NavLink>
        </div>
      </div>

      <div className=" my-5 md:my-10 items-start  flex md:flex-row flex-col gap-3 md:gap-10">
        <aside className="bg-gray-200 gap-2 rounded-lg p-2 md:p-5 flex  md:flex-col">
          <NavLink
            to={"/dashboard/add-product"}
            className={({ isActive }) =>
              isActive
                ? "bg-white w-full transition-all duration-300 rounded-lg  py-1 px-5"
                : "w-full rounded-lg py-1 px-5"
            }
          >
            Add Product
          </NavLink>
          <NavLink
            to={"/dashboard/updateordelete"}
            className={({ isActive }) =>
              isActive
                ? "bg-white transition-all duration-300 w-full rounded-lg  py-1 px-5"
                : "w-full rounded-lg  py-1 px-5"
            }
          >
            Update/Delete
          </NavLink>
        </aside>
        <div className=" w-full  md:flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
