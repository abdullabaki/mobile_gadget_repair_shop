import "react";
import buy from "../../../assets/Images/icons/best-price.png";
import location from "../../../assets/Images/icons/location.png";
import technicians from "../../../assets/Images/icons/observation.png";
import payment from "../../../assets/Images/icons/payment-method.png";

const WorkFlow = () => {
   const works = [
      {
         icon: technicians,
         text: "Select good technicians",
      },
      {
         icon: buy,
         text: "Get Best Price",
      },
      {
         icon: payment,
         text: "Safe Payment",
      },
      {
         icon: location,
         text: "get pickup location",
      },
   ];

   return (
      <div className="py-10 uppercase w-7xl mx-auto">
         <h2 className="text-center text-4xl font-bold pt-6 pb-3">
            How GadgetCare Works
         </h2>
         <p className="text-sm text-accent-content text-center pb-12">
            Get reliable repairs at the best price, delivered with care.
         </p>

         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mx-6 lg:mx-0">
            {works.map((work, i) => (
               <div
                  key={i}
                  className="text-center shadow-lg p-4 rounded-lg hover:shadow-xl/30 ease-out duration-300"
               >
                  <img src={work.icon} alt="" className="h-16 mx-auto mb-2" />
                  <div className="divider m-0"></div>
                  <h5 className="text-xl font-light">{work.text}</h5>
               </div>
            ))}
         </div>
      </div>
   );
};

export default WorkFlow;

{
   /* <div className="pb-5  uppercase">
            <h2 className="text-2xl font-medium text-primary text-center py-6">
                How Dream Phones Works
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mx-6 lg:mx-0">
                {works.map((work, i) => (
                    <div
                        key={i}
                        className="text-center shadow-lg p-4 rounded-lg hover:bg-primary hover:bg-opacity-30 ease-out duration-300"
                    >
                        <img
                            src={work.icon}
                            alt=""
                            className="h-16 mx-auto mb-2"
                        />
                        <div className="divider m-0 border-secondary"></div>
                        <h5 className="text-xl font-light text-secondary">
                            {work.text}
                        </h5>
                    </div>
                ))}
            </div>
        </div> */
}
