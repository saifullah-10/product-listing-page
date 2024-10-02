import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Products from "../pages/Products";
import ProductManagement from "../pages/ProductManagement";

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
      },
    ],
  },
]);
