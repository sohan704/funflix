import { useEffect, useState } from "react";
import Brandcard from "./Brandcard";

const Brandcards = ({brandData}) => {
  
  const totalData = brandData.length;
  const [isZero, setIsZero] = useState('');
  useEffect(()=>{
    setIsZero(!totalData);
  },[])

  return (
    <div className="w-full lg:w-11/12 mx-auto">
      <div className="my-10 text-center font-semibold text-6xl">
        {
           
           brandData[0] && <p><span className="text-red-500">{brandData[0]?.brand.toUpperCase()}</span> Products</p>
        }
        
      </div>
        
        <div>
          {
            isZero && <div className="text-6xl my-20 text-center font-semibold"><p className="text-red-500">Sorry!! No Product!!</p></div>
          }
        </div>
     
     
       <div className="grid grid-cols-1 lg:grid-cols-2">
        {
          brandData?.map(card => <Brandcard key={card._id} card={card} ></Brandcard>)
        }
       </div>
    </div>
  );
};

export default Brandcards;