import { useContext } from "react";
import UserContext from "../constants/userContext";

export const Footer=()=>{
    const { user }=useContext(UserContext);
    return (
        <div id="footer">
            <h3> Created by {user.name}</h3>
            <h3>Email : {user.email}</h3>
        </div>
    )
}