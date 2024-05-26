import { restaurant } from "../constants/restaurant_infoapi";

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

export const Body=()=>{
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