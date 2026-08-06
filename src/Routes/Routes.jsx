import "react";
import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import Signin from "../Pages/Signin/Signin";

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
