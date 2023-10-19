import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AddProducts from "../Pages/AddProducts";
import MyCart from "../Pages/MyCart";
import Error from "../Pages/Error";
import BrandDetails from "../Pages/BrandDetails";
import SingleProduct from "../Pages/SingleProduct";
import BrandDetailsRoot from "../Pages/BrandDetailsRoot";
import Update from "../Pages/Update";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";



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
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute> ,
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
            element: <PrivateRoute><SingleProduct></SingleProduct></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/product/${params.brand}/${params.id}`)
          },
          {
            path: 'update/:id', 
            element: <PrivateRoute><Update></Update></PrivateRoute> ,
            loader: ({ params }) => fetch(`http://localhost:5000/product/${params.brand}/update/${params.id}`)
          }
        ]
      },
     

    ]

  }
])



export default routes;