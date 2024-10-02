import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Products from "../pages/Products";
import ProductManagement from "../pages/ProductManagement";
import AddProduct from "../components/products/AddProduct";
import UpdateOrDelete from "../components/products/UpdateOrDelete";

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
        path: "/product-management",
        element: <ProductManagement />,
        children: [
          {
            path: "/product-management/add",
            element: <AddProduct />,
          },
          {
            path: "/product-management/updateordelete",
            element: <UpdateOrDelete />,
          },
        ],
      },
    ],
  },
]);
