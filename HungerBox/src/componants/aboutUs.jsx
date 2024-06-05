import { useState } from "react";

const InfoCard=({header,information})=>{
    let [showInfo,setShowInfo]=useState(false);

    return (
    <div className="infoCard">

    <h1>{header}</h1>
    {showInfo && <button onClick={()=>setShowInfo(false)}>Hide</button>}
    {!showInfo && <button onClick={()=>setShowInfo(true)}>Show</button>}
    {showInfo && <p>{information}</p>}

    </div>
    )
}

const AboutUs=()=>{
    return (   
        <div>
        <InfoCard
        key={1}
        header={"header1"}
        information={"information1"}
        />
        <InfoCard
        key={2}
        header={"header2"}
        information={"information2"}
        />
        <InfoCard
        key={3}
        header={"header3"}
        information={"information3"}
        />
        </div>
    )
}
export default AboutUs;