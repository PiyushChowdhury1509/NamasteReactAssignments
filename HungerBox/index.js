import React from "react";
import ReactDom from "react-dom/client";

const Logo=()=>{
    return(
        <img className="logo" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-2048x2048.png" alt="image"/>
    )
}

const Header=()=>{
    return(
        <div id="header">
            <Logo/>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

const Body=()=>{
    return (
        <div id="body">
            <h1>Body</h1>
        </div>
    )
}

const Footer=()=>{
    return (
        <div id="footer">
            <h1>Footer</h1>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    )
};

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);