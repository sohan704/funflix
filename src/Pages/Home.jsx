import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Download from "../Components/Download";
import KidsShow from "../Components/KidsShow";

import Billing from "../Components/Billing";
 

const Home = () => {
  
  const cards = useLoaderData();

  return (
    <div>
       <Navbar></Navbar>
       <Banner></Banner>
       <Cards cards={cards}></Cards>
       <Download></Download>
       <KidsShow></KidsShow>
       <Billing></Billing>
       <Footer></Footer>
    </div>
  );
};

export default Home;