const CartItem = ({ card,current, setCurrent }) => {
  const { _id, name, image, description } = card;


  const handleDelete = (id) => {
     console.log(id);
     console.log(_id);
     

     fetch(`https://brand-shop-server-eb5wt3ngh-sohan704.vercel.app/cart/${id}`,{

         method:'DELETE'

     }).then(res => res.json()).then(data => {
      console.log(data);
      const remaining = current.filter(card => card._id !== id);
      setCurrent(remaining);
     });

  }

  return (
    <div>
      <div className="card w-96 bg-base-100 mx-auto shadow-xl my-10">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 90)}..</p>
          <div className="card-actions">
            <button onClick={() => {handleDelete(_id)}} className="btn btn-lg btn-circle btn-error">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;