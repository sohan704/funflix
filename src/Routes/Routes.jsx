import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AddProducts from "../Pages/AddProducts";
import MyCart from "../Pages/MyCart";
import Error from "../Pages/Error";


  
   const routes = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      errorElement: <Error></Error> ,
      children: [
        {
          path:'/',
          element: <Home></Home>,
          loader: () => fetch('/Brands.json'),
        },
        {
          path:'/addproducts',
          element:<AddProducts></AddProducts>
        },
        {
          path:'/mycart',
          element:<MyCart></MyCart>
        }
      ]

    }
   ])
    


export default routes;