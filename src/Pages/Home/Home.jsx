import "react";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import WorkFlow from "../../Components/WorkFlow/WorkFlow";
import ServicesList from "../Services/ServicesList/ServicesList";

const Home = () => {
   return (
      <div className="pt-20">
         <Hero />
         <WorkFlow />
         <ServicesList limit={4}/>
         <Footer />
      </div>
   );
};

export default Home;
