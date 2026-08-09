import "react";

const Hero = () => {
   return (
      <div
         className="hero h-190"
         style={{
            backgroundImage:
               "url(https://images.pexels.com/photos/4432468/pexels-photo-4432468.jpeg)",
         }}
      >
         <div className="hero-overlay"></div>
         <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
               <h1 className="mb-5 text-5xl font-bold">Book Professional Technicians</h1>
               <p className="mb-5">
                  Register, book services, track jobs, chat with technicians, receive invoices and manage everything from one dashboard.
               </p>
               <button className="btn btn-primary">Book Service</button>
            </div>
         </div>
      </div>
   );
};

export default Hero;
