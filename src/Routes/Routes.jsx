import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AddProducts from "../Pages/AddProducts";
import MyCart from "../Pages/MyCart";
import Error from "../Pages/Error";
import BrandDetails from "../Pages/BrandDetails";


  
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
        },
        {
          path:'/product/:brand',
          element:<BrandDetails></BrandDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.brand}`)
        },
        {
          
        }
      ]

    }
   ])
    


export default routes;