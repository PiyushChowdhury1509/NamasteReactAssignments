import { useState } from "react";
import { restaurant } from "../constants/restaurant_infoapi";

const FoodCard = ({ image, name, rating, type }) => {
    return (
        <div id="foodcard">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h3>{rating} stars</h3>
            <h3>{type}</h3>
        </div>
    );
};

export const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [filterItems, setFilterItems] = useState(restaurant);

    const handleSearch = () => {
        const filtered = restaurant.filter((item) => {
            if (item.name) {
                return item.name.toLowerCase().includes(searchText.toLowerCase());
            }
            return false;
        });
        setFilterItems(filtered);
    };

    return (
        <>
            <div id="search-bar">
                <input
                    type="text"
                    placeholder="cravings?"
                    className="search-box"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button id="search-button" onClick={handleSearch}>search</button>
            </div>
            <div id="body">
                {filterItems.map((rest) => (
                    <FoodCard key={rest.name} {...rest} />
                ))}
            </div>
        </>
    );
};
