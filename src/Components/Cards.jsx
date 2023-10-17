import Card from "./Card";

const Cards = ({cards}) => {
  

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 mx-auto w-11/12">
       {
        cards.map(card => <Card card={card}></Card>)
       }
    </div>
  );
};

export default Cards;