const Card = ({ card }) => {

  const {name, image} = card;
  return (
    <div>
      <div className="card card-compact w-9/12 mx-auto bg-base-100 shadow-xl">
        <figure><img className="w-[380px] h-[180px] object-cover" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;