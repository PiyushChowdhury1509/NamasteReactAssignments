import { useState, useEffect } from "react";
import { swiggyapi } from "../constants/restaurant_list_api";
import { proxyUrl } from "../constants/restaurant_list_api";
import { Link } from "react-router-dom";
import ShimmerUI from "./shimmerUi";


const targetUrl = swiggyapi;

const RestaurantCard = ({ name, cloudinaryImageId, locality, avgRating }) => {
    return (
        <div className="restaurant-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt={name} />
            <h2>{name}</h2>
            <h3>{locality}</h3>
            <h4>{avgRating}</h4>
        </div>
    );
};

export const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [inputText, setInputText] = useState("");
    const [filteredInfo, setFilteredInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(proxyUrl + targetUrl);
                const json = await response.json();
                const restaurantData = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(rest => 
                    rest.info
                );
                setRestaurants(restaurantData);
                setFilteredInfo(restaurantData);
            } catch (error) {
                console.error("Error fetching the data: ", error);
            }
        };
        fetchData();
    }, []);

    const filterData = () => {
        const filtered = restaurants.filter((restaurant) => {
            return restaurant.name?.toLowerCase().includes(inputText.toLowerCase());
        });
        setFilteredInfo(filtered);
    };

    return restaurants.length===0 ? (<ShimmerUI/>) : (
        <>
            <div id="search-bar">
                <input
                    type="text"
                    placeholder="cravings?"
                    value={inputText}
                    onChange={(e) => {
                        setInputText(e.target.value);
                        filterData();
                    }}
                />
                <button onClick={filterData}>Search</button>
            </div>
            {console.log(filteredInfo)}
            <div id="card-container">
                {filteredInfo.map((rest, index) => (
                    <Link to={"/"+rest.id}><RestaurantCard key={index} {...rest}/></Link>
                ))}
            </div>
        </>
    );
};
