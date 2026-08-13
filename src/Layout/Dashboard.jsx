import "react";
import { Outlet } from "react-router";
import NavBar from "../Components/Header/DashboardNav/NavBar";
import SideNav from "../Components/Header/DashboardNav/SideNav";

const Dashboard = () => {
   return (
      <div className="p-3 bg-base-100 fixed h-full w-full overflow-hidden flex flex-col">
         <NavBar />
         <div className="h-full w-full bg-[#eef2f7] shadow-sm rounded-xl border-2 border-[#e3e3e4] flex overflow-hidden">
            <SideNav />
            <Outlet />
         </div>
      </div>
   );
};

export default Dashboard;
