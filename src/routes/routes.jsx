import { createBrowserRouter } from "react-router-dom";
import { LayoutBase } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      {
        index: true,
        element: <h2>Home</h2>,
      },
      {
        path: "/products",
        element: <h2>Productos</h2>,
      },
      {
        path: "/products/id",
        element: <h2>Producto-id</h2>,
      },
    ],
  },
]);
