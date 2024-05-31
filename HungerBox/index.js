import React from "react";
import ReactDom from "react-dom/client";
import { Header } from "./src/componants/header";
import { Body } from "./src/componants/body";
import { Footer } from "./src/componants/footer";

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
