import "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";

const AuthLayout = () => {
   return (
      <>
         <Header />
         <Outlet />
      </>
   );
};

export default AuthLayout;