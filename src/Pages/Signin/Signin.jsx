import "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Signin = () => {
   return (
      <div className="pt-30">
         <div className="h-180 w-7xl mx-auto rounded-xl shadow-xl/30 border-2 border-[#EDEDED] grid grid-cols-2 gap-6 p-8">
            <div className="flex items-center justify-center h-full w-full">
               <form action="" className="w-100 mx-auto">
                  <div className="text-center pb-12">
                     <h3 className="font-bold text-2xl pb-1">
                        Log In Account
                     </h3>
                     <p className="font-light text-xs">
                        Sign In and begin your experience
                     </p>
                  </div>

                  <input
                     type="email"
                     id="emaio"
                     className="rounded-3xl input w-full inset-shadow-sm inset-shadow-neutral-content mb-5 py-2 px-5"
                     placeholder="E-Mail"
                     required
                  />
                  <input
                     type="password"
                     id="password"
                     className="rounded-3xl input w-full inset-shadow-sm inset-shadow-neutral-content mb-5 py-2 px-5"
                     placeholder="Password"
                     required
                  />
                  <input
                     type="submit"
                     value="Sign In"
                     className="btn btn-block shadow-lg rounded-3xl uppercase btn-primary bg-linear-to-r from-primary to-secondary text-primary-content hover:bg-linear-to-l"
                  />

                  <div>
                     <div className="divider font-medium text-[#555555] px-16">
                        OR
                     </div>
                     <button className="btn btn-block rounded-3xl btn-outline border-primary text-primary border-2 capitalize hover:bg-linear-to-r from-primary to-secondary hover:text-primary-content">
                        <FcGoogle className="text-lg mr-2" />
                        Google Sign In
                     </button>
                  </div>
               </form>
            </div>
            <div className="flex items-center justify-center h-full w-full text-primary-content rounded-2xl shadow-xl/30 bg-linear-to-b from-primary to-secondary">
               <div className="text-center w-80">
                  <h3 className="glass inline px-4 py-2 rounded-3xl">
                     Welcome to GadgetCare
                  </h3>
                  <h2 className="pt-4 font-bold text-4xl pb-3">
                     Hello, Friend!
                  </h2>
                  <p className="text-xs font-light pb-1">
                     Your trusted partner for mobile and laptop care. Log in to
                     access your repair records, real-time updates, and service
                     invoices instantly.
                  </p>
                  <p className="font-medium pb-3">New to GadgetCare ?</p>
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
