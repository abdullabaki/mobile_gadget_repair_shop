import "react";
import Footer from "../../Components/Footer/Footer";
import ServicesList from "./ServicesList/ServicesList";

const Services = () => {
   return (
      <>
         <div className="pt-20">
            <div
               className="hero h-80"
               style={{
                  backgroundImage:
                     "url(https://images.pexels.com/photos/10699355/pexels-photo-10699355.jpeg)",
               }}
            >
               <div className="hero-overlay"></div>
               <div className="hero-content text-neutral-content text-center h-full w-full flex justify-center align-middle">
                  <h2 className="text-3xl font-bold uppercase">Our Services</h2>
               </div>
            </div>
         </div>
         <ServicesList />
         <Footer />
      </>
   );
};

export default Services;
