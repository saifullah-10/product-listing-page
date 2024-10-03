import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="mt-5 max-w-screen-xl mx-auto">
      <div className="flex justify-between">
        <div>
          <p>Logo</p>
        </div>
        <div>
          <NavLink to={"/"}>
            {" "}
            <button className=" md:px-3 md:py-2 border rounded-lg lg:rounded-xl border-gray-300">
              Home
            </button>
          </NavLink>
        </div>
      </div>

      <div className=" mb-10 items-start  flex gap-10">
        <aside className="bg-gray-200 h-96 gap-2 rounded-lg  p-5 flex flex-col">
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
        <div className="  flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
