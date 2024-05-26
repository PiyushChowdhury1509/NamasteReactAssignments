import React from "react";
import ReactDom from "react-dom/client";

const Heading1=(
    <h1 id="a" key="h1">
        this is first heading
    </h1>
);
const Heading2=()=>{
    return (
        <h1 id="b" key="h2">
            this is second heading
        </h1>
    );
};
const root1=ReactDom.createRoot(document.getElementById('root1'));
const root2=ReactDom.createRoot(document.getElementById('root2'));
root1.render(Heading1);
root2.render(<Heading2/>);