import "react";
import { Link } from "react-router";

const Signin = () => {
   return (
      <div className="pt-30">
         <div className="h-180 w-7xl mx-auto rounded-xl shadow-xl/30 border-2 border-[#EDEDED] grid grid-cols-2 gap-6 p-8">
            <div>
               <form action="">
                  <h3>Welcome Back</h3>
                  <fieldset className="fieldset">
                     <label className="label" htmlFor="name">
                        Name
                     </label>
                     <input
                        type="text"
                        id="name"
                        className="input"
                        placeholder="Name"
                     />
                  </fieldset>
                  <fieldset className="fieldset">
                     <label className="label" htmlFor="name">
                        Name
                     </label>
                     <input
                        type="text"
                        id="name"
                        className="input"
                        placeholder="Name"
                     />
                  </fieldset>
                  <fieldset className="fieldset">
                     <label className="label" htmlFor="name">
                        Name
                     </label>
                     <input
                        type="text"
                        id="name"
                        className="input"
                        placeholder="Name"
                     />
                  </fieldset>
               </form>
            </div>
            <div className="flex items-center justify-center h-full w-full text-primary-content rounded-2xl shadow-xl/30 bg-linear-to-b from-primary to-secondary">
               <div className="text-center w-80">
                  <h3 className="glass inline px-4 py-2 rounded-3xl">Welcome Back</h3>
                  <h2 className="pt-4 font-bold text-3xl pb-3">Hello, Friend!</h2>
                  <p className="text-xs font-light pb-1">
                     Your trusted partner for mobile and laptop care. Log in to
                     access your repair records, real-time updates, and service
                     invoices instantly.
                  </p>
                  <p className="font-medium pb-3">
                     New to GadgetCare ?
                  </p>
                  <Link to="/signup">
                     <button className="glass inline px-8 py-2 rounded-3xl font-medium">
                        Sign Up
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Signin;
