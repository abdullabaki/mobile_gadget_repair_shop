import "react";
import Hero from "./Hero/Hero";
import WorkFlow from "./WorkFlow/WorkFlow";
import ServicesList from "../Services/ServicesList/ServicesList";

const Home = () => {
   return (
      <div className="pt-20">
         <Hero />
         <WorkFlow />
         <ServicesList limit={4} />
      </div>
   );
};

export default Home;
