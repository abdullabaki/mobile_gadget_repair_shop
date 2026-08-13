import "react";
import { Link } from "react-router";

const NavBar = () => {
   return (
        <div className="flex justify-between items-center pb-3">
         <div>
            <Link className="text-lg font-bold">User Dashboard</Link>
            <h6 className="text-sm text-accent-content">
               Manage your repair orders and live booking updates instantly.
            </h6>
         </div>
         <div>
            <h2 className="bg-primary text-primary-content inline rounded-xl py-2 px-4">MD Rakib Hassan</h2>
         </div>
      </div>
   );
};

export default NavBar;
