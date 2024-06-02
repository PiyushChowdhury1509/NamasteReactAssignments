import React from "react";
import ReactDom from "react-dom/client";
import { Header } from "./src/componants/header";
import { Body } from "./src/componants/body";
import { Footer } from "./src/componants/footer";
import AboutUs from "./src/componants/aboutUs";
import Contact from "./src/componants/contact";
import Login from "./src/componants/login";
import RestaurantMenu from "./src/componants/restaurantMenu";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/home",
        element: <AppLayout/>,

        children:[
            {
                path: "",
                element: <Body/>
            },
            {
                path: "aboutus",
                element:<AboutUs/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: ":id",
                element: <RestaurantMenu/>
            }
        ]
    }
])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
