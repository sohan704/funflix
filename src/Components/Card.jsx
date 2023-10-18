import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {

  const {name, image} = card;
  
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(name.toLowerCase());
    navigate(`/product/${name.toLowerCase()}`);
  }

  return (
    <div>
      <div onClick={handleClick} className="card card-compact w-9/12 mx-auto bg-base-100 shadow-xl">
        <figure><img className="w-[380px] h-[180px] object-cover" src={image} alt="Shoes" /></figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;