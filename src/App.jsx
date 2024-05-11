import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Products from "./pages/Products";
import { Home } from "./pages/Home";
import { LayoutOne } from "./layout/LayoutOne";
import { ProductsDetails } from "./pages/ProductsDetails";
import NumberGuessingGame from "./pages/Numbergess";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutOne></LayoutOne>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>,
          loader: async () => {
            return fetch('https://dummyjson.com/products');
          },
        },
        {
          path: '/productsdetails/:id',
          element: <ProductsDetails></ProductsDetails>,
          loader: async ({ params }) => {
            return fetch(`https://dummyjson.com/products/${params.id}`);
          },
        },
        {
          path: '/numbergess',
          element: <NumberGuessingGame></NumberGuessingGame>,
        
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
