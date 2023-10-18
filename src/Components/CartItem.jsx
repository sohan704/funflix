const CartItem = ({ card }) => {
  const { _id, name, image, description } = card;

  console.log(_id);
  
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl my-10">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 40)}</p>
          <div className="card-actions">
            <button className="btn btn-lg btn-circle btn-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;