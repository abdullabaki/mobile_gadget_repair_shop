import "react";
import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: []
   },
]);
