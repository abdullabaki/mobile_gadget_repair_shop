import "react";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";

const Home = () => {
   return (
      <div>
         <Hero />
         <Services classname="mx-20" />
         <Footer />
      </div>
   );
};

export default Home;
