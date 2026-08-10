import "react";
import { Link } from "react-router";

const Signup = () => {
   return (
      <div className="pt-30">
         <div className="h-180 w-7xl mx-auto rounded-xl shadow-xl/30 bg-[#EDEDED] grid grid-cols-2 gap-6 p-8">
            <div className="flex items-center justify-center h-full w-full text-primary-content bg-primary rounded-2xl shadow-xl/30">
               <div className="text-center w-80">
                  <h3>Welcome Back</h3>
                  <h2>Hello, Friend</h2>
                  <p>
                     Your trusted partner for mobile and laptop care. Log in to access your repair records, real-time updates, and service invoices instantly.
                  </p>
                  <Link to="/signin">
                     <button>Sign In</button>
                  </Link>
               </div>
            </div>
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
         </div>
      </div>
   );
};

export default Signup;
