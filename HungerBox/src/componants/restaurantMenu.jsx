import { useParams} from "react-router-dom";
import { useEffect,useState } from "react";
import { proxyUrl } from "../constants/restaurant_list_api";
import { restaurantmenuapi } from "../constants/restaurant_list_api";
import { addition } from "../constants/restaurant_list_api";
import ShimmerUI from "./shimmerUi";

const RestaurantMenu=()=>{
    const {id}=useParams();
    const targetapi=proxyUrl+restaurantmenuapi+id+addition;

    let [menu,setMenu]=useState(null);

    useEffect(()=>{
        async function getMenu(){
            const data=await fetch(targetapi);
            const json=await data.json();
            console.log(json);
            const info=json;
            setMenu(info.data?.cards[2]?.card?.card?.info);
        }
        getMenu();
    },[]);

    return !menu? <ShimmerUI/> :(
        <div>
            {menu?.name && <h1>{menu?.name}</h1>}
            {menu?.avgRating && <h2>{menu?.avgRating} stars</h2>}
            {menu?.areaName && menu?.city && (<h3>Location : {menu?.areaName},{menu?.city}</h3>)}
            {menu?.costForTwoMessage && <h3>{menu.costForTwoMessage}</h3>}
        </div>
    )
}

export default RestaurantMenu;