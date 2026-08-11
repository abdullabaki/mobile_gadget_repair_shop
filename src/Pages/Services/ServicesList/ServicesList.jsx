import "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";
import ServicesCard from "./ServicesCard";

const ServicesList = ({ limit }) => {
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
         <ServicesCard limit={limit} />
         {limit <= 4 && (
            <div className="pb-8">
               <h6 className="pb-4 pt-10">
                  Need help with a different problem?
               </h6>
               <Link to="/services">
                  <button className="btn btn-primary btn-outline rounded-xl py-2 px-6 duration-300 ease-in">
                     View All Technicians <FaArrowRight />
                  </button>
               </Link>
            </div>
         )}
      </div>
   );
};

export default ServicesList;
