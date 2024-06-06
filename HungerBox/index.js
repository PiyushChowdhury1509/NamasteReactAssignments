import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./src/componants/header";
import { Body } from "./src/componants/body";
import { Footer } from "./src/componants/footer";
import Contact from "./src/componants/contact";
import Login from "./src/componants/login";
import RestaurantMenu from "./src/componants/restaurantMenu";
import ShimmerUI from "./src/componants/shimmerUi";
import UserContext from "./src/constants/userContext";

const AboutUs = lazy(() => import('./src/componants/aboutUs'));

const AppLayout = () => {
    let [user,setUser]=useState({
        name:"Piyush Chowdhury",
        email:"piyushchowdhury1509@gmail.com",
    })

    return (
    <React.Fragment>
        <UserContext.Provider value={{
            user:user,
            setUser:setUser,
        }
        }>
        <Header />
        <Outlet />
        <Footer />
        </UserContext.Provider>
    </React.Fragment>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/home",
        element: <AppLayout />,
        children: [
            {
                path: "",
                element: <Body />
            },
            {
                path: "aboutus",
                element: (
                    <Suspense fallback={<ShimmerUI />}>
                        <AboutUs />
                    </Suspense>
                )
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: ":id",
                element: <RestaurantMenu />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
