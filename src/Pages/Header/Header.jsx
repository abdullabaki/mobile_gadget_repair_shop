import "react";
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
                     <li><a href="#home">Home</a></li>
                     <li><a href="#about">About</a></li>
                     <li><a href="#services">Services</a></li>
                  </ul>
               </nav>
            <div className="navbar-end">
               <a href="#contact">
                  <button className="btn btn-dash btn-primary mr-4">Login</button>
                  <button className="btn btn-dash btn-error">Signup</button>
               </a>
            </div>
         </div>
      </div>
   );
};

export default Header;
