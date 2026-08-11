import "react";
import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
         {
            index: true,
            path: "/",
            Component: Home,
         },
         {
            index: true,
            path: "/services",
            Component: Services,
         },
         {
            index: true,
            path: "/aboutus",
            Component: AboutUs,
         },
         {
            index: true,
            path: "/contact",
            Component: Contact,
         },
         {
            index: true,
            path: "/signup",
            Component: Signup,
         },
         {
            index: true,
            path: "/signin",
            Component: Signin,
         },
      ],
   },
]);
