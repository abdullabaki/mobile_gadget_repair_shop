import "react";
import HeroImg from "../../assets/Images/hero_img.png";

const Hero = () => {
   return (
      <div>
         <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <img
                  src={HeroImg}
                  className="max-w-sm rounded-lg shadow-2xl"
               />
               <div>
                  <h1 className="text-5xl font-bold">Book Professional Technicians Instantly</h1>
                  <p className="py-6">
                     Register, book services, track jobs, chat with technicians, receive invoices and manage everything from one dashboard.
                  </p>
                  <button className="btn btn-primary">Book Service</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
