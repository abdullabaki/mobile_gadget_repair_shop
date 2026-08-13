import {
   FaFacebookMessenger,
   FaFacebookSquare,
   FaHeadphonesAlt,
   FaInstagram,
   FaLaptop,
   FaMobileAlt,
   FaPhoneAlt,
   FaWhatsapp,
} from "react-icons/fa";
import { GiBattery50 } from "react-icons/gi";
import { MdEmail, MdLocationOn, MdMobileScreenShare } from "react-icons/md";
import { Link } from "react-router";
import FooterLogo from "../../assets/Images/FooterLogo.png";

const Footer = () => {
   const Footer_content = [
      {
         id: 1,
         title: "Quick Links",
         items: [
            { name: "Home", url: "/" },
            { name: "About Us", url: "/aboutus" },
            { name: "Services", url: "/services" },
            { name: "Contact", url: "/contact" },
            { name: "Dashboard", url: "/dashboard/user" },
         ],
      },
      {
         id: 2,
         title: "Services",
         items: [
            { name: "Mobile Repair", icone: <FaMobileAlt /> },
            { name: "Laptop Repair", icone: <FaLaptop /> },
            { name: "Battery Replacement", icone: <FaHeadphonesAlt /> },
            { name: "Accessories", icone: <GiBattery50 /> },
            { name: "Screen Replacement", icone: <MdMobileScreenShare /> },
         ],
      },
      {
         id: 3,
         title: "Contact Us",
         items: [
            {
               name: "123-456-7890",
               icone: <FaPhoneAlt />,
               url: "tel:123-456-7890",
            },
            {
               name: "info@repairshop.com",
               icone: <MdEmail />,
               url: "mailto:info@repairshop.com",
            },
            {
               name: "123 Repair St, City, State 12345",
               icone: <MdLocationOn />,
               url: "https://maps.google.com/?q=123+Repair+St,+City,+State+12345",
            },
         ],
         social_media: [
            {
               url: "https://www.facebook.com",
               name: <FaFacebookSquare />,
            },
            {
               url: "https://www.facebook.com/messages",
               name: <FaFacebookMessenger />,
            },
            {
               url: "https://www.instagram.com",
               name: <FaInstagram />,
            },
            {
               url: "https://web.whatsapp.com/",
               name: <FaWhatsapp />,
            },
         ],
      },
   ];

   return (
      <div className="mt-10 bg-neutral text-neutral-content">
         <footer className="w-7xl m-auto footer sm:footer-horizontal p-10 border-b border-b-[#5a6b85]">
            <aside>
               <img src={FooterLogo} alt="Footer Logo" className="h-20" />
               <p className="w-87.5  text-[17px] leading-6 pt-1.5">
                  Your trusted mobile gadget & accessories repair booking
                  plathtmlForm. Book certified technicians, track repairs, and
                  receive instant invoices.
               </p>
            </aside>
            {Footer_content?.map((column) => (
               <div key={column.id}>
                  <h6 className="text-[20px] font-black pb-3 text-accent">
                     {column.title}
                  </h6>
                  <div className="font-font-normal flex flex-col gap-3 text-[18px]">
                     {column.items.map((navfooter, index) => (
                        <Link
                           key={index}
                           to={navfooter?.url}
                           className="flex items-center gap-2 hover:text-primary transition-discrete duration-300"
                        >
                           {navfooter?.icone} {navfooter.name}
                        </Link>
                     ))}
                  </div>
                  {column.social_media && (
                     <div className="flex gap-4 mt-4">
                        {column.social_media.map((social, index) => (
                           <a
                              key={index}
                              href={social.url}
                              target="_blank"
                              className="text-[25px] hover:text-primary transition-colors duration-300"
                           >
                              {social.name}
                           </a>
                        ))}
                     </div>
                  )}
               </div>
            ))}
         </footer>
         <p className="text-center py-3 text-[#94a3b8]">
            © GadgetCare | All Rights Reserved.
         </p>
      </div>
   );
};

export default Footer;
