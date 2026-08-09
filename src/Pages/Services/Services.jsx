import "react";
import Footer from "../../Components/Footer/Footer";
import PhoneImg from "../../assets/Images/phone_repair.png";

const Services = () => {
   return (
      <>
         <div className="pt-30 pb-10">
            <h2 className="text-4xl font-extrabold text-center mb-8 text-primary">
               Our Services
            </h2>
            <div className="grid grid-flow-col grid-rows-2 gap-6 justify-center items-center m-auto">
               <div className="card bg-base-100 w-80 shadow-sm">
                  <figure>
                     <img src={PhoneImg} alt="Phone Repair" className="w-fit" />
                  </figure>
                  <div className="card-body">
                     <h2 className="card-title">
                        Mobile Repair
                        <div className="badge badge-secondary">NEW</div>
                     </h2>
                     <p>
                        Register, book services, track jobs, chat with
                        technicians, receive invoices...
                     </p>
                     <div className="card-actions justify-end">
                        <div className="badge badge-outline">Technicians</div>
                        <div className="badge badge-outline">Details</div>
                     </div>
                  </div>
               </div>
               <div className="card bg-base-100 w-80 shadow-sm">
                  <figure>
                     <img src={PhoneImg} alt="Phone Repair" className="w-fit" />
                  </figure>
                  <div className="card-body">
                     <h2 className="card-title">
                        Laptop Repair
                        <div className="badge badge-secondary">NEW</div>
                     </h2>
                     <p>
                        Register, book services, track jobs, chat with
                        technicians, receive invoices...
                     </p>
                     <div className="card-actions justify-end">
                        <div className="badge badge-outline">Technicians</div>
                        <div className="badge badge-outline">Details</div>
                     </div>
                  </div>
               </div>
               <div className="card bg-base-100 w-80 shadow-sm">
                  <figure>
                     <img src={PhoneImg} alt="Phone Repair" className="w-fit" />
                  </figure>
                  <div className="card-body">
                     <h2 className="card-title">
                        Accessories Repair
                        <div className="badge badge-secondary">NEW</div>
                     </h2>
                     <p>
                        Register, book services, track jobs, chat with
                        technicians, receive invoices...
                     </p>
                     <div className="card-actions justify-end">
                        <div className="badge badge-outline">Technicians</div>
                        <div className="badge badge-outline">Details</div>
                     </div>
                  </div>
               </div>
               <div className="card bg-base-100 w-80 shadow-sm">
                  <figure>
                     <img src={PhoneImg} alt="Phone Repair" className="w-fit" />
                  </figure>
                  <div className="card-body">
                     <h2 className="card-title">
                        Battery Replacement
                        <div className="badge badge-secondary">NEW</div>
                     </h2>
                     <p>
                        Register, book services, track jobs, chat with
                        technicians, receive invoices...
                     </p>
                     <div className="card-actions justify-end">
                        <div className="badge badge-outline">Technicians</div>
                        <div className="badge badge-outline">Details</div>
                     </div>
                  </div>
               </div>
               <div className="card bg-base-100 w-80 shadow-sm">
                  <figure>
                     <img src={PhoneImg} alt="Phone Repair" className="w-fit" />
                  </figure>
                  <div className="card-body">
                     <h2 className="card-title">
                        Screen Replacement
                        <div className="badge badge-secondary">NEW</div>
                     </h2>
                     <p>
                        Register, book services, track jobs, chat with
                        technicians, receive invoices...
                     </p>
                     <div className="card-actions justify-end">
                        <div className="badge badge-outline">Technicians</div>
                        <div className="badge badge-outline">Details</div>
                     </div>
                  </div>
               </div>
               <div className="card bg-base-100 w-80 shadow-sm">
                  <figure>
                     <img src={PhoneImg} alt="Phone Repair" className="w-fit" />
                  </figure>
                  <div className="card-body">
                     <h2 className="card-title">
                        PC Repair
                        <div className="badge badge-secondary">NEW</div>
                     </h2>
                     <p>
                        Register, book services, track jobs, chat with
                        technicians, receive invoices...
                     </p>
                     <div className="card-actions justify-end">
                        <div className="badge badge-outline">Technicians</div>
                        <div className="badge badge-outline">Details</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
};

export default Services;
