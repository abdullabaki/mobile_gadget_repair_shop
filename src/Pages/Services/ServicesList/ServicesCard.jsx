import "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { Link } from "react-router";

const ServicesCard = () => {
   return (
      <div className="flex justify-between gap-6">
         <div className="services_card border-2 border-[#eef2f7] rounded-3xl shadow-xl hover:shadow-xl/30 overflow-hidden">
            <div className="h-70 w-full overflow-hidden relative">
               <img
                  src="https://i.shgcdn.com/d72c7202-9d2a-406d-a764-ed8d8c4b312b/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                  alt=""
               />
               <div className="absolute top-4 right-4">
                <p className="text-success inline glass px-4 py-1 rounded-3xl text-xs font-semibold">● Available</p>
               </div>
            </div>
            <div className="bg-white h-full text-left p-5">
               <h2 className="font-bold text-2xl pb-1">Arif Hasan</h2>
               <h6 className="text-sm text-accent-content">
                  Mobile Repair Specialist
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
                  <p>📍 Chattogram</p>
                  <p>🛠 4+ Years</p>
               </div>
               <Link className="">
                  <button className="btn btn-block shadow-lg rounded-xl uppercase btn-primary bg-linear-to-r from-primary to-secondary text-primary-content hover:bg-linear-to-l">Book Technician</button>
               </Link>
            </div>
         </div>
         <div>
            <div>
               <img
                  src="https://i.shgcdn.com/d72c7202-9d2a-406d-a764-ed8d8c4b312b/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                  alt=""
               />
            </div>
            <div>
               <h2>Arif Hasan</h2>
               <h6>Mobile Repair Specialist</h6>
               <p>Rating- 4.5</p>
               <div>
                  <p>location</p>
                  <p>Exprarince</p>
               </div>
               <Link>
                  <button>Book Technician</button>
               </Link>
            </div>
         </div>
         <div>
            <div>
               <img
                  src="https://i.shgcdn.com/d72c7202-9d2a-406d-a764-ed8d8c4b312b/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                  alt=""
               />
            </div>
            <div>
               <h2>Arif Hasan</h2>
               <h6>Mobile Repair Specialist</h6>
               <p>Rating- 4.5</p>
               <div>
                  <p>location</p>
                  <p>Exprarince</p>
               </div>
               <Link>
                  <button>Book Technician</button>
               </Link>
            </div>
         </div>
         <div>
            <div>
               <img
                  src="https://i.shgcdn.com/d72c7202-9d2a-406d-a764-ed8d8c4b312b/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                  alt=""
               />
            </div>
            <div>
               <h2>Arif Hasan</h2>
               <h6>Mobile Repair Specialist</h6>
               <p>Rating- 4.5</p>
               <div>
                  <p>location</p>
                  <p>Exprarince</p>
               </div>
               <Link>
                  <button>Book Technician</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ServicesCard;
