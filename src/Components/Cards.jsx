import Card from "./Card";

const Cards = ({ cards }) => {


  return (
    <div>
      <div className="text-4xl lg:text-6xl text-center my-10 lg:my-20">
        Weekend <span className="text-red-500 text-center font-semibold">Fun</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 mx-auto w-11/12">
        {
          cards.map(card => <Card key={card.id} card={card}></Card>)
        }
      </div>
    </div>
  );
};

export default Cards;