import { FaStar } from 'react-icons/fa';

const Brandcard = ({ card }) => {
  
  const {image, name, brand, price, rating, description, type} = card;

  return (
    <div>
      <div className="card w-96 mx-auto my-10 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{name}</h2>
          <div className="badge badge-lg badge-primary">{type}</div>
          <p className="text-md text-red-500 font-bold"> {brand.toUpperCase()} </p>
          <p className="text-md font-bold">Price : <span className="text-xl text-red-600">${price}</span></p>
          <div className="text-md text-xl flex font-bold">Rating  : {rating} <div className="flex items-center text-yellow-400"> <FaStar/> </div> </div>
          <div className='text-center'><p>{description.slice(0, 100)}...</p></div>
          <div className="card-actions">
            <button className="btn btn-info">Details</button>
            <button className="btn btn-secondary">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brandcard;