import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import swal from 'sweetalert';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const SingleProduct = () => {

  const product = useLoaderData();
  console.log(product);
  const { _id, image, name, type, description } = product;

  const {user} = useContext(AuthContext);
  // console.log(user.email);
  // console.log(image);

  const productTobeSent = {
    myId : _id,
    image: image,
    name:name,
    email: user.email,
    type: type,
    description: description,
  }

  console.log(productTobeSent);


  
  const handleAddToCart = () => {
    console.log('clicked handle add to cart');
    fetch('https://brand-shop-server-eb5wt3ngh-sohan704.vercel.app/cart',{
      method:'POST',
      headers: {
       'content-type' : 'application/json'
      },
      body: JSON.stringify(productTobeSent)
    }).then(res => res.json())
    .then(data => {

      console.log(data);
      swal("Added to Cart!", "Good Job!", "success");

    })
  }

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{name}</h1>
              <div className="badge badge-lg my-5 badge-primary">{type}</div>
              <p className="py-6">{description}</p>
              <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;