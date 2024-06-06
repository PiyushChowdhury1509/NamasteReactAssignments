import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "./isOnline";
import UserContext from "../constants/userContext";

const Logo=()=>{
    return(
        <img className="logo" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-2048x2048.png" alt="image"/>
    )
}

export const Header=()=>{
    const { user }=useContext(UserContext);
    let [auth,setAuth]=useState(false);
    return(
        <div id="header">
            <Logo/>

            <ul>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"./aboutus"}>About us</Link></li>
                <li><Link to={"./contact"}>Contact</Link></li>
            </ul>

            <div id="onlineButton">
                {(useOnline()) ? (<h4>Online</h4>):(<h4>Offline</h4>)}
            </div>

            <div>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            </div>

            {(auth) ? (<button onClick={()=> setAuth(false)}>Login</button>):(<button onClick={()=> setAuth(true)}>Logout</button>)}
        </div>
    )
}