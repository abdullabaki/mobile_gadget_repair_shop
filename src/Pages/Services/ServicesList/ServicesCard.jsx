import "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

import { getAllTechnicians } from "../../../Data/Technicians";

const ServicesCard = ({ limit }) => {
   const allTechnicians = getAllTechnicians();

   const technicians = limit ? allTechnicians.slice(0, limit) : allTechnicians;

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
         {technicians.map((technician) => (
            <div
               key={technician.id}
               className="services_card border-2 border-[#eef2f7] rounded-3xl shadow-xl hover:shadow-xl/30 overflow-hidden duration-300 ease-in"
            >
               <div className="h-70 w-full overflow-hidden relative">
                  <img src={technician.img} alt="" />
                  <div className="absolute top-4 right-4">
                     {technician.state === "Available" ? (
                        <p className="text-success inline glass px-4 py-1 rounded-3xl text-xs font-semibold">
                           ● {technician.state}
                        </p>
                     ) : (
                        <p className="text-error inline glass px-4 py-1 rounded-3xl text-xs font-semibold">
                           ● {technician.state}
                        </p>
                     )}
                  </div>
               </div>
               <div className="bg-white h-full text-left p-5">
                  <h2 className="font-bold text-2xl pb-1">{technician.name}</h2>
                  <h6 className="text-sm text-accent-content">
                     {technician.position}
                  </h6>
                  <div className="flex text-warning py-3 text-sm my-auto">
                     <IoIosStar />
                     <IoIosStar />
                     <IoIosStar />
                     <IoIosStar />
                     <IoIosStarHalf />
                     {/* <p className="font-bold text-accent-content pl-2">4.5</p> */}
                  </div>
                  <div className="flex justify-between text-xs text-accent-content border-y border-[#eef2f7] py-3 mb-4">
                     <p>📍 {technician.location}</p>
                     <p>🛠 {technician.experience}</p>
                  </div>
                  <div>
                     {technician.state === "Available" ? (
                        <button className="btn btn-block shadow-lg rounded-xl uppercase btn-primary bg-linear-to-r from-primary to-secondary text-primary-content hover:bg-linear-to-l">
                           Book Technician
                        </button>
                     ) : (
                        <button
                           disabled
                           className="btn btn-block shadow-lg rounded-xl uppercase text-accent-content cursor-none"
                        >
                           Book Technician
                        </button>
                     )}
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default ServicesCard;
