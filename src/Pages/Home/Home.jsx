import "react";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import WorkFlow from "../../Components/WorkFlow/WorkFlow";

const Home = () => {
   return (
      <div className="pt-20">
         <Hero />
         <WorkFlow />
         <Footer />
      </div>
   );
};

export default Home;
