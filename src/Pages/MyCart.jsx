
import Navbar from "../Components/Navbar";
import CartItem from "../Components/CartItem";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyCart = () => {
  
  // const cartData = useLoaderData();
  // console.log(cartData);
  const {user} = useContext(AuthContext);
  // console.log(user.email);

  const [current, setCurrent] = useState('');

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Define the email
    // You can get this value from user input or state

    fetch(`https://brand-shop-server-eb5wt3ngh-sohan704.vercel.app/cart?email=${user.email}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data); // all product data;
        setCurrent(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  console.log(userData);
  return (
    <div>
        <Navbar></Navbar>
        <div className="text-center my-10 lg:my-20 text-4xl lg:text-6xl">
           My<span className="text-red-500 font-semibold"> Cart</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-10/12 mx-auto">
          {
           current && current?.map(card => <CartItem key={card._id} current={current} setCurrent={setCurrent} card={card} ></CartItem>)
          }
        </div>
        
    </div>
  );
};

export default MyCart;