import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import CartItem from "../Components/CartItem";

const MyCart = () => {
  
  const cartData = useLoaderData();
  console.log(cartData);

  return (
    <div>
        <Navbar></Navbar>
        <div className="text-center my-20 text-6xl">
           My<span className="text-red-500 font-semibold"> Cart</span>
        </div>
        <div className="grid grid-cols-2 w-10/12 mx-auto">
          {
            cartData.map(card => <CartItem key={card._id} card={card} ></CartItem>)
          }
        </div>
        
    </div>
  );
};

export default MyCart;