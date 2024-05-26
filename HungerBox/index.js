import React from "react";
import ReactDom from "react-dom/client";

const restaurant= [
        {
            "image":"https://www.momontimeout.com/wp-content/uploads/2022/08/one-pot-pasta-chorizo-pasta-square.jpeg",
            "name": "The Gourmet Kitchen",
            "rating": 4.8,
            "type": "Fine Dining"
        },
        {
            "image":"https://bing.com/th?id=OSK.b592def83c6a2d75db493d3d089ee23d",
            "name": "Pizza Palace",
            "rating": 4.5,
            "type": "Italian"
        },
        {
            "image":"https://bing.com/th?id=OSK.67de10d172cb8dd9190235c634f5addf",
            "name": "Sushi Central",
            "rating": 4.7,
            "type": "Japanese"
        },
        {
            "image":"https://bing.com/th?id=OSK.ddbe85668c85acc16e7b5306bb91bf4b",
            "name": "Burger Haven",
            "rating": 4.3,
            "type": "Fast Food"
        },
        {
            "image":"https://www.modernhoney.com/wp-content/uploads/2023/01/Ground-Beef-Tacos-11-crop-scaled.jpg",
            "name": "Taco Fiesta",
            "rating": 4.6,
            "type": "Mexican"
        }
]


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

const FoodCard=(rest)=>{
    const {image,name,rating,type}=rest;
    return (
    <div id="foodcard">
        <img src={image}/>
        <h2>{name}</h2>
        <h3>{rating} stars</h3>
        <h3>{type}</h3>
    </div>
    )
}

const Body=()=>{
    return (
        <div id="body">
            {
                restaurant.map((rest)=>{
                    return <FoodCard {...rest}/>
                })
            }
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