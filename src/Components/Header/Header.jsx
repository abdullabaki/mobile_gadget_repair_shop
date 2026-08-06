import { Link, NavLink } from "react-router";
import Logo from "../../assets/Images//logo.png";

const Header = () => {
   return (
      <div className="bg-base-100 shadow-sm ">
         <div className="m-auto w-7xl navbar ">
            <div className="navbar-start">
               <a href="#home" className="logo">
                  <img src={Logo} alt="logo" className="h-16" />
               </a>
            </div>
            <nav>
               <ul className="flex gap-6 text-lg font-semibold align-middle m-auto">
                  <li>
                     <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                     <NavLink to="/">About</NavLink>
                  </li>
                  <li>
                     <NavLink to="/">Services</NavLink>
                  </li>
                  <li>
                     <NavLink to="/">Contact</NavLink>
                  </li>
               </ul>
            </nav>
            <div className="navbar-end">
               <button className="btn btn-dash btn-primary mr-4">
                  <Link to="/signin">Sign In</Link>
               </button>
               <button className="btn btn-dash btn-error">
                  <Link to="/signup">Sign Up</Link>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Header;
