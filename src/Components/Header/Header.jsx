import { Link, NavLink } from "react-router";
import Logo from "../../assets/Images//logo.png";

const Header = () => {
   return (
      <div className="bg-base-100 shadow-sm ">
         <div className="m-auto w-7xl navbar ">
            <div className="navbar-start">
               <NavLink to="/" className="logo">
                  <img src={Logo} alt="logo" className="h-16" />
               </NavLink>
            </div>
            <nav>
               <ul className="flex gap-6 text-lg font-semibold align-middle m-auto">
                  <li>
                     <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                     <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                     <NavLink to="/Services">Services</NavLink>
                  </li>
                  <li>
                     <NavLink to="/contact">Contact</NavLink>
                  </li>
               </ul>
            </nav>
            <div className="navbar-end">
               <Link to="/signin">
                  <button className="btn  btn-primary hover:btn-accent mr-4">
                     Sign In
                  </button>
               </Link>

               <Link to="/signup">
                  <button className="btn  btn-success">Sign Up</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Header;
