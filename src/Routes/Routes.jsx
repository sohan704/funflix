import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AddProducts from "../Pages/AddProducts";
import MyCart from "../Pages/MyCart";


  
   const routes = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
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