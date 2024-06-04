import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./src/componants/header";
import { Body } from "./src/componants/body";
import { Footer } from "./src/componants/footer";
import Contact from "./src/componants/contact";
import Login from "./src/componants/login";
import RestaurantMenu from "./src/componants/restaurantMenu";
import ShimmerUI from "./src/componants/shimmerUi";

const AboutUs = lazy(() => import('./src/componants/aboutUs'));

const AppLayout = () => (
    <React.Fragment>
        <Header />
        <Outlet />
        <Footer />
    </React.Fragment>
);

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
