import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AddProducts from "../Pages/AddProducts";
import MyCart from "../Pages/MyCart";
import Error from "../Pages/Error";
import BrandDetails from "../Pages/BrandDetails";
import SingleProduct from "../Pages/SingleProduct";
import BrandDetailsRoot from "../Pages/BrandDetailsRoot";



const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/Brands.json'),
      },
      {
        path: '/addproducts',
        element: <AddProducts></AddProducts>
      },
      {
        path: '/mycart',
        element: <MyCart></MyCart>,
        loader: () => fetch('http://localhost:5000/cart')
      },
      {
        path: '/product/:brand',
        element: <BrandDetailsRoot></BrandDetailsRoot>,
        children: [
          {
            path: '',
            element: <BrandDetails></BrandDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/product/${params.brand}`),
          },
          {
            path: ':id',
            element: <SingleProduct></SingleProduct>,
            loader: ({ params }) => fetch(`http://localhost:5000/product/${params.brand}/${params.id}`)
          }
        ]
      }

    ]

  }
])



export default routes;