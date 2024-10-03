import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Products from "../pages/Products";
import Dashboard from "../pages/Dashboard";
import AddProduct from "../components/products/AddProduct";
import UpdateOrDelete from "../components/products/UpdateOrDelete";
import UpdateProduct from "../components/products/UpdateProduct";
import ProductDetails from "../pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/add-product",
            element: <AddProduct />,
          },
          {
            path: "/dashboard/updateordelete",
            element: <UpdateOrDelete />,
          },
          {
            path: "/dashboard/updateordelete/update/:id",
            element: <UpdateProduct />,
          },
        ],
      },
    ],
  },
]);
