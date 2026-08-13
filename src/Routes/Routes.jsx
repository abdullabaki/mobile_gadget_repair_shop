import "react";
import { createBrowserRouter } from "react-router";
import AuthLayout from "../Layout/AuthLayout";
import Dashboard from "../Layout/Dashboard";
import Root from "../Layout/Root";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import Invoices from "../Pages/UserDashboard/Invoices/Invoices";
import LiveTrack from "../Pages/UserDashboard/LiveTrack/LiveTrack";
import UserDashboard from "../Pages/UserDashboard/UserDashboard";
import Payment from "../Pages/UserDashboard/Payment/Payment";
import Rating from "../Pages/UserDashboard/Rating/Rating";

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
            path: "services",
            Component: Services,
         },
         {
            path: "aboutus",
            Component: AboutUs,
         },
         {
            path: "contact",
            Component: Contact,
         },
      ],
   },
   {
      path: "auth",
      Component: AuthLayout,
      errorElement: <ErrorPage />,
      children: [
         { path: "signin", Component: Signin },
         { path: "signup", Component: Signup },
      ],
   },
   {
      path: "dashboard",
      Component: Dashboard,
      errorElement: <ErrorPage />,
      children: [
         { path: "user", Component: UserDashboard },
         { path: "track", Component: LiveTrack },
         { path: "invoices", Component: Invoices },
         { path: "payment", Component: Payment },
         { path: "review", Component: Rating },
      ],
   },
]);
