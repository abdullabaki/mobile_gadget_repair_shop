import "react";
import FooterLogo from "../../assets/Images/FooterLogo.png";

const Footer = () => {
   return (
      <div className="mt-10 bg-neutral text-neutral-content">
         <footer className="w-7xl m-auto footer sm:footer-horizontal p-10 border-b border-b-[#5a6b85]">
            <aside>
               <img src={FooterLogo} alt="Footer Logo" className="h-20" />
               <p className="w-87.5  text-[17px] leading-6 pt-1.5">
                  Your trusted mobile gadget & accessories repair booking
                  platform. Book certified technicians, track repairs, and
                  receive instant invoices.
               </p>
            </aside>
            <nav className="pt-4">
               <h6 className="text-[20px] font-black pb-3 text-accent">
                  Quick Links
               </h6>
               <div className="font-font-normal flex flex-col gap-3 text-[18px]">
                  <a className="link link-hover">Home</a>
                  <a className="link link-hover">About</a>
                  <a className="link link-hover">Services</a>
                  <a className="link link-hover">Contact</a>
               </div>
            </nav>
            <nav className="pt-4">
               <h6 className="text-accent text-[20px] font-black pb-3">
                  Services
               </h6>
               <div className="font-font-normal flex flex-col gap-3 text-[18px]">
                  <a className="link link-hover">Mobile Repair</a>
                  <a className="link link-hover">Laptop Repair</a>
                  <a className="link link-hover">Accessories</a>
                  <a className="link link-hover">Battery Replacement</a>
                  <a className="link link-hover">Screen Replacement</a>
               </div>
            </nav>
            <nav className="pt-4">
               <h6 className="text-accent text-[20px] font-black pb-3">
                  Contact Us
               </h6>
               <div className="font-font-normal flex flex-col gap-3 text-[18px]">
                  <a className="link link-hover">Phone: (123) 456-7890</a>
                  <a className="link link-hover">Email: info@repairshop.com</a>
                  <a className="link link-hover">
                     Address: 123 Repair St, City, State 12345
                  </a>
               </div>
            </nav>
         </footer>
         <p className="text-center py-3 text-[#94a3b8]">
            © GadgetCare | All Rights Reserved.
         </p>
      </div>
   );
};

export default Footer;
