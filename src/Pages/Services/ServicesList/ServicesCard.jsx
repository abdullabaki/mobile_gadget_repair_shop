import { useRef } from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

import { getAllTechnicians } from "../../../Data/Technicians";
import BookTechnicianModal from "./BookTechnicianModal";

const ServicesCard = ({ limit }) => {
   const allTechnicians = getAllTechnicians();

   const technicians = limit ? allTechnicians.slice(0, limit) : allTechnicians;

   const modalRef = useRef(null);

   return (
      <>
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
                     <h2 className="font-bold text-2xl pb-1">
                        {technician.name}
                     </h2>
                     <h6 className="text-sm text-accent-content">
                        {technician.designation}
                     </h6>
                     <div className="flex text-warning py-3 text-sm items-center">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarHalf />
                        <p className="font-semibold text-accent-content pl-1">
                           {technician.rating}
                        </p>
                     </div>
                     <div className="flex justify-between text-xs text-accent-content border-y border-[#eef2f7] py-3 mb-4">
                        <p>📍 {technician.location}</p>
                        <p>🛠 {technician.experience}</p>
                     </div>
                     <div>
                        {technician.state === "Available" ? (
                           <button
                              onClick={() => modalRef.current?.showModal()}
                              className="btn btn-block shadow-lg rounded-xl uppercase btn-primary bg-linear-to-r from-primary to-secondary text-primary-content hover:bg-linear-to-l"
                           >
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
            <BookTechnicianModal
               ref={modalRef}
               technicianName={technicians[0]?.name}
            />
         </div>
      </>
   );
};

export default ServicesCard;
