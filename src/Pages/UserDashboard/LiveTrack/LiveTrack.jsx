import "react";
import { TbLiveView } from "react-icons/tb";

const LiveTrack = () => {
   return (
      <div className="w-full p-7">
         <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
               <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                     <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10 title-font font-medium text-sm">
                     1
                  </div>
                  <div className="grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                     <div className="shrink-0 w-24 h-24 bg-indigo-100 text-primary rounded-full inline-flex items-center justify-center">
                        <TbLiveView />
                     </div>
                     <div className="grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                           Accepted
                        </h2>
                        <p className="leading-relaxed">-Pickup requested.</p>
                     </div>
                  </div>
               </div>
               <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                     <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10 title-font font-medium text-sm">
                     2
                  </div>
                  <div className="grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                     <div className="shrink-0 w-24 h-24 bg-indigo-100 text-primary rounded-full inline-flex items-center justify-center">
                        <TbLiveView />
                     </div>
                     <div className="grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                           Picked
                        </h2>
                        <p className="leading-relaxed">
                           -Riceived at pickup hub
                        </p>
                     </div>
                  </div>
               </div>
               <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                     <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10 title-font font-medium text-sm">
                     3
                  </div>
                  <div className="grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                     <div className="shrink-0 w-24 h-24 bg-indigo-100 text-primary rounded-full inline-flex items-center justify-center">
                        <TbLiveView />
                     </div>
                     <div className="grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                           Handover to technician
                        </h2>
                        <p className="leading-relaxed">-Assigned to delivery</p>
                     </div>
                  </div>
               </div>
               <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                     <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10 title-font font-medium text-sm">
                     4
                  </div>
                  <div className="grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                     <div className="shrink-0 w-24 h-24 bg-indigo-100 text-primary rounded-full inline-flex items-center justify-center">
                        <TbLiveView />
                     </div>
                     <div className="grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                           Working
                        </h2>
                        <p className="leading-relaxed">-Work on it</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default LiveTrack;
