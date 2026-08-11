import "react";
import ServicesCard from "./ServicesCard";

const ServicesList = () => {
   return (
      <div className="pt-15 text-center w-7xl mx-auto">
         <div className="pb-10">
            <h5 className="inline bg-[#e4f1f8] text-primary py-2 px-4 text-sm font-bold rounded-3xl">
               OUR EXPERTS
            </h5>
            <h2 className="text-4xl font-bold pt-6 pb-3">
               Meet Our Technicians
            </h2>
            <p className="text-sm text-accent-content">
               Skilled and trusted technicians ready to repair your gadgets with
               care.
            </p>
         </div>
         <ServicesCard />
      </div>
   );
};

export default ServicesList;
