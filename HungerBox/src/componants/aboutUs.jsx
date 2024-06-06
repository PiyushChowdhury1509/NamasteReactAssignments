import { useState } from "react";

const InfoCard=({header,information,showInfo,setShowInfo,hideInfo})=>{

    return (
    <div className="infoCard">

    <h1>{header}</h1>
    {showInfo && <button onClick={()=>hideInfo()}>Hide</button>}
    {!showInfo && <button onClick={()=>setShowInfo()}>Show</button>}
    {showInfo && <p>{information}</p>}

    </div>
    )
}

const AboutUs=()=>{
    let [configInfo,setConfigInfo]=useState({
        player1:false,
        player2:false,
        player3:false,
    });

    return (   
        <div>
        <InfoCard
        key={1}
        header={"header1"}
        information={"information1"}
        showInfo={configInfo.player1}
        setShowInfo={()=>{
            setConfigInfo({
                player1:true,
                player2:false,
                player3:false,
            })
        }}
        hideInfo={()=>{
            setConfigInfo({
                player1:false,
                player2:false,
                player3:false,
            })
        }}
        />
        <InfoCard
        key={2}
        header={"header2"}
        information={"information2"}
        showInfo={configInfo.player2}
        setShowInfo={()=>{
            setConfigInfo({
                player1:false,
                player2:true,
                player3:false,
            })
        }}
        hideInfo={()=>{
            setConfigInfo({
                player1:false,
                player2:false,
                player3:false,
            })
        }}
        />
        <InfoCard
        key={3}
        header={"header3"}
        information={"information3"}
        showInfo={configInfo.player3}
        setShowInfo={()=>{
            setConfigInfo({
                player1:false,
                player2:false,
                player3:true,
            })
        }}
        hideInfo={()=>{
            setConfigInfo({
                player1:false,
                player2:false,
                player3:false,
            })
        }}
        />
        </div>
    )
}
export default AboutUs;