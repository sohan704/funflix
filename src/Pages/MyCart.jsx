import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import CartItem from "../Components/CartItem";
import { useState } from "react";

const MyCart = () => {
  
  const cartData = useLoaderData();
  console.log(cartData);

  const [current, setCurrent] = useState(cartData);

  return (
    <div>
        <Navbar></Navbar>
        <div className="text-center my-10 lg:my-20 text-4xl lg:text-6xl">
           My<span className="text-red-500 font-semibold"> Cart</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-10/12 mx-auto">
          {
            current.map(card => <CartItem key={card._id} current={current} setCurrent={setCurrent} card={card} ></CartItem>)
          }
        </div>
        
    </div>
  );
};

export default MyCart;