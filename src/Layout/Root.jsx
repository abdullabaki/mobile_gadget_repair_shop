import "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";

const Root = () => {
   return (
      <>
         <Header />
         <Outlet />
      </>
   );
};

export default Root;
