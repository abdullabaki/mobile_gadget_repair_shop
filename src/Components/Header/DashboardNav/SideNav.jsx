import "react";
import { CgProfile } from "react-icons/cg";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import {
   MdInfoOutline,
   MdOutlineLogout,
   MdOutlineMessage,
   MdOutlineSettings,
   MdOutlineSpaceDashboard,
   MdOutlineStarRate,
   MdPayment,
} from "react-icons/md";
import { Link, NavLink } from "react-router";
import logo from "../../../assets/Images/logo.png";

const SideNav = () => {
   const sidenav_content = [
      {
         id: 1,
         title: "Genreal",
         navitems: [
            {
               name: "Dashboard",
               url: "/dashboard/user",
               icone: <MdOutlineSpaceDashboard />,
            },
            {
               name: "Messages",
               url: "/dashboard/messages",
               icone: <MdOutlineMessage />,
            },
            {
               name: "Payments",
               url: "/dashboard/payment",
               icone: <MdPayment />,
            },
            {
               name: "Invoices",
               url: "/dashboard/invoices",
               icone: <LiaFileInvoiceSolid />,
            },
            {
               name: "Review",
               url: "/dashboard/review",
               icone: <MdOutlineStarRate />,
            },
         ],
      },
      {
         id: 2,
         title: "Account",
         navitems: [
            {
               name: "Settings",
               url: "/dashboard/settings",
               icone: <MdOutlineSettings />,
            },
            {
               name: "Help",
               url: "/dashboard/help",
               icone: <MdInfoOutline />,
            },
            {
               name: "Profile",
               url: "/dashboard/profile",
               icone: <CgProfile />,
            },
         ],
      },
   ];

   return (
      <div className="side_nav bg-primary-content w-62.5 py-3 px-4">
         <Link to="/">
            <img src={logo} alt="" className="h-20" />
         </Link>
         <div className="flex flex-col h-9/10 justify-between">
            <nav>
               {sidenav_content?.map((navitem) => (
                  <div key={navitem.id}>
                     <h3 className="uppercase text-accent-content font-medium pl-2 pb-2 pt-4">
                        {navitem.title}
                     </h3>
                     <ul className="text-sm font-medium">
                        {navitem.navitems.map((nav, index) => (
                           <li key={index} className="pb-2">
                              <NavLink
                                 to={nav.url}
                                 className="flex items-center py-2 px-3 hover:bg-[#dadada] rounded-md"
                              >
                                 <span className="text-lg font-bold w-6">
                                    {nav.icone}
                                 </span>
                                 {nav.name}
                              </NavLink>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </nav>
            <button className="btn btn-outline hover:btn-primary rounded-xl py-2 px-6 duration-300 ease-in">
               Log Out
               <MdOutlineLogout />
            </button>
         </div>
      </div>
   );
};

export default SideNav;
