import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
 

const Home = () => {
  
  const cards = useLoaderData();

  return (
    <div>
       <Navbar></Navbar>
       <Banner></Banner>
       <Cards cards={cards}></Cards>
       <Footer></Footer>
    </div>
  );
};

export default Home;