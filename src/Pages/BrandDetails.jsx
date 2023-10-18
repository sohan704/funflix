import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";


const BrandDetails = () => {

  const brandData = useLoaderData();
  // console.log(brandData);
 
  const [current, setCurrent] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Brands.json');
        const data = await response.json();
        setCurrent(data);
        console.log(data);
        console.log(brandData[0]?.brand);

        const item = data.find(item => item.name.toLowerCase() === brandData[0]?.brand?.toLowerCase())
        console.log(item);
        setCurrent(item);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  console.log(current);



  return (
    <div>
      <Navbar></Navbar>
      <div className="w-full lg:w-10/12 mx-auto">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={current ? current?.pic1 : `https://i.ibb.co/mNJtmcS/taylorswift.jpg`} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={current ? current?.pic2 : `https://i.ibb.co/Pwts7z2/dolores-oriordan-188073.jpg`} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={current ? current?.pic3 : `https://i.ibb.co/qnDVWgF/zimmer.jpg`} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={current ? current?.pic4 : `https://i.ibb.co/rwYFtjm/ed-sheeran-siriusxm-studios-013123-2-e9bb7a1bd9744a8aac518ca4faa30490.jpg`} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
      {
        
      }
    </div>
  );
};

export default BrandDetails;