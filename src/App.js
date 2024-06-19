import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

/* 
*  Header
   -  Logo
   -  Home
   -  Nav items

   Body

    - Items
    - search bar
    - Filters

   Fotter
    - copy rights
    - about 
    - career

*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

//parent routing
// const appRouter = createBrowserRouter([
//   { path: "/", element: <AppLayout />, errorElement: <Error /> },
//   { path: "/about", element: <About /> },
//   { path: "/contact", element: <ContactUs /> },
// ]);

//child routing
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
